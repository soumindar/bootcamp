//  Javascript Nuggets - Callback Hell
// after 1s first red;
// after 3s second blue; 4s
// after 2s third green; 6s
// IN SEQUENCE !!!!

const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
const btn = document.querySelector('.btn')



const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        first.style.color = 'red';
    }, 1000);

    resolve();
});

const changeSecond = () => {
    setTimeout(() => {
        second.style.color = 'blue';
    }, 3000);

    return new Promise(() => {
        changeThird();
    });
}

const changeThird = () => {
    setTimeout(() => {
        third.style.color = 'green';
    }, 2000);
}

btn.addEventListener('click', () => {
    // promise1.then(changeSecond);
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
