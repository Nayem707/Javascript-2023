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
   *****************************************************************/

  const [name, , vlaueHr] = lines.map(Number);

  const result = hr * vlaueHr;

  console.log(`NUMBER = ${number}\nSALARY = U$ ${result.toFixed(2)}`);

  //*****************************************************************//
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
  document.getElementById('output').innerHTML = 'Output: ' + result.toFixed(2);
}
