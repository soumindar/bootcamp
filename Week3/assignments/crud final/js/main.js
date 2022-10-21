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


    // let deleteButtons = document.querySelectorAll('.delBtn');
    // let editButtons = document.querySelectorAll('.editBtn');

    // deleteButtons.forEach((btn) => {
    //         btn.addEventListener('click', () => {
    //             console.log('delete clicked');
    //         });
    //     }
    // );

    let tableBody = document.querySelector('#tableBody');
    console.log(tableBody);

    tableBody.addEventListener('click', (event) => {
        if (event.srcElement.classList.contains('delBtn')) {
            let index = event.srcElement.getAttribute('data-index');
            deleteData(index);
        }
        if (event.srcElement.classList.contains('editBtn')) {
            let index = event.srcElement.getAttribute('data-index');
            editData(index);
        }
    })

} catch(e) {
    console.log(e);
}