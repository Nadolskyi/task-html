document.addEventListener("DOMContentLoaded", photoshop);
document.addEventListener("DOMContentLoaded", html);
document.addEventListener("DOMContentLoaded", js);
document.addEventListener("DOMContentLoaded", wordpress);
function photoshop() {
    var elem = document.getElementById("bar-photoshop");
    var width = 1;
    var id = setInterval(frame, 100);
    function frame() {
        if (width >= 79) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
function html() {
    var elem = document.getElementById("bar-html");
    var width = 1;
    var id = setInterval(frame, 100);
    function frame() {
        if (width >= 90) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
function js() {
    var elem = document.getElementById("bar-js");
    var width = 1;
    var id = setInterval(frame, 100);
    function frame() {
        if (width >= 69) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
function wordpress() {
    var elem = document.getElementById("bar-wordpress");
    var width = 1;
    var id = setInterval(frame, 100);
    function frame() {
        if (width >= 92) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
$(function(){
    $('#carousel-1').carousel({
      interval: 2000
    });
});
$(function(){
    $('#carousel-2').carousel({
      interval: 500
    });
});
