# Objects in Javascript

Objectives:
1. Define what is an object in javascript.
2. Create an object in javascript.
3. Define the importance and use of object in javascript.

`object` : In real life, objects have properties and things they can do, and it's the same with the objects in every programming language. ECMA-262 defines an object as an unordered collection of properties. It simply means that an object is an array of values in no particular order.

![Alt text](image.png)

*Source: https://www.scientecheasy.com/wp-content/uploads/2022/03/javascript-object-example.png*

### Create a new object in javascript with object literal notation and Object Constructor

> In creating an array we commonly use square brackets `[]`, but when creating object literal we use curly braces`{}`.

Object literal notation:
``` js
let user = {
    name: 'Juan',
    age: 24,
    email: 'juandelacruz143@mapagmahal.com',
    location: 'The Philippines'
}
```

Object Constructor:
``` js
const user = new Object();
user.name = 'Juan';
user.age = 24;
user.email = 'juandelacruz143@mapagmahal.com';
user.location = 'The Philippines';
```

Custom Object Constructor:
``` js
function User(name, age, email, location) {
  this.name = name;
  this.age = age;
  this.email = email;
  this.location = location;
}

const user = new User('Juan', 24, 'juandelacruz143@mapagmahal.com', 'The Philippines');
```
#### Two ways to access and update properties of an object in javascript

**Using Dot Notation**
```js
console.log(user.name);
user.name = 'John';
console.log(user.name)
```

**Square Bracket Notation**
```js
console.log(user['name']);
user['name'] = 'John';
console.log(user['name'])
```

#### Adding a method to object and calling it with dot notation
```js
let user = {
    name: 'Juan',
    age: 24,
    email: 'juandelacruz143@mapagmahal.com',
    location: 'The Philippines',
    verify: function (){
        console.log('the user is verified');
    }
}
user.verify();
```

shorter hand version:
``` js
let user = {
    name: 'Juan',
    age: 24,
    email: 'juandelacruz143@mapagmahal.com',
    location: 'The Philippines',
    verify (){
        console.log('the user is verified');
    }
}
user.verify();
```
> Note: Always remember that a regular function is not defined inside an object, but a method is.

#### The keyword `this`
`this`: is a javascript keyword and is a context object. It represents the context in which the current code is executed. The value of this is gonna be different depending on where and how we use it.

```js
let user = {
    name: 'Juan',
    age: 24,
    email: 'juandelacruz143@mapagmahal.com',
    location: 'The Philippines',
    verify: function (){
        console.log('the user is verified');
    },
    logName: function(){
        console.log(this.name);
    }
}
```

- In an object method, `this` refers to the `object`.
- Alone, `this` refers to the `global object`.
- In a function, `this` refers to the `global object`.
- In a `function`, in strict mode, this is `undefined`.
- In an `event`, this refers to the element that received the `event`.
- Methods like `call()`, `apply()`, and `bind()` can refer this to any object.

---
### Primitive and Reference Types
Primitive data types and Reference data types differs on how they are stored and used in memory.
Primitive data types are stores in a region of a computer's memory called stack which has a limited
amount of storage which is why it is only use to store short-lived variables and data. On the other hand,
Reference data types like Objects, Arrays and Dates are stored in the other regions of a computer's memory called heap.
It is used for dynamic memory allocation, which is good for storing larger and long-lived data structures such as objects.

| Primitive Types | Reference Types     |
|-----------------|---------------------|
| Number          | All types of object: |
| String          | Object literals     |
| Boolean         | Arrays              |
| Null            | functions           |
| Undefined       | dates               |
| Symbol          | all other objects   |

