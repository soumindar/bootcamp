const { pipe } = require('paretojs');
let title = 'New Blog Post';


// traditional FP

const toLowerCase = s => {
    if (s !== null) return s.toLowerCase();
}

const replaceSpaces = s => {
    if (s !== null) return s.replace(/\s+/g, '-');
}

const slug = title => replaceSpaces(toLowerCase(title));

console.log(slug(title));



// FP with monads

const toLowerCase2 = maybeStr => maybeStr.map(s => s.toLowerCase());
const replaceSpaces2 = maybeStr => maybeStr.map(s => s.replace(/\s+/g, '-'));

const slugPipe = pipe(toLowerCase2, replaceSpaces2);

const maybe = value => ({
    value,
    isNothing() {
        return (this.value === null);
    },
    map(fn) {
        if (this.isNothing()) {
            return maybe(null);
        }
        return maybe(fn(this.value));
    }
});
// maybe is kind of a new


const maybeTitle = maybe(title);
const maybeNull = maybe(null);

console.log(slugPipe(maybeTitle), slugPipe(maybeNull));
