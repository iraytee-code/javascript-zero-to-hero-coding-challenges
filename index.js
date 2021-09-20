console.log("CODING CHALLENGE 1")

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

console.log("CODING CHALLENGE 2")



if(BMIMark>BMIJohn){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else (
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
)
/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK �
*/
console.log("CODING CHALLENGE 3");


const dolphinsScore = (96 + 108 + 89);
// const dolphinsScore = (97 + 112 + 101);
// const dolphinsScore = (97 + 112 + 101);


const koalasScore = (88 + 91 + 110);
// const koalasScore = (109 + 95 + 123);
// const koalasScore = (109 + 95 + 106);





avgDolphinScore = (dolphinsScore/3);
avgKoalasScore = (koalasScore/3);

console.log(avgDolphinScore, avgKoalasScore);

// if (avgDolphinScore > avgKoalasScore) {
//     console.log("dolphins are gymnastics champions");
// } else if (avgDolphinScore < avgKoalasScore) {
//     console.log("koalas are gymnastics champions");
// } else{
//     console.log(`it's a tie`)
// }

// test results

if (avgDolphinScore > avgKoalasScore && avgDolphinScore >= 100 ) {
    console.log("dolphins are gymnastics champions");
} else if (avgDolphinScore < avgKoalasScore && avgKoalasScore >= 100) {
    console.log("koalas are gymnastics champions");
} else if (avgKoalasScore === avgDolphinScore && avgKoalasScore >= 100 && avgDolphinScore >= 100 ){
    console.log(`both team win the trophy`)
} else if ( (avgKoalasScore <= 100 && avgDolphinScore <= 100) && (avgDolphinScore > avgKoalasScore || avgDolphinScore < avgKoalasScore)) (
    console.log("both teams did not meet the target")
)

// MID CHALLENGE



const day = "monday"; // switch day value to get diffrent results

if(day==="monday"){
    console.log("plan course structure");
    console.log("go to coding meetup");
} else if (day === "tuesday"){
    console.log("prepare theory videos");
} else if(day === ("wednesday" || "thursday")){
    console.log("write code examples");
} else if (day === "friday") {
    console.log("record videos");
} else if (day === ("saturday" || "sunday")){
    console.log("enjoy the weekend");
} else {
    console.log("not a valid day my gee");
}



// coding challenge 4
/* Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 �
GOOD LUCK
*/

// const bill = 275;
// if (bill >= 50 && bill <= 300 ) {
//     const tip = bill * 0.15;
//     const billValue = (tip + bill);
//     console.log(`the bill pricing is shown below:
//                 Initial Bill = $${bill} 
//                 tip value = $${tip}
//                 total value = $${billValue}`);
// } else  {
//     const tip = bill * 0.20;
//     const billValue = (tip + bill);
//     console.log(`
//     the bill pricing is shown below:
//                 Initial Bill = $${bill} 
//                 tip value = $${tip}
//                 total value = $${billValue}`);
// }

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 :
    bill * 0.20 ;

    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
    ${bill + tip}`)







