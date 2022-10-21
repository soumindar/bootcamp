import { userData } from "../data/userData.js";
import { printData } from "./printData.js";

const deleteData = (event) => {
    try {
        let button = event.target;
        let index = button.id.replace('delBtn', '');
        if ((index == null) || (index == undefined) || (index < 0) || (index >= userData.length)) {
            throw 'Delete function argument is wrong!';
        }
        userData.splice(index, 1);
        printData();
    } catch (error) {
        alert(error);
    }   
}

export {deleteData};