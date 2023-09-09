# Perceptron JS
The simplest neural network, invented in 1957 by Frank Rosenblatt.

Code is based on (Chapter 10: Neutral Networks)[https://natureofcode.com/book/chapter-10-neural-networks/] in "The Nature Of Code" by Daniel Shiffman.

Run on Node 18.16.1

## Set up
1. Git init
2. npm init to create package.json and install dependencies (ts-node and nodemon cz I'm lazy)
3. tsc --init to create tsconfig.json

## Noob reminders
Classes can't have const variables. These must be declared in the constructor.

## Learnings
- Declare class property types in the constructor

## Perceptron Guessing
Adjusted Weight = Weight + Error * Input * Learning Rate
Error * Input = delta weight, higher error = higher delta weight
Learning rate = how much to adjust the weight by