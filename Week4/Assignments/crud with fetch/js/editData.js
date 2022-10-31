import { printData } from "./printData.js";
import { getData } from "./getData.js";
import { IndexError, FormatError, TypeError, NullError } from "./error.js";

const editData = (id) => {
    try {
        const currentNik = $(`#nik${id}`).html();
        const currentName = $(`#name${id}`).html();
        const currentAddress = $(`#address${id}`).html();

        let strPrompt = `${currentNik},${currentName},${currentAddress}`;
        let strEdit = prompt(`Input new data with format: "NIK,name,adress"`, strPrompt);

        if (strEdit != null) {
            let arrEdit = strEdit.split(',');

            if (arrEdit.length != 3) {
                throw new NullError('Wrong input format!');
            }

            let newNik = arrEdit[0];
            let newName = arrEdit[1];
            let newAddress = arrEdit[2];

            if ((newNik=='') || (newName =='') || (newAddress =='')) {
                throw new NullError('Wrong input format!');
            }
            
            let re = /^\d{16}$/;
            if (!re.test(newNik)) {
                throw new FormatError('NIK must be 16 digit positive integer');
            }

            try {
                (async () => {
                    const put = await fetch(`http://104.248.154.192:3005/person/${id}`, {
                        method: 'PUT',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({nik: newNik, nama: newName, alamat: newAddress})
                    });
                    
                    const responsePut = await put.json();
                    if (responsePut.message === 'success') {
                        alert(`Edit data ${responsePut.message}`);
                    }

                    const userData = await getData();
                    printData(userData);
                })();

            } catch(err) {
                console.log(error);
            }
        }
    } catch (error) {
        alert(`(ERROR ${error.code}) ${error.message}`);
        editData(id);
    }
}

export {editData};