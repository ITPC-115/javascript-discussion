/*
    <-- Complete the code. It should log true if the answer is correct and false if it's not.
    In case an input is invalid it should log 'Invalid Input'. This should not be typecase sensetive -->
    */ 

const question = 'It provides a way to select one of many code blocks to be executed'+
' based on the evaluation of an expression.'+
'\n [A] Conditional Statement \n [B] Switch Statement \n [C] If Statement \n [D] Else Statement'
const choice = window.prompt(question);
    
console.log('Number 3',isCorrect(choice));
    
function isCorrect(Choice){
    switch (Choice){
        case 'A';
        case 'a';
            choice = false;
            return choice;
            break;

        case 'B';
        case 'b';
            choice = true;
            return choice;
            break;

        case 'C';
        case 'c';
            choice = false;
            return choice;
            break;

        case 'D';
        case 'd';
            choice = false;
            return choice;
            break;

        default:
            choice = 'Invalid Input.';
            return choice;
        }
        
}
