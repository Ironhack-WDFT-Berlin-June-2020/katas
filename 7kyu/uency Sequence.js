/*
https://www.codewars.com/kata/frequency-sequence
Return an output string that translates an input string s/$s by replacing each character in s/$s
with a number representing the number of times that character occurs in s/$s and separating each number
with the character(s) sep/$sep.
*/


// this is how you can get number of occurences for a certain character
const character = 'w';
console.log('hello world'.split(character).length - 1);


const freqSeq = (str, sep) => str.split('').map(char => str.split(char).length - 1).join(sep)