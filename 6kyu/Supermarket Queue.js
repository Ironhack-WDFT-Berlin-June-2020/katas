/*
https://www.codewars.com/kata/57b06f90e298a7b53d000a86
There is a queue for the self - checkout tills at the supermarket.
Your task is write a function to calculate the total time required for all the customers to check out!
input
customers: an array of positive integers representing the queue.Each integer represents a customer,
    and its value is the amount of time they require to check out.
        n: a positive integer, the number of checkout tills.
            output
The function should return an integer, the total time required.
queueTime([5, 3, 4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times
queueTime([10, 2, 3, 3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.
queueTime([2, 3, 10], 2)
// should return 12
*/

const queueTime = (line, registers) => {
    let result = [];

    for (let i = 0; i < registers; i++) {
        result.push(0);
    }
    // another way to create the array 
    // const result = Array(registers).fill(0)
    for (let i = 0; i < line.length; i++) {
        result[0] += line[i];
        result.sort((a, b) => a - b);
    }

    return result[result.length - 1];
}

// checking for the lowest number instead of sorting the array
const queueTime = (customers, n) => {
    if (customers == '') return 0;
    let aux = customers.splice(0, n)
    for (let i = 0; i < customers.length; i++) {
        let indexMinValue = aux.indexOf(Math.min(...aux))
        aux[indexMinValue] += customers[i]
    }
    return Math.max(...aux)
}