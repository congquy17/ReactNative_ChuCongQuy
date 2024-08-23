// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// Function to calculate the average score
function calculateAverage(scores) {
    const sum = scores.reduce((acc, score) => acc + score, 0);
    return sum / scores.length;
}

// Function to determine the winner
function determineWinner(dolphinsScores, koalasScores) {
    const dolphinsAverage = calculateAverage(dolphinsScores);
    const koalasAverage = calculateAverage(koalasScores);

    console.log(`Dolphins average score: ${dolphinsAverage}`);
    console.log(`Koalas average score: ${koalasAverage}`);

    // Check bonus rules
    if (dolphinsAverage >= 100 && koalasAverage >= 100) {
        if (dolphinsAverage > koalasAverage) {
            console.log('Dolphins win the trophy!');
        } else if (koalasAverage > dolphinsAverage) {
            console.log('Koalas win the trophy!');
        } else {
            console.log('It\'s a draw!');
        }
    } else if (dolphinsAverage >= 100 && koalasAverage < 100) {
        console.log('Dolphins win the trophy!');
    } else if (koalasAverage >= 100 && dolphinsAverage < 100) {
        console.log('Koalas win the trophy!');
    } else {
        console.log('No team wins the trophy.');
    }
}

// Test data
const data1Dolphins = [96, 108, 89];
const data1Koalas = [88, 91, 110];

const bonus1Dolphins = [97, 112, 101];
const bonus1Koalas = [109, 95, 123];

const bonus2Dolphins = [97, 112, 101];
const bonus2Koalas = [109, 95, 106];

// Testing the function
console.log('Test Data 1:');
determineWinner(data1Dolphins, data1Koalas);

console.log('\nBonus Data 1:');
determineWinner(bonus1Dolphins, bonus1Koalas);

console.log('\nBonus Data 2:');
determineWinner(bonus2Dolphins, bonus2Koalas);