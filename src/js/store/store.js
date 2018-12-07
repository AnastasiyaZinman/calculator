import { observable, action, computed, reaction } from "mobx";
class Calculator {
    @observable value = 0;
    @observable currentOperand = '0';
    operator = '';
    // numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    // operators = ['+', '-', '*', '/', '%']
    // @computed displayValue () {
    //     return (this.value + this.operator + this.currentOperand)
    // };
    @observable displayValue = '0';

    @action buttonClick(symbol) {
        if (symbol >= '0' && symbol <= "9" || symbol===".")
            this.addNumber(symbol)
        else if (symbol === 'C') {
            this.clearDisplay()
        }
        else if (symbol === '%') {
            this.convertToPercent(symbol)
        }
        else this.changeOperator(symbol)
    }
    convertToPercent (symbol) {
        this.value = (this.value) ? this.value / 100: this.currentOperand / 100;    
        this.operator = symbol;  
        this.changeOperator(symbol)
    }
    clearDisplay() {
        this.displayValue = '0'
        this.value = 0;
        this.currentOperand = '0';
        this.operator = '';
    }
    addNumber(number) {
        this.displayValue = ((this.displayValue === '0') ? '' : this.displayValue) + number;
        this.currentOperand = ((this.currentOperand === '0') ? '' : this.currentOperand) + number;
    }
    changeOperator(operator) {
        debugger;
        console.log("operator", operator)
        if (this.operator === '' && this.currentOperand) {
            this.value = Number(this.currentOperand);
        }
        else {
            switch (this.operator) {
                case '-':
                    this.value = this.value - Number(this.currentOperand); break;
                case '+':
                    this.value = this.value + Number(this.currentOperand); break;
                case '*':
                    this.value = this.value * Number(this.currentOperand); break;
                case '/':
                    this.value = this.value / Number(this.currentOperand); break;
                case '=':
                    break;
                case '%':
                     break;
                default:
                    alert('Я таких значений не знаю');
            }
        }
        this.operator = operator;
        this.displayValue = (operator !== "=")
            ? this.insertBrackets(operator) : this.displayValue;
        this.currentOperand = '0';
    }
    insertBrackets(operator) {
        if (this.displayValue.match(/\d?[\-\+\*\/]\d?/) && this.displayValue.slice(-1).match(/\d/)) {
            return ('(' + this.displayValue + ')' + operator)
        }
        else return this.replaceOperator(operator) + operator;

    }
    replaceOperator() {
        return this.displayValue.slice(-1).match(/\D&^%/) ?
            this.displayValue.slice(0, -1)
            : this.displayValue
    }
}
const store = new Calculator();
export default store;