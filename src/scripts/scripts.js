// read more info btn in about section
const readMoreBtn = document.querySelector('.read-more');
const moreInfo = document.querySelector('.more-info');

readMoreBtn.addEventListener('click', () => {
  moreInfo.classList.toggle('show-content');
  if (moreInfo.classList.contains('show-content')) {
    readMoreBtn.textContent = 'Show less';
  } else {
    readMoreBtn.textContent = 'Show more';
  }
});
