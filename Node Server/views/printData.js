import { userData } from "../data/userData.js";
import { deleteData } from "./deleteData.js";
import { editData } from "./editData.js";

const printData = () => {
    try {
        fetch('./data.json')
            .then(response => response)
        let tableBody = document.getElementById('tableBody');
        tableBody.innerHTML = '';

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

        $('.editBtn').on('click', function() {
            editData($(this).data('index'));
        });

        
        $('.delBtn').on('click', function () {
            deleteData($(this).data('index'));
        });

    } catch(error) {
        console.log(error);
    }
}

export {printData};