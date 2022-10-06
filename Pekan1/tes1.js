let re = /((^Mr\.)|(Mrs\.)|(Ms\.)|(Dr\.)|(Er\.))[(a-z)(A-Z)]+/;

let re2 = /?![^(a-z)(A-Z)]/;
let re3 = /^[Mr\.|Mrs\.|Ms\.|Dr\.|Er\.]/;
let re4 = /(^abc)efd*/;

let s = "Mrs.Y";

console.log(re2.test(s));