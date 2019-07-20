"use strict";

// select.js

// Build select with hard coded array
//  let fruits = ['apple', 'banana', 'peach']
//  let mySecondDiv = document.getElementById('mySecondDiv')
//  let select = document.createElement('select')

// fruits.forEach(fruit => {
//     let option = document.createElement('option');
//     option.innerText = fruit;   
//     select.appendChild(option)
// });

// mySecondDiv.appendChild(select)

// select.js
// Build select with fetch request
const getFruitOptions = () => {

    let url = 'https://5d0a201cc5896f0014e86804.mockapi.io/dynamicelements/fruits';

    let mySecondDiv = document.getElementById('mySecondDiv')
    let select = document.createElement('select')

    fetch(url, {
        method: 'GET'
    })
    .then(res => res.json())
    .then(json => {
        console.log(json) // returns array of objects
        
        let fruits = json; // storing our array in 'fruits' variable       

        fruits.forEach(fruit => {
            let option = document.createElement('option');
            option.innerText = fruit.name;
            option.value = fruit.value;  
            select.appendChild(option)

            // Bonus logic! 
            if(option.value === "peach"){
                option.selected = true;
            }
        });

        mySecondDiv.appendChild(select)
    })
}

document.getElementById("fruitSelectBtn").addEventListener("click", getFruitOptions);
