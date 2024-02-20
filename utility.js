function takeASeat(giveTheSeatId){
  const fixedSeat = document.getElementById(giveTheSeatId);
  const classesOfSeat = fixedSeat.classList ;
  classesOfSeat.remove('bg-[#F7F8F8]')
  classesOfSeat.add('bg-[#1DD100]' , 'text-white');
  
}