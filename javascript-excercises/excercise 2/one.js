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
            if (yearsOfAge < 0) {
              return 'Invalid age.';
            } else if (yearsOfAge >= 0 && yearsOfAge <= 2) {
              return 'Infancy';
            } else if (yearsOfAge >= 3 && yearsOfAge <= 6) {
              return 'Early Childhood';
            } else if (yearsOfAge >= 7 && yearsOfAge <= 12) {
              return 'Middle Childhood';
            } else if (yearsOfAge >= 13 && yearsOfAge <= 19) {
              return 'Adolescence';
            } else if (yearsOfAge >= 20 && yearsOfAge <= 60) {
              return 'Adulthood';
            } else if (yearsOfAge >= 61) {
              return 'Old Age';
            }
          }
          
          const age = window.prompt('Enter your age in years(minimum age is 0): ');
          
          console.log('Number 1:', identifyWhichStageOfHumanDevelopmentBasedOnAge(age));
