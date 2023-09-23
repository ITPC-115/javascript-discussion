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



   if (age <= 2) 
   {
    return  (`${age} years old is infancy`);
   } 
   else if (age<=6){
    return  (`${age} years old is Early Childhood` );
   }
   else if (age<=12){
    return  (`${age} years old is middle childhood`);
   }
   else if (age<=19){
    return (`${age} years old is Adolescence`);
   }
   else if(age<=60){
    return (`${age} years old is Adulthood`);
   }
   else if(age>61){
    return  ( `${age} years old is Old Age`);
   }
   





   
}