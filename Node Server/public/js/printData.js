// import { deleteData } from "./deleteData.js";
// import { editData } from "./editData.js";

const printData = () => {
    try {
        let tableBody = document.getElementById('tableBody');
        tableBody.innerHTML = '';

        (async () => {
            const response = await fetch('../data/userData.json');
            const data = await response.json();
            const userData = data.userData;

            for (let i in userData) {
                let number = Number(i)+1;
                let deleteButton =  `<button 
                                        id="delBtn${i}"
                                        data-index="${i}"
                                        type="button"
                                        class="btn btn-danger delBtn"
                                    >Delete</button>`;
    
                let editButton =    `<button
                                        id="editBtn${i}"
                                        data-index="${i}"
                                           type="button"
                                        class="btn btn-success editBtn"
                                    >Edit</button>`;
    
                let tableRow = `<tr>
                                    <th scope="row">${number}.</th>
                                    <td>${userData[i].NIK}</td>
                                    <td>${userData[i].Name}</td>
                                    <td>${userData[i].Age}</td>
                                    <td>
                                        ${deleteButton}
                                        ${editButton}
                                    </td>
                                </tr>`;
                
                tableBody.innerHTML += tableRow;
            }
    
            // $('.editBtn').on('click', function() {
            //     editData($(this).data('index'));
            // });
    
            
            // $('.delBtn').on('click', function () {
            //     deleteData($(this).data('index'));
            // });
        })();
    } catch(err) {
        console.log(err);
    }
}

export {printData};