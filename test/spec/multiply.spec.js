const Calculator = require('../../app/calculator');
const { expect } = require('chai');

describe('the multiply function', function() {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    afterEach(() => {
        calculator = null;
    });

    it('should return the sum of 2 multiplied numbers', function() {
        expect(calculator.multiply(3, 2)).to.be.equal(6);
    });

    it('should be able to handle 1 number', function() {
        expect(calculator.multiply(2)).to.be.equal(2);
    });

    it('should be able to handle 0 number', function() {
        expect(calculator.multiply()).to.be.equal(1);
    });

    it('should throw an error if either argument is not a number', function() {
        let callWithError = () => calculator.multiply(2, 'test');
        expect(callWithError).to.throw('not of type "Number"');
    });

    it('should sum two float values correctly', function() {
        expect(calculator.multiply(0.1, 0.2)).to.be.closeTo(0.2, 0.2001);
    });
});