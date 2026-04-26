[**vitest-vibe**](../../../../../../../README.md)

***

[vitest-vibe](../../../../../../../README.md) / [shared/database/providers/mongo/repositories/GamifyEngineRepository](../README.md) / GamifyEngineRepository

# Class: GamifyEngineRepository

Defined in: [shared/database/providers/mongo/repositories/GamifyEngineRepository.ts:40](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyEngineRepository.ts#L40)

Implementation of the Gamify Engine Repository for MongoDB.
Handles operations related to game metrics and achievements.

## Implements

- [`IGamifyEngineRepository`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md)

## Constructors

### Constructor

> **new GamifyEngineRepository**(`db`): `GamifyEngineRepository`

Defined in: [shared/database/providers/mongo/repositories/GamifyEngineRepository.ts:49](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyEngineRepository.ts#L49)

#### Parameters

##### db

[`MongoDatabase`](../../../MongoDatabase/classes/MongoDatabase.md)

#### Returns

`GamifyEngineRepository`

## Methods

### addAchievementToGoals()

> **addAchievementToGoals**(`achievementId`, `goalIds`, `session?`): `Promise`\<`boolean`\>

Defined in: [shared/database/providers/mongo/repositories/GamifyEngineRepository.ts:831](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyEngineRepository.ts#L831)

#### Parameters

##### achievementId

`string` | `ObjectId`

##### goalIds

[`ID`](../../../../../../interfaces/models/type-aliases/ID.md)[]

##### session?

`ClientSession`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IGamifyEngineRepository`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md).[`addAchievementToGoals`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md#addachievementtogoals)

***

### createAchievement()

> **createAchievement**(`achievement`, `session?`): `Promise`\<[`IMetricAchievement`](../../../../../../interfaces/models/interfaces/IMetricAchievement.md)\>

Defined in: [shared/database/providers/mongo/repositories/GamifyEngineRepository.ts:319](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyEngineRepository.ts#L319)

#### Parameters

##### achievement

[`MetricAchievement`](../../../../../../../modules/gamification/classes/transformers/MetricAchievement/classes/MetricAchievement.md)

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IMetricAchievement`](../../../../../../interfaces/models/interfaces/IMetricAchievement.md)\>

#### Implementation of

[`IGamifyEngineRepository`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md).[`createAchievement`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md#createachievement)

***

### createGameMetric()

> **createGameMetric**(`gameMetric`, `session?`): `Promise`\<[`IGameMetric`](../../../../../../interfaces/models/interfaces/IGameMetric.md)\>

Defined in: [shared/database/providers/mongo/repositories/GamifyEngineRepository.ts:198](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyEngineRepository.ts#L198)

#### Parameters

##### gameMetric

[`IGameMetric`](../../../../../../interfaces/models/interfaces/IGameMetric.md)

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IGameMetric`](../../../../../../interfaces/models/interfaces/IGameMetric.md)\>

#### Implementation of

[`IGamifyEngineRepository`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md).[`createGameMetric`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md#creategamemetric)

***

### createGoals()

> **createGoals**(`goals`, `session?`): `Promise`\<[`IGoals`](../../../../../../interfaces/models/interfaces/IGoals.md)\>

Defined in: [shared/database/providers/mongo/repositories/GamifyEngineRepository.ts:743](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyEngineRepository.ts#L743)

#### Parameters

##### goals

[`IGoals`](../../../../../../interfaces/models/interfaces/IGoals.md)

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IGoals`](../../../../../../interfaces/models/interfaces/IGoals.md)\>

#### Implementation of

[`IGamifyEngineRepository`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md).[`createGoals`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md#creategoals)

***

### createUserGameAchievement()

> **createUserGameAchievement**(`userGameAchievement`, `session?`): `Promise`\<[`IUserGameAchievement`](../../../../../../interfaces/models/interfaces/IUserGameAchievement.md)\>

Defined in: [shared/database/providers/mongo/repositories/GamifyEngineRepository.ts:649](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyEngineRepository.ts#L649)

#### Parameters

##### userGameAchievement

[`IUserGameAchievement`](../../../../../../interfaces/models/interfaces/IUserGameAchievement.md)

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IUserGameAchievement`](../../../../../../interfaces/models/interfaces/IUserGameAchievement.md)\>

#### Implementation of

[`IGamifyEngineRepository`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md).[`createUserGameAchievement`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md#createusergameachievement)

***

### createUserGameMetric()

> **createUserGameMetric**(`userGameMetric`, `session?`): `Promise`\<[`IUserGameMetric`](../../../../../../interfaces/models/interfaces/IUserGameMetric.md)\>

Defined in: [shared/database/providers/mongo/repositories/GamifyEngineRepository.ts:504](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyEngineRepository.ts#L504)

#### Parameters

##### userGameMetric

[`IUserGameMetric`](../../../../../../interfaces/models/interfaces/IUserGameMetric.md)

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IUserGameMetric`](../../../../../../interfaces/models/interfaces/IUserGameMetric.md)\>

#### Implementation of

[`IGamifyEngineRepository`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md).[`createUserGameMetric`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md#createusergamemetric)

***

### createUserGameMetrics()

> **createUserGameMetrics**(`userGameMetrics`, `session?`): `Promise`\<[`IUserGameMetric`](../../../../../../interfaces/models/interfaces/IUserGameMetric.md)[]\>

Defined in: [shared/database/providers/mongo/repositories/GamifyEngineRepository.ts:524](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyEngineRepository.ts#L524)

#### Parameters

##### userGameMetrics

[`IUserGameMetric`](../../../../../../interfaces/models/interfaces/IUserGameMetric.md)[]

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IUserGameMetric`](../../../../../../interfaces/models/interfaces/IUserGameMetric.md)[]\>

#### Implementation of

[`IGamifyEngineRepository`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md).[`createUserGameMetrics`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md#createusergamemetrics)

***

### deleteAchievement()

> **deleteAchievement**(`achievementId`, `bySlug`, `session?`): `Promise`\<`UpdateResult`\<`Document`\>\>

Defined in: [shared/database/providers/mongo/repositories/GamifyEngineRepository.ts:451](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyEngineRepository.ts#L451)

#### Parameters

##### achievementId

`ObjectId`

##### bySlug

`boolean`

##### session?

`ClientSession`

#### Returns

`Promise`\<`UpdateResult`\<`Document`\>\>

#### Implementation of

[`IGamifyEngineRepository`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md).[`deleteAchievement`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md#deleteachievement)

***

### deleteAchievementByMetricId()

> **deleteAchievementByMetricId**(`metricId`, `session?`): `Promise`\<`UpdateResult`\<`Document`\>\>

Defined in: [shared/database/providers/mongo/repositories/GamifyEngineRepository.ts:483](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyEngineRepository.ts#L483)

#### Parameters

##### metricId

`string` | `ObjectId`

##### session?

`ClientSession`

#### Returns

`Promise`\<`UpdateResult`\<`Document`\>\>

#### Implementation of

[`IGamifyEngineRepository`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md).[`deleteAchievementByMetricId`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md#deleteachievementbymetricid)

***

### deleteGameMetric()

> **deleteGameMetric**(`gameMetricId`, `bySlug`, `session?`): `Promise`\<`DeleteResult`\>

Defined in: [shared/database/providers/mongo/repositories/GamifyEngineRepository.ts:290](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyEngineRepository.ts#L290)

#### Parameters

##### gameMetricId

`string`

##### bySlug

`boolean`

##### session?

`ClientSession`

#### Returns

`Promise`\<`DeleteResult`\>

#### Implementation of

[`IGamifyEngineRepository`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md).[`deleteGameMetric`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md#deletegamemetric)

***

### deleteGoals()

> **deleteGoals**(`goalsId`, `bySlug`, `session?`): `Promise`\<`DeleteResult`\>

Defined in: [shared/database/providers/mongo/repositories/GamifyEngineRepository.ts:812](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyEngineRepository.ts#L812)

#### Parameters

##### goalsId

`string` | `ObjectId`

##### bySlug

`boolean`

##### session?

`ClientSession`

#### Returns

`Promise`\<`DeleteResult`\>

#### Implementation of

[`IGamifyEngineRepository`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md).[`deleteGoals`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md#deletegoals)

***

### deleteUserGameAchievement()

> **deleteUserGameAchievement**(`userId`, `achievementId`, `session?`): `Promise`\<`UpdateResult`\<`Document`\>\>

Defined in: [shared/database/providers/mongo/repositories/GamifyEngineRepository.ts:715](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyEngineRepository.ts#L715)

#### Parameters

##### userId

`ObjectId`

##### achievementId

`ObjectId`

##### session?

`ClientSession`

#### Returns

`Promise`\<`UpdateResult`\<`Document`\>\>

#### Implementation of

[`IGamifyEngineRepository`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md).[`deleteUserGameAchievement`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md#deleteusergameachievement)

***

### deleteUserGameMetric()

> **deleteUserGameMetric**(`userId`, `gameMetricId`, `session?`): `Promise`\<`DeleteResult`\>

Defined in: [shared/database/providers/mongo/repositories/GamifyEngineRepository.ts:612](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyEngineRepository.ts#L612)

#### Parameters

##### userId

`ObjectId`

##### gameMetricId

`ObjectId`

##### session?

`ClientSession`

#### Returns

`Promise`\<`DeleteResult`\>

#### Implementation of

[`IGamifyEngineRepository`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md).[`deleteUserGameMetric`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md#deleteusergamemetric)

***

### deleteUserGameMetricById()

> **deleteUserGameMetricById**(`metricId`, `session?`): `Promise`\<`DeleteResult`\>

Defined in: [shared/database/providers/mongo/repositories/GamifyEngineRepository.ts:630](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyEngineRepository.ts#L630)

#### Parameters

##### metricId

`ObjectId`

##### session?

`ClientSession`

#### Returns

`Promise`\<`DeleteResult`\>

#### Implementation of

[`IGamifyEngineRepository`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md).[`deleteUserGameMetricById`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md#deleteusergamemetricbyid)

***

### metricTrigger()

> **metricTrigger**(`metricTriggers`, `session?`): `Promise`\<\{ `achievementsUnlocked`: `Document`[]; `metricsUpdated`: [`IUserGameMetric`](../../../../../../interfaces/models/interfaces/IUserGameMetric.md)[]; \}\>

Defined in: [shared/database/providers/mongo/repositories/GamifyEngineRepository.ts:852](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyEngineRepository.ts#L852)

#### Parameters

##### metricTriggers

[`IMetricTrigger`](../../../../../../interfaces/models/interfaces/IMetricTrigger.md)

##### session?

`ClientSession`

#### Returns

`Promise`\<\{ `achievementsUnlocked`: `Document`[]; `metricsUpdated`: [`IUserGameMetric`](../../../../../../interfaces/models/interfaces/IUserGameMetric.md)[]; \}\>

#### Implementation of

[`IGamifyEngineRepository`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md).[`metricTrigger`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md#metrictrigger)

***

### readAchievement()

> **readAchievement**(`achievementId`, `bySlug`, `session?`): `Promise`\<[`IMetricAchievement`](../../../../../../interfaces/models/interfaces/IMetricAchievement.md)\>

Defined in: [shared/database/providers/mongo/repositories/GamifyEngineRepository.ts:342](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyEngineRepository.ts#L342)

#### Parameters

##### achievementId

`string` | `ObjectId`

##### bySlug

`boolean`

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IMetricAchievement`](../../../../../../interfaces/models/interfaces/IMetricAchievement.md)\>

#### Implementation of

[`IGamifyEngineRepository`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md).[`readAchievement`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md#readachievement)

***

### readAllAchievements()

> **readAllAchievements**(`session?`): `Promise`\<[`IMetricAchievement`](../../../../../../interfaces/models/interfaces/IMetricAchievement.md)[]\>

Defined in: [shared/database/providers/mongo/repositories/GamifyEngineRepository.ts:369](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyEngineRepository.ts#L369)

#### Parameters

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IMetricAchievement`](../../../../../../interfaces/models/interfaces/IMetricAchievement.md)[]\>

#### Implementation of

[`IGamifyEngineRepository`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md).[`readAllAchievements`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md#readallachievements)

***

### readAllGameMetrics()

> **readAllGameMetrics**(`session?`): `Promise`\<[`IGameMetric`](../../../../../../interfaces/models/interfaces/IGameMetric.md)[]\>

Defined in: [shared/database/providers/mongo/repositories/GamifyEngineRepository.ts:245](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyEngineRepository.ts#L245)

#### Parameters

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IGameMetric`](../../../../../../interfaces/models/interfaces/IGameMetric.md)[]\>

#### Implementation of

[`IGamifyEngineRepository`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md).[`readAllGameMetrics`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md#readallgamemetrics)

***

### readAllGoals()

> **readAllGoals**(`session?`): `Promise`\<[`IGoals`](../../../../../../interfaces/models/interfaces/IGoals.md)[]\>

Defined in: [shared/database/providers/mongo/repositories/GamifyEngineRepository.ts:777](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyEngineRepository.ts#L777)

#### Parameters

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IGoals`](../../../../../../interfaces/models/interfaces/IGoals.md)[]\>

#### Implementation of

[`IGamifyEngineRepository`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md).[`readAllGoals`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md#readallgoals)

***

### readAllUserGameMetric()

> **readAllUserGameMetric**(`userId`, `session?`): `Promise`\<[`IUserGameMetric`](../../../../../../interfaces/models/interfaces/IUserGameMetric.md)[]\>

Defined in: [shared/database/providers/mongo/repositories/GamifyEngineRepository.ts:559](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyEngineRepository.ts#L559)

#### Parameters

##### userId

`ObjectId`

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IUserGameMetric`](../../../../../../interfaces/models/interfaces/IUserGameMetric.md)[]\>

#### Implementation of

[`IGamifyEngineRepository`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md).[`readAllUserGameMetric`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md#readallusergamemetric)

***

### readGameMetric()

> **readGameMetric**(`gameMetricId`, `bySlug`, `session?`): `Promise`\<[`IGameMetric`](../../../../../../interfaces/models/interfaces/IGameMetric.md)\>

Defined in: [shared/database/providers/mongo/repositories/GamifyEngineRepository.ts:219](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyEngineRepository.ts#L219)

#### Parameters

##### gameMetricId

`string` | `ObjectId`

##### bySlug

`boolean`

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IGameMetric`](../../../../../../interfaces/models/interfaces/IGameMetric.md)\>

#### Implementation of

[`IGamifyEngineRepository`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md).[`readGameMetric`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md#readgamemetric)

***

### readGoal()

> **readGoal**(`goalsId`, `bySlug`, `session?`): `Promise`\<[`IGoals`](../../../../../../interfaces/models/interfaces/IGoals.md)\>

Defined in: [shared/database/providers/mongo/repositories/GamifyEngineRepository.ts:762](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyEngineRepository.ts#L762)

#### Parameters

##### goalsId

`string` | `ObjectId`

##### bySlug

`boolean`

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IGoals`](../../../../../../interfaces/models/interfaces/IGoals.md)\>

#### Implementation of

[`IGamifyEngineRepository`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md).[`readGoal`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md#readgoal)

***

### readUserGameAchievements()

> **readUserGameAchievements**(`userId`, `session?`): `Promise`\<[`IUserGameAchievement`](../../../../../../interfaces/models/interfaces/IUserGameAchievement.md)\>

Defined in: [shared/database/providers/mongo/repositories/GamifyEngineRepository.ts:674](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyEngineRepository.ts#L674)

#### Parameters

##### userId

`ObjectId`

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IUserGameAchievement`](../../../../../../interfaces/models/interfaces/IUserGameAchievement.md)\>

#### Implementation of

[`IGamifyEngineRepository`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md).[`readUserGameAchievements`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md#readusergameachievements)

***

### readUserGameMetric()

> **readUserGameMetric**(`userId`, `gameMetricId`, `session?`): `Promise`\<[`IUserGameMetric`](../../../../../../interfaces/models/interfaces/IUserGameMetric.md)\>

Defined in: [shared/database/providers/mongo/repositories/GamifyEngineRepository.ts:575](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyEngineRepository.ts#L575)

#### Parameters

##### userId

`ObjectId`

##### gameMetricId

`ObjectId`

##### session?

`ClientSession`

#### Returns

`Promise`\<[`IUserGameMetric`](../../../../../../interfaces/models/interfaces/IUserGameMetric.md)\>

#### Implementation of

[`IGamifyEngineRepository`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md).[`readUserGameMetric`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md#readusergamemetric)

***

### updateAchievement()

> **updateAchievement**(`achievementId`, `achievement`, `bySlug`, `session?`): `Promise`\<`UpdateResult`\<`Document`\>\>

Defined in: [shared/database/providers/mongo/repositories/GamifyEngineRepository.ts:384](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyEngineRepository.ts#L384)

#### Parameters

##### achievementId

`ObjectId`

##### achievement

`Partial`\<[`IMetricAchievement`](../../../../../../interfaces/models/interfaces/IMetricAchievement.md)\>

##### bySlug

`boolean`

##### session?

`ClientSession`

#### Returns

`Promise`\<`UpdateResult`\<`Document`\>\>

#### Implementation of

[`IGamifyEngineRepository`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md).[`updateAchievement`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md#updateachievement)

***

### updateAchievementInGoals()

> **updateAchievementInGoals**(`achievementId`, `currentGoalIds`, `newGoalIds`, `session?`): `Promise`\<`boolean`\>

Defined in: [shared/database/providers/mongo/repositories/GamifyEngineRepository.ts:414](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyEngineRepository.ts#L414)

#### Parameters

##### achievementId

`string` | `ObjectId`

##### currentGoalIds

[`ID`](../../../../../../interfaces/models/type-aliases/ID.md)[]

##### newGoalIds

[`ID`](../../../../../../interfaces/models/type-aliases/ID.md)[]

##### session?

`ClientSession`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IGamifyEngineRepository`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md).[`updateAchievementInGoals`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md#updateachievementingoals)

***

### updateGameMetric()

> **updateGameMetric**(`gameMetricId`, `gameMetric`, `bySlug`, `session?`): `Promise`\<`UpdateResult`\<`Document`\>\>

Defined in: [shared/database/providers/mongo/repositories/GamifyEngineRepository.ts:258](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyEngineRepository.ts#L258)

#### Parameters

##### gameMetricId

`string` | `ObjectId`

##### gameMetric

[`IUpdateGameMetric`](../../../../../../interfaces/models/interfaces/IUpdateGameMetric.md)

##### bySlug

`boolean`

##### session?

`ClientSession`

#### Returns

`Promise`\<`UpdateResult`\<`Document`\>\>

#### Implementation of

[`IGamifyEngineRepository`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md).[`updateGameMetric`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md#updategamemetric)

***

### updateGoals()

> **updateGoals**(`goalsId`, `goals`, `bySlug`, `session?`): `Promise`\<`UpdateResult`\<`Document`\>\>

Defined in: [shared/database/providers/mongo/repositories/GamifyEngineRepository.ts:784](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyEngineRepository.ts#L784)

#### Parameters

##### goalsId

`string` | `ObjectId`

##### goals

`Partial`\<[`IGoals`](../../../../../../interfaces/models/interfaces/IGoals.md)\>

##### bySlug

`boolean`

##### session?

`ClientSession`

#### Returns

`Promise`\<`UpdateResult`\<`Document`\>\>

#### Implementation of

[`IGamifyEngineRepository`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md).[`updateGoals`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md#updategoals)

***

### UpdateUserGameAchievements()

> **UpdateUserGameAchievements**(`achievements`, `session?`): `Promise`\<`UpdateResult`\<`Document`\>\>

Defined in: [shared/database/providers/mongo/repositories/GamifyEngineRepository.ts:693](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyEngineRepository.ts#L693)

#### Parameters

##### achievements

[`IUserGameAchievement`](../../../../../../interfaces/models/interfaces/IUserGameAchievement.md)

##### session?

`ClientSession`

#### Returns

`Promise`\<`UpdateResult`\<`Document`\>\>

#### Implementation of

[`IGamifyEngineRepository`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md).[`UpdateUserGameAchievements`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md#updateusergameachievements)

***

### updateUserGameMetric()

> **updateUserGameMetric**(`userId`, `gameMetricId`, `UserGameMetric`, `session?`): `Promise`\<`UpdateResult`\<`Document`\>\>

Defined in: [shared/database/providers/mongo/repositories/GamifyEngineRepository.ts:593](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/shared/database/providers/mongo/repositories/GamifyEngineRepository.ts#L593)

#### Parameters

##### userId

`ObjectId`

##### gameMetricId

`ObjectId`

##### UserGameMetric

`Partial`\<[`IUserGameMetric`](../../../../../../interfaces/models/interfaces/IUserGameMetric.md)\>

##### session?

`ClientSession`

#### Returns

`Promise`\<`UpdateResult`\<`Document`\>\>

#### Implementation of

[`IGamifyEngineRepository`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md).[`updateUserGameMetric`](../../../../../interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md#updateusergamemetric)
