---
title: Splinar
description: A low-profile 54 key split keyboard with leds.
thumbnail: /images/splinarplus-thumbnail.jpg
---

![Thumbnail](/images/splinarplus-thumbnail.jpg)

Splinar+ is a 54 key low-profile split ergonomic keyboard with 2 optional rotary encoders.

## Parts
- 54x SK6812 MINI-E
- 1x Arduino Pro Micro or Equivalent
- 2x EVQWGD001 Encoder (optional)
- 56x DO-35 1N4148
- 54x Kalih Choc PG1350 Hot Swap Sockets (optional)
- 54x Kalih Choc Compatible Keycaps
- 54x Kalih Choc Switches
- 2x TRRS PJ-320A
- 1x 4 Ring TRRS Cable
- 1x Splinar+ PCB

## Design
The PCB was designed using KiCad

![Render](/images/splinarplus-render.png)

### Reversible
The PCB was designed to be reversible making the right and left halves use the same PCB.

![Front](/images/splinarplus-front-pcb.png)
Right Top & Left Bottom

![Back](/images/splinarplus-back-pcb.png)
Left Top & Right Bottom

### Individually Addressable LEDs
The SK6812 MINI-E is chained across every key to allow for individually addressable LED lighting.

![LEDs](/images/splinarplus-leds.png)

[This keyboard is open source!](https://github.com/Minecatr/keyboards/tree/master/splinarplus)