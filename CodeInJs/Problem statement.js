// Using Google, StackOverflow and MDN

'use strict'

/**
 * _____PROBLEM 1 ______
 * 
 * We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of ane day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
 */

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

// 1) Understanding the problem
// - What is temp amplitude ? Answer: difference between highest and lowest temp
// - How to compute max and min temperature ?
// - What's a sensor error? And what to do ?


// 2) Breaking up into sub-problems
// - How to ignore errors ?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {

    let max = temps[0]
    let min = temps[0]

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i]
        if (typeof curTemp !== 'number') continue

        if (temps[i] > max) max = curTemp
        if (temps[i] < min) min = curTemp
    }

    return max - min
}

const amplitude = calcTempAmplitude([21, 1, 3, 90, 17, 7])
console.log(amplitude);


/**
 * ____PROBLEM 2 _____

 Function should now receive 2 arrays of temps

 1) Understanding the problem
 - With 2 arrays, should we implement functionality twice? NO? Just merge two arrays

 2) Breaking up into sub-problems
 - Merge 2 arrays
*/

const calcTempAmplitudeNew = function (arr1, arr2) {
    const temps = arr1.concat(arr2)
    let max = temps[0]
    let min = temps[0]

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i]
        if (typeof curTemp !== 'number') continue

        if (temps[i] > max) max = curTemp
        if (temps[i] < min) min = curTemp
    }

    return max - min
}

const amplitude2 = calcTempAmplitudeNew([21, 1, 3, 90, 17, 7], [98, 321, 678, 17898])
console.log(amplitude2);
