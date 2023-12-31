(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.tone');
    let clear = document.querySelector('.ton');
    let equa = document.querySelector('.one');

    buttons.forEach(function(buttons) {
        buttons.addEventListener('click',function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    })
    equa.addEventListener('click', function(e){
        if (screen.value === ''){
            screen.value = "";
        }else{
            let answer =eval(screen.value);
            screen.value = answer;
        }
    })


   /* function Calculate(){
      try{
        display.value = eval(display.value)
      } 
      catch(error){
        display.value = "Error"
      } 
    }*/
    clear.addEventListener('click', function(e){
        screen.value = "";
    })

})()