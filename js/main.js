let SiteNav = document.querySelector('.nav');
let SiteBtn = document.querySelector('.header__btn');
let BigList = document.querySelector('.shopping__big-list');
let GridBtn = document.querySelector('.grid-btn');
let SiteProdcut = document.querySelector('.productss');
let ListBtn = document.querySelector('.list__btns');

SiteBtn.addEventListener("click", () => {
  SiteNav.classList.toggle('show');
})

GridBtn.addEventListener("click", () => {
  BigList.classList.add('remove__list-big');
  SiteProdcut.classList.add('remove__add');
})

ListBtn.addEventListener("click", () => {
  BigList.classList.add('remove__list-bigg');
  SiteProdcut.classList.add('remove__none');
})