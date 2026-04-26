[**vitest-vibe**](../../../../../README.md)

***

[vitest-vibe](../../../../../README.md) / [modules/gamification/services/MetricTriggerService](../README.md) / metricTriggerService

# Class: metricTriggerService

Defined in: [modules/gamification/services/MetricTriggerService.ts:18](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/MetricTriggerService.ts#L18)

MetricTriggerService - handles the core gamification engine logic
Processes metric updates and determines which achievements to unlock

## Extends

- [`BaseService`](../../../../../shared/classes/BaseService/classes/BaseService.md)

## Constructors

### Constructor

> **new metricTriggerService**(`gamifyEngineRepo`, `mongoDatabase`): `metricTriggerService`

Defined in: [modules/gamification/services/MetricTriggerService.ts:19](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/MetricTriggerService.ts#L19)

#### Parameters

##### gamifyEngineRepo

[`IGamifyEngineRepository`](../../../../../shared/database/interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md)

##### mongoDatabase

[`MongoDatabase`](../../../../../shared/database/providers/mongo/MongoDatabase/classes/MongoDatabase.md)

#### Returns

`metricTriggerService`

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

### metricTrigger()

> **metricTrigger**(`body`): `Promise`\<[`MetricTriggerResponse`](../../../classes/transformers/MetricTrigger/classes/MetricTriggerResponse.md)\>

Defined in: [modules/gamification/services/MetricTriggerService.ts:35](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/MetricTriggerService.ts#L35)

Triggers the gamification engine to process metric updates
Updates user metrics and unlocks any qualifying achievements

#### Parameters

##### body

[`MetricTrigger`](../../../classes/transformers/MetricTrigger/classes/MetricTrigger.md)

The metric trigger request containing user ID and metrics to update

#### Returns

`Promise`\<[`MetricTriggerResponse`](../../../classes/transformers/MetricTrigger/classes/MetricTriggerResponse.md)\>

Promise resolving to response with updated metrics and unlocked achievements
