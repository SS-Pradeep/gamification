import {injectable, inject} from 'inversify';
import {NotFoundError, InternalServerError} from 'routing-controllers';
import {
  BaseService,
  MongoDatabase,
  IGamifyEngineRepository,
} from '#root/shared/index.js';
import {GLOBAL_TYPES} from '#root/types.js';
import {Goals, UpdateGoals} from '#gamification/classes/transformers/index.js';
import {plainToInstance} from 'class-transformer';
import {ObjectId} from 'mongodb';

/**
 * GoalService - handles CRUD operations for goals
 * Manages business logic related to goals in the gamification system
 */

@injectable()
export class GoalService extends BaseService {
  constructor(
    @inject(GLOBAL_TYPES.GamifyEngineRepo)
    private readonly gamifyEngineRepo: IGamifyEngineRepository,
    @inject(GLOBAL_TYPES.Database)
    private readonly mongoDatabase: MongoDatabase,
  ) {
    super(mongoDatabase);
  }

  async createGoals(goals: Goals): Promise<Goals> {
    return this._withTransaction(async session => {
      goals = plainToInstance(Goals, goals);

      const createdGoals = await this.gamifyEngineRepo.createGoals(
        goals,
        session,
      );
      if (!createdGoals) {
        throw new InternalServerError('Failed to create goals');
      }
      return plainToInstance(Goals, createdGoals);
    });
  }

  async readGoals() {
    return this._withTransaction(async session => {
      const goals = await this.gamifyEngineRepo.readAllGoals(session);
      if (!goals) {
        throw new NotFoundError('No goals found');
      }
      return plainToInstance(Goals, goals);
    });
  }

  async readGoal(goalsId: string | ObjectId) {
    return this._withTransaction(async session => {
      const isSlug = typeof goalsId === 'string' && !ObjectId.isValid(goalsId);

      const goal = await this.gamifyEngineRepo.readGoal(
        goalsId,
        isSlug,
        session,
      );
      if (!goal) {
        throw new NotFoundError('Goal not found with the given ID');
      }
      return plainToInstance(Goals, goal);
    });
  }

  async updateGoals(goalsId: string | ObjectId, goals: UpdateGoals) {
    return this._withTransaction(async session => {
      const isSlug = typeof goalsId === 'string' && !ObjectId.isValid(goalsId);
      const updatedGoals = await this.gamifyEngineRepo.updateGoals(
        goalsId,
        goals,
        isSlug,
        session,
      );
      if (!updatedGoals) {
        throw new InternalServerError('Failed to update goals');
      }
      return plainToInstance(Goals, updatedGoals);
    });
  }

  async deleteGoals(goalsId: string | ObjectId) {
    return this._withTransaction(async session => {
      const isSlug = typeof goalsId === 'string' && !ObjectId.isValid(goalsId);
      const deleteResult = await this.gamifyEngineRepo.deleteGoals(
        goalsId,
        isSlug,
        session,
      );
      if (!deleteResult) {
        throw new InternalServerError('Failed to delete goals');
      }
      return plainToInstance(Goals, deleteResult);
    });
  }
}
