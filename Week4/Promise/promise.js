let a = true;
const f1 = (resolve, reject) => {
    if (a) {
        resolve('ok');
    } else {
        reject('not ok');
    }
}

const promise1 = new Promise(f1);

const printThis = str => {
    console.log(str);
};

promise1.then(printThis);

const promise2 = new Promise((resolve, reject) => {
    if (a) {
        setTimeout(() => {
            resolve('ok2');
        }, 1000);
    } else {
        setTimeout(() => {
            resolve('not ok2');
        }, 1000);
    }
})

console.log('mulai');
console.log(promise2);
promise2
    .finally(() => {console.log(promise2)})
    .then(printThis)
    .catch(printThis);
console.log('selesai');