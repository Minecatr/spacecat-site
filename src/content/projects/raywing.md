---
title: Raywing
description: A low-profile 42 key split keyboard.
thumbnail: /images/raywing-thumbnail.jpg
---

![Thumbnail](/images/raywing-thumbnail.jpg)

Raywing is a 42 key low-profile split ergonomic keyboard with 2 optional rotary encoders.

## Parts
- 42x SK6812 MINI-E
- 1x Arduino Pro Micro or Equivalent
- 2x EVQWGD001 Encoder (optional)
- 44x DO-35 1N4148
- 42x Kalih Choc PG1350 Hot Swap Sockets (optional)
- 42x Kalih Choc Compatible Keycaps
- 42x Kalih Choc Switches
- 2x TRRS PJ-320A
- 1x 4 Ring TRRS Cable
- 1x Raywing PCB

## Design
The PCB was designed using KiCad

![Render](/images/raywing-render.jpg)

### Reversible
The PCB was designed to be reversible making the right and left halves use the same PCB.

![Front](/images/raywing-front-pcb.png)
Right Top & Left Bottom

![Back](/images/raywing-back-pcb.png)
Left Top & Right Bottom

### Individually Addressable LEDs
The SK6812 MINI-E is chained across every key to allow for individually addressable LED lighting.
![LEDs](/images/raywing-leds.png)

[This keyboard is open source!](https://github.com/Minecatr/keyboards/tree/master/raywing)
