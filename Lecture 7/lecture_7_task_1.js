function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let prev = 1;
  let prevPrev = 0;
  let currentNum;
  for (let i = 2; i <= n; i += 1) {
    currentNum = prevPrev + prev;
    prevPrev = prev;
    prev = currentNum;
  }
  return currentNum;
}

function calcSumFromFibonacci(from, to) {
  if (
    typeof from !== "number" ||
    Number.isNaN(from) ||
    !Number.isFinite(from) ||
    typeof to !== "number" ||
    Number.isNaN(to) ||
    !Number.isFinite(to)
  ) {
    throw new Error("Invalid input");
  }

  if (from < 0 || from > to) {
    throw new Error(
      "first argument should not be a negative number and be more than a second argument"
    );
  }

  const fibSeq = [];
  let count = 0;
  do {
    fibSeq.push(fib(count));
    count += 1;
  } while (fibSeq[fibSeq.length - 1] < to);

  return fibSeq
    .filter((val) => val >= from && val <= to)
    .reduce((acc, el) => acc + el, 0);
}

module.exports.calcSumFromFibonacci = calcSumFromFibonacci;
