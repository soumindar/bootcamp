const printData = () => {
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

export {printData};