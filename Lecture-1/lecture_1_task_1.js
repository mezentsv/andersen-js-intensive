
let func1 = () => {

  let number = prompt("This function takes two values: number and base and returns an integer of the specified base. \nFirst enter your number: ");
  let radix =  prompt("Now enter a radix: ");

  try {
	let result = (Number(number) >>> 0).toString(Number(radix));
	alert(`Your result is: ${result}`)

  } catch(error) {
	  throw new Error(`Incorrect passed values. Error: ${error}`)
  }
  return
}

func1() 
