/*
https://www.codewars.com/kata/57a6633153ba33189e000074
Count the number of occurrences of each character and return it as a list of tuples in order of appearance.
Example:
orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

// Solution Strategy 
// Turn text into an array without duplicates
// Iterate over this array and count every element in text
// After each iteration push element that you are at and the number of occurences into an result array


function orderedCount(text) {
    const arr = text.split('');
    const noDuplicates = arr.filter(function (el, index) {
        return arr.indexOf(el) === index;
    });
    let result = [];
    noDuplicates.forEach(function (el) {
        const occurences = text.split(el).length - 1;
        result.push([el, occurences])
    })
    return result;
}
