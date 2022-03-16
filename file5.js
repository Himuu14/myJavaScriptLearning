const person= {name:"Himansh" , age:21}
console.log(person);
console.log(person.name);

//spread operator

let array1 =[1,2,3];
let array2=[4,5,6];
const array =[...array1,...array2];
console.log(array);


const obj1={    
    key1:"value1",
    key2:"value2"
};
const obj2= {
    key1:"valueUnique",
    key3:"value3"
};
const obyt = [...obj1 ,...obj2];
console.log(obyt);