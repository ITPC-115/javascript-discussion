
const question = 'It provides a way to select one of many code blocks to be executed'+
' based on the evaluation of an expression.'+
'\n [A] Conditional Statement \n [B] Switch Statement \n [C] If Statement \n [D] Else Statement'
const choice = window.prompt(question);

    
console.log('Number 3',isCorrect());
    
function isCorrect(){
    if(choice.toLowerCase() === 'b' || choice.toLowerCase() === 'switch statement'){
        return true;
    }
    else if(choice.toLowerCase() === 'a' || choice.toLowerCase() === 'conditional statement'){
        return false;
    }
    else if(choice.toLowerCase() === 'c' || choice.toLowerCase() === 'if statement'){
        return false;
    }
    else if(choice.toLowerCase() === 'd' || choice.toLowerCase() === 'else statement'){
        return false;
    }
    else{
        return 'Invalid Input';
    }
}
