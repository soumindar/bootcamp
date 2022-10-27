import { userData } from "../data/userData.js";
import { printData } from "./printData.js";
import { IndexError } from "./error.js";

const deleteData = (index) => {
    try {
        // let button = event.target;
        // let index = button.getAttribute('data-index');;
        if ((index == null) || (index == undefined) || (index < 0) || (index >= userData.length)) {
            throw new IndexError('Delete function argument is wrong!');
        }
        userData.splice(index, 1);
        printData();
    } catch (error) {
        console.log(error);
    }   
};

export {deleteData};