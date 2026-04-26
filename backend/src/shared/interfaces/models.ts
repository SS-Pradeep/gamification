import {ObjectId} from 'mongodb';

export interface IUser {
  _id?: string | ObjectId | null;
  firebaseUID: string;
  email: string;
  firstName: string;
  lastName: string;
  roles: string[];
}

export type ID = string | ObjectId | null;

// Gamification interfaces

// Currently only Number type is supported, but can be extended later.
export enum GameMetricType {
  NUMBER = 'Number',
}

export enum StreakResolutionType {
  CONSECUTIVE = 'Consecutive',
  DAILY = 'Daily',
  FAILRESET = 'FailReset',
}

interface MetaDataMixin {
  slug: string;
  scope: string; // ProjectId or tenantId, depends on self hosted or multi-tenant architecture
}

// GameMetric interface
export interface IGameMetric extends MetaDataMixin {
  _id?: string | ObjectId | null;
  name: string;
  description: string;
  type: GameMetricType;
  units: string;
  defaultIncrementValue: number;
  streakResolutionStrategy?: StreakResolutionType;
}

export interface IUpdateGameMetric {
  name: string;
  description: string;
  type: GameMetricType;
  units: string;
  defaultIncrementValue: number;
  streakResolutionStrategy?: StreakResolutionType;
}

export enum Trigger {
  METRIC = 'metric',
  STREAK = 'streak',
}

export enum AchievementStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  DELETED = 'DELETED',
}

export interface IAchievementBase extends MetaDataMixin {
  _id?: string | ObjectId | null;
  name: string;
  description: string;
  trigger: Trigger;
  status?: AchievementStatus;
  badgeUrl: string; // URL to the badge image
  rewardMetricId?: string | ObjectId; // Optional field to link achievements to specific metrics
  rewardIncrementValue?: number; //Optional field to specify the increment value for the reward metric
}

export interface IUpdateMetricAchievement {
  name: string;
  description: string;
  trigger: Trigger;
  status: AchievementStatus;
  badgeUrl: string; // URL to the badge image
  rewardMetricId: string | ObjectId; // Optional field to link achievements to specific metrics
  rewardIncrementValue: number; //Optional field to specify the increment value for the reward metric
  goalIds: (string | ObjectId)[];
}

export interface IMetricAchievement extends IAchievementBase {
  trigger: Trigger;
  goalIds: (string | ObjectId)[];
  version?: number;
}

// UserMetric interface
export interface IUserGameMetric {
  _id?: string | ObjectId | null;
  userId: string | ObjectId;
  metricId: string | ObjectId;
  value: number; // Current value of the metric
  lastUpdated: Date; // Timestamp of the last update
  lastStreakUpdated?: Date; // Timestamp of the last streak update
}

// Achievement interface
export interface IAchievement {
  achievementId: string | ObjectId;
  unlockedAt: Date; // Timestamp when the achievement was unlocked
}

// UserAchievement interface
export interface IUserGameAchievement {
  _id?: string | ObjectId | null;
  userId: string | ObjectId;
  achievements: IAchievement[];
  completedGoalIds: (string | ObjectId)[];
}

// Metrics array interface

export interface IMetrics {
  metricId: string | ObjectId;
  value?: number;
  lastStreakUpdated?: Date; // Optional, used for streak metrics
}

// Gamify Engine-trigger (Metric) interface
export interface IMetricTrigger {
  userId: string | ObjectId;
  metrics: IMetrics[]; // Array of metrics with their values
}

// Event interface
export interface IEvents extends MetaDataMixin {
  _id?: string | ObjectId | null;
  eventName: string; // Name of the event
  eventDescription: string; // Description of the event
  eventVersion: string; // Version of the event
  eventPayload: Record<string, any>; // Payload of the event
  slug: string; // Unique slug identifier for the event
  scope: string; // Scope of the event (e.g., global, course-specific) typically tenant id
}

export interface IUpdateEvents {
  eventName: string;
  eventDescription: string;
  eventVersion: string;
  eventPayload: Record<string, any>; // Payload of the event
}

// Rules interface
export interface IRule extends MetaDataMixin {
  _id?: string | ObjectId | null;
  ruleName: string;
  ruleDescription: string;
  eventId: string | ObjectId;
  metricId: string | ObjectId;
  logic: Record<string, any>;
  ruleVersion: number;
}

export interface IUpdateRule {
  ruleName: string;
  ruleDescription: string;
  eventId: string | ObjectId;
  metricId: string | ObjectId;
  logic: Record<string, any>;
  ruleVersion: number;
}

// response structure
export interface IMetricTriggerResponse {
  metricsUpdated: IMetrics[];
  achievementsUnlocked: IAchievement[];
}

export interface ICurrency extends MetaDataMixin {
  _id?: string | ObjectId | null;
  name: string;
  description: string;
  icon: string;
  exchangeValue: number; // Value in its own currency
  isBaseCurrency: boolean; // Indicates if this is the base currency
}

export interface IUpdateCurrency {
  name: string;
  description: string;
  icon: string;
  exchangeValue: number; // Value in its own currency
  isBaseCurrency: boolean; // Indicates if this is the base currency
}

export interface IGoals extends MetaDataMixin {
  _id?: string | ObjectId | null;
  Name: string;
  Description: string;
  triggerType: Trigger;
  value: number;
  metricId: string | ObjectId;
  achievementIds: (string | ObjectId)[];
}

export interface IUpdateGoals {
  Name: string;
  Description: string;
  triggerType: Trigger;
  value: number;
  metricId: string | ObjectId;
  achievementIds: (string | ObjectId)[];
}

export interface IUserAchievementProgress {
  _id?: string | ObjectId | null;
  userId: string | ObjectId;
  achievementId: string | ObjectId;
  pendingGoalIds: (string | ObjectId)[];
  version: number;
}

export interface IProject {
  _id?: string | ObjectId | null;
  name: string;
  description: string;
}
