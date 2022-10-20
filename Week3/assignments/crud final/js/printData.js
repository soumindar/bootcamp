import { userData } from "../data/userData.js";
import { deleteData } from "./deleteData.js";
import { editData } from "./editData.js";

const printData = () => {
    try {
        let tableBody = document.getElementById('tableBody');
        tableBody.innerHTML = '';

        for (let i in userData) {
            let number = Number(i)+1;
            let deleteButton =  `<button 
                                    id="delBtn${i}"
                                    index="${i}"
                                    type="button"
                                    class="btn btn-danger delBtn"
                                >Delete</button>`;

            let editButton =    `<button
                                    id="editBtn${i}"
                                    index="${i}"
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
    } catch(error) {
        console.log(error);
    }
}

export {printData};