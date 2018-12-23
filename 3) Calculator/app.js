/*=============== GLOBAL VARIABLES/OBJECTS ====================*/

const calculator = document.forms['calculator'];
const calculatorButtons = document.querySelectorAll('.calculator-button');
const calculatorDisplay = document.querySelector('#calculator-display');


/*=============== FUNCTIONS ====================*/

/*=============== EVENTS LISTENER ====================*/

//If they pressed anything in calculator
calculator.addEventListener('click', e => {

    //If they pressed calculator buttons
    if (e.target.classList.contains('calculator-button')) {

        switch (e.target.id) {
            case 'square-root-button':
                calculatorDisplay.value = Math.sqrt(calculatorDisplay.value);
                break;
                
            case 'reset-button':
                calculatorDisplay.value = '';
                break;

            case 'percentage-button':
                calculatorDisplay.value /= 100;
                break;

            case 'multiplication-button':
                calculatorDisplay.value += '*';
                break;

            case 'result-button':
                calculatorDisplay.value = eval(calculatorDisplay.value);
                break;
            
            case 'division-button':
                calculatorDisplay.value += '/';
                break;

            case 'double-button':
                calculatorDisplay.value *= calculatorDisplay.value;
                break;

            case 'toggle-positive':
                calculatorDisplay.value = eval(calculatorDisplay.value);

                if(calculatorDisplay.value < 0) {
                    calculatorDisplay.value = Math.abs(calculatorDisplay.value);
                } else {
                    calculatorDisplay.value = Math.abs(calculatorDisplay.value) * -1;
                }
                break;
            default:
                calculatorDisplay.value += e.target.value;
                break;
        }

    }

});