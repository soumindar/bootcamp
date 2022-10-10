for (let i = 1; i < 11; i++) {
    if (i % 2 != 0) {
        // console.log(i);
        document.write("<p>tes " + i.toString() + "</p>");
    }
}

let ulangi = confirm("ulangi?");
let counter = 0;

while (ulangi) {
    counter++;
    ulangi = confirm("ulangi lagi?");
}

document.write("perulangan telah dilakukan sebanyak " + counter + " kali");

let i = 1;
while(i <= 10) {
    if(i % 2 == 1) {
        document.write("<p>i = " + i.toString() + " </p>");
    }
    i++;
}