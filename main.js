
// Shows everything we have on our page - check console:
// // console.log(window);

// // alert(1);

// // Single element selectors

// console.log(document.getElementById('my-form'));  // Functionality with id in html page
// console.log(document.querySelector('h1')); //Functionality with everything else, such as class = .container and <h1>


// //Multiple element selectors

// console.log(document.querySelectorAll('.item')); // Functionality with Item List
// // console.log(document.getElementsByClassName('item'));
// // console.log(document.getElementsByTagName('li'));

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item)); //Functionality for each list item in console

// const ul = document.querySelector('.items');
// // ul.remove();

// // ul.lastElementChild.remove();

// ul.firstElementChild.textContent = 'Hello'; //Change Item 1 to read 'Hello' now

// ul.children[1].innerText = 'Brad'; //Changes second item list to read 'Brad;
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>'; //Add HTML dynamically with this


// const btn = document.querySelector('.btn');
// btn.style.background = 'red'; //Change CSS dynamically using this

// btn.addEventListener('click', (e) => {
//     e.preventDefault();  //stops from flashing and going away quickly
//     console.log(e.target.className); //Gives element which the button is on
// });  //Click Button Action

// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//    document.querySelector('body').classList.add('bg-dark');
//    document.querySelector('.items')
//    .lastElementChild.innerHTML = '<h1>Hello</h1>';
// });

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(e);
// } );

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        // console.log('success');

        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`
        ${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //Clear the fields

        nameInput.value = '';
        emailInput.value = '';

        // '' set it to nothing , not getting saved anywhere
    }

    // console.log(nameInput.value); // adding .value shows name of user in console
}


// https://www.freecodecamp.org/news/quick-guide-to-understanding-and-creating-reactjs-apps-8457ee8f7123/  

// https://developer.mozilla.org/en-US/docs/Web/javascript