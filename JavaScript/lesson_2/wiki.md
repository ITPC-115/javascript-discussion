# JavaScript
JavaScript is a high-level, dynamically typed, interpreted programming language with first-class functions. It's commonly used for web development to create dynamic and interactive web applications. JavaScript code can be executed in web browsers, enabling client-side scripting, and also on servers through platforms like Node.js, allowing server-side scripting. It supports object-oriented, imperative, and functional programming paradigms, making it a versatile language for various programming tasks. JavaScript interacts with HTML and CSS, allowing developers to manipulate web page content and behavior, making it a fundamental tool in web development.

### Where should I put the script for my HTML?

``` html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lesson 1</title>
    <script>
        alert('Hi, Kim!')
    </script>
</head>
<body> 
    
</body>
</html>
```
> Head: It could work but it would cause a loading problem on your page.

---

``` html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lesson 1</title>
</head>
<body> 
    <script>
        alert('Hi, Kim!')
    </script>
</body>
</html>
```
> Body: It is where it's commonly placed since it hold the logic, and data that are to be displayed.
---
> But in order for the funtions, methods, and variables to be easily read and to make debugging simpler, the logic or processes are moved into a different file with the javascript extension. And would rather put the source path inside the script tag.

``` html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lesson 1</title>
</head>
<body> 
    <script src="console.js"></script>
</body>
</html>
```
``` javascript
alert('hi kim');
```
#### Console
Shortcut key: `F12` or `Fn + F12`
You can run script in the console which can help you in testing. An you can also display stuff in your console using logs.

Try typing this in the console
``` javascript
alert('Hi Stranger!');
```

You can also try displaying a log on the console by adding this line of code in your javascript file.
``` javascript
console.log("Hi Stranger");
```
---
#### Keywords : `var` , `let` , `const`
>determine how the declared variables behave in terms of scope and mutability, but they do not specify the data type of the variable.

What is a variable?
>is a named storage of data that can hold any data type without explecitely defining why type of data it will store.

`var` : variables declared as `var` are function-scoped or globally scoped depending on where they are declared. They are subject to hoisting, meaning the declaration is moved to the top of the function or global scope during the compilation phase. They can be redeclared within the same scope without generating an error. And they can be updated and reassigned.
``` javascript
function example() {
    var x = 10;
    if (true) {
        var x = 20;
    }
    console.log(x); // Outputs 20
}
```

`let` : Variables declared with `let` have block scope, meaning they are only accessible within the block in which they are defined. They are also hoisted, but they are not initialized until their declaration is encountered in the code. They cannot be redeclared within the same block scope. They can be updated and reassigned.
``` javascript
function example() {
    let x = 10;
    if (true) {
        let x = 20;
    }
    console.log(x); // Outputs 10
}
```

`const` : Variables declared with `const` also have block scope.They are hoisted but, like `let`, are not initialized until their declaration is encountered. They cannot be reassigned after their initial value is assigned. They are constants. However, for objects and arrays declared with `const`, the properties or elements within them can still be modified.
``` javascript
const pi = 3.14159;
pi = 3; // This will result in an error

const arr = [1, 2, 3];
arr.push(4); 
```
---
#### Comments
Single line comment
``` javascript
// console.log("Hi Stranger");
```
Multi line comments
``` javascript
/*
function example() {
    let x = 10;
    if (true) {
        let x = 20;
    }
    console.log(x); // Outputs 10
*/
```
---
#### Data Types
| DataType  | Value                                                 |
| --------- | ----------------------------------------------------- |
| Number    | 1,2,3,4,5...100, 1.23                                 |
| String    | 'hello, world' , "kimpoy@ndmu.edu.ph"                 |
| Boolean   | true, false                                           |
| Null      | Explicitly set a variable with no value               |
| Undefined | For variables that have not yet been defined.         |
| Object    | Complex data structures - Arrays, Dates, Literals etc |
| Symbol    | Used with objects                                     |
---

#### String
is a built-in data type used to represent and manipulate sequences of characters, such as text. Strings can contain letters, digits, symbols, and whitespace. They are enclosed in either single quotes (') or double quotes ("), and JavaScript treats them interchangeably.
``` js
console.log('Hamilton');

let venue = "Manila's Theatre at Solaire";
console.log(venue);
```

String Concatenation
``` js
let title = "Hamilton";
let venue = "Manila's Theatre at Solaire";

let concatenatedResult= "Let's watch " + title + " in " + venue;
```

Get a character from a string
``` js
let title = "Hamilton";
console.log(title[3]);
```

Get the lenth of the string
``` js
let title = "Hamilton";
console.log(title.length);
```

**String methods**

Changing text case
``` js
let title = "Hamilton";
console.log(title.toUpperCase);
let result = title.toLowerCase
console.log(result);
console.log(title);
```

Get the index number of a character in a string
``` js
let title = 'Hamilton';
let index = title.indexOf('l');
console.log(index);
```
Get the last index of a character
``` js
let nameNoSpace = 'KimJohnAlvarezBautista';
let index = nameNoSpace.lastIndexOf('t');
console.log(index);
```

Slice a string.
``` js
let nameNoSpace = 'KimJohnAlvarezBautista';
let result = nameNoSpace.slice(0,3);
console.log(result);
```

Get a substring
``` js
let nameNoSpace = 'KimJohnAlvarezBautista';
let substring = nameNoSpace.substr(7,7);
console.log(substring);
```

Replace a character in a string
``` js
let nameNoSpace = 'KimJohnAlvarezBautista';
let result = nameNoSpace.replace('t','p');
console.log(result);
```


---
#### Number
represents numeric values, both integers and floating-point numbers. It is used to store and manipulate numerical data in JavaScript programs. Numbers can be used for arithmetic operations, comparisons, and various mathematical computations within JavaScript.

``` js
let radius = 10;
const pi = 3.14;

console.log(radius, pi);
```

Math Operators: `+`, `-`,` *`, `/`, `**`, `%`
``` js
let radius = 10;
const pi = 3.14;

console.log(10/2);
console.log(10-2);
let sum = radius + 2;
console.log(sum);

let remainder = radius % 3;
console.log(remainder);
```

Order of operation: **B** **I** **D** **M** **A** **S**
``` js
let result = 5 * (10-5)**2;
console.log(result);
```

Shorthand operations
``` js
radius++;
radius+=radius
```

`NaN` : Not a Number
``` js
console.log(100/'kim');
```

Concatenation
``` js
let views = 100;
let result = 'The video has reached' + views + ' views';
console.log(result);
```

Using Template String / Template literal
``` js
let views = 100;
let result = `The video has reached ${views} views`;
console.log.(result);
```

using and creating HTML template
``` js
let views = 100;
let html = `<p>The video has reached ${views} views</p> `;
console.log(html);
```
---

#### Arrays
>Array is also a data type but only on the example of our so called Object Data Type.

How to define an array?
``` javascript
let names = ['Toto', 'Kim', 'John'];
let age = [21,22,23];
console.log(name);
console.log(age);
```

How to override a value in the array?
``` javascript
let names = ['Toto', 'Kim', 'John'];
names[0]= 'Sir';
console.log(names);
console.log(names[0]);
```

**Array Methods**

``` js
let names = ['Toto', 'Kim', 'John'];
let result = names.join(',');
console.log(result);
```
> `.join()` - This method is used to combine all element within the array and seperate them with the defined _seperator_. The returned value of this method is a string.


``` js
let names = ['Toto', 'Kim', 'John'];
let result = names.indexOf('Kim');
console.log(result);
```
> `.indexOf()` - used to get the index of a specific element in array. The returned value is number.


``` js
let names = ['Toto', 'Kim', 'John'];
let result = names.concat(['Alvarez', 'Bautista']);
console.log(result);
```
>`.concat()` - it takes an array and combine or join it with another array.


``` js
let names = ['Toto', 'Kim', 'John'];
let result = names.push('Bautista');
console.log(name);
console.log(result);
```
>`.push()` - this a good example of a so called destructive method. It alters the original value inside the array. By using the `push()` method you're a pushing an element into an arrray. The returned value is a number which is the new length of the array.


``` js
let names = ['Toto', 'Kim', 'John'];
let result = names.push('Bautista');
console.log(result);
```
>`pop()` - it removes the element in the last index or the end value in an array. This method returns the value it poped off in an array.
---

#### Undefined
Value is not explecitely or not intentionally set to undefined. Don't have any value or dataType unless you assigned one in the later part of your code.

``` js
let age;
console.log(age, age + 1,`my age is ${age}`);
```
---
#### Null
Value is explecitely and intenionally defined as null or no value.
 
``` js
let age = null;
console.log(age, age + 1,`my age is ${age}`);
```
---
#### Booleans
Booleans represent two special values in JavaScript which are `true` and `false`

``` js
console.log(true,false);
console.log('true','false');
```
> Always remember that `true` and `false` which are boolean values are different to `"true"` and `"false"` which are string.

``` js
let email = 'kimjohn.bautista@ndmu.edu.ph';
let booleanResult = email.includes('@');
console.log(booleanResult);
```
> The example above shows that method can return boolean values.

Comparison Operators
``` js
let age = 24;
console.log(age == 24);
console.log(age == 23);
console.log(age != 23);
console.log(age > 23);
console.log(age < 23);
console.log(age <= 24);
console.log(age >= 24);
```
> What we used in the code snipper above is called abstract equality or loose equality. Which means that a values type is not considered when we perform a comparison.

``` js
let age = 24;
console.log(age === 24);
console.log(age !== 23);
console.log(age === '24');
console.log(age !== '23');
```

---
#### Type Conversion
``` js
let score = '100';

score = Number(score);
let result = score +1;
console.log(result);
console.log(typeof score);
```
>The above example is just a basic example of converting a string into a number using the `Number()` method which takes the variable you want to convert as the argument. `typeof` was aslo used here to check the type/data type of a variable.

---

### Control Flow

#### Loops

**for loop** : 
``` js
for(let i = 0; i < 5 ; i++){
    // let i = 0 -> initialization variable
    // i<5 -> condition
    // i++ -> final expression

    console.log(i);
}
console.log('Done Looping')
```
``` js
const colors = ['red','green','blue'];
for(let i = 0 ; i< colors.length ; i++){
    console.log('index number', i);
    console.log(colors[i]);
}
```

**while loop**:

```js
let i =0;
while(i<5){
    console.log(i);
    i++;
}
```
``` js
const colors = ['red','green','blue'];
let i = 0;
while( i < colors.length){
    console.log('index number', i);
    console.log(colors[i]);
    i++;
}
```

**do while**:
``` js
let i =5;
do{
    console.log(i);
    i++;
}while(i<5)
```
---
#### Conditional statements

**if statement** :
``` js
const color = 'blue';
const colors = ['green', 'orange','brown'];

if(!colors.includes('blue')){
    console.log(`${color} is not in the list`);
}
```

**else statement** :
``` js
const color = 'blue';
const colors = ['green', 'orange','brown'];

if(!colors.includes(color)){
    console.log(`${color} is not in the list`);
} else {
    console.log(`${color} is already in the list`);
}

```

**else if statement** :
``` js
const color = 'blue';
const colors = ['green', 'orange','brown'];

if(colors.length > 0){
    console.log(The list of colors is not empty)
} else if(!colors.includes(color)){
    console.log(`${color} is not in the list`);
} else {
    console.log(`${color} is already in the list`);
}
```

**logical operators**:
```
|| -> logical OR; at least one condition is true
&& -> logical AND; all condition should be true
!  -> logical NOT; negates the boolean value
```

#### Keywords: `break` , `continue`
> Used to control loop execution.

`break;` : is used to completely terminate the loop's execution and will proceed with the first statement after the loop. It is also used in switch cases to exit the switch block.

``` js
const age = [10, 15, 20, 60, 30, 25];
for (let counter =0; counter < age.length ; counter++){
    console.log('age', age[i]);

    if(age[i] === 60){
        console.log("you're old");
        break;
    }
}

```

`continue`: is used to escape the current iteration and will then proceed to the next iteration.

``` js
const age = [10, 15, 20, 60, 30, 25];
for (let counter =0; counter < age.length ; counter++){
    
    if(age[i] === 60){
        continue;
    }
    console.log('age', age[i]);
}

```

**switch statement**: provides a way to select one of many code blocks to be executed based on the evaluation of an expression.

``` js
const grade = 75;

switch(true){
    case grade >== 95:
        console.log(`congratulations for getting ${grade}`);
        break;
    case grade < 95 && grade >== 85:
        console.log(`try harder to get a grade higher than ${grade}`);
        break;
    case grade < 85:
        console.log(`you get a grade of ${grade}`);
        break;
    default:
        console.log('invalid grade!')
}
```