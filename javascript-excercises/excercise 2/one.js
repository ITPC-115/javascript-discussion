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

   if(yearsOfAge === 0 && age <= 2){
    yearsOfAge = 'Infancy';
    return yearsOfAge;
   }
   else if(yearsOfAge === 3 && age <= 6){
    yearsOfAge = 'Early Childhood';
    return yearsOfAge;
   }
   else if(yearsOfAge === 3 && age <= 6){
    yearsOfAge = 'Middle Childhood';
    return yearsOfAge;
   }
   else if(yearsOfAge === 3 && age <= 6){
    yearsOfAge = 'Adolescence';
    return yearsOfAge;
   }
   else if(yearsOfAge === 3 && age <= 6){
    yearsOfAge = 'Adulthood';
    return yearsOfAge;
   }
   else if(yearsOfAge === 3 && age <= 6){
    yearsOfAge = 'Old Age';
    return yearsOfAge;
   }
}