import {ContainerModule} from 'inversify';
import {GAMIFICATION_TYPES} from './types.js';
import {
  UserGameMetricsService,
  UserGameAchievementsService,
  AchievementService,
  MetricService,
  MetricTriggerService,
  EventService,
  RuleService,
  ScoringService,
  GoalService,
} from './services/index.js';
import {
  MetricController,
  AchievementController,
  EventController,
  RuleController,
  TriggerController,
} from './controllers/index.js';
import {GoalController} from './controllers/GoalController.js';
export const GamificationContainerModule = new ContainerModule(options => {
  // Service
  options.bind(GAMIFICATION_TYPES.MetricService).to(MetricService);
  options.bind(GAMIFICATION_TYPES.AchievementService).to(AchievementService);
  options
    .bind(GAMIFICATION_TYPES.UserGameAchievementsService)
    .to(UserGameAchievementsService);
  options
    .bind(GAMIFICATION_TYPES.UserGameMetricsService)
    .to(UserGameMetricsService);
  options
    .bind(GAMIFICATION_TYPES.MetricTriggerService)
    .to(MetricTriggerService);
  options.bind(GAMIFICATION_TYPES.EventService).to(EventService);
  options.bind(GAMIFICATION_TYPES.RuleService).to(RuleService);
  options
    .bind(GAMIFICATION_TYPES.ScoringService)
    .to(ScoringService)
    .inSingletonScope();
  options
    .bind(GAMIFICATION_TYPES.GoalService)
    .to(GoalService)
    .inSingletonScope();

  // controllers
  // options.bind(GamifyEngineController).toSelf().inSingletonScope();
  // options.bind(GamifyLayerController).toSelf().inSingletonScope();
  // options.bind(ScoreController).toSelf().inSingletonScope();
  options.bind(MetricController).toSelf().inSingletonScope();
  options.bind(AchievementController).toSelf().inSingletonScope();
  options.bind(EventController).toSelf().inSingletonScope();
  options.bind(RuleController).toSelf().inSingletonScope();
  options.bind(TriggerController).toSelf().inSingletonScope();
  options.bind(GoalController).toSelf().inSingletonScope();
});
