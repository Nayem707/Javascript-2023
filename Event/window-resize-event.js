window.addEventListener('resize', () => {
  const h = window.outerHeight;
  const w = window.outerWidth;
  document.getElementById('demo').innerHTML = `h: ${h}, w:${w}`;
});
