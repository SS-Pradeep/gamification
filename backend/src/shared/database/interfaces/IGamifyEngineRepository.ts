import {
  ClientSession,
  UpdateResult,
  DeleteResult,
  ObjectId,
  Document,
} from 'mongodb';
import {
  IGameMetric,
  IMetricAchievement,
  IUserGameMetric,
  IUserGameAchievement,
  IMetricTrigger,
  IGoals,
  ID,
} from '../../interfaces/models.js';

/**
 * Interface for gamification engine repository.
 * Defines methods for managing game metrics, achievements, and user progress.
 */
export interface IGamifyEngineRepository {
  // Create a new game metric
  createGameMetric(
    gameMetric: IGameMetric,
    session?: ClientSession,
  ): Promise<IGameMetric | null>;

  // Get a game metric by its ID
  readGameMetric(
    gameMetricId: string | ObjectId,
    bySlug: boolean,
    session?: ClientSession,
  ): Promise<IGameMetric | null>;

  // Get all game metrics
  readAllGameMetrics(session?: ClientSession): Promise<IGameMetric[] | null>;

  // Update a game metric by its ID
  updateGameMetric(
    gameMetricId: string | ObjectId,
    gameMetric: Partial<IGameMetric>,
    bySlug: boolean,
    session?: ClientSession,
  ): Promise<UpdateResult | null>;

  // Delete a game metric by its ID
  deleteGameMetric(
    gameMetricId: string | ObjectId,
    bySlug: boolean,
    session?: ClientSession,
  ): Promise<DeleteResult | null>;

  // Create a new achievement
  createAchievement(
    achievement: IMetricAchievement,
    session?: ClientSession,
  ): Promise<IMetricAchievement | null>;

  // Add achievement to goals
  addAchievementToGoals(
    achievementId: string | ObjectId,
    goalIds: ID[],
    session?: ClientSession,
  ): Promise<boolean>;

  updateAchievementInGoals(
    achievementId: string | ObjectId,
    currentGoalIds: ID[],
    newGoalIds: ID[],
    session?: ClientSession,
  ): Promise<boolean>;

  // Get an achievement by its ID
  readAchievement(
    achievementId: string | ObjectId,
    bySlug: boolean,
    session?: ClientSession,
  ): Promise<IMetricAchievement | null>;

  // Get all achievements
  readAllAchievements(
    session?: ClientSession,
  ): Promise<IMetricAchievement[] | null>;

  // Update an achievement by its ID
  updateAchievement(
    achievementId: string | ObjectId,
    achievement: Partial<IMetricAchievement>,
    bySlug: boolean,
    session?: ClientSession,
  ): Promise<UpdateResult | null>;

  // Delete an achievement by its ID (Soft delete)
  deleteAchievement(
    achievementId: string | ObjectId,
    bySlug: boolean,
    session?: ClientSession,
  ): Promise<UpdateResult | null>;

  // Delete achivements by metric ID (Soft delete)
  deleteAchievementByMetricId(
    metricId: string | ObjectId,
    session?: ClientSession,
  ): Promise<UpdateResult | null>;

  // Create a user game metric (user progress on a metric)
  createUserGameMetric(
    userGameMetric: IUserGameMetric,
    session?: ClientSession,
  ): Promise<IUserGameMetric | null>;

  // Bulk create user game metrics (for lazy creation of metrics)
  createUserGameMetrics(
    userGameMetrics: IUserGameMetric[],
    session?: ClientSession,
  ): Promise<IUserGameMetric[] | null>;

  // Get all game metrics for a user
  readAllUserGameMetric(
    userId: string | ObjectId,
    session?: ClientSession,
  ): Promise<IUserGameMetric[] | null>;

  // Get a specific user game metric
  readUserGameMetric(
    userId: string | ObjectId,
    gameMetricId: string | ObjectId,
    session?: ClientSession,
  ): Promise<IUserGameMetric | null>;

  // Update a user's game metric
  updateUserGameMetric(
    userId: string | ObjectId,
    gameMetricId: string | ObjectId,
    UserGameMetric: Partial<IUserGameMetric>,
    session?: ClientSession,
  ): Promise<UpdateResult | null>;

  // Delete a user's game metric
  deleteUserGameMetric(
    userId: string | ObjectId,
    gameMetricId: string | ObjectId,
    session?: ClientSession,
  ): Promise<DeleteResult | null>;

  deleteUserGameMetricById(
    metricId: string | ObjectId,
    session?: ClientSession,
  ): Promise<DeleteResult | null>;

  // Create a user achievement (when a user unlocks an achievement)
  createUserGameAchievement(
    userGameAchievement: IUserGameAchievement,
    session?: ClientSession,
  ): Promise<IUserGameAchievement | null>;

  // Get all achievements for a user
  readUserGameAchievements(
    userId: string | ObjectId,
    session?: ClientSession,
  ): Promise<IUserGameAchievement | null>;

  // Update a user's achievements
  UpdateUserGameAchievements(
    achievements: IUserGameAchievement,
    session?: ClientSession,
  ): Promise<UpdateResult | null>;

  // Delete a user's achievement
  deleteUserGameAchievement(
    userId: string | ObjectId,
    achievementId: string | ObjectId,
    session?: ClientSession,
  ): Promise<UpdateResult | null>;

  // Trigger metric logic (update metrics and unlock achievements)
  metricTrigger(
    metricTriggers: IMetricTrigger,
    session?: ClientSession,
  ): Promise<{
    metricsUpdated: IUserGameMetric[];
    achievementsUnlocked: Document[];
  }>;

  // Create Goals

  createGoals(goals: IGoals, session?: ClientSession): Promise<IGoals | null>;

  // Get a Goals by its ID
  readGoal(
    goalsId: string | ObjectId,
    bySlug: boolean,
    session?: ClientSession,
  ): Promise<IGoals | null>;

  // Get all Goals
  readAllGoals(session?: ClientSession): Promise<IGoals[] | null>;

  // Update a Goals by its ID
  updateGoals(
    goalsId: string | ObjectId,
    goals: Partial<IGoals>,
    bySlug: boolean,
    session?: ClientSession,
  ): Promise<UpdateResult | null>;

  // Delete a Goals by its ID
  deleteGoals(
    goalsId: string | ObjectId,
    bySlug: boolean,
    session?: ClientSession,
  ): Promise<DeleteResult | null>;
}
