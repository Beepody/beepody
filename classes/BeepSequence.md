[beepody](../README.md) / [Exports](../modules.md) / BeepSequence

# Class: BeepSequence

**`name`** BeepSequence

## Table of contents

### Constructors

- [constructor](BeepSequence.md#constructor)

### Properties

- [beeps](BeepSequence.md#beeps)
- [tempo](BeepSequence.md#tempo)

### Methods

- [lengthInSeconds](BeepSequence.md#lengthinseconds)
- [toBeepCommand](BeepSequence.md#tobeepcommand)
- [toGRUBInitTune](BeepSequence.md#togrubinittune)
- [toHash](BeepSequence.md#tohash)
- [toString](BeepSequence.md#tostring)

## Constructors

### constructor

• **new BeepSequence**(`beeps`)

Initialize a beep sequence.

#### Parameters

| Name | Type |
| :------ | :------ |
| `beeps` | [`Beep`](Beep.md)[] |

#### Defined in

[Beep.ts:50](https://github.com/Beepody/beepody/blob/4788429/src/Beep.ts#L50)

## Properties

### beeps

• **beeps**: [`Beep`](Beep.md)[]

#### Defined in

[Beep.ts:44](https://github.com/Beepody/beepody/blob/4788429/src/Beep.ts#L44)

___

### tempo

• **tempo**: `number`

#### Defined in

[Beep.ts:45](https://github.com/Beepody/beepody/blob/4788429/src/Beep.ts#L45)

## Methods

### lengthInSeconds

▸ **lengthInSeconds**(): `number`

The length of the playtime in seconds.

#### Returns

`number`

#### Defined in

[Beep.ts:106](https://github.com/Beepody/beepody/blob/4788429/src/Beep.ts#L106)

___

### toBeepCommand

▸ **toBeepCommand**(): `string`

Return the `beep` command.

#### Returns

`string`

#### Defined in

[Beep.ts:71](https://github.com/Beepody/beepody/blob/4788429/src/Beep.ts#L71)

___

### toGRUBInitTune

▸ **toGRUBInitTune**(): `string`

Return the GRUB init tune.

#### Returns

`string`

#### Defined in

[Beep.ts:86](https://github.com/Beepody/beepody/blob/4788429/src/Beep.ts#L86)

___

### toHash

▸ **toHash**(): `string`

Return the URL hash for the sequence.
Each note is "frequency (Hz), length (ms), repeats" separated by "|", with defaults (440 200 1).
Notes are separated by ",".

#### Returns

`string`

#### Defined in

[Beep.ts:60](https://github.com/Beepody/beepody/blob/4788429/src/Beep.ts#L60)

___

### toString

▸ **toString**(): `string`

The text representation.

#### Returns

`string`

#### Defined in

[Beep.ts:99](https://github.com/Beepody/beepody/blob/4788429/src/Beep.ts#L99)
