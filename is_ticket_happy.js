const isHappyTicket = (num) => {
  let sum_1 = 0;
  let sum_2 = 0;
  for (let i = 0; i < num.length/2; i++) {
    sum_1 += parseInt(num[i]);
  } 
  for (let j = num.length/2; j < num.length; j++) {
    sum_2 += parseInt(num[j]);
  } 
  return sum_1 === sum_2;
}

console.log(isHappyTicket('054702'));