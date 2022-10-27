class IndexError extends Error {
    constructor(message) {
        super(message);
        this.code = 11;
    }
}

class FormatError extends Error {
    constructor(message) {
        super(message);
        this.code = 22;
    }
}

class TypeError extends Error {
    constructor(message) {
        super(message);
        this.code = 33;
    }
}

class NullError extends Error {
    constructor(message) {
        super(message);
        this.code = 44;
    }
}


export {IndexError, FormatError, TypeError, NullError};