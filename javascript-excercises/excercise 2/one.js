
    

const age = window.prompt('Enter your age in years(minimum age is 0): ');

console.log('Number 1:',identifyWhichStageOfHumanDevelopmentBasedOnAge());

function identifyWhichStageOfHumanDevelopmentBasedOnAge(yearsOfAge){
    let stageOfHumanDevelopment;
    if(yearsOfAge >= 0 && yearsOfAge <= 2){
        stageOfHumanDevelopment = 'Infancy';
    }
    else if(yearsOfAge >= 3 && yearsOfAge <= 6){
        stageOfHumanDevelopment = 'Early Childhood';
    }
    else if(yearsOfAge >= 7 && yearsOfAge <= 12){
        stageOfHumanDevelopment = 'Middle Childhood';
    }
    else if(yearsOfAge >= 13 && yearsOfAge <= 19){
        stageOfHumanDevelopment = 'Adolescence';
    }
    else if(yearsOfAge >= 20 && yearsOfAge <= 60){
        stageOfHumanDevelopment = 'Adulthood';
    }
    else if(yearsOfAge >= 61){
        stageOfHumanDevelopment = 'Old Age';
    }
    else{
        stageOfHumanDevelopment = 'Invalid Input';
    }
    return stageOfHumanDevelopment;
}

