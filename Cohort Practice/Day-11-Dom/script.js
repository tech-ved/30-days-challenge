
  var img =   document.querySelector('img')
  var love =  document.querySelector('#love')


  img.addEventListener('click',function(){
        love.style.opacity = 1;
        love.style.transform = 'translate(-50%,-50%) scale(1)'
        
  })