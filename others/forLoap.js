const array = [
  { id: 1, name: 'nayem islam', amount: 23 },
  { id: 2, name: 'sayem islam', amount: 20 },
  { id: 3, name: 'sojib islam', amount: 200 },
  { id: 4, name: 'mahu islam', amount: 230 },
  { id: 5, name: 'bulu islam', amount: 55 },
  { id: 6, name: 'junaid islam', amount: 35 },
  { id: 7, name: 'kamrul islam', amount: 85 },
  { id: 8, name: 'kamal islam', amount: 300 },
  { id: 9, name: 'najmul islam', amount: 45 },
  { id: 10, name: 'kaium islam', amount: 82 },
];
function myFunc(a) {
  console.log(a.map((i) => i.amount));
}
myFunc(array);

const cars = ['BMW', 'Volvo', 'Saab', 'Ford', 'Fiat', 'Audi'];

let text = '';

for (let i = 0; i < cars.length; i++) {
  text = text + cars[i] + ' ';
}

console.log(text);
