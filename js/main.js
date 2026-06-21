const welcome =
document.getElementById("welcome");

const summonBtn =
document.getElementById("summon-btn");

const result =
document.getElementById("result");

const servants = [
"Morgan",
"Ereshkigal",
"Gilgamesh",
"King Hassan",
"Super Orion",
"Ishtar",
"Mordred"
];


welcome.textContent =
"Welcome to Cyzkielr's Portfolio";


summonBtn.addEventListener(

"click",

function(){

const random =

Math.floor(

Math.random()

*

servants.length

);


result.textContent =

`★ Summoned: ${servants[random]}`;


}

);