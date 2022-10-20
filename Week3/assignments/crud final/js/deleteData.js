const deleteData = (element) => {
    try {
        let button = element.target;
        let index = button.id.replace('delBtn', '');
        if ((index == null) || (index == undefined) || (index < 0) || (index >= userData.length)) {
            throw 'Delete function argument is wrong!';
        }
        userData.splice(index, 1);
        printData();
    } catch (error) {
        alert(error);
    }   
}

export {deleteData};