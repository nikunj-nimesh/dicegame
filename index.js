var play1="Player 1";
var play2="Player 2";
document.querySelector("#roll").addEventListener("click",function()
{
    var randomnum1=Math.random();
    randomnum1=(randomnum1*6);
    randomnum1=Math.floor(randomnum1)+1;
    var diceimage="dice"+randomnum1+".png";
    var imagex="images/"+diceimage;
    var imgx=document.querySelectorAll("img")[0];
    imgx.setAttribute("src",imagex);
    var randomnum2=Math.random();
    randomnum2=(randomnum2*6);
    randomnum2=Math.floor(randomnum2)+1;
    var diceimage2="dice"+randomnum2+".png";
    var imagexl="images/"+diceimage2;
    var imgxl=document.querySelectorAll("img")[1];
    imgxl.setAttribute("src",imagexl);
    if(randomnum1==randomnum2)
    {
        document.querySelector("h1").innerHTML="DRAW";
    }
    else if(randomnum1>randomnum2)
    {
        document.querySelector("h1").innerHTML="🎈 "+play1 +" Wins";
    }
    else{
        document.querySelector("h1").innerHTML=play2+ " Wins 🎈";
    }
})
document.querySelector("#edit").addEventListener("click",function(){
    play1=prompt("Enter Player 1 name:");
    play2=prompt("Enter Player 2 name:");
    document.querySelector("#pl1").innerHTML=play1;
    document.querySelector("#pl2").innerHTML=play2;
})
