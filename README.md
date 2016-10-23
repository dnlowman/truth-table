![truth-table](http://i.imgur.com/G4KSUau.png)

#Introduction
This is a little implementation of a Boolean Truth Table. You can type in a boolean expression inbetween the function `f()` and the different permutations of each variable along with its output will be displayed!

The performance degrades depending on the amount of variables, hopefully I'll get around to improving this but for now I'm relying on doing a bitshift of 0 and using `toString(2)` to get it into a base 2 string then having to prepend 0's if the length of the output is not equal to the amount of variables.

It's implemented with React & Redux and only stores the Boolean expression in state, everything else is computed from that using selectors.

#Motivation
I'm reading The [Elements of Computing Systems](http://www.nand2tetris.org/), it's an awesome free course.

#Demo
You can find the live demo [here](http://daniellowman.com/truth-table/).

#License
MIT
