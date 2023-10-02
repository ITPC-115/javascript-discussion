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
    if (yearsOfAge < 0 ) {
        return 'Please enter from ages 0 and above.';
    } else if (yearsOfAge >= 0 && yearsOfAge <= 2) {
        return 'Infancy: 0-2 years old';
    } else if (yearsOfAge >= 3 && yearsOfAge <= 6) {
        return 'Early Childhood: 3-6 years old';
    } else if (yearsOfAge >= 7 && yearsOfAge <= 12) {
        return 'Middle Childhood: 7-12 years old';
    } else if (yearsOfAge >= 13 && yearsOfAge <= 19) {
        return 'Adolescence: 13-19 years old';
    } else if (yearsOfAge >= 20 && yearsOfAge <= 60) {
        return 'Adulthood: 20-60 years old';
    } else if (yearsOfAge >= 61) {
        return 'Old Age: 61 and above';
    }

}