[**vitest-vibe**](../../README.md)

***

[vitest-vibe](../../README.md) / [inversify-adapter](../README.md) / InversifyAdapter

# Class: InversifyAdapter

Defined in: [inversify-adapter.ts:5](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/inversify-adapter.ts#L5)

## Implements

- `IocAdapter`

## Constructors

### Constructor

> **new InversifyAdapter**(`container`): `InversifyAdapter`

Defined in: [inversify-adapter.ts:6](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/inversify-adapter.ts#L6)

#### Parameters

##### container

`Container`

#### Returns

`InversifyAdapter`

## Methods

### get()

> **get**\<`T`\>(`someClass`, `action?`): `T`

Defined in: [inversify-adapter.ts:8](https://github.com/vicharanashala/gamification/blob/d43d5faf5c7ea1563e8127102353723733746521/backend/src/inversify-adapter.ts#L8)

Return

#### Type Parameters

##### T

`T`

#### Parameters

##### someClass

`ClassConstructor`\<`T`\>

##### action?

`Action`

#### Returns

`T`

#### Implementation of

`IocAdapter.get`
