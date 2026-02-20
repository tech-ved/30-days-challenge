
   let h1 =  document.querySelector("h1")
//    h1.innerHTML = 'changed Html'
   h1.style.color = "red";
   h1.style.backgroundColor = "blue";

   h1.addEventListener('click',function(){
    console.log("hello bhai ")
   })


   let btn = document.querySelector("button")
   btn.addEventListener("click",function(){
        h1.innerHTML = 'changed Html'
   })