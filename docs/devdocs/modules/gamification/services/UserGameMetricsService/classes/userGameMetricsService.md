[**vitest-vibe**](../../../../../README.md)

***

[vitest-vibe](../../../../../README.md) / [modules/gamification/services/UserGameMetricsService](../README.md) / userGameMetricsService

# Class: userGameMetricsService

Defined in: [modules/gamification/services/UserGameMetricsService.ts:19](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/UserGameMetricsService.ts#L19)

userGameMetricsService - handles business logic for user game metrics
Manages user progress tracking on individual metrics

## Extends

- [`BaseService`](../../../../../shared/classes/BaseService/classes/BaseService.md)

## Constructors

### Constructor

> **new userGameMetricsService**(`gamifyEngineRepo`, `mongoDatabase`): `userGameMetricsService`

Defined in: [modules/gamification/services/UserGameMetricsService.ts:20](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/UserGameMetricsService.ts#L20)

#### Parameters

##### gamifyEngineRepo

[`IGamifyEngineRepository`](../../../../../shared/database/interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md)

##### mongoDatabase

[`MongoDatabase`](../../../../../shared/database/providers/mongo/MongoDatabase/classes/MongoDatabase.md)

#### Returns

`userGameMetricsService`

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

### createUserGameMetric()

> **createUserGameMetric**(`userGameMetric`): `Promise`\<[`UserGameMetric`](../../../classes/transformers/UserGameMetric/classes/UserGameMetric.md)\>

Defined in: [modules/gamification/services/UserGameMetricsService.ts:36](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/UserGameMetricsService.ts#L36)

Creates a new user game metric
Validates that the metric exists and no duplicate exists for the user

#### Parameters

##### userGameMetric

[`UserGameMetric`](../../../classes/transformers/UserGameMetric/classes/UserGameMetric.md)

The user game metric to create

#### Returns

`Promise`\<[`UserGameMetric`](../../../classes/transformers/UserGameMetric/classes/UserGameMetric.md)\>

Promise resolving to the created user metric

***

### deleteUserGameMetric()

> **deleteUserGameMetric**(`userId`, `metricId`): `Promise`\<`boolean`\>

Defined in: [modules/gamification/services/UserGameMetricsService.ts:190](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/UserGameMetricsService.ts#L190)

Deletes a user's game metric

#### Parameters

##### userId

`string`

The ID of the user

##### metricId

`string`

The ID of the metric

#### Returns

`Promise`\<`boolean`\>

Promise resolving to boolean indicating success

***

### readUserGameMetrics()

> **readUserGameMetrics**(`userId`): `Promise`\<[`UserGameMetric`](../../../classes/transformers/UserGameMetric/classes/UserGameMetric.md)[]\>

Defined in: [modules/gamification/services/UserGameMetricsService.ts:87](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/UserGameMetricsService.ts#L87)

Retrieves all game metrics for a specific user

#### Parameters

##### userId

`string`

The ID of the user whose metrics to retrieve

#### Returns

`Promise`\<[`UserGameMetric`](../../../classes/transformers/UserGameMetric/classes/UserGameMetric.md)[]\>

Promise resolving to array of user game metrics

***

### updateUserGameMetric()

> **updateUserGameMetric**(`userGameMetric`): `Promise`\<`boolean`\>

Defined in: [modules/gamification/services/UserGameMetricsService.ts:147](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/UserGameMetricsService.ts#L147)

Updates a user's game metric progress
Validates that the metric exists before updating

#### Parameters

##### userGameMetric

`Partial`\<[`UserGameMetric`](../../../classes/transformers/UserGameMetric/classes/UserGameMetric.md)\>

Partial user game metric data to update

#### Returns

`Promise`\<`boolean`\>

Promise resolving to boolean indicating success
