window.onscroll = function() {
  var header = document.getElementById('header');
  if (window.scrollY > 120) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
};