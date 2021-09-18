//Coding challenge 1

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
