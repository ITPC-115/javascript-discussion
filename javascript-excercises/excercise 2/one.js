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

console.log('Number 1:',identifyWhichStageOfHumanDevelopmentBasedOnAge());

function identifyWhichStageOfHumanDevelopmentBasedOnAge(yearsOfAge){

    if (age >= 0 && age <= 2){
        return "Infancy";
    }

    else if (age >= 3 && age <= 6){
        return "Early Childhood";
    }
    else if(age >= 7 && age <= 12){
        return "Middle Childhood";
    }
    else if(age >= 13 && age <= 19){
        return "Adolescence";
    }
    else if(age >= 20 && age <= 60){
        return "Adulthood";
    }
    else{
        return "Old Age";
    }

}