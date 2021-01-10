const expect = require("chai").expect;

const { calcSum } = require("./lecture_7_task_2");

function getResult(functionCall) {
  return Number(String(functionCall));
}

describe("calcSum", () => {
  it("invalid first call (undefined)", () => {
    let result = null;
    let error = null;

    try {
      result = getResult(calcSum());
    } catch (err) {
      error = err;
    }

    expect(error).to.be.ok;
  });

  it("invalid second call (3)(null)", () => {
    const result = getResult(calcSum(3)(null));

    expect(result).to.equal(3);
  });

  it("invalid third call (91)(328)(NaN)(100)", () => {
    const result = getResult(calcSum(91)(328)(NaN)(100));

    expect(result).to.equal(419);
  });

  it("valid call (12)(-3)(0)(17)", () => {
    const result = getResult(calcSum(12)(-3)(0)(17));

    expect(result).to.equal(26);
  });

  it("valid call (1)(-2)(3)(-4)(5)(-6)(7)", () => {
    const result = getResult(calcSum(1)(-2)(3)(-4)(5)(-6)(7));

    expect(result).to.equal(4);
  });

  it("valid call (1)(0)(0)(3)(0)(0)(0)(2)", () => {
    const result = getResult(calcSum(1)(0)(0)(3)(0)(0)(0)(2));

    expect(result).to.equal(6);
  });

  it("valid call (1.3)(22.3)(-12.12)", () => {
    const result = getResult(calcSum(1.3)(22.3)(-12.12));

    expect(+result.toFixed(2)).to.equal(11.48);
  });

  it("valid call (1.207)(0.7981)(2.1932)", () => {
    const result = getResult(calcSum(1.207)(0.7981)(2.1932));

    expect(result).to.equal(4.1983);
  });
});
