for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (i == 0 || i == 4) {
            document.write("*");
        } else if (j == 0 || j == 4) {
            document.write("*");
        } else {
            document.write(" ");
        }
    }
    document.write("</br>");
}

// console.log(pola);

// output tanpa newline
// process.stdout.write("tes123");
// process.stdout.write("tes345");

// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         document.write("*");
//     }
//     document.write("</br>");
// }

