function getRectArea(width, heigth) {
    if (isNaN(width) || isNaN(heigth)) {
        throw 'parameter is not a number';
    }
}

try {
    getRectArea(2,'a');
} catch (e) {
    console.log(e);
}