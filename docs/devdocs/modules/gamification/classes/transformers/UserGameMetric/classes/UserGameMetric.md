[**vitest-vibe**](../../../../../../README.md)

***

[vitest-vibe](../../../../../../README.md) / [modules/gamification/classes/transformers/UserGameMetric](../README.md) / UserGameMetric

# Class: UserGameMetric

Defined in: [modules/gamification/classes/transformers/UserGameMetric.ts:15](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/UserGameMetric.ts#L15)

UserGameMetric class - tracks a user's progress on a specific game metric
(e.g., how many points a user has earned, their current streak, etc.)

## Implements

- [`IUserGameMetric`](../../../../../../shared/interfaces/models/interfaces/IUserGameMetric.md)

## Constructors

### Constructor

> **new UserGameMetric**(`body?`): `UserGameMetric`

Defined in: [modules/gamification/classes/transformers/UserGameMetric.ts:85](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/UserGameMetric.ts#L85)

Constructor - creates a new UserGameMetric instance

#### Parameters

##### body?

[`UserGameMetricBody`](../../../validators/GamifyEngineValidators/classes/UserGameMetricBody.md)

Optional data to populate the user metric

#### Returns

`UserGameMetric`

## Properties

### \_id?

> `optional` **\_id**: [`ID`](../../../../../../shared/interfaces/models/type-aliases/ID.md)

Defined in: [modules/gamification/classes/transformers/UserGameMetric.ts:26](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/UserGameMetric.ts#L26)

#### Implementation of

[`IUserGameMetric`](../../../../../../shared/interfaces/models/interfaces/IUserGameMetric.md).[`_id`](../../../../../../shared/interfaces/models/interfaces/IUserGameMetric.md#_id)

***

### lastStreakUpdated?

> `optional` **lastStreakUpdated**: `Date`

Defined in: [modules/gamification/classes/transformers/UserGameMetric.ts:79](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/UserGameMetric.ts#L79)

#### Implementation of

[`IUserGameMetric`](../../../../../../shared/interfaces/models/interfaces/IUserGameMetric.md).[`lastStreakUpdated`](../../../../../../shared/interfaces/models/interfaces/IUserGameMetric.md#laststreakupdated)

***

### lastUpdated

> **lastUpdated**: `Date`

Defined in: [modules/gamification/classes/transformers/UserGameMetric.ts:69](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/UserGameMetric.ts#L69)

#### Implementation of

[`IUserGameMetric`](../../../../../../shared/interfaces/models/interfaces/IUserGameMetric.md).[`lastUpdated`](../../../../../../shared/interfaces/models/interfaces/IUserGameMetric.md#lastupdated)

***

### metricId

> **metricId**: [`ID`](../../../../../../shared/interfaces/models/type-aliases/ID.md)

Defined in: [modules/gamification/classes/transformers/UserGameMetric.ts:49](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/UserGameMetric.ts#L49)

#### Implementation of

[`IUserGameMetric`](../../../../../../shared/interfaces/models/interfaces/IUserGameMetric.md).[`metricId`](../../../../../../shared/interfaces/models/interfaces/IUserGameMetric.md#metricid)

***

### userId

> **userId**: [`ID`](../../../../../../shared/interfaces/models/type-aliases/ID.md)

Defined in: [modules/gamification/classes/transformers/UserGameMetric.ts:37](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/UserGameMetric.ts#L37)

#### Implementation of

[`IUserGameMetric`](../../../../../../shared/interfaces/models/interfaces/IUserGameMetric.md).[`userId`](../../../../../../shared/interfaces/models/interfaces/IUserGameMetric.md#userid)

***

### value

> **value**: `number`

Defined in: [modules/gamification/classes/transformers/UserGameMetric.ts:59](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/UserGameMetric.ts#L59)

#### Implementation of

[`IUserGameMetric`](../../../../../../shared/interfaces/models/interfaces/IUserGameMetric.md).[`value`](../../../../../../shared/interfaces/models/interfaces/IUserGameMetric.md#value)
