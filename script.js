const logo = document.querySelector('.logo');
const list = document.querySelector(".menu-list");
const sticky = list.offsetTop;

window.onscroll = function() {
  if (window.pageYOffset >= sticky) {
    list.classList.add('sticky');
    logo.classList.add('hide');
  } else {
    list.classList.remove("sticky");
    logo.classList.remove('hide');
  }
}
