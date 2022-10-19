try {
    try {
        try {
            console.log('try3');
        } catch {
            console.log('error3')
        }
        console.log('try2');
    } catch (e) {
        console.log('error2');
    } finally {
        console.log('finally2');
    }
    console.log('try1');
} catch {
    console.log('catch1');
}