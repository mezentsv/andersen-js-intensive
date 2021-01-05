const expect = require('chai').expect;

const { multiply, multiplyBy10 } = require('./lecture_5_task_1');

describe('Multiply functions check', () => {
    describe('Multiply', () => {
        describe('Multiply with invalid arguments', () => {
            describe('Expect null as result', () => {
                it('Multiply with null', () => {
                    let result = multiply(null, 10);
        
                    expect(result).to.equal(null);
                });
    
                it('Multiply with undefined', () => {
                    let result = multiply(undefined, 10);
        
                    expect(result).to.equal(null);
                });
        
                it('Multiply with NaN', () => {
                    let result = multiply(10, NaN);
        
                    expect(result).to.equal(null);
                });
        
                it('Multiply with string', () => {
                    let result = multiply('10', 5);
        
                    expect(result).to.equal(null);
                });
    
                it('Multiply with Infinity', () => {
                    let result = multiply(3, Infinity);
        
                    expect(result).to.equal(null);
                });
            });
    
            describe('Expect real error as result', () => {
                it('Multiply with null', () => {
                    let result = null;
                    let error = null;
        
                    try {
                        result = multiply(null, 10);
                    } catch(err) {
                        error = err;
                    }
        
                    expect(error).to.be.ok;
                });
    
                it('Multiply with undefined', () => {
                    let result = null;
                    let error = null;
        
                    try {
                        result = multiply(undefined, 10);
                    } catch(err) {
                        error = err;
                    }
        
                    expect(error).to.be.ok;
                });
        
                it('Multiply with NaN', () => {
                    let result = null;
                    let error = null;
        
                    try {
                        result = multiply(10, NaN);
                    } catch(err) {
                        error = err;
                    }
        
                    expect(error).to.be.ok;
                });
        
                it('Multiply with string', () => {
                    let result = null;
                    let error = null;
        
                    try {
                        result = multiply('10', 5);
                    } catch(err) {
                        error = err;
                    }
        
                    expect(error).to.be.ok;
                });
    
                it('Multiply with Infinity', () => {
                    let result = null;
                    let error = null;
        
                    try {
                        result = multiply(3, Infinity);
                    } catch(err) {
                        error = err;
                    }
        
                    expect(error).to.be.ok;
                });
            });
        });
    
        describe('Multiply with valid arguments', () => {
            it('-2 and 5', () => {
                const result = multiply(-2, 5);
    
                expect(result).to.equal(-10);
            });
    
            it('14 and 0', () => {
                const result = multiply(14, 0);
    
                expect(result).to.equal(0);
            });
    
            it('2.2 and 3.5', () => {
                const result = multiply(2.2, 3.5);
    
                expect(Number(result.toFixed(1))).to.equal(7.7);
            });
        });
    });
    
    describe('Multiply by 10', () => {
        describe('Multiply by 10 with invalid argument', () => {
            describe('Expect null as result', () => {
                it('Multiply with null', () => {
                    let result = multiplyBy10(null);
        
                    expect(result).to.equal(null);
                });
    
                it('Multiply with undefined', () => {
                    let result = multiplyBy10(undefined);
        
                    expect(result).to.equal(null);
                });
        
                it('Multiply with NaN', () => {
                    let result = multiplyBy10(NaN);
        
                    expect(result).to.equal(null);
                });
        
                it('Multiply with string', () => {
                    let result = multiplyBy10('10');
        
                    expect(result).to.equal(null);
                });
    
                it('Multiply with Infinity', () => {
                    let result = multiplyBy10(Infinity);
        
                    expect(result).to.equal(null);
                });
            });
    
            describe('Expect real error as result', () => {
                it('Multiply with null', () => {
                    let result = null;
                    let error = null;
        
                    try {
                        result = multiplyBy10(null);
                    } catch(err) {
                        error = err;
                    }
        
                    expect(error).to.be.ok;
                });
    
                it('Multiply with undefined', () => {
                    let result = null;
                    let error = null;
        
                    try {
                        result = multiplyBy10(undefined);
                    } catch(err) {
                        error = err;
                    }
        
                    expect(error).to.be.ok;
                });
        
                it('Multiply with NaN', () => {
                    let result = null;
                    let error = null;
        
                    try {
                        result = multiplyBy10(NaN);
                    } catch(err) {
                        error = err;
                    }
        
                    expect(error).to.be.ok;
                });
        
                it('Multiply with string', () => {
                    let result = null;
                    let error = null;
        
                    try {
                        result = multiplyBy10('10');
                    } catch(err) {
                        error = err;
                    }
        
                    expect(error).to.be.ok;
                });
    
                it('Multiply with Infinity', () => {
                    let result = null;
                    let error = null;
        
                    try {
                        result = multiplyBy10(Infinity);
                    } catch(err) {
                        error = err;
                    }
        
                    expect(error).to.be.ok;
                });
            });
        });
    
        describe('Multiply by 10 with valid argument', () => {
            it('-2', () => {
                const result = multiplyBy10(-2);
    
                expect(result).to.equal(-20);
            });
    
            it('0', () => {
                const result = multiplyBy10(0);
    
                expect(result).to.equal(0);
            });
    
            it('3.5', () => {
                const result = multiplyBy10(3.5);
    
                expect(Number(result.toFixed(1))).to.equal(35);
            });
        });
    });    
});