import { inputData } from './inputData.js';
import { printData } from './printData.js';
import { sortData } from './sortData.js';

try {
    document.getElementById("inputBtn").addEventListener('click', inputData);
    document.getElementById("sortAscending").addEventListener('click', sortData);
    document.getElementById("sortDescending").addEventListener('click', sortData);

    printData();
} catch(e) {
    console.log(e);
}