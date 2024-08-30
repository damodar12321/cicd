var marks1 = Array(6)
var marks1 = new Array(20,40,35,12,37,100,90)
var marks2 = [10,20,31,44,57,62]
var slice = marks2.slice(2,5)
console.log(marks1[2])
console.log(marks1.length)
console.log(marks2[2])
console.log(marks2.length)
marks2.push('Damodar')
marks2.push('hegde')
console.log(marks2)
marks2.pop()
console.log(marks2)
marks2.unshift(900)
marks2.unshift('Sree')
console.log(marks2)
console.log(marks2.indexOf(31))
console.log(marks2.indexOf(32))
console.log(marks2.includes(120))
console.log(marks2.includes(31))
console.log(slice)

let sum =0
for (index=0;index< marks1.length;index++)
{
    sum= sum+marks1[index]
}
console.log(sum)
let sum1 =0
let total = marks1.reduce((sum1,marks)=>sum1+marks,0)
console.log(total)

var scores = [12,13,15,16,17,18]
var scores1 = [12,13,15,16,17,18]
var evenscores =[]
for(let i=0;i< scores.length;i++)
{
    if (scores[i]%2 ==0)
    {
        evenscores.push(scores[i])
    }
}
console.log(evenscores)

let newArray= scores.filter(score=>score%2==0)
console.log(newArray)
//map
totalSum = scores1.map(score=>score*400).reduce((sum,val)=>sum+val,0)

console.log(totalSum)
console.log('-------------------------------------------------------------')

let fruits =["Banana","Mango","Blackberry","Apple"]
console.log(fruits.sort())

let num = [3,1,5,4,9,0,1,3,4]
console.log(num.sort())

const day ='tuesday   . '
console.log(day.length)

var test = day.slice(1,4)
console.log(test)
console.log(day.trim().split("s"))
console.log(day.trim().indexOf('day'))

let person = {
    name: 'Damodar',
    location: 'Houston',
    zip: 77479,
    fullName: function()
    {
        console.log('Professoring '+this.name)
        return "Prof :"+this.name
    }
}
console.log(person.name)
console.log(person.location)
console.log(person['location'])
console.log(person['zip'])
person.name ='Daniel Retzer'
person.gender ='Male'
console.log(person.name)
console.log(person.fullName())
console.log(person)
console.log('zip' in person)
console.log('zip1' in person)

for (let key in person)
{
    console.log(person[key])
}
console.log(person.fullName())








