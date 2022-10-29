import { printData } from "./printData.js";
// import { IndexError } from "./error.js";

const deleteData = (id) => {
    try {
        // let button = event.target;
        // let index = button.getAttribute('data-index');;
        // if ((id == null) || (id == undefined) || (id < 0) || (id >= userData.length)) {
        //     throw new IndexError('Delete function argument is wrong!');
        // }
        
        (async () => {
            const del = await fetch(`http://104.248.154.192:3005/person/${id}`, 
            {
                method: 'DELETE',
            });
            const responseDel = await del.json();
            if (responseDel.message === 'success') {
                alert(`Delete data ${responseDel.message}`);
            }

            printData();
        })();
    } catch (err) {
        console.log(err);
    }   
};

export {deleteData};