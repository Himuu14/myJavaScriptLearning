function creatUser(firstName,lastName,email,age,address){
    const user ={};
    user.firstName = firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about = function(){
        return " " + this.firstName +" is "+this.age+" years old ";
    };
    user.is18= function(){
        return this.age >=18;
    };
    return user ;
}
const user1 = creatUser("Himansh","Mishra","himansh_196017@saitm.org",21,"My addres")
console.log(user1); 