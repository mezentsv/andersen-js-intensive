const expect = require('chai').expect;

const { calcSumFromFibonacci } = require('./lecture_7_task_1');

describe('calcSumFromFibonacci', () => {
  it('invalid first argument (null)', () => {
    let error = null;

    try {
      calcSumFromFibonacci(null, 100);
    } catch (err) {
      error = err;
    }

    expect(error).is.ok;
  });

  it('invalid first argument (-20)', () => {
    let error = null;

    try {
      calcSumFromFibonacci(-20, 100);
    } catch (err) {
      error = err;
    }

    expect(error).is.ok;
  });

  it('invalid first argument ({})', () => {
    let error = null;

    try {
      calcSumFromFibonacci({}, 100);
    } catch (err) {
      error = err;
    }

    expect(error).is.ok;
  });

  it('invalid second argument (Infinity)', () => {
    let error = null;

    try {
      calcSumFromFibonacci(20, Infinity);
    } catch (err) {
      error = err;
    }

    expect(error).is.ok;
  });

  it('invalid second argument (undefined)', () => {
    let error = null;

    try {
      calcSumFromFibonacci(20);
    } catch (err) {
      error = err;
    }

    expect(error).is.ok;
  });

  it(`invalid second argument ('30')`, () => {
    let error = null;

    try {
      calcSumFromFibonacci(20, '30');
    } catch (err) {
      error = err;
    }

    expect(error).is.ok;
  });

  it(`invalid second argument (less than first argument)`, () => {
    let error = null;

    try {
      calcSumFromFibonacci(10, 3);
    } catch (err) {
      error = err;
    }

    expect(error).is.ok;
  });

  it(`valid call with (13, 20)`, () => {
    const result = calcSumFromFibonacci(13, 20);

    expect(result).to.equal(13);
  });

  it(`valid call with (21, 377)`, () => {
    const result = calcSumFromFibonacci(21, 377);

    expect(result).to.equal(953);
  });

  it(`valid call with (6800, 10750)`, () => {
    const result = calcSumFromFibonacci(6800, 10750);

    expect(result).to.equal(0);
  });

  it(`valid call with (212, 319811)`, () => {
    const result = calcSumFromFibonacci(212, 319811);

    expect(result).to.equal(831663);
  });
});
