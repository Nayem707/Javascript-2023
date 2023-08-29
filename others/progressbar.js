const progresss = document.querySelector('.progress');
const loading = document.querySelector('.loading');

let i = 0;
const fakeUploadData = [
  0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 96, 97, 98, 99, 100,
];
const interval = setInterval(() => {
  progresss.style.width = fakeUploadData[i] + '%';
  i++;
  if (i == fakeUploadData.length) {
    clearInterval(interval);
    loading.innerHTML = 'Completed!';
  }
}, 700);
