// Coding Challenge #5
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) =>
    (score1 + score2 + score3) / 3;

// 2. Use the function to calculate the average for both teams
// const avgDolhins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);
// console.log("avgDolhins1: " + avgDolhins)
// console.log("avgKoalas1: " + avgKoalas)
// const avgDolhins2 = calcAverage(85, 54, 41);
// const avgKoalas2 = calcAverage(23, 34, 27);
// console.log("avgDolhins2: " + avgDolhins2)
// console.log("avgKoalas2: " + avgKoalas2)
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
const checkWinner = (avgDolphins, avgKoalas) => {
        if (avgDolphins >= 2 * avgKoalas) {
            console.log(`Dolphins win1 (${avgDolphins.toFixed(2)} vs. ${avgKoalas.toFixed(2)})`);
        } else if (avgKoalas >= 2 * avgDolphins) {
            console.log(`Koalas win1 (${avgKoalas.toFixed(2)} vs. ${avgDolphins.toFixed(2)})`);
        } else {
            console.log('No team wins');
        }
    }
    // 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
    // Data 2
    // console.log("test 4")
    // const avgDolphinsv = calcAverage(44, 23, 71);
    // const avgKoalasv = calcAverage(65, 54, 49);
    // checkWinner(avgDolphinsv, avgKoalasv);

// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Data 1
const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);
checkWinner(avgDolphins1, avgKoalas1);

// Data 2
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);
checkWinner(avgDolphins2, avgKoalas2);
// Data 3
const avgDolphins3 = calcAverage(100, 90, 85);
const avgKoalas3 = calcAverage(40, 35, 30);
checkWinner(avgDolphins3, avgKoalas3);