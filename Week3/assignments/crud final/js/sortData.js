import { userData } from '../data/userData.js';
import { printData } from './printData.js';

function sortData(element) {
    try {
        let button = element.target;
        let isAscending = (button.id == 'sortAscending');
        let isDescending = (button.id == 'sortDescending');

        if (isAscending) userData.sort((a, b) => a.nik - b.nik);
        if (isDescending) userData.sort((a, b) => b.nik - a.nik);

        printData();
    } catch(error) {
        console.log(error);
    }
    
}

export {sortData};