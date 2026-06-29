function initWelcome(){
  const welcome = document.getElementById("welcome");

  const text = "Initializing Chaldea Database...";

  let index = 0;

  const themeBtn = document.getElementById("theme-btn");

  welcome.textContent = "";

  const typing = setInterval(function(){
  
  if (index < text.length){
    welcome.textContent += text[index];
    index++;
  }
  else {
    clearInterval(typing);
  }
  }, 50);
}

function initTheme(){
  const themeBtn = document.getElementById("theme-btn");
  
  if (themeBtn && localStorage.getItem("theme") === "mooncell"){
  document.body.classList.add("mooncell");
  themeBtn.textContent = "💻";
  }

  if (themeBtn) {
  themeBtn.addEventListener("click", function(){
  document.body.classList.toggle("mooncell");
  
  if (document.body.classList.contains("mooncell")) {
  themeBtn.textContent = "💻";
  localStorage.setItem("theme", "mooncell");
  }
  else {
  themeBtn.textContent = "🌙";
  localStorage.removeItem("theme");
  }
  });
  }
}

function initSummon(){
  const summonBtn = document.getElementById("summon-btn");
  
  const result = document.getElementById("result");
  
  const servants = [
    "Morgan",
    "Ereshkigal",
    "Gilgamesh",
    "King Hassan",
    "Super Orion",
    "Ishtar",
    "Mordred"
  ];
  
  if(summonBtn && result){
  summonBtn.addEventListener("click",function(){
    const random =
    Math.floor(Math.random()*servants.length);

    const messages = [
      `★ Summoned: ${servants[random]}`,
      `Saint Graph Registered: ${servants[random]}`,
      `Spirit Origin Confirmed: ${servants[random]}`,
      `Servant Acquired: ${servants[random]}`
    ];
  result.textContent = messages[Math.floor(Math.random()*messages.length)];
  });
  }
}

const homeLink = document.getElementById("homeLink");
const aboutLink = document.getElementById("aboutLink");
const skillLink = document.getElementById("skillLink");
const projLink = document.getElementById("projLink");
const contLink = document.getElementById("contLink");
const homeSec = document.getElementById("home");
const aboutSec = document.getElementById("about");
const skillSec = document.getElementById("skills");
const projSec = document.getElementById("projects");
const contSec = document.getElementById("contact");

function showScrollPos(){
  if (window.scrollY >= homeSec.offsetTop && 
      window.scrollY < aboutSec.offsetTop) {
    homeLink.classList.add("active");
    aboutLink.classList.remove("active");
    skillLink.classList.remove("active");
    projLink.classList.remove("active");
    contLink.classList.remove("active");
    }
  else if (window.scrollY >= aboutSec.offsetTop && 
    window.scrollY < skillSec.offsetTop) {
    homeLink.classList.remove("active");
    aboutLink.classList.add("active");
    skillLink.classList.remove("active");
    projLink.classList.remove("active");
    contLink.classList.remove("active");
    }
  else if (window.scrollY >= skillSec.offsetTop && 
    window.scrollY < projSec.offsetTop) {
    homeLink.classList.remove("active");
    aboutLink.classList.remove("active");
    skillLink.classList.add("active");
    projLink.classList.remove("active");
    contLink.classList.remove("active");
  }
  else if (window.scrollY >= projSec.offsetTop && 
    window.scrollY < contSec.offsetTop) {
    homeLink.classList.remove("active");
    aboutLink.classList.remove("active");
    skillLink.classList.remove("active");
    projLink.classList.add("active");
    contLink.classList.remove("active");
  }
  else if (window.scrollY >= contSec.offsetTop) {
    homeLink.classList.remove("active");
    aboutLink.classList.remove("active");
    skillLink.classList.remove("active");
    projLink.classList.remove("active");
    contLink.classList.add("active");
  }
}

initWelcome();
initTheme();
initSummon();
window.addEventListener("scroll", showScrollPos);