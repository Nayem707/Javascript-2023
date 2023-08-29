const mongdbApi = [
  {
    id: 1,
    n: 'nayem',
    catagory: 'CAT',
    amuont: 10,
  },
  {
    id: 2,
    n: 'syem',
    catagory: 'CAT',
    amuont: 10,
  },
  {
    id: 3,
    n: 'sojib',
    catagory: 'BAT',
    amuont: 20,
  },
  {
    id: 4,
    n: 'mahu',
    catagory: 'BAT',
    amuont: 20,
  },
  {
    id: 5,
    n: 'junaed',
    catagory: 'MAT',
    amuont: 30,
  },
  {
    id: 6,
    n: 'bulu',
    catagory: 'MAT',
    amuont: 30,
  },
  {
    id: 7,
    n: 'akash',
    catagory: 'MAT',
    amuont: 30,
  },
  {
    id: 8,
    n: 'prokash',
    catagory: 'HAT',
    amuont: 40,
  },
  {
    id: 9,
    n: 'mahadi',
    catagory: 'HAT',
    amuont: 40,
  },
];

function myFunction(api) {
  const result = api.filter((f) => f.catagory === 'BAT');
  const a = result.map((a) => a.amuont);

  const result1 = a.reduce((a, c) => a + c);
  console.log(result1);
}

myFunction(mongdbApi);
