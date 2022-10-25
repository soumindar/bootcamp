function getDataMhs(url, success, error) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(xhr.response);
            } else if (xhr.readyState === 404) {
                error();
            }
        }
    }

    xhr.open('get', url);
    xhr.send();
}


console.log('mulai');

getDataMhs('./dataMhs.json', result => {
    const mhs = JSON.parse(result);
    mhs.forEach(m => {
        console.log(m.nama);
    })
}, () => {});

console.log('selesai')

// ajax is async, it will go from stack to Web API