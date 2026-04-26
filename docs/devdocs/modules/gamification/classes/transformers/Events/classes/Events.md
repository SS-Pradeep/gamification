[**vitest-vibe**](../../../../../../README.md)

***

[vitest-vibe](../../../../../../README.md) / [modules/gamification/classes/transformers/Events](../README.md) / Events

# Class: Events

Defined in: [modules/gamification/classes/transformers/Events.ts:17](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/Events.ts#L17)

Events class - represents an event in the gamification system
(e.g., user login, task completion, etc.)

## Implements

- [`IEvents`](../../../../../../shared/interfaces/models/interfaces/IEvents.md)

## Constructors

### Constructor

> **new Events**(`body?`): `Events`

Defined in: [modules/gamification/classes/transformers/Events.ts:91](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/Events.ts#L91)

#### Parameters

##### body?

[`EventsBody`](../../../validators/GamifyLayerValidators/classes/EventsBody.md)

#### Returns

`Events`

## Properties

### \_id?

> `optional` **\_id**: [`ID`](../../../../../../shared/interfaces/models/type-aliases/ID.md)

Defined in: [modules/gamification/classes/transformers/Events.ts:28](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/Events.ts#L28)

#### Implementation of

[`IEvents`](../../../../../../shared/interfaces/models/interfaces/IEvents.md).[`_id`](../../../../../../shared/interfaces/models/interfaces/IEvents.md#_id)

***

### eventDescription

> **eventDescription**: `string`

Defined in: [modules/gamification/classes/transformers/Events.ts:48](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/Events.ts#L48)

#### Implementation of

[`IEvents`](../../../../../../shared/interfaces/models/interfaces/IEvents.md).[`eventDescription`](../../../../../../shared/interfaces/models/interfaces/IEvents.md#eventdescription)

***

### eventName

> **eventName**: `string`

Defined in: [modules/gamification/classes/transformers/Events.ts:38](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/Events.ts#L38)

#### Implementation of

[`IEvents`](../../../../../../shared/interfaces/models/interfaces/IEvents.md).[`eventName`](../../../../../../shared/interfaces/models/interfaces/IEvents.md#eventname)

***

### eventPayload

> **eventPayload**: `Record`\<`string`, `any`\>

Defined in: [modules/gamification/classes/transformers/Events.ts:70](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/Events.ts#L70)

#### Implementation of

[`IEvents`](../../../../../../shared/interfaces/models/interfaces/IEvents.md).[`eventPayload`](../../../../../../shared/interfaces/models/interfaces/IEvents.md#eventpayload)

***

### eventVersion

> **eventVersion**: `string`

Defined in: [modules/gamification/classes/transformers/Events.ts:58](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/Events.ts#L58)

#### Implementation of

[`IEvents`](../../../../../../shared/interfaces/models/interfaces/IEvents.md).[`eventVersion`](../../../../../../shared/interfaces/models/interfaces/IEvents.md#eventversion)

***

### scope

> **scope**: `string`

Defined in: [modules/gamification/classes/transformers/Events.ts:89](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/Events.ts#L89)

#### Implementation of

[`IEvents`](../../../../../../shared/interfaces/models/interfaces/IEvents.md).[`scope`](../../../../../../shared/interfaces/models/interfaces/IEvents.md#scope)

***

### slug

> **slug**: `string`

Defined in: [modules/gamification/classes/transformers/Events.ts:79](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/Events.ts#L79)

#### Implementation of

[`IEvents`](../../../../../../shared/interfaces/models/interfaces/IEvents.md).[`slug`](../../../../../../shared/interfaces/models/interfaces/IEvents.md#slug)
