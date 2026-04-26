[**vitest-vibe**](../../../../../README.md)

***

[vitest-vibe](../../../../../README.md) / [modules/gamification/services/GoalService](../README.md) / GoalService

# Class: GoalService

Defined in: [modules/gamification/services/GoalService.ts:19](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/GoalService.ts#L19)

GoalService - handles CRUD operations for goals
Manages business logic related to goals in the gamification system

## Extends

- [`BaseService`](../../../../../shared/classes/BaseService/classes/BaseService.md)

## Constructors

### Constructor

> **new GoalService**(`gamifyEngineRepo`, `mongoDatabase`): `GoalService`

Defined in: [modules/gamification/services/GoalService.ts:20](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/GoalService.ts#L20)

#### Parameters

##### gamifyEngineRepo

[`IGamifyEngineRepository`](../../../../../shared/database/interfaces/IGamifyEngineRepository/interfaces/IGamifyEngineRepository.md)

##### mongoDatabase

[`MongoDatabase`](../../../../../shared/database/providers/mongo/MongoDatabase/classes/MongoDatabase.md)

#### Returns

`GoalService`

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

### createGoals()

> **createGoals**(`goals`): `Promise`\<[`Goals`](../../../classes/transformers/Goals/classes/Goals.md)\>

Defined in: [modules/gamification/services/GoalService.ts:29](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/GoalService.ts#L29)

#### Parameters

##### goals

[`Goals`](../../../classes/transformers/Goals/classes/Goals.md)

#### Returns

`Promise`\<[`Goals`](../../../classes/transformers/Goals/classes/Goals.md)\>

***

### deleteGoals()

> **deleteGoals**(`goalsId`): `Promise`\<[`Goals`](../../../classes/transformers/Goals/classes/Goals.md)\>

Defined in: [modules/gamification/services/GoalService.ts:86](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/GoalService.ts#L86)

#### Parameters

##### goalsId

`string` | `ObjectId`

#### Returns

`Promise`\<[`Goals`](../../../classes/transformers/Goals/classes/Goals.md)\>

***

### readGoal()

> **readGoal**(`goalsId`): `Promise`\<[`Goals`](../../../classes/transformers/Goals/classes/Goals.md)\>

Defined in: [modules/gamification/services/GoalService.ts:54](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/GoalService.ts#L54)

#### Parameters

##### goalsId

`string` | `ObjectId`

#### Returns

`Promise`\<[`Goals`](../../../classes/transformers/Goals/classes/Goals.md)\>

***

### readGoals()

> **readGoals**(): `Promise`\<[`Goals`](../../../classes/transformers/Goals/classes/Goals.md)[]\>

Defined in: [modules/gamification/services/GoalService.ts:44](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/GoalService.ts#L44)

#### Returns

`Promise`\<[`Goals`](../../../classes/transformers/Goals/classes/Goals.md)[]\>

***

### updateGoals()

> **updateGoals**(`goalsId`, `goals`): `Promise`\<[`Goals`](../../../classes/transformers/Goals/classes/Goals.md)\>

Defined in: [modules/gamification/services/GoalService.ts:70](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/GoalService.ts#L70)

#### Parameters

##### goalsId

`string` | `ObjectId`

##### goals

[`UpdateGoals`](../../../classes/transformers/Goals/classes/UpdateGoals.md)

#### Returns

`Promise`\<[`Goals`](../../../classes/transformers/Goals/classes/Goals.md)\>
