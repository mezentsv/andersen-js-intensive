const isNumber = (num) => {
  if (typeof num === "number" && !Number.isNaN(num) && Number.isFinite(num)) {
    return true;
  }
  return false;
};

const calcSum = (a) => {
  if (!isNumber(a)) throw new Error("Invalid input");
  let sum = a;

  const addReturnInvalid = (c) => addReturnInvalid;
  const addReturnValid = (b) => {
    if (isNumber(b)) {
      sum += b;
      return addReturnValid;
    }
    return addReturnInvalid;
  };

  addReturnValid.toString = () => sum;
  addReturnInvalid.toString = () => sum;

  return addReturnValid;
};

module.exports.calcSum = calcSum;
