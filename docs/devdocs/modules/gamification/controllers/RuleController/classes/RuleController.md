[**vitest-vibe**](../../../../../README.md)

***

[vitest-vibe](../../../../../README.md) / [modules/gamification/controllers/RuleController](../README.md) / RuleController

# Class: RuleController

Defined in: [modules/gamification/controllers/RuleController.ts:33](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/RuleController.ts#L33)

## Constructors

### Constructor

> **new RuleController**(`ruleService`): `RuleController`

Defined in: [modules/gamification/controllers/RuleController.ts:34](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/RuleController.ts#L34)

#### Parameters

##### ruleService

[`ruleService`](../../../services/RuleService/classes/ruleService.md)

#### Returns

`RuleController`

## Methods

### createRule()

> **createRule**(`rule`): `Promise`\<[`RuleBody`](../../../classes/validators/GamifyLayerValidators/classes/RuleBody.md)\>

Defined in: [modules/gamification/controllers/RuleController.ts:42](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/RuleController.ts#L42)

#### Parameters

##### rule

[`RuleBody`](../../../classes/validators/GamifyLayerValidators/classes/RuleBody.md)

#### Returns

`Promise`\<[`RuleBody`](../../../classes/validators/GamifyLayerValidators/classes/RuleBody.md)\>

***

### deleteRule()

> **deleteRule**(`params`): `Promise`\<`boolean`\>

Defined in: [modules/gamification/controllers/RuleController.ts:90](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/RuleController.ts#L90)

#### Parameters

##### params

[`ReadRuleParams`](../../../classes/validators/GamifyLayerValidators/classes/ReadRuleParams.md)

#### Returns

`Promise`\<`boolean`\>

***

### deleteRulesByEventId()

> **deleteRulesByEventId**(`params`): `Promise`\<`boolean`\>

Defined in: [modules/gamification/controllers/RuleController.ts:98](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/RuleController.ts#L98)

#### Parameters

##### params

[`ReadEventParams`](../../../classes/validators/GamifyLayerValidators/classes/ReadEventParams.md)

#### Returns

`Promise`\<`boolean`\>

***

### readRule()

> **readRule**(`params`): `Promise`\<[`Rule`](../../../classes/transformers/Rule/classes/Rule.md)\>

Defined in: [modules/gamification/controllers/RuleController.ts:64](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/RuleController.ts#L64)

#### Parameters

##### params

[`ReadRuleParams`](../../../classes/validators/GamifyLayerValidators/classes/ReadRuleParams.md)

#### Returns

`Promise`\<[`Rule`](../../../classes/transformers/Rule/classes/Rule.md)\>

***

### readRules()

> **readRules**(`params`): `Promise`\<[`Rule`](../../../classes/transformers/Rule/classes/Rule.md)[]\>

Defined in: [modules/gamification/controllers/RuleController.ts:55](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/RuleController.ts#L55)

#### Parameters

##### params

[`ReadEventParams`](../../../classes/validators/GamifyLayerValidators/classes/ReadEventParams.md)

#### Returns

`Promise`\<[`Rule`](../../../classes/transformers/Rule/classes/Rule.md)[]\>

***

### updateRule()

> **updateRule**(`body`): `Promise`\<\{ `status`: `boolean`; \}\>

Defined in: [modules/gamification/controllers/RuleController.ts:78](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/RuleController.ts#L78)

#### Parameters

##### body

[`UpdateRuleBody`](../../../classes/validators/GamifyLayerValidators/classes/UpdateRuleBody.md)

#### Returns

`Promise`\<\{ `status`: `boolean`; \}\>
