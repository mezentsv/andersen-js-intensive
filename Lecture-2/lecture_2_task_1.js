const deepClone = (inputObj) => {
	let outputObj;
	if (typeof inputObj !== "object" ||inputObj === null) {
		return inputObj;
	}
	outputObj = Array.isArray(inputObj) ? [] : {};

	for (key in inputObj) {
  		outputObj[key] = deepClone(inputObj[key]);
	}
	return outpuObj;
}
