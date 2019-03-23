// 'use strict'

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

// const navLinks = document.querySelectorAll('.siteLinks a')

// navLinks.addEventListener('click', function(e) {
//     e.preventDefault();
//     console.log(e.target);
//     // instead of variable a, listen to href of link that was clicked and find corresponding header
//   scrollPageTo(a, 300).then(() => {})
// })

// function scrollPageTo (to, duration=500) {
//   //t = current time
//   //b = start value
//   //c = change in value
//   //d = duration

//   // Experiment with other easing animations!
//   // http://www.gizma.com/easing/#cub3
  
//   const easeInOutQuad = function (t, b, c, d) {
//     t /= d/2;
//     if (t < 1) return c/2*t*t + b;
//     t--;
//     return -c/2 * (t*(t-2) - 1) + b;
//   };

//   return new Promise((resolve, reject) => {
//     const element = document.scrollingElement;

//     if (typeof to === 'string') {
//       to = document.querySelector(to) || reject();
//     }
//     if (typeof to !== 'number') {
//       to = to.getBoundingClientRect().top + element.scrollTop;
//     }

//     let start = element.scrollTop,
//         change = to - start,
//         currentTime = 0,
//         increment = 20;

//     const animateScroll = function() {
//         currentTime += increment;
//         let val = easeInOutQuad(currentTime, start, change, duration);
//         element.scrollTop = val;
//         if(currentTime < duration) {
//             setTimeout(animateScroll, increment);
//         } else {
//           resolve();
//         }
//     };
//     animateScroll();
//   });
// }

// $('#about').click(function() {
//     let offSet = $(this).offSet();
//     offSet.left -= 20;
//     offSet.top -= 20;
    // $('html, body').animate({
    //     scrollTop: $("#about").offset().top
    // }, 1000);
    
// });