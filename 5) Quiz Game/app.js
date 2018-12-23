const quizForm = document.forms['quiz'];
const submitQuizBtn = quizForm.elements['submit-quiz-btn'];

var answers = new Set();

// Get the input's name attribute, and add it in answers' set (arrays without duplicates)
document.querySelectorAll('div.answer > input').forEach(function (answer) {
    answers.add(answer.getAttribute('name'));
});

quizForm.addEventListener('submit', function(e){
    //Prevents the page from reloading
    e.preventDefault();

    document.querySelectorAll('.created-elements').forEach(element=>{
            element.parentNode.removeChild(element);
     });
    
    console.log('Submitted the form!');

    var wrongAnswers = 0;

    answers.forEach(function (answer) {
        // Check if, inside the array, there are <= 0 buttons checked.
        if (document.querySelectorAll('input[name='+answer+']:checked').length <= 0) {

            var invalidWarning = document.createElement("P");
            invalidWarning.classList.add('created-elements', 'warning-wrong');
            invalidWarning.innerText = "-1: No answer was chosen.";
            quizForm.insertBefore(invalidWarning, document.querySelector('input[name=' + answer + ']').parentNode.parentNode);

            wrongAnswers++;
        }
    });

    document.querySelectorAll('.wrong-answer').forEach(wrongAnswer => {
        if (wrongAnswer.checked === true) {

            var answerWarning = document.createElement("P");
            answerWarning.classList.add('created-elements', 'warning-wrong');
            answerWarning.innerText = "-1: An incorrect answer was chosen.";
            quizForm.insertBefore(answerWarning, wrongAnswer.parentNode.parentNode);

            wrongAnswers++;
        }
    });

    var result = document.createElement("P");
    result.classList.add('created-elements');
    result.innerText = "You got " + (answers.size - wrongAnswers) + " out of " + answers.size + " !";
    result.style.fontWeight = 'bold';
    console.log(wrongAnswers);

    if (wrongAnswers === 0) {
        result.insertAdjacentText("afterbegin", "Splendid! ");
        result.style.color = "green";
    } else if (wrongAnswers === 1) {
        result.insertAdjacentText("afterbegin", "Almost there! ");
    } else if (wrongAnswers === 2) {
        result.insertAdjacentText('afterbegin', 'Not bad! ');
    } else if (wrongAnswers === 3) {
        result.insertAdjacentText('afterbegin', 'Still ok, not as bad as getting a zero.. right? ');
    } else if (wrongAnswers === 4) {
        result.insertAdjacentText('afterbegin', 'Did you.. forget to fill in the blank? ');
    }

      quizForm.append(result);
    
});