[**vitest-vibe**](../../../../../README.md)

***

[vitest-vibe](../../../../../README.md) / [modules/gamification/services/MetricService](../README.md) / metricService

# Class: metricService

Defined in: [modules/gamification/services/MetricService.ts:19](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/MetricService.ts#L19)

MetricService - handles business logic for game metrics
Manages CRUD operations for trackable metrics in the gamification system

## Extends

- [`BaseService`](../../../../../shared/classes/BaseService/classes/BaseService.md)

## Constructors

### Constructor

> **new metricService**(`gamifyEngineRepo`, `mongoDatabase`): `metricService`

Defined in: [modules/gamification/services/MetricService.ts:20](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/MetricService.ts#L20)

#### Parameters

##### gamifyEngineRepo

[`IGamifyEngineRepository`](../../../../../shared/database/interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md)

##### mongoDatabase

[`MongoDatabase`](../../../../../shared/database/providers/mongo/MongoDatabase/classes/MongoDatabase.md)

#### Returns

`metricService`

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

### createGameMetric()

> **createGameMetric**(`gameMetric`): `Promise`\<[`GameMetric`](../../../classes/transformers/GameMetric/classes/GameMetric.md)\>

Defined in: [modules/gamification/services/MetricService.ts:35](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/MetricService.ts#L35)

Creates a new game metric

#### Parameters

##### gameMetric

[`GameMetric`](../../../classes/transformers/GameMetric/classes/GameMetric.md)

The game metric to create

#### Returns

`Promise`\<[`GameMetric`](../../../classes/transformers/GameMetric/classes/GameMetric.md)\>

Promise resolving to the created metric

***

### deleteGameMetric()

> **deleteGameMetric**(`id`): `Promise`\<`boolean`\>

Defined in: [modules/gamification/services/MetricService.ts:131](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/MetricService.ts#L131)

Deletes a game metric by its ID

#### Parameters

##### id

`string`

The ID of the metric to delete

#### Returns

`Promise`\<`boolean`\>

Promise resolving to boolean indicating success

***

### getGameMetricById()

> **getGameMetricById**(`id`): `Promise`\<[`GameMetric`](../../../classes/transformers/GameMetric/classes/GameMetric.md)\>

Defined in: [modules/gamification/services/MetricService.ts:53](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/MetricService.ts#L53)

Retrieves a game metric by its ID

#### Parameters

##### id

`string`

The ID of the metric to retrieve

#### Returns

`Promise`\<[`GameMetric`](../../../classes/transformers/GameMetric/classes/GameMetric.md)\>

Promise resolving to the metric or throws NotFoundError

***

### getGameMetrics()

> **getGameMetrics**(): `Promise`\<[`GameMetric`](../../../classes/transformers/GameMetric/classes/GameMetric.md)[]\>

Defined in: [modules/gamification/services/MetricService.ts:79](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/MetricService.ts#L79)

Retrieves all game metrics

#### Returns

`Promise`\<[`GameMetric`](../../../classes/transformers/GameMetric/classes/GameMetric.md)[]\>

Promise resolving to array of all metrics

***

### updateGameMetric()

> **updateGameMetric**(`id`, `gameMetric`): `Promise`\<`boolean`\>

Defined in: [modules/gamification/services/MetricService.ts:93](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/MetricService.ts#L93)

Updates an existing game metric

#### Parameters

##### id

`string`

The ID of the metric to update

##### gameMetric

[`IUpdateGameMetric`](../../../../../shared/interfaces/models/interfaces/IUpdateGameMetric.md)

Partial metric data to update

#### Returns

`Promise`\<`boolean`\>

Promise resolving to boolean indicating success
