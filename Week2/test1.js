let items = ['buku', 'pensil', 'penggaris'];

let item = 'penghapus';
const declarativeAddItem = items => item => [...items, item];


console.log(declarativeAddItem(items));