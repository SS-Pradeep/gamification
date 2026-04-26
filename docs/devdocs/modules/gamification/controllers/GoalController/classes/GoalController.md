[**vitest-vibe**](../../../../../README.md)

***

[vitest-vibe](../../../../../README.md) / [modules/gamification/controllers/GoalController](../README.md) / GoalController

# Class: GoalController

Defined in: [modules/gamification/controllers/GoalController.ts:32](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/GoalController.ts#L32)

## Constructors

### Constructor

> **new GoalController**(`goalService`): `GoalController`

Defined in: [modules/gamification/controllers/GoalController.ts:33](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/GoalController.ts#L33)

#### Parameters

##### goalService

[`GoalService`](../../../services/GoalService/classes/GoalService.md)

#### Returns

`GoalController`

## Methods

### createGoals()

> **createGoals**(`goals`): `Promise`\<[`Goals`](../../../classes/transformers/Goals/classes/Goals.md)\>

Defined in: [modules/gamification/controllers/GoalController.ts:41](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/GoalController.ts#L41)

#### Parameters

##### goals

[`CreateGoalsBody`](../../../classes/validators/GamifyEngineValidators/classes/CreateGoalsBody.md)

#### Returns

`Promise`\<[`Goals`](../../../classes/transformers/Goals/classes/Goals.md)\>

***

### deleteGoals()

> **deleteGoals**(`params`): `Promise`\<`void`\>

Defined in: [modules/gamification/controllers/GoalController.ts:85](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/GoalController.ts#L85)

#### Parameters

##### params

[`GoalsParams`](../../../classes/validators/GamifyEngineValidators/classes/GoalsParams.md)

#### Returns

`Promise`\<`void`\>

***

### readGoal()

> **readGoal**(`params`): `Promise`\<[`Goals`](../../../classes/transformers/Goals/classes/Goals.md)\>

Defined in: [modules/gamification/controllers/GoalController.ts:62](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/GoalController.ts#L62)

#### Parameters

##### params

[`GoalsParams`](../../../classes/validators/GamifyEngineValidators/classes/GoalsParams.md)

#### Returns

`Promise`\<[`Goals`](../../../classes/transformers/Goals/classes/Goals.md)\>

***

### readGoals()

> **readGoals**(): `Promise`\<[`Goals`](../../../classes/transformers/Goals/classes/Goals.md)[]\>

Defined in: [modules/gamification/controllers/GoalController.ts:54](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/GoalController.ts#L54)

#### Returns

`Promise`\<[`Goals`](../../../classes/transformers/Goals/classes/Goals.md)[]\>

***

### updateGoals()

> **updateGoals**(`params`, `goals`): `Promise`\<[`UpdateGoals`](../../../classes/transformers/Goals/classes/UpdateGoals.md)\>

Defined in: [modules/gamification/controllers/GoalController.ts:70](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/GoalController.ts#L70)

#### Parameters

##### params

[`GoalsParams`](../../../classes/validators/GamifyEngineValidators/classes/GoalsParams.md)

##### goals

[`UpdateGoalsBody`](../../../classes/validators/GamifyEngineValidators/classes/UpdateGoalsBody.md)

#### Returns

`Promise`\<[`UpdateGoals`](../../../classes/transformers/Goals/classes/UpdateGoals.md)\>
