try {
    // throw 'asd';
    try {
        throw 'qwe';
    } catch (e) {
        console.log(e);
    } finally {
        console.log('asd');
    }
} catch (e) {
    console.log(e);
}