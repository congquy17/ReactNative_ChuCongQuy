// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

// task1 
var nameMark = "Mark";
var weightMark = 78;
var heightMark = 1.69;
var markBMI = BMI = weightMark / heightMark ** 2;

var nameJohn = "John";
var weightJohn = 95;
var heightJohn = 1.88;
var johnBMI = BMI = weightJohn / heightJohn ** 2;
// task2
var markHigherBMI = markBMI > johnBMI;
// task 3 
console.log("so sánh chiều cao")
if (markHigherBMI) {
    console.log("The message is either Marks BMI is higher than Johns!")
    console.log(`mark cao hơn john ${nameMark} ${markBMI} & ${nameJohn} ${johnBMI} `)
} else {
    console.log("John's BMI is higher than Mark's!")
    console.log(`mark thấp hơn john ${nameMark} ${markBMI} & ${nameJohn} ${johnBMI} `)
}