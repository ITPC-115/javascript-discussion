/*
    <-- Infancy: 0-2 years old
        Early Childhood: 3-6 years old
        Middle Childhood: 7-12 years old 
        Adolescence: 13-19 years old
        Adulthood: 20-60 years old
        Old Age: 61 and above
        
        Complete the code to display on which stage you are on based on your age-->
    */
        function identifyWhichStageOfHumanDevelopmentBasedOnAge(yearsOfAge) {
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
          }
          
          const age = window.prompt('Enter your age in years(minimum age is 0): ');
          
          console.log('Number 1:', identifyWhichStageOfHumanDevelopmentBasedOnAge(age));