[**vitest-vibe**](../../../../../../README.md)

***

[vitest-vibe](../../../../../../README.md) / [modules/gamification/classes/validators/GamifyEngineValidators](../README.md) / CreateMetricAchievementBody

# Class: CreateMetricAchievementBody

Defined in: [modules/gamification/classes/validators/GamifyEngineValidators.ts:266](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/validators/GamifyEngineValidators.ts#L266)

Validator for creating a new achievement

## Implements

- [`IMetricAchievement`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md)

## Constructors

### Constructor

> **new CreateMetricAchievementBody**(): `CreateMetricAchievementBody`

#### Returns

`CreateMetricAchievementBody`

## Properties

### badgeUrl

> **badgeUrl**: `string`

Defined in: [modules/gamification/classes/validators/GamifyEngineValidators.ts:298](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/validators/GamifyEngineValidators.ts#L298)

#### Implementation of

[`IMetricAchievement`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md).[`badgeUrl`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md#badgeurl)

***

### description

> **description**: `string`

Defined in: [modules/gamification/classes/validators/GamifyEngineValidators.ts:287](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/validators/GamifyEngineValidators.ts#L287)

#### Implementation of

[`IMetricAchievement`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md).[`description`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md#description)

***

### goalIds

> **goalIds**: [`ID`](../../../../../../shared/interfaces/models/type-aliases/ID.md)[]

Defined in: [modules/gamification/classes/validators/GamifyEngineValidators.ts:321](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/validators/GamifyEngineValidators.ts#L321)

#### Implementation of

[`IMetricAchievement`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md).[`goalIds`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md#goalids)

***

### name

> **name**: `string`

Defined in: [modules/gamification/classes/validators/GamifyEngineValidators.ts:276](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/validators/GamifyEngineValidators.ts#L276)

#### Implementation of

[`IMetricAchievement`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md).[`name`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md#name)

***

### rewardIncrementValue?

> `optional` **rewardIncrementValue**: `number`

Defined in: [modules/gamification/classes/validators/GamifyEngineValidators.ts:351](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/validators/GamifyEngineValidators.ts#L351)

#### Implementation of

[`IMetricAchievement`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md).[`rewardIncrementValue`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md#rewardincrementvalue)

***

### rewardMetricId?

> `optional` **rewardMetricId**: `string`

Defined in: [modules/gamification/classes/validators/GamifyEngineValidators.ts:341](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/validators/GamifyEngineValidators.ts#L341)

#### Implementation of

[`IMetricAchievement`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md).[`rewardMetricId`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md#rewardmetricid)

***

### scope

> **scope**: `string`

Defined in: [modules/gamification/classes/validators/GamifyEngineValidators.ts:370](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/validators/GamifyEngineValidators.ts#L370)

#### Implementation of

[`IMetricAchievement`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md).[`scope`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md#scope)

***

### slug

> **slug**: `string`

Defined in: [modules/gamification/classes/validators/GamifyEngineValidators.ts:360](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/validators/GamifyEngineValidators.ts#L360)

#### Implementation of

[`IMetricAchievement`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md).[`slug`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md#slug)

***

### status

> **status**: [`AchievementStatus`](../../../../../../shared/interfaces/models/enumerations/AchievementStatus.md) = `AchievementStatus.ACTIVE`

Defined in: [modules/gamification/classes/validators/GamifyEngineValidators.ts:331](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/validators/GamifyEngineValidators.ts#L331)

#### Implementation of

[`IMetricAchievement`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md).[`status`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md#status)

***

### trigger

> **trigger**: [`Trigger`](../../../../../../shared/interfaces/models/enumerations/Trigger.md)

Defined in: [modules/gamification/classes/validators/GamifyEngineValidators.ts:310](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/validators/GamifyEngineValidators.ts#L310)

#### Implementation of

[`IMetricAchievement`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md).[`trigger`](../../../../../../shared/interfaces/models/interfaces/IMetricAchievement.md#trigger)
