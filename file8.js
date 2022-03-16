// let numbers = [10,20,30,40];

// function Myfunc(number,index){
//     console.log('index is ${index} number is ${number}' );
// }
// numbers.forEach(Myfunc);

//=====

// map function
//const numbers =[2,4,6,8,10];

// const number = function(number){
//     return number*number;
// }
// const squareNumber = numbers.map(number);

// console.log(squareNumber);


///  or 

// const squareNumber =numbers.map((number)=>{
//     return number*number;
// });
// console.log(squareNumber);


//===> Real life application of map method

// let users =[
//     {firstName: 'Himansh', age:21},
//     {firstName: 'abhay',age:21},
//     {firstName: 'Harsh', age:20},
//     {firstName:'Shantanu',age :21}
// ];
// const name = users.map((user)=>{
//     return user.firstName
// });
// console.log(name);

// /// Filter method

// const numbers= [2,3,4,5,6,7,8,9];

// const evenNumber = numbers.filter((number)=>{
//     return number%2==0;
// })
// console.log(evenNumber);


//====>>Real life application of reduce method

const products=[
    {productId:1, productName:"Mobile",prize:12500},
    {productId:2,productName:"Laptop",prize:38000},
    {productId:3,productName:"TV",prize:15000}
];
const sum = products.reduce((Totalprize,currentProduct)=>{
    return Totalprize + currentProduct.prize;
} ,0);
console.log(sum);
