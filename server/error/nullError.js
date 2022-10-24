class NullError extends Error{
    constructor(message){
        super(message);
        this.name = "NullError";
    }
}

module.exports = NullError;