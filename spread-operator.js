// Spread Operator
const arrValue = ['My', 'name', 'is', 'Jack'];
// console.log(arrValue);   // ["My", "name", "is", "Jack"]
// console.log(...arrValue); // My name is Jack
//Copy Array Using Spread Operator
const array1 = ["sakib", "tamim", "musfiq", "liton"]
const array2 = ["one", "two", "three"]
const result = [...array1, ...array2, "four", "five"] // ["sakib", "tamim", "musfiq", "liton","one", "two", "three","four", "five"]
// console.log(result);
// Clone Array Using Spread Operator
const array3 = ["six", "seven", "eigth"];
const array4 = [...array3]
array3.push("ten")
// console.log(array3); // ["six", "seven", "eigth","ten"]
// console.log(array4); // ["six", "seven", "eigth"]
// Spread Operator with Object
const obj1 = {
    1: "one",
    2: "two",
    3: "three",
    4: "four"
}
const obj2 = {
    5: "five",
    4: "seven",
}
const newObj = { ...obj1, ...obj2 }
//console.log(newObj); // { '1': 'one', '2': 'two', '3': 'three', '4': 'seven', '5': 'five' }
const obj3 = {
    name: "rahat",
    roll: 4,
    job: "regular"
}
const obj4 = {
    ...obj3,
    name: "emi",
    roll: 5,
    class: 12
}
//console.log(obj4); // { name: 'emi', roll: 5, job: 'regular', class: 12 }
// clone an object
const obj5 = {
    name: "sakib",
    roll: "cricketer"
}
const newObj5 = { ...obj5 }
// console.log(newObj5);
const cricketers = [
    {
        name: "sakib",
        age: 35
    },
    {
        name: "Tamim",
        age: 36
    },
    {
        name: "Musfiq",
        age: 34
    },
    {
        name: "Liton",
        age: 25
    },
    {
        name: "sabir",
        age: 28
    }
]
// let names = [];
// for (let i = 0; i < cricketers.length; i++) {
//     if (cricketers[i]["age"] > 30) {
//         names.push(cricketers[i].name)
//     }
// }
// console.log(names);