import {Expose, Transform} from 'class-transformer';
import {
  ObjectIdToString,
  StringToObjectId,
} from '#shared/constants/transformerConstants.js';
import {ID, IGoals, IUpdateGoals, Trigger} from '#root/shared/index.js';
import {JSONSchema} from 'class-validator-jsonschema';
import {ObjectId} from 'mongodb';

/**
 * Goals class - represents a goal in the gamification system
 */

export class Goals implements IGoals {
  // Unique database identifier for this goal
  @Expose()
  @JSONSchema({
    title: 'Goals ID',
    description: 'Unique identifier for the goals',
    example: '60d5ec49b3f1c8e4a8f8b8c1',
    type: 'string',
  })
  @Transform(ObjectIdToString.transformer, {toPlainOnly: true})
  @Transform(StringToObjectId.transformer, {toClassOnly: true})
  _id?: ID;

  // Name of the goal
  @Expose()
  @JSONSchema({
    title: 'Goal Name',
    description: 'Name of the Goal',
    example: 'Daily Login',
    type: 'string',
  })
  Name: string;

  @Expose()
  @JSONSchema({
    title: 'Goal Description',
    description: 'Description of the Goal',
    example: 'User must log in daily to achieve this goal',
    type: 'string',
  })
  Description: string;

  @Expose()
  @JSONSchema({
    title: 'Trigger Type',
    description: 'Type of trigger for the goal',
    example: 'metric',
    type: 'string',
    enum: Object.values(Trigger),
  })
  triggerType: Trigger;

  @Expose()
  @JSONSchema({
    title: 'Value',
    description: 'The target value to achieve the goal',
    example: 10,
    type: 'number',
  })
  @Transform(({value}) => Number(value), {toClassOnly: true})
  value: number;

  @Expose()
  @JSONSchema({
    title: 'Metric ID',
    description: 'The ID of the metric associated with the Goal',
    example: '68593511b809b47d9b389262',
    type: 'string',
  })
  @Transform(StringToObjectId.transformer, {toClassOnly: true})
  metricId: ID;

  @Expose()
  @JSONSchema({
    title: 'slug',
    description: 'A URL-friendly unique identifier for the goal',
    example: 'daily-login',
    type: 'string',
  })
  slug: string;

  @Expose()
  @JSONSchema({
    title: 'scope',
    description: 'The scope of the goal, e.g., user, team, global',
    example: 'user',
    type: 'string',
  })
  scope: string;

  @Expose()
  @JSONSchema({
    title: 'AchievementIds',
    description: 'List of Achievement IDs associated with this goal',
    example: ['60d5ec49b3f1c8e4a8f8b8c1', '60d5ec49b3f1c8e4a8f8b8c2'],
    type: 'array',
  })
  achievementIds: (string | ObjectId)[];

  constructor(goal: IGoals) {
    if (goal) {
      this._id = goal._id;
      this.Name = goal.Name;
      this.Description = goal.Description;
      this.triggerType = goal.triggerType;
      this.value = goal.value;
      this.metricId = goal.metricId;
      this.slug = goal.slug;
      this.scope = goal.scope;
      this.achievementIds = goal.achievementIds;
    }
  }
}

export class GoalsResponse implements IGoals {
  _id?: string;
  Name: string;
  Description: string;
  triggerType: Trigger;
  value: number;
  metricId: string;
  achievementIds: string[];
  slug: string;
  scope: string;

  constructor(goal?: Goals) {
    if (goal) {
      this._id = goal._id?.toString();
      this.Name = goal.Name;
      this.Description = goal.Description;
      this.triggerType = goal.triggerType;
      this.value = goal.value;
      this.metricId = goal.metricId?.toString();
      this.achievementIds = (goal.achievementIds || []).map(achievementId =>
        achievementId.toString(),
      );
      this.slug = goal.slug;
      this.scope = goal.scope;
    }
  }
}

export class UpdateGoals implements IUpdateGoals {
  @Expose()
  @JSONSchema({
    title: 'Goal Name',
    description: 'Name of the Goal',
    example: 'Daily Login',
    type: 'string',
  })
  Name: string;

  @Expose()
  @JSONSchema({
    title: 'Goal Description',
    description: 'Description of the Goal',
    example: 'User must log in daily to achieve this goal',
    type: 'string',
  })
  Description: string;

  @Expose()
  @JSONSchema({
    title: 'Trigger Type',
    description: 'Type of trigger for the goal',
    example: 'metric',
    type: 'string',
    enum: Object.values(Trigger),
  })
  triggerType: Trigger;

  @Expose()
  @JSONSchema({
    title: 'Value',
    description: 'The target value to achieve the goal',
    example: 10,
    type: 'number',
  })
  @Transform(({value}) => Number(value), {toClassOnly: true})
  value: number;

  @Expose()
  @JSONSchema({
    title: 'Metric ID',
    description: 'The ID of the metric associated with the Goal',
    example: '68593511b809b47d9b389262',
    type: 'string',
  })
  @Transform(StringToObjectId.transformer, {toClassOnly: true})
  @Transform(ObjectIdToString.transformer, {toPlainOnly: true})
  metricId: ID;

  @Expose()
  @JSONSchema({
    title: 'AchievementIds',
    description: 'List of Achievement IDs associated with this goal',
    example: ['60d5ec49b3f1c8e4a8f8b8c1', '60d5ec49b3f1c8e4a8f8b8c2'],
    type: 'array',
  })
  achievementIds: (string | ObjectId)[];

  constructor(updateGoal: IUpdateGoals) {
    if (updateGoal) {
      this.Name = updateGoal.Name;
      this.Description = updateGoal.Description;
      this.triggerType = updateGoal.triggerType;
      this.value = updateGoal.value;
      this.metricId = updateGoal.metricId;
    }
  }
}
