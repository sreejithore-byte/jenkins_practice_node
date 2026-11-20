function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}


module.exports = { add, subtract };

console.log(add(2, 3));
console.log(subtract(5, 2));
