let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');
let btns = ["red", "purple", "blue", "yellow"];

document.addEventListener("keypress", function () {
    if(started == false){
        console.log("Game was started");
        started = true;
    }

    levelUp();
})

function btnFlash(btn){
    btn.classList.add("flash");

    setTimeout( () => {
        btn.classList.remove("flash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText =(`Level is ${level}`);

    let randIdx = Math.floor((Math.random() * 4));
    randColor = btns[randIdx];
    randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randBtn);

    console.log(gameSeq);
}

function btnFlashed(btn) {
    btn.classList.add("flashed");

    setTimeout( () => {
        btn.classList.remove("flashed");
    }, 250);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level= 0;
}




function checkAns(idx){
   
    if(gameSeq[idx] === userSeq[idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = (`Game over!! Your score was <b>${level}</b><br>Press any key to start the game.`);
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor="white";
        }, 100)
        reset();
    }
}

function btnPress() {
    let btn = this;
    btnFlashed(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);
    
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", btnPress);
   
}