import { printData } from "./printData.js";
import { getData } from "./getData.js";
import { FormatError, NullError } from "./error.js";

const inputData = () => {
    try {
        let nikInputObj = document.getElementById('nikInput');
        let nameInputObj = document.getElementById('nameInput');
        let addressInputObj = document.getElementById('ageInput');

        let nikInput = nikInputObj.value;
        let nameInput = nameInputObj.value;
        let addressInput = addressInputObj.value;

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

        if (addressInput =='') {
            emptyField.push('Address');
            isEmpty = 1;
        }

        if (isEmpty) {
            let strAlert = emptyField.join(', ');
            strAlert += ' cannot be empty';
            throw new NullError(strAlert);
        }

        let re = /^\d{16}$/;
        if (!re.test(nikInput)) {
            throw new FormatError('NIK must be 16 digit positive integer');
        }

        nikInputObj.value = '';
        nameInputObj.value = '';
        addressInputObj.value = '';

        try {
            (async () => {
                const post = await fetch('http://104.248.154.192:3005/person', 
                    {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({nik: nikInput, nama: nameInput, alamat: addressInput})
                    }
                );
                const responsePost = await post.json();
                if (responsePost.message === 'success') {
                    alert(`Input data ${responsePost.message}`);
                }

                const userData = await getData();
                printData(userData);
            })();
        } catch (err) {
            console.log(err);
        }
    } catch (error) {
        alert(`(ERROR ${error.code}) ${error.message}`);
    }
}

export {inputData};