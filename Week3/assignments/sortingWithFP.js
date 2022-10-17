let data = [4, 2, 5, 1, 3, 1];

const sortAscending = (arr, sorted = []) => {
    let arrCopy = [...arr];
    if(arrCopy.length == 0) {
        return sorted;
    } else {
        let min = Math.min.apply(Math, arrCopy);
        sorted.push(min);
        arrCopy.splice(arrCopy.indexOf(min), 1);
        return sortAscending(arrCopy, sorted);
    }
}

const sortDescending = (arr, sorted = []) => {
    let arrCopy = [...arr];
    if(arrCopy.length == 0) {
        return sorted;
    } else {
        let max = Math.max.apply(Math, arrCopy);
        sorted.push(max);
        arrCopy.splice(arrCopy.indexOf(max), 1);
        return sortDescending(arrCopy, sorted);
    }
}

const sort = (arr, order) =>
(order == 'ascending') ? sortAscending(arr) :
(order == 'descending') ? sortDescending(arr) : 
'wrong order';
    

let sortedData = sort(data, 'ascending');
console.log(data);
console.log(sortedData);