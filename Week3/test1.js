try {
    myRoutine();
} catch (e) {
    if (e instanceof RangeError) {
        console.log(e);
    } else {
        throw e;  // re-throw the error unchanged
    }
}
  