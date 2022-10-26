// import { userData } from "../data/userData.js";
import { deleteData } from './deleteData.js';
import { editData } from './editData.js';
import { inputData } from './inputData.js';
import { printData } from './printData.js';
import { sortData } from './sortData.js';

try {
    // document.getElementById("inputBtn").addEventListener('click', inputData);
    // document.getElementById("sortAscending").addEventListener('click', sortData);
    // document.getElementById("sortDescending").addEventListener('click', sortData);

    fetch('./data/userData.json')
        .then(response => response.json())
        .then(data => {
            printData(data.userData);
        });
    
} catch(e) {
    console.log(e);
}