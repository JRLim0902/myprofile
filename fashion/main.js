var burger = document.querySelector(".burger");
var navlinks = document.querySelector(".navlink");
function active_navlinks() {
    navlinks.classList.toggle("navlink-active");
    console.log('test');
    console.log(navlinks);
};


burger.addEventListener('click', active_navlinks)