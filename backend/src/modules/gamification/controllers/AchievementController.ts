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
  AchievementService,
  UserGameAchievementsService,
} from '#gamification/services/index.js';

import {
  MetricAchievement,
  MetricAchievementResponse,
  CreateMetricAchievementBody,
  AchievementParams,
  UpdateMetricAchievementBody,
  CreateUserGameAchievementBody,
  UserGameAchievement,
  UserGameAchievementResponse,
  GetUserGameAchievementParams,
  UpdateUserGameAchievementBody,
  DeleteUserGameAchievementParams,
  UpdateMetricAchievement,
} from '#gamification/classes/index.js';

import {GAMIFICATION_TYPES} from '../types.js';
import {OpenAPI} from 'routing-controllers-openapi';

@OpenAPI({
  tags: ['Achievements'],
})
@injectable()
@JsonController('/gamification/engine', {
  transformResponse: true,
})
export class AchievementController {
  constructor(
    @inject(GAMIFICATION_TYPES.AchievementService)
    private readonly achievementService: AchievementService,

    @inject(GAMIFICATION_TYPES.UserGameAchievementsService)
    private readonly userGameAchievementsService: UserGameAchievementsService,
  ) {}

  @Authorized(['admin', 'instructor'])
  @Post('/achievements')
  @HttpCode(201)
  async createAchievement(
    @Body() body: CreateMetricAchievementBody,
  ): Promise<MetricAchievementResponse> {
    // This method creates a metric achievement.
    // It expects the body to contain the achievement data.
    const achievement = new MetricAchievement(body);

    const createdAchievement =
      await this.achievementService.createAchievement(achievement);

    return new MetricAchievementResponse(createdAchievement);
  }

  @Authorized(['admin', 'instructor'])
  @Get('/achievements/:achievementId')
  @HttpCode(200)
  async getAchievementById(
    @Params() params: AchievementParams,
  ): Promise<MetricAchievementResponse> {
    // This method retrieves a achievement by its ID.
    // It expects the ID to be passed as a parameter.
    const achievement = await this.achievementService.getAchievementById(
      params.achievementId,
    );

    return new MetricAchievementResponse(achievement);
  }

  @Authorized(['admin', 'instructor'])
  @Get('/achievements/')
  @HttpCode(200)
  async getAchievements(): Promise<MetricAchievementResponse[]> {
    // This method retrieves all achievements.
    const achievements = await this.achievementService.getAchievements();
    return achievements.map(
      achievement => new MetricAchievementResponse(achievement),
    );
  }

  @Authorized(['admin', 'instructor'])
  @Put('/achievements/')
  @HttpCode(200)
  async updateAchievement(
    @Body() body: UpdateMetricAchievementBody,
  ): Promise<{status: boolean}> {
    // This method updates an achievement.
    // It expects the body to contain the achievement data.
    const {achievementId} = body;

    const achievementData = new UpdateMetricAchievement(body);

    const updateResult = await this.achievementService.updateAchievement(
      achievementId,
      achievementData,
    );

    return {status: updateResult};
  }

  @Authorized(['admin', 'instructor'])
  @Delete('/achievements/:achievementId')
  @HttpCode(200)
  async deleteAchievement(
    @Params() params: AchievementParams,
  ): Promise<{status: boolean}> {
    // This method deletes an achievement by its ID.
    // It expects the ID to be passed as a parameter.
    const achievementId = params.achievementId;

    const deleteResult =
      await this.achievementService.deleteAchievement(achievementId);

    return {status: deleteResult};
  }

  @Authorized(['admin', 'instructor', 'student'])
  @Post('/user/achievements')
  @HttpCode(201)
  async createUserGameAchievement(
    @Body() body: CreateUserGameAchievementBody,
  ): Promise<UserGameAchievementResponse> {
    // This method creates a user game achievement.
    // It expects the body to contain the user game achievement data.

    const userGameAchievement = new UserGameAchievement(body);

    const createdAchievement =
      await this.userGameAchievementsService.createUserGameAchievement(
        userGameAchievement,
      );

    return new UserGameAchievementResponse(createdAchievement);
  }

  @Authorized(['admin', 'instructor', 'student'])
  @Get('/user/:userId/achievements/')
  @HttpCode(200)
  async getUserGameAchievements(
    @Params() params: GetUserGameAchievementParams,
  ): Promise<UserGameAchievementResponse> {
    // This method retrives user game achievements by user ID.

    // It expects the user ID to be passed as a parameter.

    const userId = params.userId;

    const userAchievements =
      await this.userGameAchievementsService.readUserGameAchievements(userId);

    return new UserGameAchievementResponse(userAchievements);
  }

  @Authorized(['admin', 'instructor', 'student'])
  @Put('/user/achievements')
  @HttpCode(200)
  async UpdateUserGameAchievements(
    @Body() body: UpdateUserGameAchievementBody,
  ): Promise<{status: boolean}> {
    // This method updates user game achievements.
    // It expects the body to contain the user game achievement data.

    const userGameAchievement = new UserGameAchievement(body);

    const updateResult =
      await this.userGameAchievementsService.updateUserGameAchievement(
        userGameAchievement,
      );

    return {status: updateResult};
  }

  @Authorized(['admin', 'instructor', 'student'])
  @Delete('/user/:userId/achievements/:achievementId')
  @HttpCode(200)
  async deleteUserGameAchievement(
    @Params() params: DeleteUserGameAchievementParams,
  ): Promise<{status: boolean}> {
    // This method deletes a user game achievement by user ID and achievement ID.
    // It expects the user ID and achievement ID to be passed as parameters.

    const {userId, achievementId} = params;

    const deleteResult =
      await this.userGameAchievementsService.deleteUserGameAchievement(
        userId,
        achievementId,
      );

    return {status: deleteResult};
  }
}
