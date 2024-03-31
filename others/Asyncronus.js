const paymentSucsess = true;
const mark = 70;

function enroll(callback) {
  console.log('enroll progressing!');

  setTimeout(() => {
    if (paymentSucsess) {
      callback();
    } else {
      console.log('payment was not sucsessfull!');
    }
  }, 2000);
}

function progress(callback) {
  console.log('curse progressing');

  setTimeout(() => {
    if (mark >= 50) {
      callback();
    } else {
      console.log('could not pass in the class');
    }
  }, 3000);
}

function getCerteficate() {
  console.log('certificate prograssing!');
  setTimeout(() => {
    console.log('congrates! you can get certificate');
  }, 1000);
}

enroll(() => {
  progress(getCerteficate);
});
