// import { inputData } from '../views/inputData.js';
import { inputData } from './inputData.js';
import { printData } from './printData.js';
// import { sortData } from '../views/sortData.js';

try {
    $('#inputBtn').on('click', inputData);
    // document.getElementById("sortAscending").addEventListener('click', sortData);
    // document.getElementById("sortDescending").addEventListener('click', sortData);

    printData();
} catch(e) {
    console.log(e);
}