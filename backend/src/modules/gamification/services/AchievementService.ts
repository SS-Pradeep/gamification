import {injectable, inject} from 'inversify';
import {NotFoundError, InternalServerError} from 'routing-controllers';
import {
  BaseService,
  MongoDatabase,
  IGamifyEngineRepository,
} from '#root/shared/index.js';
import {GLOBAL_TYPES} from '#root/types.js';
import {
  MetricAchievement,
  UpdateMetricAchievement,
} from '#gamification/classes/index.js';
import {plainToClass, plainToInstance} from 'class-transformer';
import {ObjectId} from 'mongodb';

/**
 * AchievementService - handles business logic for achievements
 * Manages CRUD operations for achievements that users can unlock
 */
@injectable()
export class achievementService extends BaseService {
  constructor(
    @inject(GLOBAL_TYPES.GamifyEngineRepo)
    private readonly gamifyEngineRepo: IGamifyEngineRepository,

    @inject(GLOBAL_TYPES.Database)
    private readonly mongoDatabase: MongoDatabase,
  ) {
    super(mongoDatabase);
  }

  /**
   * Creates a new achievement
   * Validates that the referenced metric exists before creating
   * @param achievement - The achievement to create
   * @returns Promise resolving to the created achievement
   */
  createAchievement(
    achievement: MetricAchievement,
  ): Promise<MetricAchievement | null> {
    return this._withTransaction(async session => {
      // Clean up the achievement object to ensure it has the correct structure.

      achievement = Object.fromEntries(
        Object.entries(achievement).filter(([_, value]) => value !== undefined),
      ) as MetricAchievement;

      // Check if MetricId is valid
      /*const isValidMetricId = await this.gamifyEngineRepo.readGameMetric(
        achievement.metricId,
        false,
        session,
      );*/

      // Check if GoalIds are valid
      // optimize this to a single query later
      const areValidGoalIds = await Promise.all(
        achievement.goalIds.map(goalId =>
          this.gamifyEngineRepo.readGoal(goalId, false, session),
        ),
      );

      console.log('areValidGoalIds', areValidGoalIds, achievement.goalIds);

      if (!areValidGoalIds) {
        throw new NotFoundError(
          `Game goals with IDs ${achievement.goalIds} not found`,
        );
      }

      const createdAchievement = await this.gamifyEngineRepo.createAchievement(
        achievement,
        session,
      );

      if (!createdAchievement) {
        throw new InternalServerError('Failed to create achievement');
      }

      // Add the achievement Id to each of the associated goals

      const addedToGoals = await this.gamifyEngineRepo.addAchievementToGoals(
        createdAchievement._id,
        achievement.goalIds,
        session,
      );

      if (!addedToGoals) {
        throw new InternalServerError(
          'Failed to associate achievement with goals',
        );
      }

      return plainToClass(MetricAchievement, createdAchievement);
    });
  }

  /**
   * Retrieves all achievements
   * @returns Promise resolving to array of all achievements
   */
  getAchievements(): Promise<MetricAchievement[]> {
    return this._withTransaction(async session => {
      const achievements = await this.gamifyEngineRepo.readAllAchievements(
        session,
      );

      return plainToInstance(MetricAchievement, achievements);
    });
  }

  /**
   * Retrieves an achievement by its ID
   * @param id - The ID of the achievement to retrieve
   * @returns Promise resolving to the achievement or throws NotFoundError
   */
  getAchievementById(id: string): Promise<MetricAchievement> {
    return this._withTransaction(async session => {
      let achievement;

      if (ObjectId.isValid(id)) {
        const achievementId = new ObjectId(id);

        achievement = await this.gamifyEngineRepo.readAchievement(
          achievementId,
          false,
          session,
        );
      } else {
        achievement = await this.gamifyEngineRepo.readAchievement(
          id,
          true,
          session,
        );
      }

      if (!achievement) {
        throw new NotFoundError(`Achievement with ID ${id} not found`);
      }

      return plainToInstance(MetricAchievement, achievement);
    });
  }

  /**
   * Updates an existing achievement
   * Validates that the referenced metric exists before updating
   * @param id - The ID of the achievement to update
   * @param achievement - The achievement data to update
   * @returns Promise resolving to boolean indicating success
   */
  updateAchievement(
    id: string,
    achievement: UpdateMetricAchievement,
  ): Promise<boolean> {
    return this._withTransaction(async session => {
      achievement = plainToInstance(UpdateMetricAchievement, achievement, {
        excludeExtraneousValues: true,
      });

      let existingAchievement, updateResult;

      const isSlug = !ObjectId.isValid(id);

      const achievementId = isSlug ? id : new ObjectId(id);

      existingAchievement = await this.gamifyEngineRepo.readAchievement(
        achievementId,
        isSlug,
        session,
      );

      if (existingAchievement?.status === 'DELETED') {
        throw new NotFoundError(
          `Achievement with ID ${id} is deleted and cannot be updated`,
        );
      }

      // Validate that the referenced goals exists
      // optimize this to a single query later
      const areValidGoalIds = await Promise.all(
        achievement.goalIds.map(goalId =>
          this.gamifyEngineRepo.readGoal(goalId, false, session),
        ),
      );

      if (!areValidGoalIds.every(Boolean)) {
        throw new NotFoundError(`One or more goals not found`);
      }

      if (achievement.goalIds !== existingAchievement.goalIds) {
        // Update should remove achievement from old goals and add to new goals.
        // This is expensive thus do only if goalIds is different from existing.
        // Handle this in repo layer within a transaction
        const updatedInGoals =
          await this.gamifyEngineRepo.updateAchievementInGoals(
            achievementId,
            existingAchievement.goalIds, // old goals
            achievement.goalIds, // new goals
            session,
          );
      }

      updateResult = await this.gamifyEngineRepo.updateAchievement(
        achievementId,
        achievement,
        isSlug,
        session,
      );

      if (updateResult.matchedCount === 0) {
        throw new NotFoundError(`Achievement with ID ${id} not found`);
      }

      return updateResult.acknowledged && updateResult.modifiedCount > 0;
    });
  }

  /**
   * Deletes an achievement by its ID
   * @param id - The ID of the achievement to delete
   * @returns Promise resolving to boolean indicating success
   */
  deleteAchievement(id: string): Promise<boolean> {
    return this._withTransaction(async session => {
      let deleteResult;
      if (!ObjectId.isValid(id)) {
        deleteResult = await this.gamifyEngineRepo.deleteAchievement(
          id,
          true,
          session,
        );
      } else {
        const achievementId = new ObjectId(id);
        deleteResult = await this.gamifyEngineRepo.deleteAchievement(
          achievementId,
          false,
          session,
        );
      }

      if (deleteResult.modifiedCount === 0) {
        throw new NotFoundError(`Achievement with ID ${id} not found`);
      }

      return deleteResult.acknowledged && deleteResult.modifiedCount > 0;
    });
  }
}
