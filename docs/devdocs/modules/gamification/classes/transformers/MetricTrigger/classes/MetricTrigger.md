[**vitest-vibe**](../../../../../../README.md)

***

[vitest-vibe](../../../../../../README.md) / [modules/gamification/classes/transformers/MetricTrigger](../README.md) / MetricTrigger

# Class: MetricTrigger

Defined in: [modules/gamification/classes/transformers/MetricTrigger.ts:101](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/MetricTrigger.ts#L101)

MetricTrigger class - request body to trigger gamification engine
Contains user ID and array of metrics to update

## Implements

- [`IMetricTrigger`](../../../../../../shared/interfaces/models/interfaces/IMetricTrigger.md)

## Constructors

### Constructor

> **new MetricTrigger**(`body?`): `MetricTrigger`

Defined in: [modules/gamification/classes/transformers/MetricTrigger.ts:127](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/MetricTrigger.ts#L127)

Constructor - creates a new MetricTrigger request

#### Parameters

##### body?

[`MetricTriggerValidator`](../../../validators/GamifyEngineValidators/classes/MetricTriggerValidator.md)

Optional data to populate the trigger

#### Returns

`MetricTrigger`

## Properties

### metrics

> **metrics**: [`MetricTriggerItem`](MetricTriggerItem.md)[]

Defined in: [modules/gamification/classes/transformers/MetricTrigger.ts:121](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/MetricTrigger.ts#L121)

#### Implementation of

[`IMetricTrigger`](../../../../../../shared/interfaces/models/interfaces/IMetricTrigger.md).[`metrics`](../../../../../../shared/interfaces/models/interfaces/IMetricTrigger.md#metrics)

***

### userId

> **userId**: [`ID`](../../../../../../shared/interfaces/models/type-aliases/ID.md)

Defined in: [modules/gamification/classes/transformers/MetricTrigger.ts:111](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/MetricTrigger.ts#L111)

#### Implementation of

[`IMetricTrigger`](../../../../../../shared/interfaces/models/interfaces/IMetricTrigger.md).[`userId`](../../../../../../shared/interfaces/models/interfaces/IMetricTrigger.md#userid)
