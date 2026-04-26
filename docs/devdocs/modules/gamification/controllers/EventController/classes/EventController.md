[**vitest-vibe**](../../../../../README.md)

***

[vitest-vibe](../../../../../README.md) / [modules/gamification/controllers/EventController](../README.md) / EventController

# Class: EventController

Defined in: [modules/gamification/controllers/EventController.ts:33](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/EventController.ts#L33)

## Constructors

### Constructor

> **new EventController**(`eventService`): `EventController`

Defined in: [modules/gamification/controllers/EventController.ts:34](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/EventController.ts#L34)

#### Parameters

##### eventService

[`eventService`](../../../services/EventService/classes/eventService.md)

#### Returns

`EventController`

## Methods

### createEvent()

> **createEvent**(`event`): `Promise`\<[`Events`](../../../classes/transformers/Events/classes/Events.md)\>

Defined in: [modules/gamification/controllers/EventController.ts:42](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/EventController.ts#L42)

#### Parameters

##### event

[`EventsBody`](../../../classes/validators/GamifyLayerValidators/classes/EventsBody.md)

#### Returns

`Promise`\<[`Events`](../../../classes/transformers/Events/classes/Events.md)\>

***

### deleteEvent()

> **deleteEvent**(`params`): `Promise`\<\{ `status`: `boolean`; \}\>

Defined in: [modules/gamification/controllers/EventController.ts:90](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/EventController.ts#L90)

#### Parameters

##### params

[`ReadEventParams`](../../../classes/validators/GamifyLayerValidators/classes/ReadEventParams.md)

#### Returns

`Promise`\<\{ `status`: `boolean`; \}\>

***

### readEvent()

> **readEvent**(`params`): `Promise`\<[`Events`](../../../classes/transformers/Events/classes/Events.md)\>

Defined in: [modules/gamification/controllers/EventController.ts:64](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/EventController.ts#L64)

#### Parameters

##### params

[`ReadEventParams`](../../../classes/validators/GamifyLayerValidators/classes/ReadEventParams.md)

#### Returns

`Promise`\<[`Events`](../../../classes/transformers/Events/classes/Events.md)\>

***

### readEvents()

> **readEvents**(): `Promise`\<[`Events`](../../../classes/transformers/Events/classes/Events.md)[]\>

Defined in: [modules/gamification/controllers/EventController.ts:54](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/EventController.ts#L54)

#### Returns

`Promise`\<[`Events`](../../../classes/transformers/Events/classes/Events.md)[]\>

***

### updateEvent()

> **updateEvent**(`params`, `body`): `Promise`\<\{ `status`: `boolean`; \}\>

Defined in: [modules/gamification/controllers/EventController.ts:74](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/EventController.ts#L74)

#### Parameters

##### params

[`ReadEventParams`](../../../classes/validators/GamifyLayerValidators/classes/ReadEventParams.md)

##### body

[`UpdateEventsBody`](../../../classes/validators/GamifyLayerValidators/classes/UpdateEventsBody.md)

#### Returns

`Promise`\<\{ `status`: `boolean`; \}\>
