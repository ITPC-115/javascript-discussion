if(yearsOfAge >= 0 && age <= 2){
    yearsOfAge = 'Infancy';
    return yearsOfAge;
   }
   else if(yearsOfAge >= 3 && age <= 6){
    yearsOfAge = 'Early Childhood';
    return yearsOfAge;
   }
   else if(yearsOfAge >= 7 && age <= 12){
    yearsOfAge = 'Middle Childhood';
    return yearsOfAge;
   }
   else if(yearsOfAge >= 13 && age <= 19){
    yearsOfAge = 'Adolescence';
    return yearsOfAge;
   }
   else if(yearsOfAge >= 20 && age <= 60){
    yearsOfAge = 'Adulthood';
    return yearsOfAge;
   }
   else if(yearsOfAge >= 61){
    yearsOfAge = 'Old Age';
    return yearsOfAge;
   }