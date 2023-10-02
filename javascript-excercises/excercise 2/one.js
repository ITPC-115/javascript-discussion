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
    if(yearsOfAge <= 2 && yearsOfAge >=0 )
    {
        yearsOfAge = "Infancy";
        return yearsOfAge;
    }else if (yearsOfAge<= 6 && yearsOfAge >= 3)
    {
        yearsOfAge = "Early Childhood";
        return yearsOfAge;
    }else if (yearsOfAge => 12 && yearsOfAge >= 7)
    {
        yearsOfAge = "Middle Childhood";
        return yearsOfAge;
    }else if (yearsOfAge => 19 && yearsOfAge >= 13)
    {
        yearsOfAge = "Adolescence";
        return yearsOfAge;
    }else if (yearsOfAge => 60 && yearsOfAge >= 20)
    {
        yearsOfAge = "Adulthood";
        return yearsOfAge;
    }else if (yearsOfAge > 60)
    {
        yearsOfAge = "Old Age";
        return yearsOfAge;
    }
}