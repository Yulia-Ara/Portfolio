// 'use strict'

// let prevScrollPos = window.pageYOffset;

// window.onscroll = function () {
//     let currentScrollPos = window.pageYOffset;
//     if(prevScrollPos > currentScrollPos) {
//         document.getElementById("nav").style.top = "0";
//     } else {
//         document.getElementById("nav").style.top = "-50px";
//     }
//     prevScrollPos = currentScrollPos;
// }

let didScroll;
let lastScrollTop = 0;
const delta = 5;
let navbarHeight = $('nav').outerHeight();

$(window).scroll(function(event) {
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    if (st > lastScrollTop && st > navbarHeight){
        $('nav').removeClass('nav-down').addClass('nav-up');
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('nav').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}