    //1st topic - let var const

    //2nd topic - Scope (global,block,functional)
 // Note - 1. global scope ka use pure code mai khi bhi kar sakte h 
        // 2. var functional scope hota h 
        // 3. let block scope hota h ye hamesa carly braces {} ke ander banta h or andar hi use hota h 

        // global scope - pure code mai accessable hota h 
        // functional scope - function k ander use kar sakte ho 
        // block scope - jaha bhi curlly braces lage honnge uske andr use kar skate h 
        // let mai aap redeclare nhi kar sakte var mai kar sakte h isiliye let ko laaya gya . 

    // declaration & ititialization 

  //  var a ;          // declare karna 
   // let a = 12;     // declare and initialization 
   // let a = 5;

    // window mai add hota hai 
    // function scoped hota hai 
    // aap phir se declare kar sakte hai same name se or error nhi aaygii

    // const dulha = "lab"
    // const dulhan = "laby"

    // 3rd topic - temporal dead zone (tdz)

    // TDZ = utna area jitne mai js ko pta to hai ki  variable exist to karta h par vo apko value nhi de sakta . 





    // console.log(a)

    // let  a = 34;

    // 4th topic - hoisting impact per type - let , const , var 
    // Hoisting - ek variable ko jab js mai bnate hai to vo variable 2 hisso mai tut jata hai and uska declare part upar chala jata h and uska initialization part niche rah jata hai. 

    // console.log(a)

    // Practice - let var const 
//  1.   let x = 10;
// x = 20;

// console.log(x); - 20 

// 2.
//  const y = 5;
// y = 15;

// console.log(y); - error 

// 3. 
// var a = 10;

// if (true) {
//   var a = 50;
// }

// console.log(a); - 50 

// 4. 
// let b = 10;

// if (true) {
//   let b = 50;
// }

// console.log(b); - 10 

// 5. 
// var x = 100;

// function test() {
//   var x = 200;
//   console.log(x);
// }

// test();
// console.log(x); -
//  200
//  100 

// 6. 
// let p = 5;

// function demo() {
//   let p = 10;
//   console.log(p);
// }

// demo();
// console.log(p); 
// 10
// 5

// 7. 
// if (true) {
//   const z = 99;
// }

// console.log(z);
// error 

// 8. 
// console.log(a);
// var a = 10;
// undefined

// 9
// console.log(b);
// let b = 20;
// error 

// 10
// console.log(c);
// const c = 30;
// error 

// 11
// const user = "Vedant";
// user = "Rahul";
// error 

// 12
// const arr = [1, 2, 3];
// arr.push(4);

// console.log(arr);
// [1,2,3,4]

// let score = 50;

// function update() {
//   score = 80;
// }

// update();
// console.log(score);

// 13.
// let x = 10;

// function test() {
//   x = 20;
// }

// test();
// console.log(x);

// 14
// let x = 10;

// function test() {
//   let x = 20;
// }

// test();
// console.log(x);

// 15
// var a = 5;

// if (true) {
//   var a = 15;
// }

// console.log(a);

// 16
// let b = 5;

// if (true) {
//   let b = 15;
// }

// console.log(b);

// 17
// let num = 1;

// function add() {
//   num++;
// }

// add();
// add();
// console.log(num);

// 18
// let score = 100;

// function game() {
//   if (true) {
//     score = 200;
//   }
// }

// game();
// console.log(score);

// 19
// function demo() {
//   x = 50;
// }

// demo();
// console.log(x);




// Data types + Type system 

// v.v.v. imp topic for react and backend 

    // Turnary operator 
    // condition ? true hui ka code : false hui ka code 
    12>13 ? "true" : "false"

    34<23 ? console.log("sahi h beta condition") : console.log("glt hai beta condition ")







