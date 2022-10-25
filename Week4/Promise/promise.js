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

// f1(printThis, printThis);

promise1.then(printThis).catch(printThis);