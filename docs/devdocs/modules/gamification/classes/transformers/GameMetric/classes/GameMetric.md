[**vitest-vibe**](../../../../../../README.md)

***

[vitest-vibe](../../../../../../README.md) / [modules/gamification/classes/transformers/GameMetric](../README.md) / GameMetric

# Class: GameMetric

Defined in: [modules/gamification/classes/transformers/GameMetric.ts:21](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/GameMetric.ts#L21)

GameMetric class - represents a trackable metric in the gamification system
(e.g., points, coins, streak count, etc.)

## Implements

- [`IGameMetric`](../../../../../../shared/interfaces/models/interfaces/IGameMetric.md)

## Constructors

### Constructor

> **new GameMetric**(`gameMetricBody?`): `GameMetric`

Defined in: [modules/gamification/classes/transformers/GameMetric.ts:120](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/GameMetric.ts#L120)

Constructor - creates a new GameMetric instance

#### Parameters

##### gameMetricBody?

[`CreateGameMetricBody`](../../../validators/GamifyEngineValidators/classes/CreateGameMetricBody.md)

Optional data to populate the metric

#### Returns

`GameMetric`

## Properties

### \_id?

> `optional` **\_id**: [`ID`](../../../../../../shared/interfaces/models/type-aliases/ID.md)

Defined in: [modules/gamification/classes/transformers/GameMetric.ts:32](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/GameMetric.ts#L32)

#### Implementation of

[`IGameMetric`](../../../../../../shared/interfaces/models/interfaces/IGameMetric.md).[`_id`](../../../../../../shared/interfaces/models/interfaces/IGameMetric.md#_id)

***

### defaultIncrementValue

> **defaultIncrementValue**: `number`

Defined in: [modules/gamification/classes/transformers/GameMetric.ts:83](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/GameMetric.ts#L83)

#### Implementation of

[`IGameMetric`](../../../../../../shared/interfaces/models/interfaces/IGameMetric.md).[`defaultIncrementValue`](../../../../../../shared/interfaces/models/interfaces/IGameMetric.md#defaultincrementvalue)

***

### description

> **description**: `string`

Defined in: [modules/gamification/classes/transformers/GameMetric.ts:53](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/GameMetric.ts#L53)

#### Implementation of

[`IGameMetric`](../../../../../../shared/interfaces/models/interfaces/IGameMetric.md).[`description`](../../../../../../shared/interfaces/models/interfaces/IGameMetric.md#description)

***

### name

> **name**: `string`

Defined in: [modules/gamification/classes/transformers/GameMetric.ts:42](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/GameMetric.ts#L42)

#### Implementation of

[`IGameMetric`](../../../../../../shared/interfaces/models/interfaces/IGameMetric.md).[`name`](../../../../../../shared/interfaces/models/interfaces/IGameMetric.md#name)

***

### scope

> **scope**: `string`

Defined in: [modules/gamification/classes/transformers/GameMetric.ts:114](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/GameMetric.ts#L114)

#### Implementation of

[`IGameMetric`](../../../../../../shared/interfaces/models/interfaces/IGameMetric.md).[`scope`](../../../../../../shared/interfaces/models/interfaces/IGameMetric.md#scope)

***

### slug

> **slug**: `string`

Defined in: [modules/gamification/classes/transformers/GameMetric.ts:105](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/GameMetric.ts#L105)

#### Implementation of

[`IGameMetric`](../../../../../../shared/interfaces/models/interfaces/IGameMetric.md).[`slug`](../../../../../../shared/interfaces/models/interfaces/IGameMetric.md#slug)

***

### streakResolutionStrategy?

> `optional` **streakResolutionStrategy**: [`StreakResolutionType`](../../../../../../shared/interfaces/models/enumerations/StreakResolutionType.md)

Defined in: [modules/gamification/classes/transformers/GameMetric.ts:95](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/GameMetric.ts#L95)

#### Implementation of

[`IGameMetric`](../../../../../../shared/interfaces/models/interfaces/IGameMetric.md).[`streakResolutionStrategy`](../../../../../../shared/interfaces/models/interfaces/IGameMetric.md#streakresolutionstrategy)

***

### type

> **type**: [`NUMBER`](../../../../../../shared/interfaces/models/enumerations/GameMetricType.md#number)

Defined in: [modules/gamification/classes/transformers/GameMetric.ts:63](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/GameMetric.ts#L63)

#### Implementation of

[`IGameMetric`](../../../../../../shared/interfaces/models/interfaces/IGameMetric.md).[`type`](../../../../../../shared/interfaces/models/interfaces/IGameMetric.md#type)

***

### units

> **units**: `string`

Defined in: [modules/gamification/classes/transformers/GameMetric.ts:73](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/GameMetric.ts#L73)

#### Implementation of

[`IGameMetric`](../../../../../../shared/interfaces/models/interfaces/IGameMetric.md).[`units`](../../../../../../shared/interfaces/models/interfaces/IGameMetric.md#units)
