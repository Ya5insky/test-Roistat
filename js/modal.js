const modal = document.querySelector('.wrapper__modal');
const openButton = document.getElementById('openModal');
const closeButton = document.querySelector('.message__close');
const overlay = document.querySelector('.modal__overlay');


openButton.addEventListener('click', function() {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', function() {
  modal.style.display = 'none';
});

overlay.addEventListener('click', function() {
  modal.style.display = 'none';
});



document.getElementById('burgerBtn').addEventListener('click', function() {
    var navSite = document.querySelector('.nav__site');
    var burgerTop = document.querySelector('.burger__line_top');
    var burgerBottom = document.querySelector('.burger__line_bottom');
    var headerNav = document.querySelector('.header__nav');
    
    if (navSite.style.display === 'none') {
      navSite.style.display = 'flex';
      burgerTop.style.transform = 'rotate(45deg)';
      burgerBottom.style.transform = 'rotate(135deg)';
      burgerBottom.style.width = '25px';
      burgerTop.style.width = '25px';
      burgerBottom.style.top = '23px';
      burgerTop.style.top = '23px';
      headerNav.style.height = '130px';
      headerNav.style.flexDirection = 'column';
      headerNav.style.alignItems = 'normal';
    } else {
      navSite.style.display = 'none';
      burgerTop.style.transform = 'none';
      burgerBottom.style.transform = 'none';
      burgerBottom.style.width = '16px';
      burgerTop.style.width = '32px';
      burgerBottom.style.top = '28px';
      burgerTop.style.top = '18px';
      headerNav.style.height = null;
      headerNav.style.flexDirection = null;
      headerNav.style.alignItems = null;
    }
});