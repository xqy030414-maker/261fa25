# Reading Reflections — Think Python

## Chapter 1 – The Way of the Program

### Reading Reflection
In Chapter 1, I learned that programming is not only about writing code, but mainly about problem-solving. A program is a sequence of instructions that tells the computer how to perform a computation, and even very complex software is built from a few basic actions such as input, output, math, conditionals, and repetition. The chapter also compared natural languages and formal languages, which helped me understand why programming languages are so strict and sensitive to small errors. Debugging was introduced as an important and even useful part of learning to program, not just something “annoying.”

### One Thing I Learned
I learned the difference between **natural language** and **formal language**. Natural languages (like English or Chinese) can be ambiguous and redundant, but formal languages (like Python) are designed to be precise and unambiguous. In a program, every symbol and every space can matter.

### One Thing I Still Don’t Fully Understand
I still don’t fully understand how the Python **interpreter** actually works internally when it reads, parses, and executes my code. I know it evaluates expressions and follows the flow of execution, but I don’t clearly see the detailed steps inside the interpreter.

## Chapter 3 – Functions

### Reading Reflection
Chapter 3 taught me how functions help organize and reuse code. A function is a named sequence of statements, and once it is defined, I can call it many times. I learned the difference between **defining** a function and **calling** it, and that the order in a script matters: functions must be defined before they are used. The chapter also introduced parameters and arguments, local variables, and the idea of “fruitful functions” (that return a value) versus “void functions” (that return `None`). Overall, I can see how functions make programs easier to read, easier to debug, and less repetitive.

### One Thing I Learned
I learned the difference between **parameters** and **arguments**. An argument is the value I pass into a function when I call it, and a parameter is the variable name inside the function that receives that value. The outside variable name and the parameter name do not have to be the same.

### One Thing I Still Don’t Fully Understand
I still don’t fully understand how Python manages the **call stack** when functions call other functions. I know that each function call gets its own frame with local variables, and that Python returns to the correct place after a function finishes, but I still can’t clearly picture how all the frames are stored and removed step by step.

## Chapter 5 – Conditionals and Recursion

### Reading Reflection
In Chapter 5, I learned how conditionals (`if`, `elif`, `else`) allow a program to make decisions. Depending on a boolean condition, different branches of code can run. I also learned about relational and logical operators, and how they can be combined to express more complex conditions. The chapter then introduced **recursion**, where a function calls itself. The examples like `countdown(n)` and `print_n(s, n)` showed that recursion needs a base case to stop and a recursive case that moves the problem toward that base case. The chapter also connected recursion back to stack diagrams and debugging, which made the logic more concrete.

### One Thing I Learned
I learned how important the **base case** is in a recursive function. Without a base case, or if the base case is never reached, the program falls into **infinite recursion** and eventually hits a maximum recursion depth error. This made me see recursion as a controlled process, not just an endless loop.

### One Thing I Still Don’t Fully Understand
I still don’t fully understand how many recursive calls are “safe” before hitting the recursion limit, and how Python decides that the recursion depth is too deep. I know there is a limit and that Python raises a runtime error, but I don’t completely understand how this limit is chosen or how to reason about it in larger programs.

## Chapter 10 – Lists

### Reading Reflection
In Chapter 10, I learned that a **list** is a mutable sequence that can store values of any type, including other lists. This chapter showed many powerful operations on lists: indexing, slicing, list methods (`append`, `extend`, `sort`), and common patterns like map, filter, and reduce. I also learned about the relationship between lists and strings using `split` and `join`. Another important topic was the difference between objects, values, and references. The chapter explained aliasing and showed how two variables can refer to the same list, which means that changing the list through one variable also affects the other. This helped me understand why list bugs can be subtle and why copying lists is sometimes necessary.

### One Thing I Learned
I learned the difference between **equivalent** and **identical** objects. Two lists can be *equivalent* if they have the same elements (for example, `[1, 2, 3] == [1, 2, 3]`), but they are only *identical* if they are actually the same object in memory (checked with `is`). This is especially important when working with lists, because aliasing can cause unexpected side effects.

### One Thing I Still Don’t Fully Understand
I still don’t fully understand all the consequences of **aliasing** when passing lists into functions or assigning them to new variables. I know that some operations modify the original list in place and others create new lists, but I sometimes feel uncertain about which is which without testing in the interpreter.