const convertToFahrenheit = (celsius, whole) =>{
    let convertedValue = 9 / 5 * celsius +whole;
    return convertedValue;
};

const fahrenheit = convertToFahrenheit(27, 32);
console.log('Fahrenheit',fahrenheit);

