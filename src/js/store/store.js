import { observable, action } from "mobx";
class Calculator {
    @observable value = 0;
    operator = '';
    @observable displayValue = '0';

    @action buttonClick(symbol) {
        if (symbol.match(/[\-\+\*\/]|\d/)) {
            // this.eval()
            this.addSymbol(symbol)
        }
        else this.executeOperation(symbol)
    }

    eval() {
        this.value = eval(this.displayValue) //<29 символов
    }

    addSymbol(symbol) {
        this.displayValue = ((this.displayValue === '0') ? '' : this.displayValue) + symbol;
    }
    executeOperation(operation) {
        switch (operation) {
            case 'C':
                this.clearDisplay('0'); break;
            case '.':
                this.addPoint('.'); break;
            case '+/-':
                ; break;
            case '%':
                this.convertToPercent(); break;
            case '=':
                this.eval()
                break;
            default:
                alert('Я таких значений не знаю');
        }
    }

    addPoint(point) {
        // console.log(this.countSymbols(/\./ig ), ' ', this.countSymbols(/[\+\-\*\/ ]/ig ));
        if ((this.countSymbols(/\./ig) <this.countSymbols(/[\+\-\*\/ ]/ig)) 
            || (this.countSymbols(/\./ig)==0 && this.countSymbols(/[\+\-\*\/ ]/ig)==0)) {
            this.displayValue += point;
        }
        else {
            alert("number is already decimal")
        }
    }
    countSymbols(symbol) {
        return (this.displayValue.match(symbol) !== null) ? this.displayValue.match(symbol).length : 0;


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


}
const store = new Calculator();
export default store;