const takeFromInterval = (arr, num1, num2) => {
	if (!Array.isArray(arr)) {
	  throw new Error('First argument must be of type Array');
	}
	let len = arr.length
	if (typeof num1 === 'number' && typeof num2 === 'number'
		&& (Math.abs(num1 - num2) < len)) {
	  return num1 > num2 ? arr.slice(num2 - 1, num1) : arr.slice(num1 - 1, num2)
	}
	return [];
};
