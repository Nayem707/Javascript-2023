const numArray = [1, 2, 3, 4, 5, 6, 7, 4, 9, 7, 1, 10];

function myFunc(a) {
  const psort = (c, b) => {
    return c - b;
  };
  a.sort(psort);
  return console.log(a);
}
myFunc(numArray);

const points = [40, 100, 1, 5, 25, 10];
const psort = (a, b) => {
  return a - b;
};
points.sort(psort);
document.getElementById('demo').innerHTML = points;
