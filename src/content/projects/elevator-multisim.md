---
title: Elevator Multisim
description: A very large state machine for a very large elevator.
thumbnail: /images/elevator-thumbnail.jpg
---

![Thumbnail](/images/elevator-thumbnail.jpg)

For this project, I was tasked to make a state machine in multisim which acted as elevator buttons. So, I took it upon myself to make a system which supported 1000000000000 floors and let you type in the floor you wanted to go to.

## Design
I decided to split the system into 4 sections:

### Inputs
The inputs section includes 16 switches to detect all the number keys and letters to support hexidecimal input.
![Inputs](/images/elevator-inputs.jpg)

### Input Combo Logic
![Input Combo Logic](/images/elevator-input-combo-logic.jpg)

### Memory
The memory is arranged to be able to shift all bits by 4 when a key is pressed and stores information about current, target, and new states. It is built using identical DFM modules to maintain simplicity.
![Memory](/images/elevator-memory.jpg)

#### DFM (D Flip-flop Matrix)
![DFM](/images/elevator-dfm.png)

### Output Logic
The output logic includes converters and displays. The red display is the current floor and green is the input floor
![Output Logic](/images/elevator-output-logic.jpg)

#### BTD (Binary to Display)
The BTD module converts a binary input to a 7 segment display output which includes digits 1-10 and letters A-F
![BTD](/images/elevator-btd.png)
