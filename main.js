// scrollHeight : Entir Content & Padding (visible or Not)
// clientHeight : Visible Content & padding 

var el = document.querySelector(".scroller");
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
    var scrollTop = document.documentElement.scrollTop;
    el.style.width = `${(scrollTop / height) * 100}%`
})