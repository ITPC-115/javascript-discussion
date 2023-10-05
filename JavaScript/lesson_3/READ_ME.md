# Functions

#### Objectives
  1. Be able to write and understand the different types of function in javascript.
  2. Discuss the difference between and argument and a parameter.
  3. Discuss the difference between functions and methods.
  4. Learn how to simplify and write a cleaner code.

---
### Function Declaration and Function Expression

``` js
function display(){
    console.log('Display');
} // <-- function decleration --

display(); // <-- function call --
```
``` js
const print = function(){
    console.log('Print');
}; // <-- function expression ; has to be declared first before using because of the concept of hoisting.

print();
```

---
### Arguments and Parameters
```js
function display (name){ // name <-- parameter
    console.log(`Hello ${name}`);
}
```
`parameters`: the values that a function expects to receive.

```js
display('Kim John'); // 'Kim John' <-- argument
```
`arguments`: are the values passed onto the functions when being called.

#### A function with default parameters
```js
function display (name = 'Sheldon'){
    console.log(`Hello ${name}`);
}

display();
display('Mario');
```
---
### Returning Values
``` js
function convertToFahrenheit(celsius){
    let convertedValue = 9 / 5 * celsius +32;
    return convertedValue;
};

const fahrenheit = convertToFahrenheit(27);
console.log('Fahrenheit',fahrenheit);
```
---
### Arrow Function
>Offers cleaner and shorter way to write function.
``` js
const convertToFahrenheit = (celsius) =>{
    let convertedValue = 9 / 5 * celsius +32;
    return convertedValue;
}

const fahrenheit = convertToFahrenheit(27);
console.log('Fahrenheit',fahrenheit);
```

---
### Functions and Methods

`Functions`: is a block of code to do something that can be invoked and run at any point of your code.
```js
function display (name){
    console.log(`Hello ${name}`);
}

display('Kim John');
```
`Methods`: are just a function.It is invoked using dot notation. Methods are just functions defined on their objects or data types.
``` js
// TODO: Insert examples of methods. :P
```
----
### Callbacks and Foreach

`callbackfn `: The function that is passed as an argument. Usually an arrow function.

``` js
const firstFunction = (callbackFunction) => {
    let name = 'Kim John';
    callbackFunction(name);
};

firstFunction(function(name){
    console.log(`Name: ${name}`);
});

```
`.forEach`: an array method that iterates through an array and expects a callbackfn as an argument.
``` js
const friends = ['rachel', 'phoebe', 'ross', 'monica', 'chandler','joey'];

friends.forEach(function(friend){
    console.log(friend);
});
```