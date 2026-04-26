import {injectable, inject} from 'inversify';
import {
  JsonController,
  Authorized,
  Post,
  Get,
  Put,
  Body,
  Params,
  HttpCode,
  Delete,
} from 'routing-controllers';

import {GoalService} from '#gamification/services/index.js';
import {
  Goals,
  GoalsResponse,
  UpdateGoals,
  CreateGoalsBody,
  UpdateGoalsBody,
  GoalsParams,
} from '#gamification/classes/index.js';
import {GAMIFICATION_TYPES} from '../types.js';
import {OpenAPI} from 'routing-controllers-openapi';

@OpenAPI({
  tags: ['Goals'],
})
@injectable()
@JsonController('/gamification', {
  transformResponse: true,
})
export class GoalController {
  constructor(
    @inject(GAMIFICATION_TYPES.GoalService)
    private readonly goalService: GoalService,
  ) {}

  @Authorized(['admin', 'instructor'])
  @HttpCode(201)
  @Post('/goals')
  async createGoals(@Body() goals: CreateGoalsBody): Promise<GoalsResponse> {
    // Transform the goals body to an instance of Goals
    const goalsInstance = new Goals(goals);

    const createdGoals = await this.goalService.createGoals(goalsInstance);

    // Return the created goals
    return new GoalsResponse(createdGoals);
  }

  @Authorized(['admin', 'instructor'])
  @Get('/goals')
  @HttpCode(200)
  async readGoals(): Promise<GoalsResponse[]> {
    const goals = await this.goalService.readGoals();
    return goals.map(goal => new GoalsResponse(goal));
  }

  @Authorized(['admin', 'instructor'])
  @Get('/goals/:goalsId')
  @HttpCode(200)
  async readGoal(@Params() params: GoalsParams): Promise<GoalsResponse> {
    const goal = await this.goalService.readGoal(params.goalsId);
    return new GoalsResponse(goal);
  }

  @Authorized(['admin', 'instructor'])
  @Put('/goals/:goalsId')
  @HttpCode(200)
  async updateGoals(
    @Params() params: GoalsParams,
    @Body() goals: UpdateGoalsBody,
  ): Promise<GoalsResponse> {
    const goalsInstance = new UpdateGoals(goals);
    const updatedGoals = await this.goalService.updateGoals(
      params.goalsId,
      goalsInstance,
    );
    return new GoalsResponse(updatedGoals);
  }

  @Authorized(['admin', 'instructor'])
  @Delete('/goals/:goalsId')
  @HttpCode(204)
  async deleteGoals(@Params() params: GoalsParams): Promise<void> {
    await this.goalService.deleteGoals(params.goalsId);
    return;
  }
}
