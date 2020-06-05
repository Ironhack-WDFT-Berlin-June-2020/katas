/* 
https://www.codewars.com/kata/total-amount-of-points
Our football team finished the championship. The result of each match look like "x:y". 
Results of all matches are recorded in the collection.
For example: ["3:1", "2:2", "0:1", ...]
Write a function that takes such collection and counts the points of our team in the championship. 
Rules for counting points for each match:
if x>y - 3 points
if x<y - 0 point
if x=y - 1 point
Notes:
there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

function points(games) {
    let totalPoints = 0;
    let result;
    for (let i = 0; i < games.length; i++) {
        result = games[i];
        if (result[0] > result[2]) {
            totalPoints += 3;
        } else if (result[0] === result[2]) {
            totalPoints += 1;
        }
    }
    return totalPoints;
}

// how to get the numbers based on the colon
const res = "302:1232"
const firstNumber = res.slice(0, res.indexOf(':')) // 302
const secondNumber = res.slice(res.indexOf(':') + 1) // 1232