const obj={
    key1:"value1",
    key2:"value2"
};
const obj2= {
    key1:"valueUnique",
    key3:"value3"
};

const obyt ={...obj,...obj2};

console.log(obyt);

let users=[
    {userId:1,name:"Himansh", age:21 ,gender:'male'},
    {userId:2,name:"Abhay", age:21,gender:'female'},
    {userId:3,name:"Harsh", age:20,gender:'female'},
    {userId:4,name:"Shantanu",age:21,gender:"trans"}
];

for(user of users){
    console.log(user);
}
let[user1,user2,user3]= users;
console.log(user1);