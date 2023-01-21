

;(()=>{
  var lastPos = 0, scrollToPos = document.body.scrollHeight;

  scrollBtn.addEventListener("click", () => scrollTo(0, scrollToPos));
  addEventListener("scroll", () => {
      scrollToPos = scrollY > lastPos ?  0 : document.body.scrollHeight;
      lastPos = Math.max(0, scrollY);
      scrollBtn.classList.toggle("scrollUp", scrollToPos === 0);
  }, false);
})();

window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementsByClassName("sticky_h").style.fontSize = "30px";
  } else {
    document.getElementsByClassName("sticky_h").style.fontSize = "90px";
  }
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
