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
  const promise3 = createPromise();
  console.log('tes');
  promise3.then(str => {console.log(str)});
};

execPromise();

const asyncExecPromise = async function () {
  const promise3 = await createPromise();
  console.log(promise3);
};

// asyncExecPromise();