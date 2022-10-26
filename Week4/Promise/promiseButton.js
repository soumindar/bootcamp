//  Javascript Nuggets - Callback Hell
// after 1s first red;
// after 3s second blue; 4s
// after 2s third green; 6s
// IN SEQUENCE !!!!

const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const btn = document.querySelector('.btn');



const promise1 = () => {
    setTimeout(() => {
        first.style.color = 'red';
    }, 1000);

    return new Promise((resolve) => {
        resolve();
    });
};

btn.addEventListener('click', () => {
    promise1()
        .then(() => {
            setTimeout(() => {
                second.style.color = 'blue';
            }, 3000);

            return new Promise((resolve) => {
                resolve();
            });
        })
        .then(() => {
            setTimeout(() => {
                third.style.color = 'green';
            }, 2000);
        })
});


//   setTimeout(() => {
//     first.style.color = 'red'
//     setTimeout(() => {
//       second.style.color = 'blue'
//       setTimeout(() => {
//         third.style.color = 'green'
//       }, 2000)
//     }, 3000)
//   }, 1000)
