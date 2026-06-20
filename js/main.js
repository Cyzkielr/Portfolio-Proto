const welcome = document.getElementById("welcome");

welcome.innerHTML = "Welcome to Cyzkielr's Portfolio";

const button = document.getElementById("status-btn");

const status= document.getElementById("mission-status");

button.addEventListener("click", function(){
  status.innerHTML = "Complete";
});

const servants = [
"Morgan",
"Ereshkigal",
"Ishtar",
"King Hassan",
"Gilgamesh",
"Mordred",
"Super Orion"
];

const summonBtn = document.getElementById("summon-btn");
const result = document.getElementById("result");

summonBtn.addEventListener("click", function(){

const random =
Math.floor(
  
Math.random()*
servants.length

);

result.innerHTML =

servants[random];

});