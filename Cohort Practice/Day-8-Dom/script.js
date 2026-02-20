
    // var a = Math.floor(Math.random()*100);
    // console.log(a)


//    let box =  document.querySelector("#box")
//    let btn = document.querySelector("button")

//    btn.addEventListener("click",function(){
//      let c1 =   Math.floor(Math.random()*256);
//      let c2 =   Math.floor(Math.random()*256);
//      let c3 =   Math.floor(Math.random()*256);
     
//      box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
        
//    })


// var arr = ['vedant','saket','vivek','satwik','shivam','monty']

//    var btn =  document.querySelector('button')

// var a =   Math.floor(Math.random()*arr.length);

// console.log(arr[a])

// btn.addEventListener("click",function(){
//     var a =   Math.floor(Math.random()*arr.length);
//     console.log(arr[a])
// })

    var btn = document.querySelector('button')
    var h1 = document.querySelector('h1')

    var  main = document.querySelector('main')

    btn.addEventListener('click',function(){
        var winner = arr[Math.floor(Math.random()*arr.length)]
        h1.innerHTML = winner.team
        h1.style.backgroundColor = winner.secondary
        main.style.backgroundColor = winner.primary
    })

var arr = [

{
    team:"csk",
    primary:'yellow',
    secondary:'blue'
},
{
    team:"rcb",
    primary:'black',
    secondary:'red'
},
{
    team:"mi",
    primary:'blue',
    secondary:'gold'
},
{
    team:"kkr",
    primary:'purple',
    secondary:'gold'
}
]


 
 



 