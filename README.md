Postfix Calculator
===========================

This is a REPL calculator in the style of PostScript. The purpose of this project is to practice TypeScript.

Build/Run
================

Requires `node v11` or higher.

Run `npm install` and then `npm run build`. The transpiled JavaScript will be placed in `/dist/`.

Start the program with `npm run start`. The REPL prompt will appear with `=> `. Exit with `<ctrl> + c`.

Documentation
=============

Runtime Environment
-------------------

There is a single stack that holds the state of the calculator. Each new number or operation pushes to the stack and executes. When `<enter>` is pressed, the stack is printed, with the top of the stack printed first. The stack persists across prompts, but not REPL sessions.

Example:
```
=> 1 2 3
3
2
1
=> +
5
1
```

Operations are applied in [Postfix Notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation) from the top of the stack. This notation removes the need for operator precedence and parenthesis tracking.

Binary Operators
----------------

Binary operators consume the two top elements of the stack and push the result of the operation back onto the stack.

Example:
```
=> 1 2 +
3
=> 4 -
-1
=> 6 * -3 /
2
```

| Operator | Operation |
|----------|-----------|
| + | add |
| - | subtract |
| * | multiply |
| / | divide |
| % | mod (remainder) |

Commands
--------

Commands do not add a result back onto the stack.

| Command | Inputs | Result |
| --------|--------|--------|
| `clear` | 0 | Clears the stack |
| `pop`   | 0 | Pop the top element from the stack |
| `swap`  | 0 | Swap the top two elements on the stack |
| `def`   | 2 | Define a variable, with the identifier being the top-most element |

Variables
---------

Variables are defined with `<value> /<identifier> def`. Variables are evaulated immediately when their identifier is pushed to the stack.

Examples
--------

```
=> 2 3 +
5
=> 3 /x def
5
=> 2 x *
6
5
=> -
-1
=> clear
=> 4 5 + 3
3
9
=> pop
9
```