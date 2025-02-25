window.onscroll = function() {
  var header = document.getElementById('header');
  if (window.scrollY > 120) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
};

window.onscroll = function() {
  var arrow = document.querySelector(".button-arrow a");
  if (window.scrollY > 2800) {
    arrow.classList.add('display');
  } else {
    arrow.classList.remove('display')
  }
};
