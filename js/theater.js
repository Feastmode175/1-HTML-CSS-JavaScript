const GENERAL_ADMISSION_COST = 20;
const DISCOUNT_ADMISSION_COST = 10;

function buyTicket () {
  const age = prompt('What is your age?');
  let cost = getBaseTicketCost(age);
  
  alert('Your ticket will cost: $' + cost +'.');
}


function getBaseTicketCost(age) {
  if ((age<=12) || (age>=65)) {
    return DISCOUNT_ADMISSION_COST
  }
  return GENERAL_ADMISSION_COST
}