/**
 *
 * A simple class containing methods to add and  multiply parameters
 * @class Calculator
 */
class Calculator {
    /**
     * Creates an instance of Calculator.
     * @memberof Calculator
     */
    constructor() {

    };

    /**
     *
     *
     * @param {Number} param1 number to add
     * @param {Number} param2 number to add
     * @return {Number} result of adding
     * @memberof Calculator
     */
    add(num1 = 0, num2 = 0) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error('not of type "Number"');
        }
        return num1 + num2;
    };

    /**
     *
     *
     * @param {Number} param1 number to multiply
     * @param {Number} param2 number to multiply
     * @return {Number} result of multiplying
     * @memberof Calculator
     */
    multiply(num1 = 1, num2 = 1) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error('not of type "Number"');
        }
        return num1 * num2;
    };

};


module.exports = Calculator