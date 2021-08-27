const Calculator = require('../../calculator/calculator');
const { expect } = require('chai');

describe('the add function', function() {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    afterEach(() => {
        calculator = null;
    });

    it('should return the sum of 2 added numbers', function() {
        expect(calculator.add(3, 2)).to.be.equal(5);
    });

    it('should be able to handle 1 number', function() {
        expect(calculator.add(2)).to.be.equal(2);
    });

    it('should be able to handle 0 number', function() {
        expect(calculator.add()).to.be.equal(0);
    });

    it('should throw an error if either argument is not a number', function() {
        let callWithError = () => calculator.add(2, 'test');
        expect(callWithError).to.throw('not of type "Number"');
    });

    it('should sum two float values correctly', function() {
        expect(calculator.add(0.1, 0.2)).to.be.closeTo(0.30, 0.3001);
    });
});