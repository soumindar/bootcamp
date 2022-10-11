const orderCoffee = function (callbackFunction) {
    let coffee = null;
    console.log('processing2, please wait...');
    setTimeout(function () {
                    coffee = 'coffee2 is done';
                    callbackFunction(coffee);
                },
                3000);
}

orderCoffee(function callbackFunction(a) {
                console.log(a);
            });
