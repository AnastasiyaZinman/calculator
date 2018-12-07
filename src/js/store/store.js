import { observable, action } from "mobx";
class Calculator {
    @observable value = 0;
    @observable currentOperand = '0';
    operator = '';

    @observable displayValue = '0';

    @action buttonClick(symbol) {
        if (symbol >= '0' && symbol <= "9") {
            this.addNumber(symbol)
        }
        else if (symbol === ".") {
            this.addPoint(symbol)
        }
        else if (symbol === 'C') {
            this.clearDisplay('0')
        }
        else if (symbol === '%') {
            this.convertToPercent(symbol)
        }
        else this.changeOperator(symbol)
    }
    addPoint(point) {
        console.log(this.currentOperand.match(/\./));
        if (this.currentOperand.match(/\./) == null && this.operator !== '=') {
            this.currentOperand = this.currentOperand + point
            this.displayValue = this.displayValue + point
        }
        else if (this.operator === '=') {
            alert("Please, type an operator")
        }
        else {
            alert("number is already decimal")
        }
    }
    convertToPercent(symbol) {
        if (this.value && this.currentOperand) this.changeOperator(symbol)
        this.value = (this.value) ? this.value / 100 : (this.currentOperand / 100);
        this.displayValue = String(this.value);
        this.changeDisplayValue(symbol)

    }
    clearDisplay(symbol) {
        this.displayValue = '' + symbol
        this.value = 0;
        this.currentOperand = '' + symbol;
        this.operator = '';
    }
    addNumber(number) {
        if (this.operator !== '=') {
            this.displayValue = ((this.displayValue === '0') ? '' : this.displayValue) + number;
            this.currentOperand = ((this.currentOperand === '0') ? '' : this.currentOperand) + number;
        }
        else {
            this.clearDisplay(number)
        }
    }
    changeOperator(operator) {
        console.log("operator", operator)
        if (this.operator === '') { // && this.currentOperand
            this.value = Number(this.currentOperand);
        }
        else {
            let operand = this.currentOperand;
            let decimals = Math.max(String(this.value).length, operand.length); // get for func round(), for correct decimal actions
            switch (this.operator) {
                case '-':
                    this.value = this.value - Number(operand); break;
                case '+':
                    this.value = this.value + Number(operand); break;
                case '*':
                    this.value = this.value * (Number(operand !== '0') ? operand : 1); break;
                case '/':
                    this.value = this.value / Number(operand); break;
                case '=':
                    this.displayValue = String(this.value);
                    this.currentOperand = '0';
                    break;
                case '%': break;
                default:
                    alert('Я таких значений не знаю');
            }
            this.value = this.round(decimals);
        }
        this.changeDisplayValue(operator)
    }
    round(decimals) {
        console.log('decimals', decimals)
        return Number(Math.round(this.value + 'e' + decimals) + 'e-' + decimals);
    }
    changeDisplayValue(operator) {
        this.operator = operator;
        this.displayValue = (operator !== "=" && operator !== "%")
            ? this.insertBrackets(operator) : this.displayValue;
        this.currentOperand = '0';
    }
    insertBrackets(operator) {
        if (this.displayValue.match(/\d?[\-\+\*\/]\d?/) && this.displayValue.slice(-1).match(/\d/)) {
            return ('(' + this.displayValue + ')' + operator)
        }
        else return this.replaceOperator() + operator;

    }
    replaceOperator() {
        return this.displayValue.slice(-1).match(/\D/) ?
            this.displayValue.slice(0, -1)
            : this.displayValue
    }
}
const store = new Calculator();
export default store;