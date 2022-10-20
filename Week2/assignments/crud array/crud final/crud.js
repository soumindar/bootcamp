import * as import1 from './userData.js';
import * as import2 from './sortData.js';

let userData = import1.userData;
let sortData = import2.sortData;

printData();

try {
    document.getElementById("inputBtn").addEventListener('click', inputData);
    document.getElementById("sortAscending").addEventListener('click', sortData);
    document.getElementById("sortDescending").addEventListener('click', sortData);
} catch(e) {
    console.log(e);
}

function inputData() {
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

function deleteData(element) {
    try {
        let button = element.target;
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

function editData(element) {
    try {
        let button = element.target;
        let index = button.id.replace('editBtn', '');
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

function printData() {
    let tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    for (let i in userData) {
        let number = Number(i)+1;
        let deleteButton =  `<button 
                                id="delBtn${i}""
                                type="button"
                                class="btn btn-danger"
                            >Delete</button>`;

        let editButton =    `<button
                                id="editBtn${i}"
                                type="button"
                                class="btn btn-success"
                            >Edit</button>`;

        let tableRow = `<tr>
                            <th scope="row">${number}.</th>
                            <td>${userData[i].nik}</td>
                            <td>${userData[i].name}</td>
                            <td>${userData[i].age}</td>
                            <td>
                                ${deleteButton}
                                ${editButton}
                            </td>
                        </tr>`;
        
        tableBody.innerHTML += tableRow;

        try {
            document.getElementById(`delBtn${i}`).addEventListener('click', deleteData);
            document.getElementById(`editBtn${i}`).addEventListener('click', editData);
        } catch (error) {
            console.log(error);
        }
        
    }
}