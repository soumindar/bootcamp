const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('ok');
  }, 1000);
});

// console.log(promise1);
// promise1
//   .then(str => {console.log(str)});


const createPromise = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('ok');
    }, 1000);
  });
};

// const promise2 = createPromise();
// promise2
//   .then(str => {console.log(str)});


const execPromise = function () {
  console.log('mulai');
  const promise3 = createPromise();  
  promise3.then(str => {console.log(str)});
  console.log('selesai');
};

// execPromise();

const asyncExecPromise = async function () {
  console.log('mulai');
  const promise3 = await createPromise();
  console.log(promise3);
  console.log('selesai');
};

// asyncExecPromise();

console.log('mulai1');
(async () => {
  console.log('mulai2');
  const promise3 = await createPromise();
  console.log(promise3);
  console.log('selesai2');
})();
console.log('selesai1');