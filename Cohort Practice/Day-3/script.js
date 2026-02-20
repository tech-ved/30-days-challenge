
    // function lolo(){
    //     console.log("kuch bhiii chala do ")
    // }

    // lolo();
    // lolo();

//     function dance(v1){
//         console.log(`${v1} naach raha h`)
//     }

// dance("ghoda");
// dance("vedant")
// dance("vivek")
// dance("cheeel")
// dance("magarmacccha ")

// function lolo (){
//     // fnc statement 
//     console.log("kaaliya ")
// }
// lolo();

// let fnc = function(){
//     // fnc expression 
//         console.log("krishna  ")

// }
// fnc();

// let ved = ()=>{
//     //  fat arrwo fnc 
//         console.log("maiya  ")
// }
// ved()




// function add(a,b){
//     console.log(a + b)
// }
// add(4,5);
// add(44,55)
// add(3333,634635)



// function add(v1=2,v2=5)
// {
//     console.log(v1+v2)
// }
// add()



// function abc(a,b,c,...val){
//     console.log(a,b,c,val)
// }
// abc(1,3,4,3,666,33,4,3,2,33,55);



// function abc(){
//     return 12;
// }




// return - jaha se aay ho vhi daal dungi . by dadi ji  😂






//      let val =    abc();
//      console.log(val)


// first classs funciton 
// function abc(val){
//     val();
// }

// abc(function(){
//     console.log("hey")
// });


// hof- higher order function 
// case 1. jab function khud k anddr se  ek return value de  
// function abc(){
//     return function(){
//         console.log("ehy ")
//     }
// }

// abc()();

// case 2. - jab fnc parameter mai ek fnc accept kare use ham hof kahte h 

//  function abcd(val){
//     val();

//  }

//  abcd(function(){
//     console.log('kadklja')
//  })

//  Note - yaha  function abcd(val){
//     val(); 
//     abcd(val) - ye vala fnc hof h 

//  }


// laxical scoping 
// function abcd(){
//     let a= 5;
//     console.log("a:",a)
//     function defg(){
//         let b=3;
//         function ghij(){
//             let c=44;
//             function jklm(){
//                 let d = 2;
//                 console.log("d:",d)
//                 console.log( "a+d:",a+d)
//             }
//             jklm();
//         }
//         ghij()
//     }
//        defg() 
// }
// abcd();


// let a = 10;

// function outer() {
//   let b = 20;

//   function inner() {
//     console.log(a); // mil jayega
//     console.log(b); // mil jayega
//   }

//   inner();
// }

// outer();


// IIFE - immediatly invoked fnc expression 

// (function lol(){
//     console.log("vedant is here ")
// })();



                // Practice 
// 1. question
// hoisting ka use - statement mai chal jata h but expression mai nhi chalta 
    // hoisting - fnc call - abd();

    //         function abd(){
    //             console.log("vedant is heree baby")
    //             // function statement
    //         }


    //  hoisting - fnc call -  abcd();


    //  let abcd =  function (){
    //             console.log("baby kha ho ")
    //             // function expression
    //         }

// 2. question 

//     function getScore(...score){

//         let totol = 0;
//         score.forEach(function(val){
//             totol = totol + val
//         });
//             return totol;

//     }
//   console.log(getScore(2,4,6,4,8,2))


// (function checkAge(age){
//     if(age<18){
//         console.log("Too young")
//     }
//     else{
//         console.log("Allowed")
//     }
// })(45);


// function f(){
//     return ;
// }

// console.log(f());


    // function bmi (weight,height){
    //     return weight/ (height*height)

    // }
    // console.log(bmi(60,1.5).toFixed(2));

    // function discountCalculator(discount){
    //     return function(price){
    //         return price - price * (discount/100)
    //     }
    // }

    // let ten = discountCalculator(10);
    // let twenty = discountCalculator(20)


    // console.log(ten(100)) 
    // console.log(twenty(1200))


    // function counter(){
    //   let count = 0;
    //   return function(){
    //     count++;
    //     return count;
    //   }
    // }

    // let c = counter()
    // console.log(c())
    // console.log(c())
    // console.log(c())

    // let d = counter()
    // console.log(d())
    // console.log(c())

    
// function outer(){
//   let a = 10;

//   return function(){
//     console.log(a);
//   }
// }

// let fn = outer();
// fn();


// function outer(){
//   let count = 0;

//   return function(){
//     count++;
//     console.log(count);
//   }
// }

// let fn = outer();
// fn();
// fn();
// fn();


// function outer(){
//   let a = 5;

//   return function(){
//     let a = 20;
//     console.log(a);
//   }
// }

// let fn = outer();
// fn();


// let a = 100;

// function outer(){
//   let a = 50;

//   return function(){
//     console.log(a);
//   }
// }

// let fn = outer();
// fn();


// function counter(){
//   let count = 0;

//   return function(){
//     return ++count;
//   }
// }

// let c1 = counter();
// let c2 = counter();

// console.log(c1());
// console.log(c1());
// console.log(c2());

// function outer(){
//   let arr = [];

//   for(var i=0; i<3; i++){
//     arr.push(function(){
//       console.log(i);
//     });
//   }

//   return arr;
// }

// let fnArr = outer();
// fnArr[0]();
// fnArr[1]();
// fnArr[2]();


// function outer(){
//   let x = 1;
//   return function(){
//     x++;
//     console.log(x);
//   }
// }

// let fn = outer();
// fn();
// fn();


// function outer(){
//   let x = 10;
//   return function(){
//     console.log(x);
//   }
// }

// let a = outer();
// let b = outer();

// a();
// b();


// let x = 5;

// function test(){
//   let x = 20;
//   return function(){
//     console.log(x);
//   }
// }

// let fn = test();
// fn();


// for (let i = 0; i < 2; i++) {
//   setTimeout(() => console.log(i), 0);
// }


// for (var i = 0; i < 2; i++) {
//   setTimeout(() => console.log(i), 0);
// }


// let obj = { 
//     name: "vedant"
// }

// console.log(obj.name)
// delete obj.name;











