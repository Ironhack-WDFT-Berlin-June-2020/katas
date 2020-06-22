/*
https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
This time no story, no theory. The examples below show you how to write function accum:
Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/



function accum(str) {
    const arr = str.toLowerCase().split('');
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        let newChar = arr[i].toUpperCase() + arr[i].repeat(i);
        res.push(newChar)
    }
    return res.join('-')
}

// using map
function accum(str) {
    return str.toLowerCase().split('').map(function (c, i) {
        return c.toUpperCase() + c.repeat(i);
    }).join('-')
}