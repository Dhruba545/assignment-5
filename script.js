let totalSeatboocked = [ ];
let seatCount = 0 ;
let totalPrice = 0;
let anemst = 20 ;

function a1(){
   takeASeat('a1');  
}
function a2(){
   takeASeat('a2'); 
}
function b1(){
   takeASeat('b1');  
}
function b2(){
   takeASeat('b2');
}
function c1(){
   takeASeat('c1'); 
}
function c2(){
   takeASeat('c2');
}
function d1(){
   takeASeat('d1');
}
function d2(){
   takeASeat('d2');
}
function e1(){
   takeASeat('e1');
}
function e2(){
   takeASeat('e2');
}
function a3(){
   takeASeat('a3');
}
function a4(){
   takeASeat('a4');
}
function b3(){
   takeASeat('b3');
}
function b4(){
   takeASeat('b4');
}
function c3(){
   takeASeat('c3');
}
function c4(){
   takeASeat('c4');
}
function d3(){
   takeASeat('d3');
}
function d4(){
   takeASeat('d4');
}
function e3(){
   takeASeat('e3');
}
function e4(){
   takeASeat('e4');
}

seatCount = totalSeatboocked.length ;
totalPrice = 550 * seatCount ;

let couponCode = "";


const number = document.getElementById('number');
document.getElementById('number').addEventListener('keyup' , function(){
  const numberCount = number.value
})

document.getElementById('submit-button').addEventListener('click' , function(){
  document.getElementById('first-page').classList.add('hidden');
  document.getElementById('second-page').classList.remove('hidden');
})
