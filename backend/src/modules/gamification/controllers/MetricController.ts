import {injectable, inject} from 'inversify';
import {
  JsonController,
  Authorized,
  Post,
  Get,
  Put,
  HttpCode,
  Body,
  Params,
  Delete,
} from 'routing-controllers';

import {
  MetricService,
  UserGameMetricsService,
} from '#gamification/services/index.js';

import {
  GameMetric,
  GameMetricResponse,
  CreateGameMetricBody,
  GameMetricsParams,
  UpdateGameMetricBody,
  UserGameMetricBody,
  UserGameMetric,
  UserGameMetricResponse,
  ReadUserGameMetricsParams,
  UpdateUserGameMetricBody,
  DeleteUserGameMetricParams,
} from '#gamification/classes/index.js';

import {GAMIFICATION_TYPES} from '../types.js';
import {OpenAPI} from 'routing-controllers-openapi';

@OpenAPI({
  tags: ['Metrics'],
})
@injectable()
@JsonController('/gamification/engine', {
  transformResponse: true,
})
export class MetricController {
  constructor(
    @inject(GAMIFICATION_TYPES.MetricService)
    private readonly metricService: MetricService,

    @inject(GAMIFICATION_TYPES.UserGameMetricsService)
    private readonly userGameMetricsService: UserGameMetricsService,
  ) {}

  @Authorized(['admin', 'instructor'])
  @Post('/metrics')
  @HttpCode(201)
  async createGameMetric(
    @Body() body: CreateGameMetricBody,
  ): Promise<GameMetricResponse> {
    // This method creates a game metric.
    // It expects the body to contain the game metric data.
    const gameMetric = new GameMetric(body);
    const createdMetric = await this.metricService.createGameMetric(gameMetric);

    return new GameMetricResponse(createdMetric);
  }

  @Authorized(['admin', 'instructor'])
  @Get('/metrics/:metricId')
  @HttpCode(200)
  async getGameMetricById(
    @Params() params: GameMetricsParams,
  ): Promise<GameMetricResponse> {
    // This method retrieves a game metric by its ID.
    // It expects the ID to be passed as a parameter.
    const metric = await this.metricService.getGameMetricById(params.metricId);

    return new GameMetricResponse(metric);
  }

  @Authorized(['admin', 'instructor'])
  @Get('/metrics/')
  async getGameMetrics(): Promise<GameMetricResponse[]> {
    const metrics = await this.metricService.getGameMetrics();
    return metrics.map(metric => new GameMetricResponse(metric));
  }

  @Authorized(['admin', 'instructor'])
  @Put('/metrics/')
  @HttpCode(200)
  async updateGameMetric(
    @Body() body: UpdateGameMetricBody,
  ): Promise<{status: boolean}> {
    const {metricId, ...updateData} = body;

    const updateResult = await this.metricService.updateGameMetric(
      metricId,
      updateData,
    );

    return {status: updateResult};
  }

  @Authorized(['admin', 'instructor'])
  @Delete('/metrics/:metricId')
  @HttpCode(200)
  async deleteGameMetric(
    @Params() params: GameMetricsParams,
  ): Promise<{status: boolean}> {
    // This method deletes a game metric by its ID.
    // It expects the ID to be passed as a parameter.
    const metricId = params.metricId;

    const deleteResult = await this.metricService.deleteGameMetric(metricId);

    return {status: deleteResult};
  }

  @Authorized(['admin', 'instructor', 'student'])
  @Post('/user/metrics/')
  @HttpCode(201)
  async createUserGameMetric(
    @Body() body: UserGameMetricBody,
  ): Promise<UserGameMetricResponse> {
    // This method creates a user game metric.
    // It expects the body to cotain the user game metric data.

    const userGameMetric = new UserGameMetric(body);

    const createdMetric =
      await this.userGameMetricsService.createUserGameMetric(userGameMetric);

    return new UserGameMetricResponse(createdMetric);
  }

  @Authorized(['admin', 'instructor', 'student'])
  @Get('/user/:userId/metrics/')
  @HttpCode(200)
  async getUserGameMetrics(
    @Params() params: ReadUserGameMetricsParams,
  ): Promise<UserGameMetricResponse[]> {
    const metrics = await this.userGameMetricsService.readUserGameMetrics(
      params.userId,
    );
    return metrics.map(metric => new UserGameMetricResponse(metric));
  }

  @Authorized(['admin', 'instructor', 'student'])
  @Put('/user/metrics/')
  @HttpCode(200)
  async updateUserGameMetric(
    @Body() body: UpdateUserGameMetricBody,
  ): Promise<{status: boolean}> {
    const userGameMetric = new UserGameMetric(body);
    const updateResult =
      await this.userGameMetricsService.updateUserGameMetric(userGameMetric);
    return {status: updateResult};
  }

  @Authorized(['admin', 'instructor', 'student'])
  @Delete('/user/:userId/metrics/:metricId')
  @HttpCode(200)
  async deleteUserGameMetric(
    @Params() params: DeleteUserGameMetricParams,
  ): Promise<{status: boolean}> {
    const deleteResult = await this.userGameMetricsService.deleteUserGameMetric(
      params.userId,
      params.metricId,
    );
    return {status: deleteResult};
  }
}
