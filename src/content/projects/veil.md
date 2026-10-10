---
title: Veil
description: A low-profile 42 key split keyboard with support for many switches.
thumbnail: /images/veil-thumbnail.jpg
---

![Thumbnail](/images/veil-thumbnail.jpg)

Veil is a 42 key low-profile split ergonomic keyboard with support for MX and Choc (V1 and V2) switches. Additionally, Veil has 2 optional encoder slots and 2 I2C device slots.

## Parts
- 40x SK6812 MINI-E
- 1x Arduino Pro Micro or Equivalent
- 2x Encoder (optional)
- 44x DO-35 1N4148W
- 42x Keycaps
- 42x Switches (Choc V1, Choc V2, or MX)
- 2x TRRS PJ-320A
- 1x 4 Ring TRRS Cable
- 1x Veil PCB

## Design
The PCB was designed using KiCad. The Plate was designed using OnShape.

![Render](/images/placeholder.jpg)

### Reversible
The PCB was designed to be reversible making the right and left halves use the same PCB.

![Front](/images/placeholder.jpg)

Right Top & Left Bottom

![Back](/images/placeholder.jpg)

Left Top & Right Bottom

### Individually Addressable LEDs
The SK6812 MINI-E is chained across every key to allow for individually addressable LED lighting.

![LEDs](/images/placeholder.jpg)

[This keyboard is open source!](https://github.com/Minecatr/keyboards/tree/master/veil)