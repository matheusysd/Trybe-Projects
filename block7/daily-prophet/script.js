document.querySelectorAll('article').forEach((e) => {
  e.addEventListener('click', () => {
    e.classList.add('play');
  });
});
