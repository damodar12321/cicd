const Person = require("./oops")
module.exports = class Pet extends Person
{
    get Location()
    {
        return "Bluecross Kennel"
    }
    constructor(firstname,lastname)
    {
        super(firstname,lastname)
    }
}