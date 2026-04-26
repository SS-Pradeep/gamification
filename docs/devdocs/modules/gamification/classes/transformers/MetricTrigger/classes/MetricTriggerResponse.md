[**vitest-vibe**](../../../../../../README.md)

***

[vitest-vibe](../../../../../../README.md) / [modules/gamification/classes/transformers/MetricTrigger](../README.md) / MetricTriggerResponse

# Class: MetricTriggerResponse

Defined in: [modules/gamification/classes/transformers/MetricTrigger.ts:141](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/MetricTrigger.ts#L141)

MetricTriggerResponse class - response after triggering metrics
Contains updated metrics and any achievements that were unlocked

## Implements

- [`IMetricTriggerResponse`](../../../../../../shared/interfaces/models/interfaces/IMetricTriggerResponse.md)

## Constructors

### Constructor

> **new MetricTriggerResponse**(`data?`): `MetricTriggerResponse`

Defined in: [modules/gamification/classes/transformers/MetricTrigger.ts:168](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/MetricTrigger.ts#L168)

Constructor - creates a new MetricTriggerResponse

#### Parameters

##### data?

`Partial`\<[`IMetricTriggerResponse`](../../../../../../shared/interfaces/models/interfaces/IMetricTriggerResponse.md)\>

Optional data to populate the response

#### Returns

`MetricTriggerResponse`

## Properties

### achievementsUnlocked

> **achievementsUnlocked**: [`AchievementTriggerItem`](AchievementTriggerItem.md)[]

Defined in: [modules/gamification/classes/transformers/MetricTrigger.ts:162](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/MetricTrigger.ts#L162)

#### Implementation of

[`IMetricTriggerResponse`](../../../../../../shared/interfaces/models/interfaces/IMetricTriggerResponse.md).[`achievementsUnlocked`](../../../../../../shared/interfaces/models/interfaces/IMetricTriggerResponse.md#achievementsunlocked)

***

### metricsUpdated

> **metricsUpdated**: [`MetricTriggerItem`](MetricTriggerItem.md)[]

Defined in: [modules/gamification/classes/transformers/MetricTrigger.ts:151](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/classes/transformers/MetricTrigger.ts#L151)

#### Implementation of

[`IMetricTriggerResponse`](../../../../../../shared/interfaces/models/interfaces/IMetricTriggerResponse.md).[`metricsUpdated`](../../../../../../shared/interfaces/models/interfaces/IMetricTriggerResponse.md#metricsupdated)
