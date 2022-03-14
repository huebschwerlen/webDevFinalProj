// NAV BAR SECTION
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');

//Show nav menu
menuBtn.addEventListener('click', () => {
  menu.style.display = 'block';
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'inline-block';
});

//Hide nav menu
closeBtn.addEventListener('click', () => {
  menu.style.display = 'none';
  menuBtn.style.display = 'inline-block';
  closeBtn.style.display = 'none';
});

// ABOUT ME SECTION
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
