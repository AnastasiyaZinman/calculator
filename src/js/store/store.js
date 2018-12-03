import { observable, action, computed, reaction } from "mobx";
class Calculator {
    @observable value = 0;
    @observable currentOperand = '0';
    @observable operator = null;
    @computed displayValue = '0';
 @action  buttonClick (symbol)    
 {
console.log(symbol)
 }
//     addNumber that will be triggered by the Number component.
//     changeOperator that will be triggered by the Operator component.
}
const store = new Calculator();
export default store;