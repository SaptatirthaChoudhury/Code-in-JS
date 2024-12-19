/**
 * Given an array of forecasted maximum temperature,
 * the thermometer displays a string with these temperatures.
 * 
 * Example: [17, 21, 23] will print "... 17ōC in 1 days ... 21ōC in 2 days ... 23ōC in 3 days ..."
 * 
 * Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.
 * 
 * Use the problem-solving framework: Understanding the problem and break it up into sub-problem!
 * 
 * 
 * TEST DATA 1: [17, 21, 23]
 * TEST DATA 2: [12, 5, -5, 0, 4]
 */

// 1) Understanding the problem
// -  Array transformed to string, separated by ...
// -  What is the X days ?

// 2) Breaking up into sub-problems
// -  Transform array into string
// -  Transform each element to string with ōC
// - String needs to contain day (index + 1)
// - Add ... between elements and start and end of string

function printForecast(arr) {
    let str = ''
    for (let i = 0; i < arr.length; i++) {
        str = str + `... ${arr[i]}ōC in ${i + 1} days`
    }
    return str
}

console.log(printForecast([17, 21, 23]));



