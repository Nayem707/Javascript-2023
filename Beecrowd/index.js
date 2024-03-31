function displayOutput() {
  // Get the input text from the form
  /**
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *****************************************************************/
  const lines = document.getElementById('input').value.split(' ');
  /****************************************************************
   *
   *
   *
   *
   **************************CODE HERE*******************************/

  const [name, hra, valueHr] = lines.map(Number);
  const result = hra * valueHr;

  console.log(`Name = ${name}\nSALARY = U$${result.toFixed(2)}`);

  //*************************CODE HERE*******************************/
  /*
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   * * ************************************************************/
  document.getElementById('output').innerHTML =
    'Output: ' + `U$ ${result.toFixed(2)}`;
}
