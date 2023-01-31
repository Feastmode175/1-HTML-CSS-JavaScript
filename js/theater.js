const GENERAL_ADMISSION_COST = 20;
const DISCOUNT_ADMISSION_COST = 10;
const MATINEE_DISCOUNT = 3;

function buyTicket () {
  const age = prompt('What is your age?');
  let cost = getBaseTicketCost(age);
  
  const isMatinee = prompt('Are you attending a matinee show?');
    if((isMatinee === 'yes') || (isMatinee === 'y')) {
      cost = cost - MATINEE_DISCOUNT;
    }
  alert('Your ticket will cost: $' + cost +'.');
}


function getBaseTicketCost(age) {
  if ((age<=12) || (age>=65)) {
    return DISCOUNT_ADMISSION_COST
  }
  return GENERAL_ADMISSION_COST
}