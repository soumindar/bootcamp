try {
    myRoutine();
} catch (e) {
    if (e instanceof RangeError) {
        console.log(e);
    } else {
        console.log('asd');
        // throw e;   // re-throw the error unchanged
    }
}
  