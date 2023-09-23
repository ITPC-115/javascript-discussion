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
    if (age >= 100)
    {
        let development = "Kami-sama";
        return development;
    }
    else if (age >= 61)
    {
        let development = "Old Age";
        return development;
    }
    else if (age >= 20)
    {
        let development = "Adulthood";
        return development;
    }
    else if (age >= 13)
    {
        let development = "Adolescence";
        return development;
    }
    else if (age >= 7)
    {
        let development = "Middle Childhood";
        return development;
    }
    else if (age >= 3)
    {
        let development = "Early Childhood";
        return development;
    }
    else if (age >= 0 )
    {
        let development = "Infancy";
        return development;
    }
    else
    {
        return "out of bounds";
    }

}