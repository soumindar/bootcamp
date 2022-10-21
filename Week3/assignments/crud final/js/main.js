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

    // console.log(deleteButtons);
    // deleteButtons.forEach((btn) => {
    //         btn.addEventListener('click', () => {
    //             console.log('delete clicked');
    //         });
    //     }
    // );


    // WORKED
    let tableBody = document.querySelector('#tableBody');

    tableBody.addEventListener('click', (event) => event.srcElement.classList.contains('delBtn') ?
                                                    deleteData(event) :
                                                    event.srcElement.classList.contains('editBtn') ?
                                                    editData(event) : false
    )

} catch(e) {
    console.log(e);
}