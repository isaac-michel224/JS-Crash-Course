
// The page says the following:
// alert('Hello World');


//let, const


//let is mutable

// const name = 'John';
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof x);


//const cannot be changed 

// //Concatenation

// console.log('My name is ' + name + ' and I am ' + age);

// //Template String
// console.log(`My name is ${name} and I am ${age}`);


//Search Stuff via String Methods
// const s = 'technology, computers, it, code';
// console.log(s.split(', '));

//Arrays 

// const numbers = new Array(1,2,3,4,5);

// const fruits = ['apples', 'oranges', 'pears'];

// fruits[3] = 'grapes';

// fruits.push('mangos'
// );

// fruits.unshift('strawberries');

// fruits.pop();

// console.log(Array.isArray('hello'));

// console.log(fruits.indexOf('oranges'));

// console.log(fruits);



// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }

// // console.log(person.firstName, person.lastName, person.hobbies [1]);

// // const { firstName, lastName, address: {city} } = person;

// // console.log(city);  //Boston


// //How to Send Data to Server
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);


// For 
// for (let i = 0; i < 10; i++) {
//     console.log(`For Loop Number: ${i}`);

// }

// let i = 0;
// while(i < 10) {
//     console.log(`While Loop Number: ${i}`);
// }

// for (let i = 0; i < todos.length; i++) {
//     console.log(todos[i].text);
// }

// for (let todo of todos) {
//     console.log(todo.id);
// }


// const todos = [
    //     {
    //         id: 1,
    //         text: 'Take out trash',
    //         isCompleted: true
    //     },
    
    //     {
    //         id: 2,
    //         text: 'Meeting with boss',
    //         isCompleted: true
    //     },
    
    //     {
    //         id: 3,
    //         text: 'Dentist appt',
    //         isCompleted: true
    //     }
    // ];
    
    // //for Each,
    
    // // todos.forEach(function(todo) {
    // //     console.log(todo.text);
    // // });
    
    
    // const todoText = todos.filter(function(todo) {
    //     return todo.isCompleted === true;
    // }).map(function(todo)
    // {
    //     return todo.text;
    // })
    
    // console.log(todoCompleted);




    // const x = 4;
    // const y = 10;
    
    // if (x === 10) {
    //     console.log('x is 10');
    // } else if(x > 10) {
    //     console.log('x is greater than 10');
    // } 
    // else {
    //     console.log('x is less than 10');
    // }
    

    // // -- Switch Statements

// const x = 9;

// const color = x > 10 ? 'red' : 'blue';

// switch(color) {
//     case 'green':
//         console.log('color is red');
//         break;
//         case 'blue':
//         console.log('color is blue');
//         break;
//         default:
//         console.log('color is NOT red or blue');
//         break;
// }



    
// const addNums = (num1 = 1, num2=1) => 
//      num1 + 5;

// console.log(addNums(5));



// // Constructor function

// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     this.getBirthYear = function() {
//         return this.dob.getFullYear();
//     }

//     this.getFullName = function() {
//         return `${this.firstName} ${this,lastName}`;
//     }
// }

// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();

//     Person.prototype.getFullName = function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }



// //Instantiate object

// const person1 = new Person('John', 'Doe', '4-3-1980');
// const person2 = new Person('Mary', 'Smith', '3-6-1970');

// // console.log(person1.dob);

// console.log(person1.getBirthYear());
// console.log(person1.getFullName());



// // Class Creation
// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);

//     }

//     getBirthYear() {
//         return this.dob.getFullYear();
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// //Instantiate object

// const person1 = new Person('John', 'Doe', '4-3-1980');
// const person2 = new Person('Mary', 'Smith', '3-6-1970');

// // console.log(person1.dob);

// // console.log(person1.getBirthYear());
// // console.log(person1.getFullName());

// console.log(person2.getFullName());
// console.log(person1);


// //Single Element 

//* Alternative method const form = document.getElementById('my-form');
// console.log(form);*


// https://www.youtube.com/watch?v=hdI2bqOjy3c


// https://www.freecodecamp.org/news/quick-guide-to-understanding-and-creating-reactjs-apps-8457ee8f7123/  

// https://developer.mozilla.org/en-US/docs/Web/javascript





