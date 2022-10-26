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
    return new Promise((resolve) => {
        setTimeout(() => {
            first.style.color = 'red';
            resolve();
        }, 1000);
    });
};

btn.addEventListener('click', () => {
    promise1()
        .then(() => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    second.style.color = 'blue';
                    resolve();
                }, 1000);
            });
        })
        .then(() => {
            setTimeout(() => {
                third.style.color = 'green';
            }, 1000);
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
