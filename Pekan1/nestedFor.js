let pola = "";

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (i == 0 || i == 4) {
            pola += "*";
        } else if (j == 0 || j == 4) {
            pola += "*";
        } else {
            pola += " ";
        }
    }
    pola += "\n";
}

console.log(pola);

// output tanpa newline
// process.stdout.write("tes123");
// process.stdout.write("tes345");

