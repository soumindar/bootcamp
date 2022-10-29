import { deleteData } from "./deleteData.js";
import { editData } from "./editData.js";

const printData = () => {
    try {
        let tableBody = document.getElementById('tableBody');
        tableBody.innerHTML = '';

        (async () => {
            const response = await fetch('http://104.248.154.192:3005/person');
            const readData = await response.json();
            const userData = readData.data;

            for (let i in userData) {
                let number = Number(i) + 1;
                let deleteButton =  `<button 
                                        data-id="${userData[i].id}"
                                        type="button"
                                        class="btn btn-danger delBtn"
                                    >Delete</button>`;

                let editButton =    `<button
                                        data-id="${userData[i].id}"
                                        type="button"
                                        class="btn btn-success editBtn"
                                    >Edit</button>`;

                let tableRow = `<tr>
                                    <th scope="row">${number}.</th>
                                    <td id="nik${userData[i].id}">${userData[i].nik}</td>
                                    <td id="name${userData[i].id}">${userData[i].nama}</td>
                                    <td id="address${userData[i].id}">${userData[i].alamat}</td>
                                    <td>
                                        ${deleteButton}
                                        ${editButton}
                                    </td>
                                </tr>`;
                
                tableBody.innerHTML += tableRow;
            }

            $('.editBtn').on('click', function() {
                editData($(this).data('id'));
            });
            
            $('.delBtn').on('click', function () {
                deleteData($(this).data('id'));
            });
        })();
    } catch(error) {
        console.log(error);
    }
}

export {printData};