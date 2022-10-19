let userData = [];
function inputData() {
    let nikInput = document.getElementById('nikInput');
    let nameInput = document.getElementById('nameInput');
    let ageInput = document.getElementById('ageInput');

    let strAlert = [];
    let showAlert = 0;
    if (nikInput =='') {
        strAlert.push('NIK');
        showAlert = 1;
    }
    if (nameInput =='') {
        strAlert.push('Name');
        showAlert = 1;
    }
    if (ageInput =='') {
        strAlert.push('Age');
        showAlert = 1;
    }

    if (showAlert) {
        let str = "";
        for (let i in strAlert) {
            str += strAlert[i];
            if (i < strAlert.length-1) {
                str += ', ';
            }
        }
        str += 'cannot be empty!';
        alert(str);
    } else {
        userData.push({nik: nikInput.value, name: nameInput.value, age: ageInput.value});
        nikInput.value = '';
        nameInput.value = '';
        ageInput.value = '';
        printData();
    }
}

function deleteData(n) {
    userData.splice(n, 1);
    printData();
}

function editData(n) {
    let strEdit = prompt(`Input new data with format: "NIK,name,age"`, `${userData[n].nik}, ${userData[n].name}, ${userData[n].age}`);
    let arrEdit = strEdit.split(',');

    if (arrEdit.length == 3) {
        let objEdit = {
            nik: arrEdit[0],
            name: arrEdit[1],
            age: arrEdit[2]
        };
        userData[n] = objEdit;
        printData();
    } else {
        alert('Wrong input!');
        editData(n);
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
                                onclick="deleteData(${i})"
                            >Delete</button>`;

        let editButton =    `<button
                                id="editBtn${i}"
                                type="button"
                                class="btn btn-success"
                                onclick="editData(${i})"
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
    }
}

function sortData(order) {
    isAscending = (order == 'ascending');
    isDescending = (order == 'descending');

    for (let i in userData) {
        let min = 999999;
        let max = -1;
        let swapThis = -1;
        for (let j = i; j < userData.length; j++) {
            if ((userData[j].nik < min) && (isAscending)) {
                min = userData[j].nik;
                swapThis = j;
            } else if ((userData[j].nik > max) && (isDescending)) {
                max = userData[j].nik;
                swapThis = j;
            }
        }
        [userData[i], userData[swapThis]] = [userData[swapThis], userData[i]];
    }

    userData.sort(user)
    printData();
}