console.log('satu');

setTimeout(() => {
    console.log('dua');
}, 1000);

console.log('tiga');

// setTimeout is async. It will go to Web API, wait 1000ms, then send its callback to callback queue
// stack will continue the code to run console.log('tiga')
// once the stack is empty, event loop will move setTimeout callback to the stack to be run