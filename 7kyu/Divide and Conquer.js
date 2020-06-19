/*
https://www.codewars.com/kata/57eaec5608fed543d6000021
Given a mixed array of number and string representations of integers, 
add up the string integers and subtract this from the total of the non-string integers.
Return as a number.
*/

function divCon(ar) {
    let sumNum = 0;
    let sumString = 0;
    for (let i = 0; i < ar.length; i++) {
        if (typeof ar[i] === 'number') {
            sumNum += ar[i];
        }
        if (typeof ar[i] === 'string') {
            sumString += Number(ar[i]);
        }
    }
    let result = sumNum - sumString;

    return result;
}

// using reduce - here we are substracting the string values directly at every step
function divCon(ar) {
    return ar.reduce(function (acc, val) {
        if (typeof val === 'number') {
            return acc + val
        } else {
            return acc - Number(val)
        }
    }, 0)
}