const multiply = (num1, num2) => {
  if (
    typeof num1 !== "number" ||
    isNaN(num1) ||
    !isFinite(num1) ||
    typeof num2 !== "number" ||
    isNaN(num2) ||
    !isFinite(num1)
  ) {
    throw new Error("Enter valid number");
  }

  return num1 * num2;
};

const multiplyBy10 = (num2) => {
  const num1 = 10;
  return multiply(num1, num2);
};

module.exports = multiply;
module.exports = multiplyBy10;
