alert("Click Start to play. Player colour-Yellow. Opponent colour-Pink");
const startBtn = document.getElementById('start-btn');
const nextRnd = document.getElementById('next-rnd');
const containerJS = document.getElementById('container');
const controlsDiv = document.getElementsByClassName('controls');
const choicesJS = document.querySelector('.choices');
const rockJS = document.getElementById('rock');
const paperJS = document.getElementById('paper');
const scissorsJS = document.getElementById('scissors');

startBtn.addEventListener('click', startGame);


const list = [rockJS, paperJS, scissorsJS];

function startGame() {
    console.log('started');
    startBtn.classList.add('hide');
    containerJS.classList.remove('hide');
    controlsDiv[0].innerText = 'Choose your move!'; //have to add [0]
    console.log('executed')
    choicesJS.addEventListener('click', userMove);
}

const resultList = []

function userMove(e) {
    var selectedMove = e.target;
    console.log(selectedMove);
    selectedMove.style.backgroundColor = "yellow";
    const idName = selectedMove.getAttribute('id');
    controlsDiv[0].innerText = 'You chose' + ' ' + idName; //not showing, code moves straight 
    resultList[0] = selectedMove;
    opponentMove();
    result();
}

function opponentMove() {
    var selectedOpponent = list[Math.floor(Math.random() * 3)];
    console.log(selectedOpponent);
    const idname = selectedOpponent.getAttribute('id');
    controlsDiv[0].innerText = 'Opponent chose' + ' ' + idname; //not showing, code moves straight
    //selectedOpponent.classList.add('hide'); class cannot overide id??
    selectedOpponent.style.backgroundColor = "pink";
    resultList[1] = selectedOpponent;
}

function result() {
    console.log(resultList[0]);
    console.log(resultList[1]);
    if (resultList[0] === resultList[1]) {
        controlsDiv[0].innerText = "It's a TIE!!";
    } else if (resultList[0] === rockJS && resultList[1] === scissorsJS) {
        controlsDiv[0].innerText = "You WIN!!";
        document.body.classList.add('user');
    } else if (resultList[0] === paperJS && resultList[1] === rockJS) {
        controlsDiv[0].innerText = "You WIN!!";
        document.body.classList.add('user');
    } else if (resultList[0] === scissorsJS && resultList[1] === paperJS) {
        controlsDiv[0].innerText = "You WIN!!";
        document.body.classList.add('user');
    } else {
        controlsDiv[0].innerText = "Opponent wins!!";
        document.body.classList.add('opponent');
    }
    //containerJS.classList.add('hide');
    choicesJS.classList.add('suspend');
    nextRnd.classList.remove('hide');
    nextRnd.addEventListener('click', restart);
}


function restart() {
    resultList[0] = '';
    resultList[1] = '';
    controlsDiv[0].innerText = "Choose your move!!";
    document.body.classList.remove('user');
    document.body.classList.remove('opponent');
    rockJS.style.backgroundColor = '';
    paperJS.style.backgroundColor = '';
    scissorsJS.style.backgroundColor = '';
    choicesJS.classList.remove('suspend');
    startGame();
}
