const values = [3, 11, 7, 2, 9, 10];

let sum = 0;

 for (const value of values) {
  sum += value;
} 

console.log(Math.min(...values));
console.log(Math.max(...values));
console.log(sum);
