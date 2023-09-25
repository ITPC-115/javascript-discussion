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
    switch(age)
        {
            case age >= 0 && age <= 2:
                console.log('Infancy');

                break;
            case age >= 3 && age <= 6:
                console.log('Early Childhood');

                break;
            case age >= 7 && age <= 12:
                console.log('Middle Childhood');

                break;
            case age >= 13 && age <= 19:
                console.log('Adolescence');

                break;
            case age >= 20 && age <= 60:
                console.log('Adulthood');

                break;
            case age >= 61:
                console.log('Old Age');

                break;
            default:
                console.log('Invalid Input.');
        }
}
