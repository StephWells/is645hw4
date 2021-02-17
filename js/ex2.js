const r = Number(prompt("Enter the circle radius:"));

const circle = {
  radius: r,

  circumference() {
    return 2 * this.radius * Math.PI;
  },

  area() {
    return this.radius ** 2 * Math.PI;
  }
};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);