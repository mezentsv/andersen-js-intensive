
const secondTask = () => {
  let firstVal = prompt('Please enter number 1 of 2: ');
  let secondVal = prompt('Please enter number 2 of 2: ');

  if (!isNaN(parseInt(firstVal)) && !isNaN(parseInt(secondVal))) {
	let word = prompt('Enter last value. It should be a word: ');
	if (!isNaN(parseInt(word))) {
	  console.log(`You last value ${word} should contain letters`);
	  return
	}
	let sum = Number(firstVal) + Number(secondVal);
	let quotient = Number(firstVal) / Number(secondVal);
	console.log(`${word}: ${sum} ${quotient}`)
	return
  }
  
  console.log('Invalid values. Your first two inputs should be if type NUMBER')
  return
}

secondTask();
