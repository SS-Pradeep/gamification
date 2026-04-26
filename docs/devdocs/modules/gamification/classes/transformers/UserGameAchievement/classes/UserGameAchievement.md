[**vitest-vibe**](../../../../../../README.md)

***

[vitest-vibe](../../../../../../README.md) / [modules/gamification/classes/transformers/UserGameAchievement](../README.md) / UserGameAchievement

# Class: UserGameAchievement

Defined in: [modules/gamification/classes/transformers/UserGameAchievement.ts:47](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/UserGameAchievement.ts#L47)

UserGameAchievement class - tracks all achievements unlocked by a user
Contains a collection of achievements with unlock timestamps

## Implements

- [`IUserGameAchievement`](../../../../../../shared/interfaces/models/interfaces/IUserGameAchievement.md)

## Constructors

### Constructor

> **new UserGameAchievement**(`body?`): `UserGameAchievement`

Defined in: [modules/gamification/classes/transformers/UserGameAchievement.ts:104](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/UserGameAchievement.ts#L104)

Constructor - creates a new UserGameAchievement instance

#### Parameters

##### body?

[`CreateUserGameAchievementBody`](../../../validators/GamifyEngineValidators/classes/CreateUserGameAchievementBody.md)

Optional data to populate the user achievements

#### Returns

`UserGameAchievement`

## Properties

### \_id?

> `optional` **\_id**: [`ID`](../../../../../../shared/interfaces/models/type-aliases/ID.md)

Defined in: [modules/gamification/classes/transformers/UserGameAchievement.ts:58](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/UserGameAchievement.ts#L58)

#### Implementation of

[`IUserGameAchievement`](../../../../../../shared/interfaces/models/interfaces/IUserGameAchievement.md).[`_id`](../../../../../../shared/interfaces/models/interfaces/IUserGameAchievement.md#_id)

***

### achievements

> **achievements**: [`IAchievement`](../../../../../../shared/interfaces/models/interfaces/IAchievement.md)[]

Defined in: [modules/gamification/classes/transformers/UserGameAchievement.ts:85](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/UserGameAchievement.ts#L85)

#### Implementation of

[`IUserGameAchievement`](../../../../../../shared/interfaces/models/interfaces/IUserGameAchievement.md).[`achievements`](../../../../../../shared/interfaces/models/interfaces/IUserGameAchievement.md#achievements)

***

### completedGoalIds

> **completedGoalIds**: [`ID`](../../../../../../shared/interfaces/models/type-aliases/ID.md)[]

Defined in: [modules/gamification/classes/transformers/UserGameAchievement.ts:98](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/UserGameAchievement.ts#L98)

#### Implementation of

[`IUserGameAchievement`](../../../../../../shared/interfaces/models/interfaces/IUserGameAchievement.md).[`completedGoalIds`](../../../../../../shared/interfaces/models/interfaces/IUserGameAchievement.md#completedgoalids)

***

### userId

> **userId**: [`ID`](../../../../../../shared/interfaces/models/type-aliases/ID.md)

Defined in: [modules/gamification/classes/transformers/UserGameAchievement.ts:70](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/UserGameAchievement.ts#L70)

#### Implementation of

[`IUserGameAchievement`](../../../../../../shared/interfaces/models/interfaces/IUserGameAchievement.md).[`userId`](../../../../../../shared/interfaces/models/interfaces/IUserGameAchievement.md#userid)
