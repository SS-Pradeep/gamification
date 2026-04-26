[**vitest-vibe**](../../../../../../README.md)

***

[vitest-vibe](../../../../../../README.md) / [modules/gamification/classes/transformers/MetricTrigger](../README.md) / MetricTriggerItem

# Class: MetricTriggerItem

Defined in: [modules/gamification/classes/transformers/MetricTrigger.ts:26](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/MetricTrigger.ts#L26)

MetricTriggerItem class - represents a single metric update
Used to specify which metric to update and by how much

## Implements

- [`IMetrics`](../../../../../../shared/interfaces/models/interfaces/IMetrics.md)

## Constructors

### Constructor

> **new MetricTriggerItem**(`body?`): `MetricTriggerItem`

Defined in: [modules/gamification/classes/transformers/MetricTrigger.ts:51](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/MetricTrigger.ts#L51)

Constructor - creates a new MetricTriggerItem

#### Parameters

##### body?

[`MetricTriggerItemValidator`](../../../validators/GamifyEngineValidators/classes/MetricTriggerItemValidator.md)

Optional data to populate the trigger item

#### Returns

`MetricTriggerItem`

## Properties

### metricId

> **metricId**: [`ID`](../../../../../../shared/interfaces/models/type-aliases/ID.md)

Defined in: [modules/gamification/classes/transformers/MetricTrigger.ts:36](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/MetricTrigger.ts#L36)

#### Implementation of

[`IMetrics`](../../../../../../shared/interfaces/models/interfaces/IMetrics.md).[`metricId`](../../../../../../shared/interfaces/models/interfaces/IMetrics.md#metricid)

***

### value?

> `optional` **value**: `number`

Defined in: [modules/gamification/classes/transformers/MetricTrigger.ts:45](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/MetricTrigger.ts#L45)

#### Implementation of

[`IMetrics`](../../../../../../shared/interfaces/models/interfaces/IMetrics.md).[`value`](../../../../../../shared/interfaces/models/interfaces/IMetrics.md#value)
