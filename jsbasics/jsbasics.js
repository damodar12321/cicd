const Person = require ('./oops');
const Pet = require ('./inheritence');
console.log('Sree Ganeshaya Namah');
//ES6 Engines
var l = false
const a = '4'
const b = 6
const c = 10
var d = b+c //redeclaration possible with var but not possible with let keyword

console.log(d)

console.log(typeof(b))
console.log(typeof(a))
console.log(typeof(l))
//null and undefined
let x = null
let y
console.log(typeof(x))
console.log(typeof(y))//undefined
console.log(l)  
console.log(!l) //negation

let p = new Person('Saul','Goodman')
console.log(p.fullName())

let animal = new Pet('Goofy','Donald')
console.log(animal.fullName())
console.log(animal.Location)
