[beepody](README.md) / Exports

# beepody

## Table of contents

### Classes

- [Beep](classes/Beep.md)
- [BeepSequence](classes/BeepSequence.md)
- [default](classes/default.md)

### Variables

- [version](modules.md#version)

### Functions

- [parseBeepCommand](modules.md#parsebeepcommand)
- [parseBeepHash](modules.md#parsebeephash)
- [parseGRUBInitTune](modules.md#parsegrubinittune)
- [playBeepSequence](modules.md#playbeepsequence)
- [playDefaultBeep](modules.md#playdefaultbeep)

## Variables

### version

• **version**: ``"0.2.0"``

#### Defined in

[version.ts:1](https://github.com/Beepody/beepody/blob/4788429/src/version.ts#L1)

## Functions

### parseBeepCommand

▸ **parseBeepCommand**(`s`): [`BeepSequence`](classes/BeepSequence.md)

Parse a Linux "beep" command.

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

[`BeepSequence`](classes/BeepSequence.md)

#### Defined in

[Beep.ts:151](https://github.com/Beepody/beepody/blob/4788429/src/Beep.ts#L151)

___

### parseBeepHash

▸ **parseBeepHash**(`s`): [`BeepSequence`](classes/BeepSequence.md)

Parse a beep sequence hash.

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

[`BeepSequence`](classes/BeepSequence.md)

#### Defined in

[Beep.ts:244](https://github.com/Beepody/beepody/blob/4788429/src/Beep.ts#L244)

___

### parseGRUBInitTune

▸ **parseGRUBInitTune**(`s`): [`BeepSequence`](classes/BeepSequence.md)

Parse a Grub init tune "play" line.

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

[`BeepSequence`](classes/BeepSequence.md)

#### Defined in

[Beep.ts:220](https://github.com/Beepody/beepody/blob/4788429/src/Beep.ts#L220)

___

### playBeepSequence

▸ **playBeepSequence**(`bs`): `void`

Play a beep sequence to the browser audio.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bs` | [`BeepSequence`](classes/BeepSequence.md) |

#### Returns

`void`

#### Defined in

[Beep.ts:121](https://github.com/Beepody/beepody/blob/4788429/src/Beep.ts#L121)

___

### playDefaultBeep

▸ **playDefaultBeep**(): `void`

Play the default beep.

#### Returns

`void`

#### Defined in

[Beep.ts:135](https://github.com/Beepody/beepody/blob/4788429/src/Beep.ts#L135)
