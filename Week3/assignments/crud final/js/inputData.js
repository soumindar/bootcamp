import { userData } from "../data/userData.js";
import { printData } from "./printData.js";

const inputData = () => {
    try {
        let nikInputObj = document.getElementById('nikInput');
        let nameInputObj = document.getElementById('nameInput');
        let ageInputObj = document.getElementById('ageInput');

        let nikInput = nikInputObj.value;
        let nameInput = nameInputObj.value;
        let ageInput = ageInputObj.value;

        let emptyField = [];
        let isEmpty = 0;
        if (nikInput =='') {
            emptyField.push('NIK');
            isEmpty = 1;
        }

        if (nameInput =='') {
            emptyField.push('Name');
            isEmpty = 1;
        }

        if (ageInput =='') {
            emptyField.push('Age');
            isEmpty = 1;
        }

        if (isEmpty) {
            let strAlert = emptyField.join(', ');
            strAlert += ' cannot be empty';
            throw strAlert;
        }

        let re = /^\d{16}$/;
        if (!re.test(nikInput)) {
            throw 'NIK must be 16 digit positive integer';
        }

        ageInput = Number(ageInput);
        if ((isNaN(ageInput)) || (Math.floor(ageInput) - ageInput != 0) || (ageInput <= 0)) {
            throw 'Age must be a positive integer';
        }

        userData.push({nik: nikInput, name: nameInput, age: ageInput});
        nikInputObj.value = '';
        nameInputObj.value = '';
        ageInputObj.value = '';
        printData();
    } catch (error) {
        alert(error);
    }
}

export {inputData};