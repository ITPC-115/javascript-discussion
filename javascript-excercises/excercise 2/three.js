const question = 'It provides a way to select one of many code blocks to be executed'+
    ' based on the evaluation of an expression.'+
    '\n [A] Conditional Statement \n [B] Switch Statement \n [C] If Statement \n [D] Else Statement'
const choice = window.prompt(question);
    
    
console.log('Number 3',isCorrect());
    
function isCorrect(){

switch(choice){
    case "A":
        return true;
    case "B":
        return true;
    case "C":
        return true;
    case "D":
        return true;
    default:
        return "Invalid Input";
    }
}