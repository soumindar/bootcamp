// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j <= i; j++) {
//         document.write("*");
//     }
//     document.write("</br>");
// }

let n = 5;
let countLine = 0;
let countStar = 0
for (let i = 1; i <= (1+n)*n/2; i++) {
    process.stdout.write("*");
    countStar++;
    if (countStar > countLine) {
        process.stdout.write("\n");
        countLine++;
        countStar = 0;
    }
}

// output tanpa newline
// process.stdout.write("tes123");
// process.stdout.write("tes345");