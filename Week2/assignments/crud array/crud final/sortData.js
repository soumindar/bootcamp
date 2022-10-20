function sortData(order) {
    isAscending = (order == 'ascending');
    isDescending = (order == 'descending');

    if (isAscending) userData.sort((a, b) => a.nik - b.nik);
    if (isDescending) userData.sort((a, b) => b.nik - a.nik);
    
    printData();
}

export {sortData};