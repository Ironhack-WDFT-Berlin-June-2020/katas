/*
https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
The main idea is to count all the occurring characters(UTF-8) in string. 
If you have string like this aba then the result should be { 'a': 2, 'b': 1 }
What if the string is empty ? Then the result should be empty object literal { }
*/

// create an empty object
// iterate over the string
// is this character already in the object
// if yes: add one to the value
// if not: we add that key to the object with value 1
// after iteration is done we return the object

const count = s => {
    const obj = {};
    s.split('').forEach(char => {
        if (obj[char]) {
            obj[char]++
        } else {
            obj[char] = 1
        }
    })
    return obj
}

// using reduce
const count = s => s.split('').reduce((obj, char) => {
    obj[char] = (obj[char] || 0) + 1
    return obj
}, {})