var score = 0;
var time = 60;
var hitrn = 0;

function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;

}
function MakeBubble()
{
    var clutter = "";

    for(var i = 1 ; i < 137 ; i++)
    {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function MakeHit()
{
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitbtn").textContent = hitrn;
}

function runTimer(){
    var timeEnd = setInterval(function() {
        if(time > 0)
        {
            time--;
            document.querySelector("#timeInterval").innerHTML = time;
        }
        else
        {
            clearInterval(timeEnd);
            document.querySelector("#pbtm").innerHTML = `<h1>Your Score is ${score}</h1>`;
        }
    },1000);
}
document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickednum = Number(dets.target.textContent);
    if(hitrn == clickednum)
    {
        increaseScore();
        MakeHit();
        MakeBubble();
    }
});

MakeHit();
runTimer();
MakeBubble();