[**vitest-vibe**](../../../../README.md)

***

[vitest-vibe](../../../../README.md) / [shared/classes/BaseService](../README.md) / BaseService

# Abstract Class: BaseService

Defined in: [shared/classes/BaseService.ts:9](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/classes/BaseService.ts#L9)

## Extended by

- [`achievementService`](../../../../modules/gamification/services/AchievementService/classes/achievementService.md)
- [`CurrencyService`](../../../../modules/gamification/services/CurrencyService/classes/CurrencyService.md)
- [`eventService`](../../../../modules/gamification/services/EventService/classes/eventService.md)
- [`GoalService`](../../../../modules/gamification/services/GoalService/classes/GoalService.md)
- [`metricService`](../../../../modules/gamification/services/MetricService/classes/metricService.md)
- [`metricTriggerService`](../../../../modules/gamification/services/MetricTriggerService/classes/metricTriggerService.md)
- [`ruleService`](../../../../modules/gamification/services/RuleService/classes/ruleService.md)
- [`ScoringService`](../../../../modules/gamification/services/ScoringService/classes/ScoringService.md)
- [`userGameAchievementsService`](../../../../modules/gamification/services/UserGameAchievementsService/classes/userGameAchievementsService.md)
- [`userGameMetricsService`](../../../../modules/gamification/services/UserGameMetricsService/classes/userGameMetricsService.md)

## Constructors

### Constructor

> **new BaseService**(`db`): `BaseService`

Defined in: [shared/classes/BaseService.ts:10](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/classes/BaseService.ts#L10)

#### Parameters

##### db

[`MongoDatabase`](../../../database/providers/mongo/MongoDatabase/classes/MongoDatabase.md)

#### Returns

`BaseService`

## Methods

### \_withTransaction()

> `protected` **\_withTransaction**\<`T`\>(`operation`): `Promise`\<`T`\>

Defined in: [shared/classes/BaseService.ts:12](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/classes/BaseService.ts#L12)

#### Type Parameters

##### T

`T`

#### Parameters

##### operation

(`session`) => `Promise`\<`T`\>

#### Returns

`Promise`\<`T`\>
