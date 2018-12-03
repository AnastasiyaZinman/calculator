import { observable, action, computed, reaction } from "mobx";
class Calculator {
    @observable value = 0;
    @observable currentOperand = '';
    operator = null;
    numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    operators = ['+', '-', '*', '/', '%']
    // @computed displayValue () {
    //     return (this.value + this.operator + this.currentOperand)
    // };
    @observable displayValue = '0';

    @action buttonClick(symbol) {
        this.displayValue = (this.displayValue=='0')? '': this.displayValue;
        if (symbol >= '0' && symbol <= "9")
            this.addNumber(symbol)
        else this.changeOperator(symbol)
    }
    addNumber(number) {
        this.displayValue = this.displayValue + number;
        this.currentOperand = this.currentOperand + number;
        console.log("this.currentOperand", this.currentOperand)
    }
    changeOperator(operator) {
        
        console.log("operator", operator)
        if (!this.value) {
            this.value = parseInt(this.currentOperand);
            this.currentOperand = '';
        }
        else {
            switch (operator) {
                case '-':
                    this.value = this.value - parseInt(this.currentOperand); break;
                case '+':
                this.value = this.value + parseInt(this.currentOperand); break;
                case '*':
                this.value = this.value * parseInt(this.currentOperand); break;
                case '/':
                this.value = this.value / parseInt(this.currentOperand);    ; break;
                case '%':
                    ; break;
                // case 'C':
                //     this.value = 0; break;
                default:
                    alert('Я таких значений не знаю');
            }
            console.log('clear')
            this.displayValue = this.value;
        }
        this.displayValue = this.displayValue + operator;
        this.operator = (operator!=="C")? operator:'';
    }
}
const store = new Calculator();
export default store;