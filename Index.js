// Make the Random Numbers
var randomNumber1=Math.ceil(Math.random()*6);
var randomNumber2=Math.ceil(Math.random()*6);
// select the dice photo and change it with the random number by changing its src attribute
document.getElementsByClassName("img1")[0].setAttribute("src","images/dice"+randomNumber1+".png")
document.getElementsByClassName("img2")[0].setAttribute("src","images/dice"+randomNumber2+".png")
// display to the user which one wons 
if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="<em>Player 1 Wins 🥇</em>"
}
else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="<em>Player 2 Wins 🥈</em>"
}
else {
    document.querySelector("h1").innerHTML="<em>Draw ⭐</em>"
}

