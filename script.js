var hitrn = 0;

function makeBubble(){
    var cullter = "";
    for( var i=1; i<=102; i++){
        var rn=Math.floor(Math.random()*10)
        cullter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector(".bbtm").innerHTML=cullter;
}
var timer = 30;
function GetNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}
function runTimmer(){
    var timerint = setInterval(function (){
        if (timer > 0){
            timer--;
            document.querySelector("#timerval").textContent=timer;
        }else{
            clearInterval(timerint);
            document.querySelector(".bbtm").innerHTML = `<h1>Game Over<h1>`
        }

    }, 1000);
}
var score = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
document.querySelector(".bbtm").addEventListener("click",function (dets){
   // console.log(Number(dets.target.textContent));
    var clickednum = Number(dets.target.textContent);
    if (clickednum===hitrn){
        increaseScore();
        makeBubble();
        GetNewHit();
    }
});

runTimmer();
makeBubble();
GetNewHit();
