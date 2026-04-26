[**vitest-vibe**](../../../../../README.md)

***

[vitest-vibe](../../../../../README.md) / [shared/database/interfaces/IGamifyEngineRepository](../README.md) / IGamifyEngineRepository

# Interface: IGamifyEngineRepository

Defined in: [shared/database/interfaces/IGamifyEngineRepository.ts:22](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyEngineRepository.ts#L22)

Interface for gamification engine repository.
Defines methods for managing game metrics, achievements, and user progress.

## Methods

### addAchievementToGoals()

> **addAchievementToGoals**(`achievementId`, `goalIds`, `session?`): `Promise`\<`boolean`\>

Defined in: [shared/database/interfaces/IGamifyEngineRepository.ts:61](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyEngineRepository.ts#L61)

#### Parameters

##### achievementId

`string` | `ObjectId`

##### goalIds

[`ID`](../../../../interfaces/models/type-aliases/ID.md)[]

##### session?

`ClientSession`

#### Returns

`Promise`\<`boolean`\>

***

### createAchievement()

> **createAchievement**(`achievement`, `session?`): `Promise`\<[`IMetricAchievement`](../../../../interfaces/models/interfaces/IMetricAchievement.md)\>

Defined in: [shared/database/interfaces/IGamifyEngineRepository.ts:55](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyEngineRepository.ts#L55)

#### Parameters

##### achievement

[`IMetricAchievement`](../../../../interfaces/models/interfaces/IMetricAchievement.md)

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IMetricAchievement`](../../../../interfaces/models/interfaces/IMetricAchievement.md)\>

***

### createGameMetric()

> **createGameMetric**(`gameMetric`, `session?`): `Promise`\<[`IGameMetric`](../../../../interfaces/models/interfaces/IGameMetric.md)\>

Defined in: [shared/database/interfaces/IGamifyEngineRepository.ts:24](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyEngineRepository.ts#L24)

#### Parameters

##### gameMetric

[`IGameMetric`](../../../../interfaces/models/interfaces/IGameMetric.md)

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IGameMetric`](../../../../interfaces/models/interfaces/IGameMetric.md)\>

***

### createGoals()

> **createGoals**(`goals`, `session?`): `Promise`\<[`IGoals`](../../../../interfaces/models/interfaces/IGoals.md)\>

Defined in: [shared/database/interfaces/IGamifyEngineRepository.ts:188](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyEngineRepository.ts#L188)

#### Parameters

##### goals

[`IGoals`](../../../../interfaces/models/interfaces/IGoals.md)

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IGoals`](../../../../interfaces/models/interfaces/IGoals.md)\>

***

### createUserGameAchievement()

> **createUserGameAchievement**(`userGameAchievement`, `session?`): `Promise`\<[`IUserGameAchievement`](../../../../interfaces/models/interfaces/IUserGameAchievement.md)\>

Defined in: [shared/database/interfaces/IGamifyEngineRepository.ts:153](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyEngineRepository.ts#L153)

#### Parameters

##### userGameAchievement

[`IUserGameAchievement`](../../../../interfaces/models/interfaces/IUserGameAchievement.md)

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IUserGameAchievement`](../../../../interfaces/models/interfaces/IUserGameAchievement.md)\>

***

### createUserGameMetric()

> **createUserGameMetric**(`userGameMetric`, `session?`): `Promise`\<[`IUserGameMetric`](../../../../interfaces/models/interfaces/IUserGameMetric.md)\>

Defined in: [shared/database/interfaces/IGamifyEngineRepository.ts:108](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyEngineRepository.ts#L108)

#### Parameters

##### userGameMetric

[`IUserGameMetric`](../../../../interfaces/models/interfaces/IUserGameMetric.md)

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IUserGameMetric`](../../../../interfaces/models/interfaces/IUserGameMetric.md)\>

***

### createUserGameMetrics()

> **createUserGameMetrics**(`userGameMetrics`, `session?`): `Promise`\<[`IUserGameMetric`](../../../../interfaces/models/interfaces/IUserGameMetric.md)[]\>

Defined in: [shared/database/interfaces/IGamifyEngineRepository.ts:114](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyEngineRepository.ts#L114)

#### Parameters

##### userGameMetrics

[`IUserGameMetric`](../../../../interfaces/models/interfaces/IUserGameMetric.md)[]

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IUserGameMetric`](../../../../interfaces/models/interfaces/IUserGameMetric.md)[]\>

***

### deleteAchievement()

> **deleteAchievement**(`achievementId`, `bySlug`, `session?`): `Promise`\<`UpdateResult`\<`Document`\>\>

Defined in: [shared/database/interfaces/IGamifyEngineRepository.ts:95](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyEngineRepository.ts#L95)

#### Parameters

##### achievementId

`string` | `ObjectId`

##### bySlug

`boolean`

##### session?

`ClientSession`

#### Returns

`Promise`\<`UpdateResult`\<`Document`\>\>

***

### deleteAchievementByMetricId()

> **deleteAchievementByMetricId**(`metricId`, `session?`): `Promise`\<`UpdateResult`\<`Document`\>\>

Defined in: [shared/database/interfaces/IGamifyEngineRepository.ts:102](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyEngineRepository.ts#L102)

#### Parameters

##### metricId

`string` | `ObjectId`

##### session?

`ClientSession`

#### Returns

`Promise`\<`UpdateResult`\<`Document`\>\>

***

### deleteGameMetric()

> **deleteGameMetric**(`gameMetricId`, `bySlug`, `session?`): `Promise`\<`DeleteResult`\>

Defined in: [shared/database/interfaces/IGamifyEngineRepository.ts:48](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyEngineRepository.ts#L48)

#### Parameters

##### gameMetricId

`string` | `ObjectId`

##### bySlug

`boolean`

##### session?

`ClientSession`

#### Returns

`Promise`\<`DeleteResult`\>

***

### deleteGoals()

> **deleteGoals**(`goalsId`, `bySlug`, `session?`): `Promise`\<`DeleteResult`\>

Defined in: [shared/database/interfaces/IGamifyEngineRepository.ts:209](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyEngineRepository.ts#L209)

#### Parameters

##### goalsId

`string` | `ObjectId`

##### bySlug

`boolean`

##### session?

`ClientSession`

#### Returns

`Promise`\<`DeleteResult`\>

***

### deleteUserGameAchievement()

> **deleteUserGameAchievement**(`userId`, `achievementId`, `session?`): `Promise`\<`UpdateResult`\<`Document`\>\>

Defined in: [shared/database/interfaces/IGamifyEngineRepository.ts:171](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyEngineRepository.ts#L171)

#### Parameters

##### userId

`string` | `ObjectId`

##### achievementId

`string` | `ObjectId`

##### session?

`ClientSession`

#### Returns

`Promise`\<`UpdateResult`\<`Document`\>\>

***

### deleteUserGameMetric()

> **deleteUserGameMetric**(`userId`, `gameMetricId`, `session?`): `Promise`\<`DeleteResult`\>

Defined in: [shared/database/interfaces/IGamifyEngineRepository.ts:141](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyEngineRepository.ts#L141)

#### Parameters

##### userId

`string` | `ObjectId`

##### gameMetricId

`string` | `ObjectId`

##### session?

`ClientSession`

#### Returns

`Promise`\<`DeleteResult`\>

***

### deleteUserGameMetricById()

> **deleteUserGameMetricById**(`metricId`, `session?`): `Promise`\<`DeleteResult`\>

Defined in: [shared/database/interfaces/IGamifyEngineRepository.ts:147](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyEngineRepository.ts#L147)

#### Parameters

##### metricId

`string` | `ObjectId`

##### session?

`ClientSession`

#### Returns

`Promise`\<`DeleteResult`\>

***

### metricTrigger()

> **metricTrigger**(`metricTriggers`, `session?`): `Promise`\<\{ `achievementsUnlocked`: `Document`[]; `metricsUpdated`: [`IUserGameMetric`](../../../../interfaces/models/interfaces/IUserGameMetric.md)[]; \}\>

Defined in: [shared/database/interfaces/IGamifyEngineRepository.ts:178](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyEngineRepository.ts#L178)

#### Parameters

##### metricTriggers

[`IMetricTrigger`](../../../../interfaces/models/interfaces/IMetricTrigger.md)

##### session?

`ClientSession`

#### Returns

`Promise`\<\{ `achievementsUnlocked`: `Document`[]; `metricsUpdated`: [`IUserGameMetric`](../../../../interfaces/models/interfaces/IUserGameMetric.md)[]; \}\>

***

### readAchievement()

> **readAchievement**(`achievementId`, `bySlug`, `session?`): `Promise`\<[`IMetricAchievement`](../../../../interfaces/models/interfaces/IMetricAchievement.md)\>

Defined in: [shared/database/interfaces/IGamifyEngineRepository.ts:75](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyEngineRepository.ts#L75)

#### Parameters

##### achievementId

`string` | `ObjectId`

##### bySlug

`boolean`

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IMetricAchievement`](../../../../interfaces/models/interfaces/IMetricAchievement.md)\>

***

### readAllAchievements()

> **readAllAchievements**(`session?`): `Promise`\<[`IMetricAchievement`](../../../../interfaces/models/interfaces/IMetricAchievement.md)[]\>

Defined in: [shared/database/interfaces/IGamifyEngineRepository.ts:82](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyEngineRepository.ts#L82)

#### Parameters

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IMetricAchievement`](../../../../interfaces/models/interfaces/IMetricAchievement.md)[]\>

***

### readAllGameMetrics()

> **readAllGameMetrics**(`session?`): `Promise`\<[`IGameMetric`](../../../../interfaces/models/interfaces/IGameMetric.md)[]\>

Defined in: [shared/database/interfaces/IGamifyEngineRepository.ts:37](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyEngineRepository.ts#L37)

#### Parameters

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IGameMetric`](../../../../interfaces/models/interfaces/IGameMetric.md)[]\>

***

### readAllGoals()

> **readAllGoals**(`session?`): `Promise`\<[`IGoals`](../../../../interfaces/models/interfaces/IGoals.md)[]\>

Defined in: [shared/database/interfaces/IGamifyEngineRepository.ts:198](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyEngineRepository.ts#L198)

#### Parameters

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IGoals`](../../../../interfaces/models/interfaces/IGoals.md)[]\>

***

### readAllUserGameMetric()

> **readAllUserGameMetric**(`userId`, `session?`): `Promise`\<[`IUserGameMetric`](../../../../interfaces/models/interfaces/IUserGameMetric.md)[]\>

Defined in: [shared/database/interfaces/IGamifyEngineRepository.ts:120](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyEngineRepository.ts#L120)

#### Parameters

##### userId

`string` | `ObjectId`

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IUserGameMetric`](../../../../interfaces/models/interfaces/IUserGameMetric.md)[]\>

***

### readGameMetric()

> **readGameMetric**(`gameMetricId`, `bySlug`, `session?`): `Promise`\<[`IGameMetric`](../../../../interfaces/models/interfaces/IGameMetric.md)\>

Defined in: [shared/database/interfaces/IGamifyEngineRepository.ts:30](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyEngineRepository.ts#L30)

#### Parameters

##### gameMetricId

`string` | `ObjectId`

##### bySlug

`boolean`

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IGameMetric`](../../../../interfaces/models/interfaces/IGameMetric.md)\>

***

### readGoal()

> **readGoal**(`goalsId`, `bySlug`, `session?`): `Promise`\<[`IGoals`](../../../../interfaces/models/interfaces/IGoals.md)\>

Defined in: [shared/database/interfaces/IGamifyEngineRepository.ts:191](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyEngineRepository.ts#L191)

#### Parameters

##### goalsId

`string` | `ObjectId`

##### bySlug

`boolean`

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IGoals`](../../../../interfaces/models/interfaces/IGoals.md)\>

***

### readUserGameAchievements()

> **readUserGameAchievements**(`userId`, `session?`): `Promise`\<[`IUserGameAchievement`](../../../../interfaces/models/interfaces/IUserGameAchievement.md)\>

Defined in: [shared/database/interfaces/IGamifyEngineRepository.ts:159](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyEngineRepository.ts#L159)

#### Parameters

##### userId

`string` | `ObjectId`

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IUserGameAchievement`](../../../../interfaces/models/interfaces/IUserGameAchievement.md)\>

***

### readUserGameMetric()

> **readUserGameMetric**(`userId`, `gameMetricId`, `session?`): `Promise`\<[`IUserGameMetric`](../../../../interfaces/models/interfaces/IUserGameMetric.md)\>

Defined in: [shared/database/interfaces/IGamifyEngineRepository.ts:126](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyEngineRepository.ts#L126)

#### Parameters

##### userId

`string` | `ObjectId`

##### gameMetricId

`string` | `ObjectId`

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IUserGameMetric`](../../../../interfaces/models/interfaces/IUserGameMetric.md)\>

***

### updateAchievement()

> **updateAchievement**(`achievementId`, `achievement`, `bySlug`, `session?`): `Promise`\<`UpdateResult`\<`Document`\>\>

Defined in: [shared/database/interfaces/IGamifyEngineRepository.ts:87](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyEngineRepository.ts#L87)

#### Parameters

##### achievementId

`string` | `ObjectId`

##### achievement

`Partial`\<[`IMetricAchievement`](../../../../interfaces/models/interfaces/IMetricAchievement.md)\>

##### bySlug

`boolean`

##### session?

`ClientSession`

#### Returns

`Promise`\<`UpdateResult`\<`Document`\>\>

***

### updateAchievementInGoals()

> **updateAchievementInGoals**(`achievementId`, `currentGoalIds`, `newGoalIds`, `session?`): `Promise`\<`boolean`\>

Defined in: [shared/database/interfaces/IGamifyEngineRepository.ts:67](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyEngineRepository.ts#L67)

#### Parameters

##### achievementId

`string` | `ObjectId`

##### currentGoalIds

[`ID`](../../../../interfaces/models/type-aliases/ID.md)[]

##### newGoalIds

[`ID`](../../../../interfaces/models/type-aliases/ID.md)[]

##### session?

`ClientSession`

#### Returns

`Promise`\<`boolean`\>

***

### updateGameMetric()

> **updateGameMetric**(`gameMetricId`, `gameMetric`, `bySlug`, `session?`): `Promise`\<`UpdateResult`\<`Document`\>\>

Defined in: [shared/database/interfaces/IGamifyEngineRepository.ts:40](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyEngineRepository.ts#L40)

#### Parameters

##### gameMetricId

`string` | `ObjectId`

##### gameMetric

`Partial`\<[`IGameMetric`](../../../../interfaces/models/interfaces/IGameMetric.md)\>

##### bySlug

`boolean`

##### session?

`ClientSession`

#### Returns

`Promise`\<`UpdateResult`\<`Document`\>\>

***

### updateGoals()

> **updateGoals**(`goalsId`, `goals`, `bySlug`, `session?`): `Promise`\<`UpdateResult`\<`Document`\>\>

Defined in: [shared/database/interfaces/IGamifyEngineRepository.ts:201](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyEngineRepository.ts#L201)

#### Parameters

##### goalsId

`string` | `ObjectId`

##### goals

`Partial`\<[`IGoals`](../../../../interfaces/models/interfaces/IGoals.md)\>

##### bySlug

`boolean`

##### session?

`ClientSession`

#### Returns

`Promise`\<`UpdateResult`\<`Document`\>\>

***

### UpdateUserGameAchievements()

> **UpdateUserGameAchievements**(`achievements`, `session?`): `Promise`\<`UpdateResult`\<`Document`\>\>

Defined in: [shared/database/interfaces/IGamifyEngineRepository.ts:165](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyEngineRepository.ts#L165)

#### Parameters

##### achievements

[`IUserGameAchievement`](../../../../interfaces/models/interfaces/IUserGameAchievement.md)

##### session?

`ClientSession`

#### Returns

`Promise`\<`UpdateResult`\<`Document`\>\>

***

### updateUserGameMetric()

> **updateUserGameMetric**(`userId`, `gameMetricId`, `UserGameMetric`, `session?`): `Promise`\<`UpdateResult`\<`Document`\>\>

Defined in: [shared/database/interfaces/IGamifyEngineRepository.ts:133](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/interfaces/IGamifyEngineRepository.ts#L133)

#### Parameters

##### userId

`string` | `ObjectId`

##### gameMetricId

`string` | `ObjectId`

##### UserGameMetric

`Partial`\<[`IUserGameMetric`](../../../../interfaces/models/interfaces/IUserGameMetric.md)\>

##### session?

`ClientSession`

#### Returns

`Promise`\<`UpdateResult`\<`Document`\>\>
