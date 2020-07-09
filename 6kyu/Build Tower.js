/*
https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript
Build Tower by the following given argument:
number of floors (integer and always greater than 0).
Tower block is represented as *
for example, a tower of 3 floors looks like below
[
  '  *  ',
  ' *** ',
  '*****'
]
and a tower of 6 floors looks like below
[
  '     *     ',
  '    ***    ',
  '   *****   ',
  '  *******  ',
  ' ********* ',
  '***********'
]
*/

const towerBuilder = floors => {
    const tower = [];
    for (let i = 1; i <= floors; i++) {
        tower.push(
            ' '.repeat(floors - i)
            + '*'.repeat(i * 2 - 1)
            + ' '.repeat(floors - i))
    }
    return tower;
}