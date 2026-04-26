[**vitest-vibe**](../../../../../README.md)

***

[vitest-vibe](../../../../../README.md) / [modules/gamification/services/EventService](../README.md) / eventService

# Class: eventService

Defined in: [modules/gamification/services/EventService.ts:23](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/EventService.ts#L23)

## Extends

- [`BaseService`](../../../../../shared/classes/BaseService/classes/BaseService.md)

## Constructors

### Constructor

> **new eventService**(`mongodatabase`, `gamifyLayerRepo`, `metricTriggerService`, `ruleService`): `eventService`

Defined in: [modules/gamification/services/EventService.ts:24](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/EventService.ts#L24)

#### Parameters

##### mongodatabase

[`MongoDatabase`](../../../../../shared/database/providers/mongo/MongoDatabase/classes/MongoDatabase.md)

##### gamifyLayerRepo

[`IGamifyLayerRepository`](../../../../../shared/database/interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md)

##### metricTriggerService

[`metricTriggerService`](../../MetricTriggerService/classes/metricTriggerService.md)

##### ruleService

[`ruleService`](../../RuleService/classes/ruleService.md)

#### Returns

`eventService`

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

### createEvent()

> **createEvent**(`event`): `Promise`\<[`Events`](../../../classes/transformers/Events/classes/Events.md)\>

Defined in: [modules/gamification/services/EventService.ts:37](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/EventService.ts#L37)

#### Parameters

##### event

[`Events`](../../../classes/transformers/Events/classes/Events.md)

#### Returns

`Promise`\<[`Events`](../../../classes/transformers/Events/classes/Events.md)\>

***

### deleteEvent()

> **deleteEvent**(`eventId`): `Promise`\<`boolean`\>

Defined in: [modules/gamification/services/EventService.ts:107](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/EventService.ts#L107)

#### Parameters

##### eventId

`string`

#### Returns

`Promise`\<`boolean`\>

***

### eventTrigger()

> **eventTrigger**(`trigger`): `Promise`\<[`MetricTriggerResponse`](../../../classes/transformers/MetricTrigger/classes/MetricTriggerResponse.md)\>

Defined in: [modules/gamification/services/EventService.ts:138](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/EventService.ts#L138)

#### Parameters

##### trigger

[`EventTrigger`](../../../classes/transformers/EventTrigger/classes/EventTrigger.md)

#### Returns

`Promise`\<[`MetricTriggerResponse`](../../../classes/transformers/MetricTrigger/classes/MetricTriggerResponse.md)\>

***

### readEvent()

> **readEvent**(`eventId`): `Promise`\<[`Events`](../../../classes/transformers/Events/classes/Events.md)\>

Defined in: [modules/gamification/services/EventService.ts:63](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/EventService.ts#L63)

#### Parameters

##### eventId

`string`

#### Returns

`Promise`\<[`Events`](../../../classes/transformers/Events/classes/Events.md)\>

***

### readEvents()

> **readEvents**(): `Promise`\<[`Events`](../../../classes/transformers/Events/classes/Events.md)[]\>

Defined in: [modules/gamification/services/EventService.ts:54](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/EventService.ts#L54)

#### Returns

`Promise`\<[`Events`](../../../classes/transformers/Events/classes/Events.md)[]\>

***

### updateEvent()

> **updateEvent**(`eventId`, `eventInstance`): `Promise`\<`boolean`\>

Defined in: [modules/gamification/services/EventService.ts:78](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/EventService.ts#L78)

#### Parameters

##### eventId

`string`

##### eventInstance

[`UpdateEvents`](../../../classes/transformers/Events/classes/UpdateEvents.md)

#### Returns

`Promise`\<`boolean`\>
