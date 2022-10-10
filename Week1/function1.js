// function universeIs() {
//     function dimension() {
//         return "gigantic";
//     }
//     return dimension();
//     function dimension() {
//         return "enormous";
//     }
// }
// console.log(universeIs())

// console.log(universeIs());
// function universeIs() {
//     var dimension = function() {
//         return "gigantic";
//     };
//     return dimension();
//     var dimension = function() {
//         return "enormous";
//     };
// }

// function universeIs() {
//     return dimension();
//     var dimension = function() {
//         return "gigantic";
//     };
//     var dimension = function() {
//         return "enormous";
//     };
// }
// console.log(universeIs());

// function universeIs() {
//     return dimension();
//     var dimension = function() {
//         return "gigantic";
//     };
//     var dimension = function() {
//         return "enormous";
//     };
// }

// console.log(universeIs());

// function universeIs() {
//     return "gigantic";
// }();

// var universeIs = function() {
//     return "gigantic";
// }();

// console.log(universeIs);

// a = 2;

// console.log(a)

// var variable = 1;

// console.log(variable);


// function universeIs(s) {
//     return "gigantic";
// } var t = 1;
// console.log(universeIs(5));
// console.log(t);

// f(s);
// s;
// let s = 100;
// function f() {
//     console.log("100")
// }

// function f(a, b) {
//     return a*b;
// }
// console.log(f(1, 2, 3));

const user = {
    id: 24,
    displayName: 'kren',
    fullName: 'Kylo Ren',
};

function intro({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`);
}

intro(user);