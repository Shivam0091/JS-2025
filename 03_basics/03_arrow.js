// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }
// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// // ------------------------------------------
// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chaii =  () => {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chaii()

// // -------------------------------------------------
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// // const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

// const addTwo = (num1, num2) => ({username: "hitesh"})
// console.log(addTwo(3, 4))

// -----------------------------------------------------------------------------------
// // Immediately Invoked Function Expressions (IIFE)

//  // named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})();

//  // un-named IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

// // -----------------------------------------------------------------
// // standard IIFE
// (function () {
//     console.log(`DB CONNECTED`);
//   })();
  
//   // arrow function variant
//   (() => {
//     console.log(`DB CONNECTED`);
//   })();
  
//   // async IIFE
//   (async () => {
//     console.log(`DB CONNECTED`);
//   })()
  