let re = /((^Mr\.)|(^Mrs\.)|(^Ms\.)|(^Dr\.)|(^Er\.))[(a-z)(A-Z)]+$/;

let re2 = /[^(a-z)(A-Z)]/;
let re3 = /^[Mr\.|Mrs\.|Ms\.|Dr\.|Er\.]/;
let re4 = /^[a-zA-Z]+$/;

let s = "Ms.asM##rsd";

console.log(re.test(s));