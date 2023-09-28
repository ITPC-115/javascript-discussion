/*
    <-- Infancy: 0-2 years old
        Early Childhood: 3-6 years old
        Middle Childhood: 7-12 years old 
        Adolescence: 13-19 years old
        Adulthood: 20-60 years old
        Old Age: 61 and above
        
        Complete the code to display on which stage you are on based on your age-->
    */

const age = window.prompt('Enter your age in years(minimum age is 0): ');

console.log('Number 1:',identifyWhichStageOfHumanDevelopmentBasedOnAge(age));

function identifyWhichStageOfHumanDevelopmentBasedOnAge(yearsOfAge){
    if(yearsOfAge >=0 && yearsOfAge <=2){
        return `Infancy: ${yearsOfAge}`;
    }
    else if (yearsOfAge >=3 && yearsOfAge <= 6){
        return `Early Childhood: ${yearsOfAge}`;
    }
    else if (yearsOfAge >= 7 && yearsOfAge <=12){
        return `Middle Childhood: ${yearsOfAge}`;
    }
    else if(yearsOfAge >= 13 && yearsOfAge <= 19){
        return `Adolescence: ${yearsOfAge}`;
    }
    else if(yearsOfAge >= 20 && yearsOfAge <= 60){
        return `Adulthood: ${yearsOfAge}`;
    }
    else 
        return `Old Age: ${yearsOfAge}`;
    
}