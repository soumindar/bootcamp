const orderCoffee = callback => {
    let coffee = null;
    console.log('processing, please wait...');
    setTimeout(() => {
        coffee = 'coffee is done';
        callback(coffee);
    }, 3000);
}

orderCoffee((a) => console.log(a));