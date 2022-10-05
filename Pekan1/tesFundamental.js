let biner = 0b10;
let octa = 0o12;
let hexa = 0x12;
let duaPangkatTiga = 2**3;

let falsy = false || 0 || 0b0 || null; //false
let truth = true || 1 || 5 || 0x12; //true

let typeCoercion = ((5 == `5`) && (5 == '5') && (5 == "5")); //true
let tipeDataHarusSama = (5 === '5'); //false

let cekTipeData = typeof(truth);

let nilai1 = 50;
let nilai2 = 50;
let isNumber = "number";

if ((typeof(nilai1) == isNumber) && (typeof(nilai2)== isNumber)) {
    if (!(nilai1 >= nilai2)) {
        console.log("nilai1 kurang dari nilai2");
    } else if(nilai1 > nilai2) {
        console.log("nilai1 lebih dari nilai2");
    } else {
        console.log("nilai1 sama dengan nilai2");
    }
} else {
    console.log("tipe data tidak valid");
}

let text = (nilai1 < nilai2) ? "nilai1 kurang dari nilai2" : (nilai1 == nilai2) ? "nilai1 sama dengan nilai2" : "nilai1 tidak kurang dari nilai2";
console.log(text);

// cara menggunakan template. string dinamis sesuai variabel.
let text1 = "tes 123";
let text2 = `text2 berisi text1 = ${text1}`;
let text3 = "text3 berisi text1 = " + text1;
console.log(text2);
console.log(text3);