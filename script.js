const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    menu.classList.remove('active');
};

const sr = ScroolReveal ({
    distance: '45px',
    duratipn: 2700,
    reset: true
})

sr.reveal('.homr-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:right})

sr.reveal('.sub-service,.about,.portfolio,.service,.dta,.contact',{delay:200, origin:'bottom'})

