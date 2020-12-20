let func1 = () => {

  let number = prompt("Enter your number: ");
  let radix = prompt("Now enter a radix between 2 and 36: ");
  

  while (true) {
      if (isNaN(parseInt(radix)) || isNaN(parseInt(number)) || radix < 2 || radix > 36) {
        alert('You input should be of two numeric values and radix should be of a value between 2 and 36')
        number = prompt("Enter your number: ");
        radix =  prompt("Now enter a radix between 2 and 36: ");
      }

      else break;
  }
  console.log(parseInt(number) >>> 0)
  console.log(radix)

  let result = (Number(number) >>> 0).toString(Number(radix));
  alert(`Your result is: ${result}`)
  return
}

func1()
