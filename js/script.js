function My_timer(){

  let val;
  let count_down;

 const wind = document.querySelector('.wnd__inp');
 const start_btn = document.querySelector('.start__btn');
 const timer_btn = document.querySelector('.timer__btn');
 const new_wind = document.querySelector('.timer__window');

 function main_move(){
   wind.addEventListener("keyup", function(event){
     if(event.code === 'Enter'){
     val = document.getElementById('wnd228').value;
     if(val.match(/[a-zA-Zа-яА-Я]+/)){
       new_wind.innerHTML = `<input id="wnd228" class="wnd__inp" type="text" name="numb" placeholder="0" autocomplete="off"><div class="err_red">Only number</div>`;
       My_timer();
       val = '';
     }else {
       wind.classList.add("_active");
       new_wind.innerHTML = `<div class="aft_none"><span class="downer">${val}</span></div>`;
     }
   }
  });

  start_btn.addEventListener("click", function(){
    if(val == null) {val = document.getElementById('wnd228').value;}

    if(val.match(/[a-zA-Zа-яА-Я]+/)){
      new_wind.innerHTML = `<input id="wnd228" class="wnd__inp" type="text" name="numb" placeholder="0" autocomplete="off"><div class="err_red">Only number</div>`;
      My_timer();
      val = '';
    }else if(val.match(/[0-9]+/)){
      wind.classList.add("_active");
      new_wind.innerHTML = `<div class="aft_none"><span class="downer">${val}</span></div>`;
      afterStart();
    }
  });
 }

 function afterStart(){

      count_down = setInterval(function(e){
      const counter = document.querySelector('.downer');
      counter.innerHTML = --val;
      if(val == 0){clearInterval(count_down); afterReset();}
    }, 1000);

   start_btn.classList.add("_active");
   timer_btn.classList.add("_for2");
   timer_btn.innerHTML = `<button class="second__btn stop" type="button">Stop</button><button class="second__btn reset" type="button">Reset</button>`;

   const stop_btn = document.querySelector('.stop');
   const reset_btn = document.querySelector('.reset');

   stop_btn.addEventListener("click", function(){
     afterStop();
   });

   reset_btn.addEventListener("click", function(){
     afterReset();
   });
 }

 function afterStop(){
   clearInterval(count_down);
   timer_btn.innerHTML = `<button class="second__btn continue" type="button">Continue</button><button class="second__btn reset" type="button">Reset</button>`;

   const continue_btn = document.querySelector('.continue');
   const reset_btn = document.querySelector('.reset');

   reset_btn.addEventListener("click", function(){
     afterReset();
   });

   continue_btn.addEventListener("click", function(){
     afterStart();
   });
 }

 function afterReset(){
   clearInterval(count_down);

   window.location.reload();
 }

 main_move();
}

My_timer();
