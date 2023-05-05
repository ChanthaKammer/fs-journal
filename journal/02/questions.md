# Intro to JavaScript
01. Which keywords are used to declare a variable in JavaScript?

    > Var, let, and const are all ways to declare a variable in Javascript. Var is the original way to declare variables, but let and const were added later on. Let is the declaration you use for a variable that mgiht change in the future. Const is for declaring a value that will not change. Note that a const value can be declared each time a function runs.

02. What is the definition of a function?

    > A function is a piece of code that you can re use throughout your code. Functions allow you to take multiple micro tasks and run them all at once. Functions become very powerful once you pass arguments into them, which allow you to iterate over large arrays or filter items out based on a condition.

03. What are the `SOLID` principles?

    > The solid principles are the standard for which object oriented programming should be conducted under. SOLID allows for minimal interference by being conservative with how code interacts with itself in a "ecosystem". At my current understanding of javascript I primarily use the single responsibility part of SOLID, which helps me break my functions up into tiny pieces. SOLID is not a way to hold yourself back by programming lots of tiny pieces at once, but a blueprint for how code can be universally easy to understand and work with.

04. Given this array: How could you remove the `pineapple`?

    ```js
    let fruit = ['apple', 'banana', 'pineapple', 'orange', 'strawberry']
    ```

    > fruit.splice(2, 1)

05. Given these two objects: How could you add each to the others friends arrays?

    ```js
    let you = {
        name: "You",
        hair: true,
        friends: []
    }
    let them = {
        name: "Them",
        hair: false,
        friends: []
    }
    ```

    > friends.push(them); friends.push(you);
    > Since these objects are not already in an array, you can not iterate over them with a foreach

06. Give an example of a JavaScript `Conditional`:

    > if(blocks => 2){
        console.log(`${blocks} is the size fo your block`);
    } else if(blocks < 2){
        console.log("Your block is too small!");
    }
    => is more than or equal to, < needs to be used because in the first statement I am also including the value of 2.

07. What is the main difference between `parameters` and `arguments`?

    > Parameters are what you let your function take in as arguments
    > function add(num1, num2){
    >    return num1 + num2;
    >}
    > add(1, 2)
    >In this case, num1, and num2, are the parameters
    >when the function is called, 1 and 2 are the arguments.

08. Instead of writing everything to the console, what is a better way to debug your code?

    > You can user the debugger to step through code. Personally I use quokka js to step through code in my editor and view values in real time. If I didn't use quokka, I would step through code in the dev tools.

09. What is the difference between a `primitive` value and a `reference` value?

    > A primitive value is a single value that is set. For example let alive = true; A reference value would be an object with mutiple values that are passed into a function by reference.

10. Demonstrate a loop that prints the numbers between -100 and 100?

    > let(i = -100; i < 100; i++){
        console.log(i);
    }
