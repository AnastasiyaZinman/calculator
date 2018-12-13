import { observable, action } from "mobx";
class Calculator {
    @observable value = '';
    @observable currentOperand = '';
    @observable displayValue = '0';
    operations = /[\+,\-,\*,\/]/;
    operationsOrDigit = /[\-,\+,\*,\/,\%]|\d/;
    mathExpr = /\d?[\-,\+,\*,\/]\d?/;
    percentExpr = /\%/g;
    toggleResult = false;

    @action buttonClick(symbol) {
        if (symbol.match(this.operationsOrDigit)) {
            this.addSymbol(symbol)
        }
        else {
            this.executeOperation(symbol)
        }
    }
    eval(expr) {
        try {
            expr = (expr.match(this.percentExpr)) ? expr.replace(this.percentExpr,'/100') : expr; // if displayValue includes % replace to division on 100
            return eval(expr) //<29 symbols
          } 
          catch (err) {
                 alert("Неправильное выражение") 
                 this.clearDisplay("0") 
          }
    }

    addSymbol(symbol) {
        console.log("this.displayValue", this.displayValue);
        if (this.displayValue.slice(-1).match(this.operations) && symbol.match(this.operations))  //if last entered symbol is not digit and current digit is sign of operation
        {
            this.displayValue = this.displayValue.slice(0, -1) + symbol;
        }
        else {
            this.displayValue = ((this.displayValue === '0') ? '' : this.displayValue) + symbol;
            this.updateCurrentOperand(symbol)
        }
    }
    updateCurrentOperand(symbol) {
        if (symbol.match(this.operations)) {
            this.currentOperand = '';       //update currentOperand value after operation entering
        }
        else {
            this.currentOperand = this.currentOperand + symbol; //add digits to currentOperand 
            this.value = (this.displayValue.match(this.mathExpr)||this.displayValue.match(this.percentExpr)) ? this.eval(this.displayValue) : ''; //show result if entered not just a number but math expression
        }
    }
    executeOperation(operation) {
        switch (operation) {
            case 'C':
                this.clearDisplay('0'); break;
            case '.':
                this.addPoint('.'); break;
            // case '+/-':
            //      this.toggleSignOfResult();
            //     this.displayValue = (this.displayValue.match(/\-\(/)) ? this.deleteBrackets()  : this.addBrackets() ;
            //     break;
            case '=':
                this.displayValue = String(this.eval(this.displayValue))
                this.value = '';
                break;
            default:
                alert('Я таких значений не знаю');
        }
    }
    // deleteBrackets () {
    //     this.displayValue = this.displayValue.slice(1).replace(/[\(\)]/g)
    // }
    // addBrackets () {
    //     this.displayValue = "-(" + this.displayValue + ")"
    // }
    // In order to avoid additional points Add point just if count 
    addPoint(point) {
        if (this.currentOperand.indexOf(point) == -1) {
            this.displayValue += point;
            this.currentOperand += point;
        }
        else {
            alert("number is already decimal")
        }
    }
    //Clear screen
    clearDisplay(symbol) {
        this.displayValue = '' + symbol
        this.value = '';
        this.currentOperand = '';
    }
    toggleSignOfResult() {
        this.value = 0 - this.value;
    }
}
const store = new Calculator();
export default store;