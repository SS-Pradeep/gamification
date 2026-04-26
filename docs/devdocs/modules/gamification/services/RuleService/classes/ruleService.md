[**vitest-vibe**](../../../../../README.md)

***

[vitest-vibe](../../../../../README.md) / [modules/gamification/services/RuleService](../README.md) / ruleService

# Class: ruleService

Defined in: [modules/gamification/services/RuleService.ts:21](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/RuleService.ts#L21)

RuleService - handles business logic for gamification rules
Manages CRUD operations for rules that define game mechanics

## Extends

- [`BaseService`](../../../../../shared/classes/BaseService/classes/BaseService.md)

## Constructors

### Constructor

> **new ruleService**(`mongoDatabase`, `gamifyLayerRepo`): `ruleService`

Defined in: [modules/gamification/services/RuleService.ts:22](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/RuleService.ts#L22)

#### Parameters

##### mongoDatabase

[`MongoDatabase`](../../../../../shared/database/providers/mongo/MongoDatabase/classes/MongoDatabase.md)

##### gamifyLayerRepo

[`IGamifyLayerRepository`](../../../../../shared/database/interfaces/IGamifyLayerRepository/interfaces/IGamifyLayerRepository.md)

#### Returns

`ruleService`

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

### createRule()

> **createRule**(`rule`): `Promise`\<[`Rule`](../../../classes/transformers/Rule/classes/Rule.md)\>

Defined in: [modules/gamification/services/RuleService.ts:31](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/RuleService.ts#L31)

#### Parameters

##### rule

[`Rule`](../../../classes/transformers/Rule/classes/Rule.md)

#### Returns

`Promise`\<[`Rule`](../../../classes/transformers/Rule/classes/Rule.md)\>

***

### deleteRule()

> **deleteRule**(`id`): `Promise`\<`boolean`\>

Defined in: [modules/gamification/services/RuleService.ts:182](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/RuleService.ts#L182)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`boolean`\>

***

### deleteRulesByEventId()

> **deleteRulesByEventId**(`eventId`): `Promise`\<`boolean`\>

Defined in: [modules/gamification/services/RuleService.ts:202](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/RuleService.ts#L202)

#### Parameters

##### eventId

`string`

#### Returns

`Promise`\<`boolean`\>

***

### readRule()

> **readRule**(`id`): `Promise`\<[`Rule`](../../../classes/transformers/Rule/classes/Rule.md)\>

Defined in: [modules/gamification/services/RuleService.ts:148](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/RuleService.ts#L148)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`Rule`](../../../classes/transformers/Rule/classes/Rule.md)\>

***

### readRules()

> **readRules**(`id`): `Promise`\<[`Rule`](../../../classes/transformers/Rule/classes/Rule.md)[]\>

Defined in: [modules/gamification/services/RuleService.ts:135](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/RuleService.ts#L135)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`Rule`](../../../classes/transformers/Rule/classes/Rule.md)[]\>

***

### updateRule()

> **updateRule**(`id`, `rule`): `Promise`\<`boolean`\>

Defined in: [modules/gamification/services/RuleService.ts:162](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/services/RuleService.ts#L162)

#### Parameters

##### id

`string`

##### rule

`Partial`\<[`Rule`](../../../classes/transformers/Rule/classes/Rule.md)\>

#### Returns

`Promise`\<`boolean`\>
