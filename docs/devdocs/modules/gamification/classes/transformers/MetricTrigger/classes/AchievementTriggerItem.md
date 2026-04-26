[**vitest-vibe**](../../../../../../README.md)

***

[vitest-vibe](../../../../../../README.md) / [modules/gamification/classes/transformers/MetricTrigger](../README.md) / AchievementTriggerItem

# Class: AchievementTriggerItem

Defined in: [modules/gamification/classes/transformers/MetricTrigger.ts:63](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/MetricTrigger.ts#L63)

AchievementTriggerItem class - represents an achievement that was unlocked
Used in responses to show which achievements were triggered

## Implements

- [`IAchievement`](../../../../../../shared/interfaces/models/interfaces/IAchievement.md)

## Constructors

### Constructor

> **new AchievementTriggerItem**(`body?`): `AchievementTriggerItem`

Defined in: [modules/gamification/classes/transformers/MetricTrigger.ts:89](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/MetricTrigger.ts#L89)

Constructor - creates a new AchievementTriggerItem

#### Parameters

##### body?

[`Achievement`](../../../validators/GamifyEngineValidators/classes/Achievement.md)

Optional data to populate the achievement item

#### Returns

`AchievementTriggerItem`

## Properties

### achievementId

> **achievementId**: [`ID`](../../../../../../shared/interfaces/models/type-aliases/ID.md)

Defined in: [modules/gamification/classes/transformers/MetricTrigger.ts:73](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/MetricTrigger.ts#L73)

#### Implementation of

[`IAchievement`](../../../../../../shared/interfaces/models/interfaces/IAchievement.md).[`achievementId`](../../../../../../shared/interfaces/models/interfaces/IAchievement.md#achievementid)

***

### unlockedAt

> **unlockedAt**: `Date`

Defined in: [modules/gamification/classes/transformers/MetricTrigger.ts:83](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/MetricTrigger.ts#L83)

#### Implementation of

[`IAchievement`](../../../../../../shared/interfaces/models/interfaces/IAchievement.md).[`unlockedAt`](../../../../../../shared/interfaces/models/interfaces/IAchievement.md#unlockedat)
