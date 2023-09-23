/*
    <-- Infancy: 0-2 years old
        Early Childhood: 3-6 years old
        Middle Childhood: 7-12 years old 
        Adolescence: 13-19 years old
        Adulthood: 20-60 years old
        Old Age: 61 and above
        
        Complete the code to display on which stage you are on based on your age-->
    */
/*
const age = window.prompt('Enter your age in years(minimum age is 0): ');

console.log('Number 1:',identifyWhichStageOfHumanDevelopmentBasedOnAge(age));

function identifyWhichStageOfHumanDevelopmentBasedOnAge(yearsofAge){

   if(yearsofAge <= 0 && yearsofAge >= 2){
        return 'Infancy: 0-2 years old';
   }
   else if(yearsofAge <= 3 && yearsofAge >= 6){
        return 'Early Childhood: 3-6 years old';
   }
   else if(yearsofAge <= 7 && yearsofAge >= 12){
        return 'Middle Childhood: 7-12 years old';
   }
   else if(yearsofAge <= 13 && yearsofAge >= 19){
        return 'Adolescence: 13-19 years old';
   }
   else if(yearsofAge <= 20 && yearsofAge >= 60){
        return 'Adulthood: 20-60 years old';
   }
   else if(yearsofAge >= 61){
        return 'Old Age: 61 and above';
   }
} */


function identifyWhichStageOfHumanDevelopmentBasedOnAge(yearsofAge){
    if(yearsofAge >= 0 && yearsofAge <= 2){
        return 'Infancy';
   }
   else if(yearsofAge >= 3 && yearsofAge <= 6){
        return 'Early Childhood';
   }
   else if(yearsofAge >= 7 && yearsofAge <= 12){
        return 'Middle Childhood';
   }
   else if(yearsofAge >= 13 && yearsofAge <= 19){
        return 'Adolescence';
   }
   else if(yearsofAge >= 20 && yearsofAge <= 60){
        return 'Adulthood';
   }
   else if(yearsofAge >= 61){
        return 'Old Age';
   }
}

const age = window.prompt('Enter your age in years(minimum age is 0): ');

console.log('Number 1:',identifyWhichStageOfHumanDevelopmentBasedOnAge(age));
