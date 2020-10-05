//set scrolling via nav
var liElements = document.getElementById('nav_bar').children[0].children;

for (key in liElements) {
  liElements[key].firstChild.onclick =
    function yourFunction(ev) {
      var element = ev.target || ev.srcElement;
      var targetSection = element.getAttribute('data-target');

      window.scrollTo(0, document.getElementById(targetSection).offsetTop - 55);
    };
}
