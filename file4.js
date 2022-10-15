// let fruits = ["mango", "Banana","watermellon","apple"];
// console.log(fruits);
// console.log("hii");
// fruits.push("strawberry");
// console.log(fruits);
// fruits.pop();
// console.log(fruits);


// let fruits = ["mango","Banana", "Watermellon"];
// var x = fruits.length;
// let i=0;
//  for(i;i<x;i++){
//      console.log(fruits[i]);
//  }
//  console.log(x);

//Number gussing game;
let number =6;
let guess=3;
while(guess){
 let inputNumber = prompt("You have to guess the number in 3 chance number is in between 1 to 100");
 if(intputNumber =number){
  console.log("Wonderfull you have got it ");
  break;
 }
 else{
  console.log("No try again");
  guess--;
 }
}
