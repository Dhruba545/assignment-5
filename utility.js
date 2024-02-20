function takeASeat(giveTheSeatId){
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
   document.getElementById('grand-total').innerText = totalPrice ;
  const updatePrice = document.getElementById('totalPrice').innerText = totalPrice;
  const  seat = document.getElementById('totalSeat').innerText = seatCount ;
  
}