[**vitest-vibe**](../../../../../README.md)

***

[vitest-vibe](../../../../../README.md) / [modules/gamification/controllers/TriggerController](../README.md) / TriggerController

# Class: TriggerController

Defined in: [modules/gamification/controllers/TriggerController.ts:31](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/TriggerController.ts#L31)

## Constructors

### Constructor

> **new TriggerController**(`eventService`, `MetricTriggerService`): `TriggerController`

Defined in: [modules/gamification/controllers/TriggerController.ts:32](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/TriggerController.ts#L32)

#### Parameters

##### eventService

[`eventService`](../../../services/EventService/classes/eventService.md)

##### MetricTriggerService

[`metricTriggerService`](../../../services/MetricTriggerService/classes/metricTriggerService.md)

#### Returns

`TriggerController`

## Methods

### MetricTriggers()

> **MetricTriggers**(`body`): `Promise`\<[`MetricTriggerResponse`](../../../classes/transformers/MetricTrigger/classes/MetricTriggerResponse.md)\>

Defined in: [modules/gamification/controllers/TriggerController.ts:61](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/TriggerController.ts#L61)

#### Parameters

##### body

[`MetricTriggerValidator`](../../../classes/validators/GamifyEngineValidators/classes/MetricTriggerValidator.md)

#### Returns

`Promise`\<[`MetricTriggerResponse`](../../../classes/transformers/MetricTrigger/classes/MetricTriggerResponse.md)\>

***

### triggerEvent()

> **triggerEvent**(`body`): `Promise`\<[`MetricTriggerResponse`](../../../classes/transformers/MetricTrigger/classes/MetricTriggerResponse.md)\>

Defined in: [modules/gamification/controllers/TriggerController.ts:43](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/modules/gamification/controllers/TriggerController.ts#L43)

#### Parameters

##### body

[`EventTriggerBody`](../../../classes/validators/GamifyLayerValidators/classes/EventTriggerBody.md)

#### Returns

`Promise`\<[`MetricTriggerResponse`](../../../classes/transformers/MetricTrigger/classes/MetricTriggerResponse.md)\>
