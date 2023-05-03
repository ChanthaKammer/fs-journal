# JavaScript

"" //double quotes
'' // single quotes
`` // backticks
String constructor

The are going to be errors here unless I terminate the line with a semi-colon

//number
Any whole number and a decimal are an integer
1
2
-3
0.4
Number constructor

x01 // octal

//boolean
true 
false

//the weird ones
udefined
null

//obeject
{}
Object 

//function
function {function}{

}

//Arrays
[]
Array

How to break out of a function
you can either use returnl
or you can throw and error
throw new Error('You have too much stuff!');

the top of a function you should deal with your "knots", "erros" 
if(!hashealtpotion){
   return alert('No potion!');
}

This is the quickest way to get out of a function, rather than doing all my evaluation for a truth at the top of the function

When you throw an error
throw new Error('This is an error!')
the property of the error for the string I just passed into it is the error message

//Adding an onclick attribute to execute a function when an element is clicked
<button onclick="shouldMilesDrink()">Button</button>

//Math functions
Math.ceil(Math.random() * 10);


document.getElementByID('mileshealth') returns the span in html
document.getElementByID('mileshealth').textContent returns the text content of the element

textcontent and innertext do the exact same thing

example of updating an element via a function
function drawMilesHealth(){ // use a function name that indivates a visual change such as draw
   document.getElementById('miles-heatlh').innerText = heroHealth
}

questions for myself
is it possible to lock the vaue of a variable after declaring it using the let keyword?
why did he not have to use the even.preventdefault() function for the button

5/2/23 Loops, arrays, dynamically updating the dom, filters
scripts need to be deffered if placed in the head of the html
in general you would need to load the entire dom before you place in your scripts
a 404 error means the dom cannot find a file
if a function isn't readable for me to understand after a few moments, the function is too complex 
and should be broken up into multiple simpler functions

make sure to add notes above the function
another helpful thing to do is declare what the datatype of the parameter should be
@param {string} name
function setName(name){
   ...
}

when is something a parameter and when is something an argument?

Infinity : Infinity is a math number

null is a value you can set null is intentionally declared, undefined is a variable that was perhaps defined or not

you can put a const inside a function and each time the function runs the const will be declared again
if you put a const outside of a function and try to reassign it, js will throw an error

what does hoisted mean for a function?
what is scope?

pay attention to document.innerHTML +=, and =

when I am first writing a function, it is important to use a placeholder parameter with a name that is relevant to how the function works
ie. Don't pass placeholder in as a parameter, something more specific like name, num, hint are perfect. 

code lens for checking 

super shorthand switch statement example

murdere.diet.include('meat') 
? drawClue("asd") 
: murderer.diet.includes('fruits') 
? drawClue("meat")


is there a way to remove a specific class and add a specific class?
classlist add
and classlist remove
classList name nukes the class list

with a const array you can still push a to an array
