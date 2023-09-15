const numArray = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8, [9, 10, [11, 12]]]],
];
const newA = numArray.flat(4);
console.log(newA);
document.getElementById('demo').innerHTML = newA;
