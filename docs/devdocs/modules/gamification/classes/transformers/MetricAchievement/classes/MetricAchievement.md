[**vitest-vibe**](../../../../../../README.md)

***

[vitest-vibe](../../../../../../README.md) / [modules/gamification/classes/transformers/MetricAchievement](../README.md) / MetricAchievement

# Class: MetricAchievement

Defined in: [modules/gamification/classes/transformers/MetricAchievement.ts:24](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/MetricAchievement.ts#L24)

MetricAchievement class - represents an achievement that users can unlock
when they reach a specific metric threshold (e.g., "First 100 Points")

## Implements

- [`IMetricAchievement`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md)

## Constructors

### Constructor

> **new MetricAchievement**(`achievementBody?`): `MetricAchievement`

Defined in: [modules/gamification/classes/transformers/MetricAchievement.ts:151](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/MetricAchievement.ts#L151)

Constructor - creates a new MetricAchievement instance

#### Parameters

##### achievementBody?

[`CreateMetricAchievementBody`](../../../validators/GamifyEngineValidators/classes/CreateMetricAchievementBody.md)

Optional data to populate the achievement

#### Returns

`MetricAchievement`

## Properties

### \_id?

> `optional` **\_id**: [`ID`](../../../../../../shared/interfaces/models/type-aliases/ID.md)

Defined in: [modules/gamification/classes/transformers/MetricAchievement.ts:35](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/MetricAchievement.ts#L35)

#### Implementation of

[`IMetricAchievement`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md).[`_id`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md#_id)

***

### badgeUrl

> **badgeUrl**: `string`

Defined in: [modules/gamification/classes/transformers/MetricAchievement.ts:66](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/MetricAchievement.ts#L66)

#### Implementation of

[`IMetricAchievement`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md).[`badgeUrl`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md#badgeurl)

***

### description

> **description**: `string`

Defined in: [modules/gamification/classes/transformers/MetricAchievement.ts:56](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/MetricAchievement.ts#L56)

#### Implementation of

[`IMetricAchievement`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md).[`description`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md#description)

***

### goalIds

> **goalIds**: [`ID`](../../../../../../shared/interfaces/models/type-aliases/ID.md)[]

Defined in: [modules/gamification/classes/transformers/MetricAchievement.ts:117](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/MetricAchievement.ts#L117)

#### Implementation of

[`IMetricAchievement`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md).[`goalIds`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md#goalids)

***

### name

> **name**: `string`

Defined in: [modules/gamification/classes/transformers/MetricAchievement.ts:45](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/MetricAchievement.ts#L45)

#### Implementation of

[`IMetricAchievement`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md).[`name`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md#name)

***

### rewardIncrementValue?

> `optional` **rewardIncrementValue**: `number`

Defined in: [modules/gamification/classes/transformers/MetricAchievement.ts:107](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/MetricAchievement.ts#L107)

#### Implementation of

[`IMetricAchievement`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md).[`rewardIncrementValue`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md#rewardincrementvalue)

***

### rewardMetricId?

> `optional` **rewardMetricId**: [`ID`](../../../../../../shared/interfaces/models/type-aliases/ID.md)

Defined in: [modules/gamification/classes/transformers/MetricAchievement.ts:98](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/MetricAchievement.ts#L98)

#### Implementation of

[`IMetricAchievement`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md).[`rewardMetricId`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md#rewardmetricid)

***

### scope

> **scope**: `string`

Defined in: [modules/gamification/classes/transformers/MetricAchievement.ts:136](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/MetricAchievement.ts#L136)

#### Implementation of

[`IMetricAchievement`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md).[`scope`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md#scope)

***

### slug

> **slug**: `string`

Defined in: [modules/gamification/classes/transformers/MetricAchievement.ts:127](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/MetricAchievement.ts#L127)

#### Implementation of

[`IMetricAchievement`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md).[`slug`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md#slug)

***

### status?

> `optional` **status**: [`AchievementStatus`](../../../../../../shared/interfaces/models/enumerations/AchievementStatus.md) = `AchievementStatus.ACTIVE`

Defined in: [modules/gamification/classes/transformers/MetricAchievement.ts:86](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/MetricAchievement.ts#L86)

#### Implementation of

[`IMetricAchievement`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md).[`status`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md#status)

***

### trigger

> **trigger**: [`Trigger`](../../../../../../shared/interfaces/models/enumerations/Trigger.md)

Defined in: [modules/gamification/classes/transformers/MetricAchievement.ts:76](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/MetricAchievement.ts#L76)

#### Implementation of

[`IMetricAchievement`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md).[`trigger`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md#trigger)

***

### version

> **version**: `number` = `1`

Defined in: [modules/gamification/classes/transformers/MetricAchievement.ts:145](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/MetricAchievement.ts#L145)

#### Implementation of

[`IMetricAchievement`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md).[`version`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md#version)
