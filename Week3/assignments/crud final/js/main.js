import { deleteData } from './deleteData.js';
import { editData } from './editData.js';
import { inputData } from './inputData.js';
import { printData } from './printData.js';
import { sortData } from './sortData.js';

try {
    document.getElementById("inputBtn").addEventListener('click', inputData);
    document.getElementById("sortAscending").addEventListener('click', sortData);
    document.getElementById("sortDescending").addEventListener('click', sortData);

    printData();


    let deleteButtons = document.querySelectorAll('.delBtn');
    let editButtons = document.querySelectorAll('.editBtn');

    console.log(deleteButtons);
    console.log(editButtons);

    deleteButtons.forEach(element => {
        let index = element.getAttribute('index');
        console.log(index);
        element.addEventListener('click', deleteData(index));
    });

    editButtons.forEach(element => {
        let index = element.getAttribute('index');
        console.log(index);
        element.addEventListener('click', e => editData(index));
    });
    
    printData();
} catch(e) {
    console.log(e);
}