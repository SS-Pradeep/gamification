[**vitest-vibe**](../../../../../../README.md)

***

[vitest-vibe](../../../../../../README.md) / [modules/gamification/classes/transformers/GameMetric](../README.md) / UpdateGameMetric

# Class: UpdateGameMetric

Defined in: [modules/gamification/classes/transformers/GameMetric.ts:136](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/GameMetric.ts#L136)

## Implements

- [`IUpdateGameMetric`](../../../../../../shared/interfaces/models/interfaces/IUpdateGameMetric.md)

## Constructors

### Constructor

> **new UpdateGameMetric**(`gameMetricBody?`): `UpdateGameMetric`

Defined in: [modules/gamification/classes/transformers/GameMetric.ts:204](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/GameMetric.ts#L204)

Constructor - creates a new GameMetric instance

#### Parameters

##### gameMetricBody?

[`CreateGameMetricBody`](../../../validators/GamifyEngineValidators/classes/CreateGameMetricBody.md)

Optional data to populate the metric

#### Returns

`UpdateGameMetric`

## Properties

### defaultIncrementValue

> **defaultIncrementValue**: `number`

Defined in: [modules/gamification/classes/transformers/GameMetric.ts:186](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/GameMetric.ts#L186)

#### Implementation of

[`IUpdateGameMetric`](../../../../../../shared/interfaces/models/interfaces/IUpdateGameMetric.md).[`defaultIncrementValue`](../../../../../../shared/interfaces/models/interfaces/IUpdateGameMetric.md#defaultincrementvalue)

***

### description

> **description**: `string`

Defined in: [modules/gamification/classes/transformers/GameMetric.ts:156](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/GameMetric.ts#L156)

#### Implementation of

[`IUpdateGameMetric`](../../../../../../shared/interfaces/models/interfaces/IUpdateGameMetric.md).[`description`](../../../../../../shared/interfaces/models/interfaces/IUpdateGameMetric.md#description)

***

### name

> **name**: `string`

Defined in: [modules/gamification/classes/transformers/GameMetric.ts:145](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/GameMetric.ts#L145)

#### Implementation of

[`IUpdateGameMetric`](../../../../../../shared/interfaces/models/interfaces/IUpdateGameMetric.md).[`name`](../../../../../../shared/interfaces/models/interfaces/IUpdateGameMetric.md#name)

***

### streakResolutionStrategy?

> `optional` **streakResolutionStrategy**: [`StreakResolutionType`](../../../../../../shared/interfaces/models/enumerations/StreakResolutionType.md)

Defined in: [modules/gamification/classes/transformers/GameMetric.ts:198](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/GameMetric.ts#L198)

#### Implementation of

[`IUpdateGameMetric`](../../../../../../shared/interfaces/models/interfaces/IUpdateGameMetric.md).[`streakResolutionStrategy`](../../../../../../shared/interfaces/models/interfaces/IUpdateGameMetric.md#streakresolutionstrategy)

***

### type

> **type**: [`NUMBER`](../../../../../../shared/interfaces/models/enumerations/GameMetricType.md#number)

Defined in: [modules/gamification/classes/transformers/GameMetric.ts:166](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/GameMetric.ts#L166)

#### Implementation of

[`IUpdateGameMetric`](../../../../../../shared/interfaces/models/interfaces/IUpdateGameMetric.md).[`type`](../../../../../../shared/interfaces/models/interfaces/IUpdateGameMetric.md#type)

***

### units

> **units**: `string`

Defined in: [modules/gamification/classes/transformers/GameMetric.ts:176](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/GameMetric.ts#L176)

#### Implementation of

[`IUpdateGameMetric`](../../../../../../shared/interfaces/models/interfaces/IUpdateGameMetric.md).[`units`](../../../../../../shared/interfaces/models/interfaces/IUpdateGameMetric.md#units)
