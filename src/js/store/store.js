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
        debugger;
        if (symbol >= '0' && symbol <= "9")
            this.addNumber(symbol)
        else this.changeOperator(symbol)
    }
    addNumber(number) {
        this.displayValue = ((this.displayValue === '0') ? '' : this.displayValue) + number;
        this.currentOperand = ((this.currentOperand === '0') ? '' : this.currentOperand) + number;
        // console.log("this.currentOperand", this.currentOperand)
    }
    changeOperator(operator) {

        console.log("operator", operator)
        if (operator === 'C') {
            this.displayValue='0'
            this.value = 0;
            this.currentOperand='';
        }
        else if (this.operator === '' ) {
            this.value = parseInt(this.currentOperand);
            // this.currentOperand='';
        }
        else {
            switch (this.operator) {
                case '-':
                    this.value = this.value - parseInt(this.currentOperand); break;
                case '+':
                    this.value = this.value + parseInt(this.currentOperand); break;
                case '*':
                    this.value = this.value * parseInt(this.currentOperand); break;
                case '/':
                    this.value = this.value / parseInt(this.currentOperand);; break;
                case '%':
                this.value= this.value/100; break;
                case '=':
                // this.displayValue=this.value; 
                break;
                case 'C':
                    this.value = 0; break;
                default:
                    alert('Я таких значений не знаю');
            }
            // console.log('clear')
            // this.displayValue = this.value;

        }
        this.operator = operator;
        this.displayValue = (operator !== "=" && operator !== "C" && operator !== "%")
            ? this.displayValue + operator : this.displayValue;
        this.currentOperand = '0';
    }
}
const store = new Calculator();
export default store;