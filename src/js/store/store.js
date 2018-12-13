import { observable, action } from "mobx";
class Calculator {
    @observable value = '';
    @observable currentOperand = '';
    @observable displayValue = '0';
    operations = /[\+,\-,\*,\/]/;

    @action buttonClick(symbol) {
        if (symbol.match(/[\-\+\*\/]|\d/)) {
            this.addSymbol(symbol)
        }
        else {
            this.executeOperation(symbol)
        }
    }

    eval(expr) {
      return eval(expr) //<29 символов
    }

    addSymbol(symbol) {
        console.log ("this.displayValue",this.displayValue);
        if (this.displayValue.slice(-1).match(this.operations) && symbol.match(this.operations))  //if last entered symbol is not digit and current digit is sign of operation
        {
            this.displayValue = this.displayValue.slice(0, -1) + symbol;
        }
        else {
            this.displayValue = ((this.displayValue === '0') ? '' : this.displayValue) + symbol;
            this.updateCurrentOperand (symbol) 
        }
    }
    updateCurrentOperand (symbol) {
        if (symbol.match(this.operations)) {
            this.currentOperand = '';
        }
        else {
            this.currentOperand = this.currentOperand + symbol;
            this.value =(this.displayValue.match(/\d?[\-\+\*\/]\d?/)) ? this.eval(this.displayValue) : '';
        }
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
                this.displayValue = String(this.eval(this.displayValue))
                this.value = '';
                break;
            default:
                alert('Я таких значений не знаю');
        }
    }
    // in order to avoid additional points Add point just if count 
    addPoint(point) {
        if (this.currentOperand.indexOf(point) == -1) {
            this.displayValue += point;
            this.currentOperand += point;
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
        this.currentOperand = '';
        this.operator = '';
    }


}
const store = new Calculator();
export default store;