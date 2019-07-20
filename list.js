"use strict"

// Build fruit list with hard coded array
// let fruits = ['apple', 'banana', 'peach']
// let myDiv = document.getElementById('myDiv')
// let ol = document.createElement('ol')

// fruits.forEach(fruit => {
//     let li = document.createElement('li')
//     li.innerText = fruit   
//     ol.appendChild(li)
// });

// myDiv.appendChild(ol)

 // li.addEventListener('click', () => {
    //     console.log(`${fruit} dynamic event listener fired`)
    // })

// list.js

// Build fruit list with fetch method
const getFruitList = () => {

    let url = 'https://5d0a201cc5896f0014e86804.mockapi.io/dynamicelements/fruits';

    let myDiv = document.getElementById('myDiv')
    let ol = document.createElement('ol')

    fetch(url, {
        method: 'GET'
    })
    .then(res => res.json())
    .then(json => {
        console.log(json) // returns array of objects
        
        let fruits = json; // storing our array in 'fruits' variable       

        fruits.forEach(fruit => {
            let li = document.createElement('li');
            li.innerText = fruit.name;  // dont forget '.name' !! 
            ol.appendChild(li);
        });

        myDiv.appendChild(ol)
    })
}

document.getElementById("fruitBtn").addEventListener("click", getFruitList);
