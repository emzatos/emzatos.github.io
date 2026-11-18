---
title: Eulerian fluid simulation with WebGPU
description: Grid-based fluid simulation and parallel computation in the browser.
tags: ['WebGPU', 'Fluid simulation', 'Computer graphics']
order: 1
status: ""
---

## Overview

This project was my first attempt at writing code for the GPU. I implement the classic Stable Fluids algorithm based off [Stam's paper](http://graphics.cs.cmu.edu/nsp/course/15-464/Fall09/papers/StamFluidforGames.pdf).

I utilized [TypeGPU](https://docs.swmansion.com/TypeGPU/) for this project, an early-stage framework for bringing a useful type system and graphics toolset to WebGPU programming. I highly recommend taking a look at their documents and examples, they have a great community!

You can access the interactive demo [here](https://emran.sh/fluids). I've found that the simulation is very smooth in Chrome (and very choppy in Safari).


[View the project on GitHub ↗](https://github.com/emzatos/Prion-ABM)