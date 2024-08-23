  //     Coding Challenge #1
  // Mark and John are trying to compare their BMI (Body Mass Index), which is
  // calculated using the formula:
  // BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).


  //     Your tasks:
  // 1. Store Mark's and John's mass and height in variables
  // 2. Calculate both their BMIs using the formula (you can even implement both
  // versions)
  // 3. Create a Boolean variable 'markHigherBMI' containing information about
  // whether Mark has a higher BMI than John.

  var BMI = 0.0;
  var mass = 5.5;
  var height = 2;
  BMI = mass / height ** 2;
  console.log(BMI)

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
  console.log(`your BMI of 2 idol that ${nameMark} ${markBMI} & ${nameJohn} ${johnBMI} `)