"use strict"

// let fruits = [
//     {
//         "id": "1",
//         "name": "Apple",
//         "value": "apple",
//         "color": "Green",
//         "qty": 5 
//     },
//     {
//         "id": "2",
//         "name": "Banana",
//         "value": "banana",
//         "color": "Yellow",
//         "qty": 10
//     },
//     {
//         "id": "3",
//         "name": "Peach",
//         "value": "peach",
//         "color": "Orange",
//         "qty": 2 
//     },
//     {
//         "id": "4",
//         "name": "Strawberry",
//         "value": "strawberry",
//         "color": "Red",
//         "qty": 3
//     },
//     {
//         "id": "5",
//         "name": "Blueberry",
//         "value": "blueberry",
//         "color": "Blue",
//         "qty": 20 
//     }
// ] 

// table.js
const buildFruitTable = () => {                  
  
    let url = 'https://5d0a201cc5896f0014e86804.mockapi.io/dynamicelements/fruits';

    let myDiv = document.getElementById("myThirdDiv")

    let table = document.createElement("table");

    let thead = document.createElement("thead");
    let thRow = document.createElement("tr");

    let thName = document.createElement("th");
    let thValue = document.createElement("th");
    let thColor = document.createElement("th");
    let thQty = document.createElement("th");

    let tbody = document.createElement("tbody") // will use in the forEach loop 

    thName.innerText = "Name";
    thValue.innerText = "Value";
    thColor.innerText = "Color";
    thQty.innerText = "Qty";

    thRow.appendChild(thName);
    thRow.appendChild(thValue);
    thRow.appendChild(thColor);
    thRow.appendChild(thQty);

    thead.appendChild(thRow)

    fetch(url, {
        method: "GET"
    })
    .then(res => res.json())
    .then(json => {

        let fruits = json;

        fruits.forEach(fruit => {
            console.log(fruit.name)
            let tdRow = document.createElement("tr");
            let tdName = document.createElement("td");
            let tdValue = document.createElement("td");
            let tdColor = document.createElement("td");
            let tdQty = document.createElement("td");
    
            tdName.innerText = fruit.name;
            tdValue.innerText = fruit.value;
            tdColor.innerText = fruit.color;
            tdQty.innerText = fruit.qty;
    
            tdRow.appendChild(tdName);
            tdRow.appendChild(tdValue)
            tdRow.appendChild(tdColor)
            tdRow.appendChild(tdQty)
    
            tbody.appendChild(tdRow);    
        })     
    })
    myDiv.appendChild(table);
    table.appendChild(thead);
    table.appendChild(tbody);
}

document.getElementById("fruitTableBtn").addEventListener("click", buildFruitTable)