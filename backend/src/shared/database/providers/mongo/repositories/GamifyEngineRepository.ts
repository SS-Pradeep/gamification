import 'reflect-metadata';
import {MongoDatabase} from '../MongoDatabase.js';
import {
  Collection,
  ObjectId,
  UpdateResult,
  ClientSession,
  DeleteResult,
  Document,
} from 'mongodb';
import {injectable, inject} from 'inversify';
import {IGamifyEngineRepository} from '#shared/database/index.js';
import {GLOBAL_TYPES} from '#root/types.js';
import {
  GameMetric,
  MetricAchievement,
  UserGameAchievement,
  UserGameMetric,
} from '#gamification/classes/index.js';
import {
  IGameMetric,
  IMetricAchievement,
  IUserGameMetric,
  IUserGameAchievement,
  IMetricTrigger,
  AchievementStatus,
  StreakResolutionType,
  ID,
  IUpdateGameMetric,
  IGoals,
  IUserAchievementProgress,
} from '#root/shared/interfaces/models.js';

/**
 * Implementation of the Gamify Engine Repository for MongoDB.
 * Handles operations related to game metrics and achievements.
 */

@injectable()
export class GamifyEngineRepository implements IGamifyEngineRepository {
  // MongoDB collections for each entity
  private metricCollection: Collection<GameMetric>;
  private achievementCollection: Collection<MetricAchievement>;
  private userMetricCollection: Collection<UserGameMetric>;
  private userAchievementCollection: Collection<UserGameAchievement>;
  private goalsCollection: Collection<IGoals>;
  private userAchievementProgressCollection: Collection<IUserAchievementProgress>;

  constructor(@inject(GLOBAL_TYPES.Database) private db: MongoDatabase) {}

  private initialized = false;

  // Initialize collections if not already done
  private async init() {
    if (!this.initialized) {
      this.metricCollection = await this.db.getCollection<GameMetric>(
        'gameMetrics',
      );
      this.achievementCollection =
        await this.db.getCollection<MetricAchievement>('metricAchievements');
      this.userMetricCollection = await this.db.getCollection<UserGameMetric>(
        'userGameMetrics',
      );
      this.userAchievementCollection =
        await this.db.getCollection<UserGameAchievement>(
          'userGameAchievements',
        );

      this.goalsCollection = await this.db.getCollection<IGoals>('goals');

      this.userAchievementProgressCollection =
        await this.db.getCollection<IUserAchievementProgress>(
          'userAchievementProgress',
        );

      try {
        // userGameMetrics: compound index for fast lookups and updates
        await this.userMetricCollection.createIndex(
          {userId: 1, metricId: 1},
          {name: 'userId_metricId_compound', background: true},
        );

        // userGameMetrics: single index for fetching all metrics by user
        await this.userMetricCollection.createIndex(
          {userId: 1},
          {name: 'userId_single', background: true},
        );

        // userGameAchievements: index for fetching user achievements
        await this.userAchievementCollection.createIndex(
          {userId: 1},
          {name: 'userId_achievements', background: true},
        );

        // add composite index for slug and scope with unique constraint on metric collection
        await this.metricCollection.createIndex(
          {slug: 1, scope: 1},
          {
            name: 'slug_scope_metrics',
            unique: true,
            background: true,
            partialFilterExpression: {
              slug: {$exists: true},
              scope: {$exists: true},
            },
          },
        );

        // add composite index for slug and scope with unique constraint on achievement collection
        await this.achievementCollection.createIndex(
          {slug: 1, scope: 1},
          {
            name: 'slug_scope_achievements',
            unique: true,
            background: true,
            partialFilterExpression: {
              slug: {$exists: true},
              scope: {$exists: true},
            },
          },
        );

        console.log('GamifyEngineRepository indexes created successfully');
      } catch (error) {
        console.error(
          'Error creating indexes in GamifyEngineRepository:',
          error,
        );
      }
      this.initialized = true;
    }
  }

  private resolveStreakValue(
    metric: UserGameMetric,
    strategy: string,
    defaultIncrementValue: number,
  ): {metricId: ID; value: number; lastStreakUpdated: Date} {
    // Iterate through each metric and resolve it's streak value.
    // streak values are resolved based on streakResolutionStrategy.

    if (!metric.lastStreakUpdated) {
      metric.value = defaultIncrementValue;
      metric.lastStreakUpdated = new Date();

      return {
        metricId: metric.metricId,
        value: metric.value,
        lastStreakUpdated: metric.lastStreakUpdated,
      };
    }

    if (strategy == StreakResolutionType.CONSECUTIVE) {
      const lastStreakUpdate = new Date(metric.lastStreakUpdated);
      const today = new Date();
      const diff = today.getTime() - lastStreakUpdate.getTime();

      const hours = Math.floor(diff / 1000 / 60 / 60);

      console.log(hours);

      if (hours < 24) {
        // Same day, do nothing, keep current streak
      } else if (hours >= 24 && hours < 48) {
        // Exactly yesterday — increment
        metric.value += defaultIncrementValue;
      } else {
        // Missed more than 1 day — reset streak
        metric.value = 0;
      }
    } else if (strategy == StreakResolutionType.DAILY) {
      const now = new Date();

      const lastStreakUpdate = new Date(metric.lastStreakUpdated)
        .toISOString()
        .slice(0, 10);
      const today = now.toISOString().slice(0, 10);

      console.log(lastStreakUpdate, today);

      if (lastStreakUpdate === today) {
        metric.value += defaultIncrementValue;
      } else {
        metric.value = 1;
      }
    }

    metric.lastStreakUpdated = new Date();

    return {
      metricId: metric.metricId,
      value: metric.value,
      lastStreakUpdated: metric.lastStreakUpdated,
    };
  }

  // Create a new game metric
  async createGameMetric(
    gameMetric: IGameMetric,
    session?: ClientSession,
  ): Promise<IGameMetric | null> {
    await this.init();

    const result = await this.metricCollection.insertOne(gameMetric, {session});

    if (result.acknowledged) {
      const createdMetric = await this.metricCollection.findOne(
        {
          _id: result.insertedId,
        },
        {session},
      );

      return createdMetric;
    }
  }

  // Get a game metric by its ID
  async readGameMetric(
    gameMetricId: ObjectId | string,
    bySlug: boolean,
    session?: ClientSession,
  ): Promise<IGameMetric | null> {
    await this.init();
    let metric;

    if (bySlug && typeof gameMetricId === 'string') {
      metric = await this.metricCollection.findOne(
        {slug: gameMetricId},
        {session},
      );
    } else {
      metric = await this.metricCollection.findOne(
        {_id: gameMetricId},
        {session},
      );
    }

    if (metric) {
      return metric;
    }
  }

  // Get all game metrics
  async readAllGameMetrics(
    session?: ClientSession,
  ): Promise<IGameMetric[] | null> {
    await this.init();

    const metrics = this.metricCollection.find({}, {session}).toArray();

    if (metrics) {
      return metrics;
    }
  }

  // Update a game metric by its ID
  async updateGameMetric(
    gameMetricId: ObjectId | string,
    gameMetric: IUpdateGameMetric,
    bySlug: boolean,
    session?: ClientSession,
  ): Promise<UpdateResult | null> {
    await this.init();

    let result: UpdateResult;

    if (bySlug && typeof gameMetricId === 'string') {
      result = await this.metricCollection.updateOne(
        {slug: gameMetricId},
        {$set: gameMetric},
        {session},
      );
    } else {
      result = await this.metricCollection.updateOne(
        {_id: gameMetricId},
        {$set: gameMetric},
        {session},
      );
    }

    if (result.acknowledged) {
      return result;
    } else {
      throw new Error('Failed to update game metric');
    }
  }

  // Delete a game metric by its ID
  async deleteGameMetric(
    gameMetricId: string,
    bySlug: boolean,
    session?: ClientSession,
  ): Promise<DeleteResult | null> {
    await this.init();

    let result: DeleteResult;

    if (bySlug) {
      result = await this.metricCollection.deleteOne(
        {slug: gameMetricId},
        {session},
      );
    } else {
      result = await this.metricCollection.deleteOne(
        {_id: new ObjectId(gameMetricId)},
        {session},
      );
    }

    if (result.acknowledged) {
      return result;
    } else {
      throw new Error('Failed to delete game metric');
    }
  }

  // Create a new achievement
  async createAchievement(
    achievement: IMetricAchievement,
    session?: ClientSession,
  ): Promise<IMetricAchievement | null> {
    await this.init();

    const result = await this.achievementCollection.insertOne(achievement, {
      session,
    });

    if (result.acknowledged) {
      const createdAchievement = await this.achievementCollection.findOne(
        {
          _id: result.insertedId,
        },
        {session},
      );

      return createdAchievement;
    }
  }

  // Get an achievement by its ID
  async readAchievement(
    achievementId: string | ObjectId,
    bySlug: boolean,
    session?: ClientSession,
  ): Promise<IMetricAchievement | null> {
    await this.init();

    let achievement;

    if (bySlug && typeof achievementId === 'string') {
      achievement = await this.achievementCollection.findOne(
        {slug: achievementId},
        {session},
      );
    } else {
      achievement = await this.achievementCollection.findOne(
        {_id: achievementId},
        {session},
      );
    }

    if (achievement) {
      return achievement;
    }
  }

  // Get all achievements
  async readAllAchievements(
    session?: ClientSession,
  ): Promise<IMetricAchievement[] | null> {
    await this.init();

    const achievements = await this.achievementCollection
      .find({}, {session})
      .toArray();

    if (achievements) {
      return achievements;
    }
  }

  // Update an achievement by its ID
  async updateAchievement(
    achievementId: ObjectId,
    achievement: Partial<IMetricAchievement>,
    bySlug: boolean,
    session?: ClientSession,
  ): Promise<UpdateResult | null> {
    await this.init();

    let result: UpdateResult;

    if (bySlug && typeof achievementId === 'string') {
      result = await this.achievementCollection.updateOne(
        {slug: achievementId},
        {$set: achievement},
        {session},
      );
    } else {
      result = await this.achievementCollection.updateOne(
        {_id: achievementId},
        {$set: achievement},
        {session},
      );
    }

    if (result.acknowledged) {
      return result;
    }
    throw new Error('Failed to update achievement');
  }

  // Delete an achievement by its ID
  async deleteAchievement(
    achievementId: ObjectId,
    bySlug: boolean,
    session?: ClientSession,
  ): Promise<UpdateResult | null> {
    await this.init();

    // Perform a soft delete by updating the status.

    let result;

    if (bySlug && typeof achievementId === 'string') {
      result = await this.achievementCollection.updateOne(
        {slug: achievementId},
        {$set: {status: AchievementStatus.INACTIVE}},
        {session},
      );
    } else {
      result = await this.achievementCollection.updateOne(
        {_id: achievementId},
        {$set: {status: AchievementStatus.INACTIVE}},
        {session},
      );
    }

    if (result.acknowledged) {
      return result;
    }
    throw new Error('Failed to delete achievement');
  }

  // Delete achievements by metric ID
  async deleteAchievementByMetricId(
    metricId: string | ObjectId,
    session?: ClientSession,
  ): Promise<UpdateResult | null> {
    await this.init();

    // Soft delete achievements by updating their status.

    const result = await this.achievementCollection.updateMany(
      {metricId: metricId},
      {$set: {status: AchievementStatus.DELETED}},
      {session},
    );

    if (result.acknowledged) {
      return result;
    }
    throw new Error('Failed to delete achievements');
  }

  // Create a user game metric (user progress on a metric)
  async createUserGameMetric(
    userGameMetric: IUserGameMetric,
    session?: ClientSession,
  ): Promise<IUserGameMetric | null> {
    await this.init();

    const result = await this.userMetricCollection.insertOne(userGameMetric, {
      session,
    });

    if (result.acknowledged) {
      const createdUserMetric = await this.userMetricCollection.findOne(
        {_id: result.insertedId},
        {session},
      );

      return createdUserMetric;
    }
  }

  async createUserGameMetrics(
    userGameMetrics: IUserGameMetric[],
    session?: ClientSession,
  ): Promise<IUserGameMetric[] | null> {
    await this.init();

    const bulkOps = userGameMetrics.map(metric => ({
      updateOne: {
        filter: {
          userId: metric.userId,
          metricId: metric.metricId,
        },
        update: {
          $setOnInsert: metric,
        },
        upsert: true,
      },
    }));

    const result = await this.userMetricCollection.bulkWrite(bulkOps, {
      session,
    });

    const upsertedIds = Object.values(result.upsertedIds);

    if (upsertedIds.length > 0) {
      const createdMetrics = await this.userMetricCollection
        .find({_id: {$in: upsertedIds}}, {session})
        .toArray();

      return createdMetrics;
    }
  }

  // Get all game metrics for a user
  async readAllUserGameMetric(
    userId: ObjectId,
    session?: ClientSession,
  ): Promise<IUserGameMetric[] | null> {
    await this.init();

    const userMetrics = this.userMetricCollection
      .find({userId: userId}, {session})
      .toArray();

    if (userMetrics) {
      return userMetrics;
    }
  }

  // Get a specific user game metric
  async readUserGameMetric(
    userId: ObjectId,
    gameMetricId: ObjectId,
    session?: ClientSession,
  ): Promise<IUserGameMetric | null> {
    await this.init();
    // We need to use get-create pattern here to ensure that we do lazy loading of the user metric.
    const userMetric = await this.userMetricCollection.findOne(
      {userId: userId, metricId: gameMetricId},
      {session},
    );

    if (userMetric) {
      return userMetric;
    }
  }

  // Update a user's game metric
  async updateUserGameMetric(
    userId: ObjectId,
    gameMetricId: ObjectId,
    UserGameMetric: Partial<IUserGameMetric>,
    session?: ClientSession,
  ): Promise<UpdateResult | null> {
    await this.init();
    const updateResult = await this.userMetricCollection.updateOne(
      {userId: userId, metricId: gameMetricId},
      {$set: UserGameMetric},
      {session},
    );

    if (updateResult.acknowledged) {
      return updateResult;
    }
  }

  // Delete a user's game metric
  async deleteUserGameMetric(
    userId: ObjectId,
    gameMetricId: ObjectId,
    session?: ClientSession,
  ): Promise<DeleteResult | null> {
    await this.init();

    const result = await this.userMetricCollection.deleteOne(
      {userId: userId, metricId: gameMetricId},
      {session},
    );

    if (result.acknowledged) {
      return result;
    }
  }

  // Delete a user's game metric by its ID
  async deleteUserGameMetricById(
    metricId: ObjectId,
    session?: ClientSession,
  ): Promise<DeleteResult | null> {
    await this.init();

    const result = await this.userMetricCollection.deleteMany(
      {
        metricId: metricId,
      },
      {session},
    );

    if (result.acknowledged) {
      return result;
    }
  }

  // Create a user achievement (when a user unlocks an achievement)
  async createUserGameAchievement(
    userGameAchievement: IUserGameAchievement,
    session?: ClientSession,
  ): Promise<IUserGameAchievement | null> {
    await this.init();

    const result = await this.userAchievementCollection.insertOne(
      userGameAchievement,
      {session},
    );

    if (result.acknowledged) {
      const createdUserAchievement =
        await this.userAchievementCollection.findOne(
          {_id: result.insertedId},
          {session},
        );

      return createdUserAchievement;
    }

    throw new Error('Failed to create user game achievement');
  }

  // Get all achievements for a user
  async readUserGameAchievements(
    userId: ObjectId,
    session?: ClientSession,
  ): Promise<IUserGameAchievement | null> {
    await this.init();

    const userAchievements = await this.userAchievementCollection.findOne(
      {
        userId: userId,
      },
      {session},
    );

    if (userAchievements) {
      return userAchievements;
    }
  }

  // Update a user's achievements
  async UpdateUserGameAchievements(
    achievements: IUserGameAchievement,
    session?: ClientSession,
  ): Promise<UpdateResult | null> {
    await this.init();

    const result = await this.userAchievementCollection.updateOne(
      {userId: achievements.userId},
      {$set: achievements},
      {session},
    );

    if (result.acknowledged) {
      return result;
    }

    throw new Error(
      `Failed to add achievements for user with ID ${achievements.userId}`,
    );
  }

  // Delete a user's achievement
  async deleteUserGameAchievement(
    userId: ObjectId,
    achievementId: ObjectId,
    session?: ClientSession,
  ): Promise<UpdateResult | null> {
    await this.init();

    const result = await this.userAchievementCollection.updateOne(
      {userId: userId},
      {
        $pull: {
          achievements: {
            achievementId: achievementId,
          },
        },
      },
      {session},
    );

    if (result.acknowledged) {
      return result;
    }

    throw new Error(
      `Failed to delete achievement with ID ${achievementId} for user with ID ${userId}`,
    );
  }

  async createGoals(
    goals: IGoals,
    session?: ClientSession,
  ): Promise<IGoals | null> {
    await this.init();

    const result = await this.goalsCollection.insertOne(goals, {session});

    if (result.acknowledged && result.insertedId) {
      const createdGoals = await this.goalsCollection.findOne(
        {_id: result.insertedId},
        {session},
      );
      return createdGoals;
    }

    return null;
  }

  async readGoal(
    goalsId: string | ObjectId,
    bySlug: boolean,
    session?: ClientSession,
  ): Promise<IGoals | null> {
    await this.init();

    const goals =
      bySlug && typeof goalsId === 'string'
        ? await this.goalsCollection.findOne({slug: goalsId}, {session})
        : await this.goalsCollection.findOne({_id: goalsId}, {session});

    return goals;
  }

  async readAllGoals(session?: ClientSession): Promise<IGoals[] | null> {
    await this.init();

    const goals = await this.goalsCollection.find({}, {session}).toArray();
    return goals.length > 0 ? goals : null;
  }

  async updateGoals(
    goalsId: string | ObjectId,
    goals: Partial<IGoals>,
    bySlug: boolean,
    session?: ClientSession,
  ): Promise<UpdateResult | null> {
    await this.init();

    const result =
      bySlug && typeof goalsId === 'string'
        ? await this.goalsCollection.updateOne(
            {slug: goalsId},
            {$set: goals},
            {session},
          )
        : await this.goalsCollection.updateOne(
            {_id: goalsId},
            {$set: goals},
            {session},
          );

    if (result.acknowledged) {
      return result;
    }

    return null;
  }

  async deleteGoals(
    goalsId: string | ObjectId,
    bySlug: boolean,
    session?: ClientSession,
  ): Promise<DeleteResult | null> {
    await this.init();

    const result =
      bySlug && typeof goalsId === 'string'
        ? await this.goalsCollection.deleteOne({slug: goalsId}, {session})
        : await this.goalsCollection.deleteOne({_id: goalsId}, {session});

    if (result.acknowledged) {
      return result;
    }

    return null;
  }

  // Core gamification logic: update metrics and unlock achievements
  async metricTrigger(
    metricTriggers: IMetricTrigger,
    session?: ClientSession,
  ): Promise<{
    metricsUpdated: IUserGameMetric[];
    achievementsUnlocked: Document[];
  } | null> {
    await this.init();

    // Step 1: Update the User game metrics.

    const metricIds = metricTriggers.metrics.map(metric => metric.metricId);

    // Fetch the metrics by metricIds.

    const metrics = await this.metricCollection
      .find(
        {_id: {$in: metricIds}},
        {
          projection: {
            _id: 1,
            defaultIncrementValue: 1,
            streakResolutionStrategy: 1,
          },
          session,
        },
      )
      .toArray();

    const userMetrics = await this.userMetricCollection
      .find({
        userId: metricTriggers.userId,
        metricId: {$in: metricIds},
      })
      .toArray();

    if (
      metrics.length !== metricTriggers.metrics.length ||
      userMetrics.length !== metricTriggers.metrics.length
    ) {
      return;
    }

    const metricsById = new Map(metrics.map(doc => [doc._id.toString(), doc]));
    const orderedDocs = metricIds.map(id => metricsById.get(id.toString()));

    const userMetricsById = new Map(
      userMetrics.map(doc => [doc.metricId.toString(), doc]),
    );
    const userMetricDocs = metricIds.map(id =>
      userMetricsById.get(id.toString()),
    );

    // Todo: Transform streakmetrics
    // identify what value should be given 0 or defaultIncrementValue based on streakResolutionStrategy.

    metricTriggers.metrics = metricTriggers.metrics.map((metric, index) => {
      const metricDoc = orderedDocs[index];
      const userMetric = userMetricDocs[index];

      if (metricDoc.streakResolutionStrategy) {
        return this.resolveStreakValue(
          userMetric,
          metricDoc.streakResolutionStrategy,
          metricDoc.defaultIncrementValue,
        );
      }

      return {
        ...metric,
        value:
          metric.value === undefined
            ? metricDoc.defaultIncrementValue
            : metric.value,
      };
    });

    console.log('Metrics after resolving streaks:', metricTriggers.metrics);

    const bulkOps = metricTriggers.metrics.map(metric => {
      if (!metric.lastStreakUpdated) {
        return {
          updateOne: {
            filter: {
              userId: metricTriggers.userId,
              metricId: metric.metricId,
            },
            update: {$inc: {value: metric.value}},
            upsert: true, // Create if it doesn't exist
          },
        };
      }
      return {
        updateOne: {
          filter: {
            userId: metricTriggers.userId,
            metricId: metric.metricId,
          },
          update: {
            $set: {
              value: metric.value,
              lastStreakUpdated: metric.lastStreakUpdated,
            },
          },
          upsert: true, // Create if it doesn't exist
        },
      };
    });

    console.dir(bulkOps, {depth: null});

    // Step 2: Execute the bulk update operation.
    const updateResult = await this.userMetricCollection.bulkWrite(bulkOps, {
      session,
    });

    console.log(updateResult);

    // Step 3: fetch the updated user metrics.
    const metricsUpdated = await this.userMetricCollection
      .find(
        {
          userId: metricTriggers.userId,
          metricId: {$in: metricIds},
        },
        {
          projection: {
            _id: 0,
            metricId: 1,
            value: 1,
            StreakResolutionType: 1,
          },
          session,
        },
      )
      .toArray();

    // Step 4: fetch eligible achievements for the user.
    if (metricsUpdated.length === 0) {
      return null;
    }

    // Build the aggregate to fetch goals that are reached.
    // Use the goalIds to unlock achievements.

    const aggregateCondition = metricsUpdated.map(metric => ({
      $and: [
        {metricId: metric.metricId},
        {$expr: {$lte: ['$value', metric.value]}},
      ],
    }));

    const condition = [{$match: {$or: aggregateCondition}}];

    const goalsReached = await this.goalsCollection
      .aggregate(condition, {session})
      .toArray();

    const goalIds = goalsReached.map(goal => goal._id);

    if (goalIds.length === 0) {
      return {
        metricsUpdated: metricsUpdated,
        achievementsUnlocked: [],
      };
    }

    // Step 5: Update the user achievements with the unlocked achievements.
    /*
    const achievementIds = goalsReached.map(ach => ({
      achievementId: ach._id,
      unlockedAt: new Date(),
    }));

    // Step 6: Handle reward metric increments
    const rewardOps = achievementsUnlocked
      .filter(ach => ach.rewardMetricId && ach.rewardIncrementValue)
      .map(ach => ({
        updateOne: {
          filter: {
            userId: metricTriggers.userId,
            metricId: ach.rewardMetricId,
          },
          update: {$inc: {value: ach.rewardIncrementValue}},
          upsert: true, // Create if it doesn't exist
        },
      }));

    if (rewardOps.length > 0) {
      await this.userMetricCollection.bulkWrite(rewardOps, {session});
    }

    const updateResultAchievements =
      await this.userAchievementCollection.updateOne(
        {userId: metricTriggers.userId},
        {
          $addToSet: {
            achievements: {
              $each: achievementIds,
            },
          },
        },
      );

    const achievementsUpdated = achievementsUnlocked.map(ach => ({
      achievementId: ach._id,
      name: ach.name,
      description: ach.description,
      badgeUrl: ach.badgeUrl,
      unlockedAt: ach.unlockedAt,
    }));

    return {
      metricsUpdated: metricsUpdated,
      achievementsUnlocked: achievementsUpdated,
    };
    */

    // Important change: We should maintain a reverse lookup of goal to achievements.
    // during trigger, fetch achievements from the reverse lookup rather than scanning all achievements.
    // also, maintain a per user per achievement unlock log.
    // when the goals in per user per acheivement log is 0 for an achievement, it means the achievement is unlocked.

    // Step 5: Fetch achievements linked to the reached goals.

    const achievementsUnlockable = goalsReached
      .map(goal => goal.achievementIds)
      .flat();

    if (achievementsUnlockable.length === 0) {
      return {
        metricsUpdated: metricsUpdated,
        achievementsUnlocked: [],
      };
    }

    // Filter inactive achievements.

    let achievements = await this.achievementCollection
      .find(
        {
          _id: {$in: achievementsUnlockable},
          status: AchievementStatus.ACTIVE,
        },
        {session},
      )
      .toArray();

    // We now have the list of achievements that can be unlocked based on the goals reached.
    // There are 3 scenarios here:
    // 1. User started a progress on an achievement but not completed it.
    // 2. User has not started any progress on an achievement.
    // 3. User has already unlocked the achievement.

    // We need to handle each scenario differently.
    // By removing already unlocked achievements from the list, we can handle scenarios 1 and 2 together.

    const userAchivements = await this.userAchievementCollection.findOne(
      {userId: metricTriggers.userId},
      {session},
    );

    // Filter out already unlocked achievements.

    if (userAchivements && userAchivements.achievements.length > 0) {
      const unlockedAchievementIds = userAchivements.achievements.map(ua =>
        ua.achievementId.toString(),
      );
      achievements = achievements.filter(
        ach => !unlockedAchievementIds.includes(ach._id.toString()),
      );
    }

    if (achievements.length === 0) {
      return {
        metricsUpdated: metricsUpdated,
        achievementsUnlocked: [],
      };
    }

    // Now, achievements array contains only those achievements that can be unlocked.
    // We need to handle scenarios 1 and 2 here.
    // We need to update the progress for scenario 1 and add new progress for scenario 2.
    // If the progress pendingGoalIds becomes [], the achievement is unlocked.
    // Use a pipeline update to handle this.

    const achievementBulkOps = achievements.map(ach => {
      return {
        updateOne: {
          filter: {userId: metricTriggers.userId, achievementId: ach._id},
          update: [
            {
              $set: {
                $cond: {
                  if: {$gt: [{$size: {$ifNull: ['$pendingGoalIds', []]}}, 0]},
                  then: {$setDifference: ['$pendingGoalIds', goalIds]},
                  else: {$setDifference: [ach.goalIds, goalIds]},
                },
              },
            },
          ],
          upsert: true,
        },
      };
    });

    const achievementUpdateResult =
      await this.userAchievementCollection.bulkWrite(achievementBulkOps, {
        session,
      });

    console.log(achievementUpdateResult);

    // Step 6: Finally, fetch the achievements in progress with empty pendingGoalIds as unlocked achievements.
    const achievementsUnlocked = await this.userAchievementCollection
      .aggregate([
        {$match: {userId: metricTriggers.userId}},
        {$match: {pendingGoalIds: {$exists: false, $eq: []}}},
      ])
      .toArray();

    // Step 7: Add unlockedAchievements to userAchievements collection if not already present.

    const unlockedAchievementIds = achievementsUnlocked.map(ach => ach._id);

    if (unlockedAchievementIds.length > 0) {
      await this.userAchievementCollection.updateOne(
        {userId: metricTriggers.userId},
        {
          $addToSet: {
            achievements: {$each: unlockedAchievementIds},
          },
        },
        {session},
      );
    }

    return {
      metricsUpdated: metricsUpdated,
      achievementsUnlocked: achievementsUnlocked,
    };
  }
}
