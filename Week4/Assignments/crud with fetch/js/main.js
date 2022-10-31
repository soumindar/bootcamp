import { inputData } from './inputData.js';
import { printData } from './printData.js';
import { sortData } from './sortData.js';
import { userData } from './getData.js';

try {
    document.getElementById("inputBtn").addEventListener('click', inputData);
    document.getElementById("sortAscending").addEventListener('click', sortData);
    document.getElementById("sortDescending").addEventListener('click', sortData);

    setTimeout(() => {
        printData(userData);
    }, 1000);
} catch(e) {
    console.log(e);
}