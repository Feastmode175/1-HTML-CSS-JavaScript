const GENERAL_ADMISSION_COST = 20;
const DISCOUNT_ADMISSION_COST = 10;

function buyTicket () {
  const age = prompt('What is your age?')
  let cost;
  if ((age<=12) || (age>=65)) {
    cost = DISCOUNT_ADMISSION_COST;
  } else {
    cost = GENERAL_ADMISSION_COST;
  }
  alert('Your ticket will cost: $' + cost +'.');
}

function getBaseTicketCost(age) {
  if ((age<=12) || (age>=65)) {
    return DISCOUNT_ADMISSION_COST
  }
  return GENERAL_ADMISSION_COST
}