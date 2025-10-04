// Variables, control-flow, operator precedence?

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;
let markHigherBMI = false;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark);
console.log(BMIJohn);

if (BMIMark > BMIJohn) {
  markHigherBMI = true;
}

console.log(markHigherBMI);
