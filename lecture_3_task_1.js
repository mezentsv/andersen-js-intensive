function myForEach(arr, callbackFunc) {
  if (!Array.isArray(arr)) {
    throw new TypeError(arr + " is not an array");
  }
  if (typeof callbackFunc !== "function") {
    throw new TypeError(callbackFunc + " is not a function");
  }

  for (let [index, item] of arr.entries()) {
    callbackFunc(item, index, arr);
  }
}
