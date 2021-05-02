window.addEventListener('load', () => { // or function(){
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");// to get all the little pad inside pads
    const visual = document.querySelector(".visual");
    const colors = [
        "#ff4d94",
        "#6666ff",
        "#ffff33",
        "#66ff33",
        "#ff8000",
        "#cc00ff"
    ];
    //console.log(sounds);
    // for the sounds
    pads.forEach((pad, index) => { // or forEach(function(pad,index){)
        pad.addEventListener('click', function () {
            sounds[index].currentTime = 0; //dont think it makes a different
            sounds[index].play();
            createbubbles(index);
        });
    });

    // create function that makes bubbles
    const createbubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble); // or replace bubble w/ this 
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend', function () {
            visual.removeChild(bubble);
        });
    };
});

