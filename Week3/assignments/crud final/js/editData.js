import { userData } from "../data/userData.js";
import { printData } from "./printData.js";

const editData = (index) => {
    try {
        // let button = element.target;
        // let index = button.id.replace('editBtn', '');
        if ((index == null) || (index == undefined) || (index < 0) || (index >= userData.length)) {
            throw 'Edit function argument is wrong!';
        }

        try {
            let strPrompt = `${userData[index].nik},${userData[index].name},${userData[index].age}`;
            let strEdit = prompt(`Input new data with format: "NIK,name,age"`, strPrompt);

            if (strEdit != null) {
                let arrEdit = strEdit.split(',');

                if (arrEdit.length != 3) {
                    throw 'Wrong input format!';
                }

                let newNik = arrEdit[0];
                let newName = arrEdit[1];
                let newAge = arrEdit[2];

                if ((newNik=='') || (newName =='') || (newAge =='')) {
                    throw 'Wrong input format!';
                }
                
                let re = /^\d{16}$/;
                if (!re.test(newNik)) {
                    throw 'NIK must be 16 digit positive integer';
                }

                newAge = Number(newAge);
                if ((isNaN(newAge)) || (Math.floor(newAge) - newAge != 0) || (newAge <= 0)) {
                    throw 'Age must be a positive integer';
                }

                let newData = {
                    nik: newNik,
                    name: newName,
                    age: newAge
                };
                userData[index] = newData;

                printData();
            }
        } catch (error) {
            alert(error);
            editData(n);
        }
    } catch (error) {
        console.log(error);
    }
}

export {editData};