import {Expose, Transform} from 'class-transformer';
import {
  ObjectIdToString,
  StringToObjectId,
} from '#shared/constants/transformerConstants.js';
import {
  AchievementStatus,
  ID,
  IUpdateMetricAchievement,
  Trigger,
} from '#shared/index.js';
import {IMetricAchievement} from '#shared/index.js';
import {JSONSchema} from 'class-validator-jsonschema';
import {
  CreateMetricAchievementBody,
  UpdateMetricAchievementBody,
} from '../validators/GamifyEngineValidators.js';

/**
 * MetricAchievement class - represents an achievement that users can unlock
 * when they reach a specific metric threshold (e.g., "First 100 Points")
 */
export class MetricAchievement implements IMetricAchievement {
  // Unique database identifier for this achievement
  @Expose()
  @JSONSchema({
    title: 'Unique Identifier',
    description: 'MongoDB ObjectId of the metric achievement',
    example: '60d5ec49b3f1c8e4a8f8b8c1',
    type: 'string',
  })
  @Transform(ObjectIdToString.transformer, {toPlainOnly: true})
  @Transform(StringToObjectId.transformer, {toClassOnly: true})
  _id?: ID;

  // Display name of the achievement
  @Expose()
  @JSONSchema({
    title: 'Name of the Metric Achievement',
    description: 'Name of the metric achievement, e.g; "First 100 Points"',
    example: 'First 100 Points',
    type: 'string',
  })
  name: string;

  // Detailed description explaining what the achievement is for
  @Expose()
  @JSONSchema({
    title: 'description',
    description:
      'Description of the metric achievement, explaining its purpose and how it is used in the game',
    example: 'Earned by the user for completing the first 100 points',
    type: 'string',
  })
  description: string;

  // URL to the badge image displayed when achievement is unlocked
  @Expose()
  @JSONSchema({
    title: 'Badge URL',
    description: 'URL of the badge image for the metric achievement',
    example: 'https://example.com/badge.png',
    type: 'string',
  })
  badgeUrl: string;

  // Type of trigger that unlocks this achievement
  @Expose()
  @JSONSchema({
    title: 'Trigger Type',
    description: 'Type of trigger for the metric achievement, e.g; "metric"',
    example: 'metric',
    type: 'string',
  })
  trigger: Trigger;

  // Current status of the achievement (active or inactive)
  @Expose()
  @JSONSchema({
    title: 'Achievement Status',
    description: 'Current status of the achievement',
    example: 'ACTIVE',
    type: 'string',
  })
  status?: AchievementStatus = AchievementStatus.ACTIVE;

  @Expose()
  @JSONSchema({
    title: 'Reward Metric ID',
    description:
      'The ID of the metric to increment as a reward for unlocking this achievement',
    example: '60d5ec49b3f1c8e4a8f8b8c3',
    type: 'string',
  })
  @Transform(ObjectIdToString.transformer, {toPlainOnly: true})
  @Transform(StringToObjectId.transformer, {toClassOnly: true})
  rewardMetricId?: ID;

  @Expose()
  @JSONSchema({
    title: 'Reward Increment Value',
    description: 'The value to increment the reward metric by',
    example: 10,
    type: 'number',
  })
  rewardIncrementValue?: number;

  @Expose()
  @JSONSchema({
    title: 'Goal IDs',
    description:
      'List of Goal IDs associated with this achievement for tracking progress',
    example: ['60d5ec49b3f1c8e4a8f8b8c2', '60d5ec49b3f1c8e4a8f8b8c3'],
    type: 'array',
  })
  goalIds: ID[];

  @Expose()
  @JSONSchema({
    title: 'Slug',
    description:
      'URL-friendly identifier derived from the name, used for easy referencing',
    example: 'first-100-points',
    type: 'string',
  })
  slug: string;

  @Expose()
  @JSONSchema({
    title: 'Scope',
    description: 'The scope of the achievement, e.g; "user", "global"',
    example: 'user',
    type: 'string',
  })
  scope: string;

  @Expose()
  @JSONSchema({
    title: 'Version',
    description: 'Version number for concurrency control',
    example: 1,
    type: 'number',
  })
  version = 1; // Default version is 1 (for optimistic concurrency control

  /**
   * Constructor - creates a new MetricAchievement instance
   * @param achievementBody - Optional data to populate the achievement
   */
  constructor(achievementBody?: CreateMetricAchievementBody) {
    if (achievementBody) {
      this.name = achievementBody.name;
      this.description = achievementBody.description;
      this.badgeUrl = achievementBody.badgeUrl;
      this.trigger = achievementBody.trigger;
      this.status = achievementBody?.status || AchievementStatus.ACTIVE;
      this.rewardMetricId = achievementBody?.rewardMetricId;
      this.rewardIncrementValue = achievementBody?.rewardIncrementValue;
      this.goalIds = achievementBody.goalIds;
      this.slug = achievementBody.slug;
      this.scope = achievementBody.scope;
    }
  }
}

export class MetricAchievementResponse implements IMetricAchievement {
  _id?: string;
  name: string;
  description: string;
  badgeUrl: string;
  trigger: Trigger;
  status?: AchievementStatus;
  rewardMetricId?: string;
  rewardIncrementValue?: number;
  goalIds: string[];
  slug: string;
  scope: string;
  version?: number;

  constructor(metricAchievement?: MetricAchievement) {
    if (metricAchievement) {
      this._id = metricAchievement._id?.toString();
      this.name = metricAchievement.name;
      this.description = metricAchievement.description;
      this.badgeUrl = metricAchievement.badgeUrl;
      this.trigger = metricAchievement.trigger;
      this.status = metricAchievement.status;
      this.rewardMetricId = metricAchievement.rewardMetricId?.toString();
      this.rewardIncrementValue = metricAchievement.rewardIncrementValue;
      this.goalIds = (metricAchievement.goalIds || []).map(goalId =>
        goalId.toString(),
      );
      this.slug = metricAchievement.slug;
      this.scope = metricAchievement.scope;
      this.version = metricAchievement.version;
    }
  }
}

export class UpdateMetricAchievement implements IUpdateMetricAchievement {
  // Display name of the achievement
  @Expose()
  @JSONSchema({
    title: 'Name of the Metric Achievement',
    description: 'Name of the metric achievement, e.g; "First 100 Points"',
    example: 'First 100 Points',
    type: 'string',
  })
  name: string;

  // Detailed description explaining what the achievement is for
  @Expose()
  @JSONSchema({
    title: 'description',
    description:
      'Description of the metric achievement, explaining its purpose and how it is used in the game',
    example: 'Earned by the user for completing the first 100 points',
    type: 'string',
  })
  description: string;

  // URL to the badge image displayed when achievement is unlocked
  @Expose()
  @JSONSchema({
    title: 'Badge URL',
    description: 'URL of the badge image for the metric achievement',
    example: 'https://example.com/badge.png',
    type: 'string',
  })
  badgeUrl: string;

  // Type of trigger that unlocks this achievement
  @Expose()
  @JSONSchema({
    title: 'Trigger Type',
    description: 'Type of trigger for the metric achievement, e.g; "metric"',
    example: 'metric',
    type: 'string',
  })
  trigger: Trigger;

  // Reference to the metric that this achievement tracks
  @Expose()
  @JSONSchema({
    title: 'Goal IDs',
    description:
      'List of Goal IDs associated with this achievement for tracking progress',
    example: ['60d5ec49b3f1c8e4a8f8b8c2', '60d5ec49b3f1c8e4a8f8b8c3'],
    type: 'array',
  })
  goalIds: ID[];

  // Current status of the achievement (active or inactive)
  @Expose()
  @JSONSchema({
    title: 'Achievement Status',
    description: 'Current status of the achievement',
    example: 'ACTIVE',
    type: 'string',
  })
  status: AchievementStatus = AchievementStatus.ACTIVE;

  @Expose()
  @JSONSchema({
    title: 'Reward Metric ID',
    description:
      'The ID of the metric to increment as a reward for unlocking this achievement',
    example: '60d5ec49b3f1c8e4a8f8b8c3',
    type: 'string',
  })
  @Transform(ObjectIdToString.transformer, {toPlainOnly: true})
  @Transform(StringToObjectId.transformer, {toClassOnly: true})
  rewardMetricId: ID;

  @Expose()
  @JSONSchema({
    title: 'Reward Increment Value',
    description: 'The value to increment the reward metric by',
    example: 10,
    type: 'number',
  })
  rewardIncrementValue: number;

  /**
   * Constructor - creates a new MetricAchievement instance
   * @param achievementBody - Optional data to populate the achievement
   */
  constructor(achievementBody?: UpdateMetricAchievementBody) {
    if (achievementBody) {
      this.name = achievementBody.name;
      this.description = achievementBody.description;
      this.badgeUrl = achievementBody.badgeUrl;
      this.trigger = achievementBody.trigger;
      this.status = achievementBody?.status || AchievementStatus.ACTIVE;
      this.rewardMetricId = achievementBody?.rewardMetricId;
      this.rewardIncrementValue = achievementBody?.rewardIncrementValue;
      this.goalIds = achievementBody.goalIds;
    }
  }
}
