/*
    <-- Complete the code. It should log true if the answer is correct and false if it's not.
    In case an input is invalid it should log 'Invalid Input'. This should not be typecase sensetive -->
    */

const question = 'It provides a way to select one of many code blocks to be executed'+
' based on the evaluation of an expression.'+
'\n [A] Conditional Statement \n [B] Switch Statement \n [C] If Statement \n [D] Else Statement'
const choice = window.prompt(question);

    

    
function isCorrect(choice){
       switch (choice.toUpperCase()) {
        case 'A':
            return 'False';
        case 'B':
            return 'True';
        case 'C':
            return 'False';
        case 'D':
            return 'False';
        default:
            return 'Invalid Choice';

       }
        
}
console.log('Number 3:',isCorrect(choice));