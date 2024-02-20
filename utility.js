function takeASeat(giveTheSeatId){
  if(seatCount < 4){
    const fixedSeat = document.getElementById(giveTheSeatId);
  const classesOfSeat = fixedSeat.classList ;
  classesOfSeat.remove('bg-[#F7F8F8]')
  classesOfSeat.add('bg-[#1DD100]' , 'text-white');
  document.getElementById(giveTheSeatId).classList.add('block');
  fixedSeat.disabled = true;

  anemst = anemst -1 ;
  totalPrice = 550 * seatCount ;
  
  totalSeatboocked.push(giveTheSeatId);
  seatCount = totalSeatboocked.length ;
   totalPrice = 550 * seatCount ;
    
    const leftSeat = document.getElementById('available-seat').innerText = anemst ;
   const grantPrice =  document.getElementById('grand-total');
   grantPrice.innerText = totalPrice ;
  const updatePrice = document.getElementById('totalPrice').innerText = totalPrice;
  const  seat = document.getElementById('totalSeat').innerText = seatCount ;
   
  if(seatCount === 4){
    const inputfild = document.getElementById('coupon-code');
    inputfild.classList.remove('hidden');
    console.log('It worked')

    let couponCode = "";
    inputfild.addEventListener('keyup' , function(){
      const applyButton = document.getElementById('code-submit');
      

      couponCode = inputfild.value ;
      if(couponCode == 'NEW15'){
        applyButton.classList.remove('hidden');
        function grandTotal(){
       console.log('My name is Dhruba Biswas')
        }
      }

    })

  }

  }
}