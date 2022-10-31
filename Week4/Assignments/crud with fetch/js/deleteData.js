import { printData } from "./printData.js";
import { getData } from "./getData.js";

const deleteData = (id) => {
    try {        
        (async () => {
            const del = await fetch(`http://104.248.154.192:3005/person/${id}`,
            {
                method: 'DELETE',
            });
            
            const responseDel = await del.json();
            if (responseDel.message === 'success') {
                alert(`Delete data ${responseDel.message}`);
            }

            const userData = await getData();
            printData(userData);
        })();
    } catch (err) {
        console.log(err);
    }   
};

export {deleteData};