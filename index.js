//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};
const day1TempF = 32;  // Day 1
const day2TempC = 25;  // Day 2
const day3TempF = 70;  // Day 3
const day4TempC = 18;  // Day 4
const day5TempF = 80;  // Day 5
const day6TempC = 15;  // Day 6
const day7TempF = 72;  // Day 7
const day8TempC = 28;  // Day 8
const day9TempF = 68;  // Day 9
const day10TempC = 20; // Day 10
const day11TempF = 75; // Day 11
const day12TempC = 23; // Day 12
const day13TempF = 82; // Day 13
const day14TempC = 30; // Day 14
const day15TempF = 65; // Day 15
const day16TempC = 22; // Day 16
const day17TempF = 77; // Day 17
const day18TempC = 26; // Day 18
const day19TempF = 78; // Day 19
const day20TempC = 24; // Day 20
const day21TempF = 73; // Day 21
const day22TempC = 21; // Day 22
const day23TempF = 79; // Day 23
const day24TempC = 27; // Day 24
const day25TempF = 71; // Day 25
const day26TempC = 19; // Day 26
const day27TempF = 74; // Day 27
const day28TempC = 17; // Day 28
const day29TempF = 76; // Day 29
const day30TempC = 29; // Day 30

// Fahrenheit to Celsius conversion function
function fahrenheitToCelsius(tempInFahrenheit) {
    return (tempInFahrenheit - 32) * 5 / 9;
  }
  
  // Celsius to Fahrenheit conversion function
  function celsiusToFahrenheit(tempInCelsius) {
    return (tempInCelsius * 9 / 5) + 32;
  }

  // Step 1: Calculate total temperature in Fahrenheit
const tot_temperature_in_fahrenheit = day1TempF + day3TempF + day5TempF + day7TempF + day9TempF + day11TempF + day13TempF + day15TempF + day17TempF + day19TempF + day21TempF + day23TempF + day25TempF + day27TempF + day29TempF;

// Step 2: Calculate total temperature in Celsius (converting Fahrenheit to Celsius)
const tot_temperature_in_celsius = day2TempC + day4TempC + day6TempC + day8TempC + day10TempC + day12TempC + day14TempC + day16TempC + day18TempC + day20TempC + day22TempC + day24TempC + day26TempC + day28TempC + day30TempC
  + fahrenheitToCelsius(day1TempF) + fahrenheitToCelsius(day3TempF) + fahrenheitToCelsius(day5TempF) + fahrenheitToCelsius(day7TempF) + fahrenheitToCelsius(day9TempF)
  + fahrenheitToCelsius(day11TempF) + fahrenheitToCelsius(day13TempF) + fahrenheitToCelsius(day15TempF) + fahrenheitToCelsius(day17TempF) + fahrenheitToCelsius(day19TempF)
  + fahrenheitToCelsius(day21TempF) + fahrenheitToCelsius(day23TempF) + fahrenheitToCelsius(day25TempF) + fahrenheitToCelsius(day27TempF) + fahrenheitToCelsius(day29TempF);

// Step 3: Calculate average temperature in Fahrenheit
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 15; // 15 days with Fahrenheit temperatures

// Step 4: Calculate average temperature in Celsius
const avg_temperature_in_celsius = tot_temperature_in_celsius / 15; // 15 days with Celsius temperatures

// Output the results
console.log("Total temperature in Fahrenheit: " + tot_temperature_in_fahrenheit);
console.log("Total temperature in Celsius: " + tot_temperature_in_celsius);
console.log("Average temperature in Fahrenheit: " + avg_temperature_in_fahrenheit.toFixed(2));
console.log("Average temperature in Celsius: " + avg_temperature_in_celsius.toFixed(2));
