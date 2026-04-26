[**vitest-vibe**](../../../../../README.md)

***

[vitest-vibe](../../../../../README.md) / [modules/gamification/services/UserGameAchievementsService](../README.md) / userGameAchievementsService

# Class: userGameAchievementsService

Defined in: [modules/gamification/services/UserGameAchievementsService.ts:19](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/UserGameAchievementsService.ts#L19)

userGameAchievementsService - handles business logic for user achievements
Manages user achievement collections and their unlocked status

## Extends

- [`BaseService`](../../../../../shared/classes/BaseService/classes/BaseService.md)

## Constructors

### Constructor

> **new userGameAchievementsService**(`gamifyEngineRepo`, `mongoDatabase`): `userGameAchievementsService`

Defined in: [modules/gamification/services/UserGameAchievementsService.ts:20](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/UserGameAchievementsService.ts#L20)

#### Parameters

##### gamifyEngineRepo

[`IGamifyEngineRepository`](../../../../../shared/database/interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md)

##### mongoDatabase

[`MongoDatabase`](../../../../../shared/database/providers/mongo/MongoDatabase/classes/MongoDatabase.md)

#### Returns

`userGameAchievementsService`

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

### createUserGameAchievement()

> **createUserGameAchievement**(`userGameAchievement`): `Promise`\<[`UserGameAchievement`](../../../classes/transformers/UserGameAchievement/classes/UserGameAchievement.md)\>

Defined in: [modules/gamification/services/UserGameAchievementsService.ts:35](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/UserGameAchievementsService.ts#L35)

Creates a new user game achievement collection
Validates that no existing achievement collection exists for the user

#### Parameters

##### userGameAchievement

[`UserGameAchievement`](../../../classes/transformers/UserGameAchievement/classes/UserGameAchievement.md)

The user achievement collection to create

#### Returns

`Promise`\<[`UserGameAchievement`](../../../classes/transformers/UserGameAchievement/classes/UserGameAchievement.md)\>

Promise resolving to the created achievement collection

***

### deleteUserGameAchievement()

> **deleteUserGameAchievement**(`userId`, `achievementId`): `Promise`\<`boolean`\>

Defined in: [modules/gamification/services/UserGameAchievementsService.ts:158](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/UserGameAchievementsService.ts#L158)

Removes a specific achievement from a user's collection

#### Parameters

##### userId

`string`

The ID of the user

##### achievementId

`string`

The ID of the achievement to remove

#### Returns

`Promise`\<`boolean`\>

Promise resolving to boolean indicating success

***

### readUserGameAchievements()

> **readUserGameAchievements**(`userId`): `Promise`\<[`UserGameAchievement`](../../../classes/transformers/UserGameAchievement/classes/UserGameAchievement.md)\>

Defined in: [modules/gamification/services/UserGameAchievementsService.ts:76](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/UserGameAchievementsService.ts#L76)

Retrieves all achievements for a specific user

#### Parameters

##### userId

`string`

The ID of the user whose achievements to retrieve

#### Returns

`Promise`\<[`UserGameAchievement`](../../../classes/transformers/UserGameAchievement/classes/UserGameAchievement.md)\>

Promise resolving to the user's achievement collection

***

### updateUserGameAchievement()

> **updateUserGameAchievement**(`achievements`): `Promise`\<`boolean`\>

Defined in: [modules/gamification/services/UserGameAchievementsService.ts:104](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/UserGameAchievementsService.ts#L104)

Updates a user's achievement collection
Validates that all referenced achievements exist before updating

#### Parameters

##### achievements

[`UserGameAchievement`](../../../classes/transformers/UserGameAchievement/classes/UserGameAchievement.md)

The achievement collection to update

#### Returns

`Promise`\<`boolean`\>

Promise resolving to boolean indicating success
