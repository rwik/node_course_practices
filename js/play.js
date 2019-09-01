// var name = 'max'
// var hobbies = true

// //var is outdated. use let. let . const is another keyword

// function summery(name,hobbies){
//     return (
//         "Name is " +
//         name +
//         ' has hobbies ' +
//         hobbies
//     );

// }

// //new arrow syntax

// const summery2 = (name,hobbies) =>{
//     return (
//         "Name is " ,
//         name ,
//         ' has hobbies ' ,
//         hobbies
//     );

// }

// console.log(summery(name,hobbies));

// const person = {
//     id : 10,
//     cName : 'A',
//     greet(){
//         console.log("Name = "+ this.cName)
//     }
// }
// spread ... will allow one array to be copied 
let cities =['kolkata','bangalore'];
let home =[...cities]
console.log(home)