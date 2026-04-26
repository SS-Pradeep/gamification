[**vitest-vibe**](../../../../../README.md)

***

[vitest-vibe](../../../../../README.md) / [modules/gamification/services/AchievementService](../README.md) / achievementService

# Class: achievementService

Defined in: [modules/gamification/services/AchievementService.ts:21](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/AchievementService.ts#L21)

AchievementService - handles business logic for achievements
Manages CRUD operations for achievements that users can unlock

## Extends

- [`BaseService`](../../../../../shared/classes/BaseService/classes/BaseService.md)

## Constructors

### Constructor

> **new achievementService**(`gamifyEngineRepo`, `mongoDatabase`): `achievementService`

Defined in: [modules/gamification/services/AchievementService.ts:22](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/AchievementService.ts#L22)

#### Parameters

##### gamifyEngineRepo

[`IGamifyEngineRepository`](../../../../../shared/database/interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md)

##### mongoDatabase

[`MongoDatabase`](../../../../../shared/database/providers/mongo/MongoDatabase/classes/MongoDatabase.md)

#### Returns

`achievementService`

#### Overrides

[`BaseService`](../../../../../shared/classes/BaseService/classes/BaseService.md).[`constructor`](../../../../../shared/classes/BaseService/classes/BaseService.md#constructor)

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

#### Inherited from

[`BaseService`](../../../../../shared/classes/BaseService/classes/BaseService.md).[`_withTransaction`](../../../../../shared/classes/BaseService/classes/BaseService.md#_withtransaction)

***

### createAchievement()

> **createAchievement**(`achievement`): `Promise`\<[`MetricAchievement`](../../../classes/transformers/MetricAchievement/classes/MetricAchievement.md)\>

Defined in: [modules/gamification/services/AchievementService.ts:38](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/AchievementService.ts#L38)

Creates a new achievement
Validates that the referenced metric exists before creating

#### Parameters

##### achievement

[`MetricAchievement`](../../../classes/transformers/MetricAchievement/classes/MetricAchievement.md)

The achievement to create

#### Returns

`Promise`\<[`MetricAchievement`](../../../classes/transformers/MetricAchievement/classes/MetricAchievement.md)\>

Promise resolving to the created achievement

***

### deleteAchievement()

> **deleteAchievement**(`id`): `Promise`\<`boolean`\>

Defined in: [modules/gamification/services/AchievementService.ts:224](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/AchievementService.ts#L224)

Deletes an achievement by its ID

#### Parameters

##### id

`string`

The ID of the achievement to delete

#### Returns

`Promise`\<`boolean`\>

Promise resolving to boolean indicating success

***

### getAchievementById()

> **getAchievementById**(`id`): `Promise`\<[`MetricAchievement`](../../../classes/transformers/MetricAchievement/classes/MetricAchievement.md)\>

Defined in: [modules/gamification/services/AchievementService.ts:117](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/AchievementService.ts#L117)

Retrieves an achievement by its ID

#### Parameters

##### id

`string`

The ID of the achievement to retrieve

#### Returns

`Promise`\<[`MetricAchievement`](../../../classes/transformers/MetricAchievement/classes/MetricAchievement.md)\>

Promise resolving to the achievement or throws NotFoundError

***

### getAchievements()

> **getAchievements**(): `Promise`\<[`MetricAchievement`](../../../classes/transformers/MetricAchievement/classes/MetricAchievement.md)[]\>

Defined in: [modules/gamification/services/AchievementService.ts:102](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/AchievementService.ts#L102)

Retrieves all achievements

#### Returns

`Promise`\<[`MetricAchievement`](../../../classes/transformers/MetricAchievement/classes/MetricAchievement.md)[]\>

Promise resolving to array of all achievements

***

### updateAchievement()

> **updateAchievement**(`id`, `achievement`): `Promise`\<`boolean`\>

Defined in: [modules/gamification/services/AchievementService.ts:152](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/AchievementService.ts#L152)

Updates an existing achievement
Validates that the referenced metric exists before updating

#### Parameters

##### id

`string`

The ID of the achievement to update

##### achievement

[`UpdateMetricAchievement`](../../../classes/transformers/MetricAchievement/classes/UpdateMetricAchievement.md)

The achievement data to update

#### Returns

`Promise`\<`boolean`\>

Promise resolving to boolean indicating success
