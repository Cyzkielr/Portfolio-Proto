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

initWelcome();
initTheme();
initSummon();