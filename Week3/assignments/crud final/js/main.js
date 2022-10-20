import {userData} from '../data/userData.js';
import {inputData} from './inputData.js';
import {deleteData} from './deleteData.js'
import {editData} from './editData.js'
import {sortData} from './sortData.js';

printData();

try {
    document.getElementById("inputBtn").addEventListener('click', inputData);
    document.getElementById("sortAscending").addEventListener('click', sortData);
    document.getElementById("sortDescending").addEventListener('click', sortData);
} catch(e) {
    console.log(e);
}