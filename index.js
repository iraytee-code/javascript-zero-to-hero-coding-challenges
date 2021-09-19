/* 
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK �
*/

//Coding challenge 1(solution)

// // weight value DATA 1
// const massMark = 78;
// const massJohn = 92;

// // height value DATA 2
// const heightMark = 1.69;
// const heightJohn = 1.95;

// weight value DATA 1
const massMark = 95;
const massJohn = 85;

// height value DATA 2
const heightMark = 1.88;
const heightJohn = 1.76;

// body mas index formula
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn /(heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark + "KG", BMIJohn + "KG", markHigherBMI);


/* coding challenge 2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement */


if(BMIMark>BMIJohn){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else (
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
)