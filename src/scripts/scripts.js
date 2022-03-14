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

const navItems = menu.querySelectorAll('li');

//Nav items NON-active
const changeActiveItems = () => {
  navItems.forEach((item) => {
    const link = item.querySelector('a');
    link.classList.remove('active');
  });
};

navItems.forEach((item) => {
  const link = item.querySelector('a');
  link.addEventListener('click', () => {
    changeActiveItems();
    link.classList.add('active');
  });
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

//revert change nav depending on size on window
const revertNav = () => {
  if ($(window).width() > 1000) {
    menu.style.display = 'flex';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'none';
  } else {
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
  }
};
window.onresize = revertNav;
