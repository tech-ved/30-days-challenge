// Topic

// 1. if else - else if
// 2. switch case
// 3. early return fnc

// if(0){
//     console.log("vedant")
// }
// else{
//     console.log("naveen ")
// }

// 2. switch case

// switch(2){
//     case 1:
//         console.log("chal gya 1")
//     case 2:
//         console.log("case 2")
//         break;
//     case 3:
//         console.log("case 3")
//     case 4:
//         console.log("case 4")
// }

// 3. early return fnc

//     function vedant(val){
//         if (val<25) return "D"
//         else if(val<50) return "C"
//         else if(val<75) return "B"
//         else return "A"
//     }

//    console.log(vedant(95))

// Practice question

//     function Getgrade(score){
//         if (score<32) return "fail"
//         else if(score<59) return "D"
//         else if(score<69) return "C"
//         else if(score<79) return "B"
//         else if(score<89) return "A"
//         else if(score<100) return "A+"
//         else{
//                  return  'invalid marksk'
//         }
//     }

//    console.log( Getgrade(102))

// rock paper scisser

//    function rps(user,Computer){
//         if(user === Computer ) return "draw"
//         if (user === "rock" && Computer === "scisser") return "user"
//         if(user === "scisser" && Computer === "paper") return "user"
//         if(user === "paper" && Computer === "rock") return "user"

//         return "computer";
//    }

//    console.log(rps("paper","rock"))

// Loops - The OG topic v.v. imp.

// For - kaha se jana hai - kha tak jana h - kaise jana h
// example - 1 - 50 tak jana h . pta h hmko ki 50 tak jana h confirm

// for(start; end; change){

// }
// 1 - 100
// for(i=1; i<101; i++){
//     console.log(i)
// }

// while - kaha se jana h - kab rukna h - kaise jana h
// example - jab kisi cheej ki gurrenty ya phir surety naa ho ki ab ho jaaygi . = jaise ki rcb 18th session hi jitegi. bhai pta thoda tha ki 18ve session hi jitegi .

// start
// while(end){
//  //   code here
//     change
// }

//   let i=1;
//     while(i<32){
//         // code here
//         console.log(i)
//         i++
//     }

// do- while => ek bar jarur chalega

// let i =12;
// do{
//     console.log(i)
//     i++
// }
// while(i<2);

// for(let i=1; i<200; i++){
//     if(i===23){
//         continue;
//     }
//     console.log(i)
// }

// 1. loop - 10 to 1

// for(let i=10;i>0;i--)
// {
//     console.log(i)
// }

// while se 10 to 1

// let i = 10;
// while(i>0){
//     console.log(i)
//     i--
// }

// for(let i=1;i<21;i++)
// {
//     if(i%2 === 0){
//         console.log(i)
//     }
// }

// let i =1;
// while(i<16){
//     if(i%2===1){
//         console.log(i)
//     }
//     i++
// }

// for(let i =1; i<11; i++)
// {
//     console.log(`5 x ${i} = ${5*i} `)
// }

// let sum = 0;
// for (let i =0;i<101; i++)
// {
//     // sum = sum + something
//     sum = sum + i;

// }
// console.log(sum)

// for( let i=1;i<51;i++)
// {
//     if(i%3===0){
//         console.log(i)
//     }

// }

// let val = prompt("enter your no. ");
// for (let i = 1; i <= val; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even`);
//   } else {
//     console.log(` ${i} is odd`);
//   }
// }


// for(let i=1;i<101;i++){
//     if(i%3===0 && i%5 ===0){
//         console.log(i) 
//     }
// }


// let num =5;
// let fact = 1;

// for(let i=1;i<=num;i++)
// {
//     fact = fact*i;
    
// }

// console.log("factorial = ",fact)


// let num = 7;
// let isPrime = true;

// if(isPrime <=1){
//     isPrime = false;
// }

// for(let i=2;i<num;i++)
// {
//     if(i%2===0)
//     {
//         isPrime = false;
//         break;
//     }
// }

// if(isPrime){
//     console.log("prime number")
// }
// else
// {
//     console.log("Not Prime ")
// }

// let a = 10;
// let b = 25;
// let c = 15;

// let biggest ;

// if(a>b && a>c){
//     biggest = a;
// }
// else if(b>a && b>c){
//     biggest = b;
// }
// else{
//     biggest = c;
// }

// console.log("biggest = ", biggest)

// let counter = 0;
// for(let i=1;i<21;i++){
//     if(counter===3)break;
//     if(i%2!==0){
//         console.log(i)
//         counter++
//     }
// }

//     let counter = 0;
//     for(let i=1;i<6;i++){
//         let num = +prompt("enter a number ")
//         if(num>=0) counter++
        
//     } 
// console.log(counter)



    // Recurtion 

    