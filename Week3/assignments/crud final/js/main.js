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

    deleteButtons.forEach(element => {
        element.addEventListener('click', element => {
            let index = element.getAttribute('index');
            deleteData(index);
        });
    });

    editButtons.forEach(element => {
        element.addEventListener('click', element => {
            let index = element.getAttribute('index');
            editData(index);
        });
    });
} catch(e) {
    console.log(e);
}