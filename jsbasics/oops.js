module.exports = class Person
{
    age = 100
    get location()
    {
        return "Canada"
    }
    constructor(firstName,lastName)
    {
        this.firsName=firstName
        this.lastName =lastName

    }
    fullName()
    {
        return (this.firsName +"-" +this.lastName)
    }
}