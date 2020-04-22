class validationException extends Error {
    constructor(message) {
        super(message);
        this.name = 'Validation error'
    }
}

module.exports = validationException;