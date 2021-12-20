var burger = document.querySelector(".burger");
var navlinks = document.querySelector(".navlink");
function active_navlinks() {
    navlinks.classList.toggle("navlink-active");
    console.log('test');
    console.log(navlinks);
};


var slideIndex = 1;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    };
    if (slideIndex > slides.length) { slideIndex = 1 };
    if (slideIndex < 1) { slideIndex = slides.length };

    /*console.log(slideIndex);*/

    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";

    slideIndex++;

    setTimeout(showSlides, 2000);

}


function plusSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    slideIndex += n;
}



function scrollAppear() {
    var descriptions = document.querySelectorAll(".description");
    var screenPosition = window.innerHeight / 1.2;
    /*console.log(screenPosition);*/
    descriptions.forEach(x => {
        var xPosition = x.getBoundingClientRect().top;
        /*console.log(xPosition);*/
        if (xPosition < screenPosition) {
            x.classList.add('description-active');
        };
    })
}

window.addEventListener('scroll', scrollAppear);
burger.addEventListener('click', active_navlinks);