[**vitest-vibe**](../../../../../README.md)

***

[vitest-vibe](../../../../../README.md) / [modules/gamification/controllers/AchievementController](../README.md) / AchievementController

# Class: AchievementController

Defined in: [modules/gamification/controllers/AchievementController.ts:43](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/AchievementController.ts#L43)

## Constructors

### Constructor

> **new AchievementController**(`AchievementService`, `UserGameAchievementsService`): `AchievementController`

Defined in: [modules/gamification/controllers/AchievementController.ts:44](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/AchievementController.ts#L44)

#### Parameters

##### AchievementService

[`achievementService`](../../../services/AchievementService/classes/achievementService.md)

##### UserGameAchievementsService

[`userGameAchievementsService`](../../../services/UserGameAchievementsService/classes/userGameAchievementsService.md)

#### Returns

`AchievementController`

## Methods

### createAchievement()

> **createAchievement**(`body`): `Promise`\<[`MetricAchievement`](../../../classes/transformers/MetricAchievement/classes/MetricAchievement.md)\>

Defined in: [modules/gamification/controllers/AchievementController.ts:55](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/AchievementController.ts#L55)

#### Parameters

##### body

[`CreateMetricAchievementBody`](../../../classes/validators/GamifyEngineValidators/classes/CreateMetricAchievementBody.md)

#### Returns

`Promise`\<[`MetricAchievement`](../../../classes/transformers/MetricAchievement/classes/MetricAchievement.md)\>

***

### createUserGameAchievement()

> **createUserGameAchievement**(`body`): `Promise`\<[`UserGameAchievement`](../../../classes/transformers/UserGameAchievement/classes/UserGameAchievement.md)\>

Defined in: [modules/gamification/controllers/AchievementController.ts:135](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/AchievementController.ts#L135)

#### Parameters

##### body

[`CreateUserGameAchievementBody`](../../../classes/validators/GamifyEngineValidators/classes/CreateUserGameAchievementBody.md)

#### Returns

`Promise`\<[`UserGameAchievement`](../../../classes/transformers/UserGameAchievement/classes/UserGameAchievement.md)\>

***

### deleteAchievement()

> **deleteAchievement**(`params`): `Promise`\<\{ `status`: `boolean`; \}\>

Defined in: [modules/gamification/controllers/AchievementController.ts:118](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/AchievementController.ts#L118)

#### Parameters

##### params

[`AchievementParams`](../../../classes/validators/GamifyEngineValidators/classes/AchievementParams.md)

#### Returns

`Promise`\<\{ `status`: `boolean`; \}\>

***

### deleteUserGameAchievement()

> **deleteUserGameAchievement**(`params`): `Promise`\<\{ `status`: `boolean`; \}\>

Defined in: [modules/gamification/controllers/AchievementController.ts:191](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/AchievementController.ts#L191)

#### Parameters

##### params

[`DeleteUserGameAchievementParams`](../../../classes/validators/GamifyEngineValidators/classes/DeleteUserGameAchievementParams.md)

#### Returns

`Promise`\<\{ `status`: `boolean`; \}\>

***

### getAchievementById()

> **getAchievementById**(`params`): `Promise`\<[`MetricAchievement`](../../../classes/transformers/MetricAchievement/classes/MetricAchievement.md)\>

Defined in: [modules/gamification/controllers/AchievementController.ts:74](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/AchievementController.ts#L74)

#### Parameters

##### params

[`AchievementParams`](../../../classes/validators/GamifyEngineValidators/classes/AchievementParams.md)

#### Returns

`Promise`\<[`MetricAchievement`](../../../classes/transformers/MetricAchievement/classes/MetricAchievement.md)\>

***

### getAchievements()

> **getAchievements**(): `Promise`\<[`MetricAchievement`](../../../classes/transformers/MetricAchievement/classes/MetricAchievement.md)[]\>

Defined in: [modules/gamification/controllers/AchievementController.ts:89](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/AchievementController.ts#L89)

#### Returns

`Promise`\<[`MetricAchievement`](../../../classes/transformers/MetricAchievement/classes/MetricAchievement.md)[]\>

***

### getUserGameAchievements()

> **getUserGameAchievements**(`params`): `Promise`\<[`UserGameAchievement`](../../../classes/transformers/UserGameAchievement/classes/UserGameAchievement.md)\>

Defined in: [modules/gamification/controllers/AchievementController.ts:154](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/AchievementController.ts#L154)

#### Parameters

##### params

[`GetUserGameAchievementParams`](../../../classes/validators/GamifyEngineValidators/classes/GetUserGameAchievementParams.md)

#### Returns

`Promise`\<[`UserGameAchievement`](../../../classes/transformers/UserGameAchievement/classes/UserGameAchievement.md)\>

***

### updateAchievement()

> **updateAchievement**(`body`): `Promise`\<\{ `status`: `boolean`; \}\>

Defined in: [modules/gamification/controllers/AchievementController.ts:98](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/AchievementController.ts#L98)

#### Parameters

##### body

[`UpdateMetricAchievementBody`](../../../classes/validators/GamifyEngineValidators/classes/UpdateMetricAchievementBody.md)

#### Returns

`Promise`\<\{ `status`: `boolean`; \}\>

***

### UpdateUserGameAchievements()

> **UpdateUserGameAchievements**(`body`): `Promise`\<\{ `status`: `boolean`; \}\>

Defined in: [modules/gamification/controllers/AchievementController.ts:172](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/AchievementController.ts#L172)

#### Parameters

##### body

[`UpdateUserGameAchievementBody`](../../../classes/validators/GamifyEngineValidators/classes/UpdateUserGameAchievementBody.md)

#### Returns

`Promise`\<\{ `status`: `boolean`; \}\>
