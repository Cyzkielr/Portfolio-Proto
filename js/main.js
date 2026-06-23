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

if(welcome){
  welcome.textContent =
"Welcome to Cyzkielr's Portfolio";
}

if(summonBtn && result){
  summonBtn.addEventListener(

"click",

function(){

const random =

Math.floor(
Math.random()*servants.length
);

const messages = [
  `★ Summoned: ${servants[random]}`,
  `Saint Graph Registered: ${servants[random]}`,
  `Spirit Origin Confirmed: ${servants[random]}`,
  `Servant Acquired: ${servants[random]}`
];


result.textContent =

messages[
  Math.floor(Math.random()*messages.length)
];


}

);
}