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
    /*
    <-- Insert your logic here -->
    */
    if(age >= 0 && age <= 2){
        return 'Infancy: 0-2 years old';
    }
    else if(age >= 3 && age <= 6){
        return 'Early Childhood: 3-6 years old';
    }
    else if(age >= 7 && age <= 12 ){
        return 'Middle Childhood: 7-12 years old';
    }
    else if(age >= 13 && age <= 19 ){
        return 'Adolescence: 13-19 years old';
    }
    else if(age >= 20 && age <= 60){
        return 'Adulthood: 20-60 years old';
    }
    else if(age >= 61){
        return 'Old Age: 61 and above';
    } 
}
