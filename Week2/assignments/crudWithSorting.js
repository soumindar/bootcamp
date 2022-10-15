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
        userData.push([nikInput.value, nameInput.value, ageInput.value]);
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
    let strEdit = prompt(`Input new data with format: "NIK,name,age"`, userData[n]);
    let arrEdit = strEdit.split(',');

    if (arrEdit.length == 3) {
        for (let i in arrEdit) {
            userData[n][i] = arrEdit[i];
        }
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
                            <td>${userData[i][0]}</td>
                            <td>${userData[i][1]}</td>
                            <td>${userData[i][2]}</td>
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
            if ((userData[j][0] < min) && (isAscending)) {
                min = userData[j][0];
                swapThis = j;
            } else if ((userData[j][0] > max) && (isDescending)) {
                max = userData[j][0];
                swapThis = j;
            }
        }
        [userData[i], userData[swapThis]] = [userData[swapThis], userData[i]];
    }

    printData();
}