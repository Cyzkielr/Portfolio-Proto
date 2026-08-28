const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');
const summonScreen = document.querySelector('#summon-screen');
const hasVisited = localStorage.getItem('visitedBefore');

if(hasVisited){
  summonScreen.classList.add('fade-out');
} else{
  setTimeout(() => {
    summonScreen.classList.add('fade-out');
    localStorage.setItem('visitedBefore', 'true');
  }, 1800);
}

window.addEventListener('scroll', () => {
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    
    if(window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight){
      currentSection = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href') === `#${currentSection}`){
      link.classList.add('active');
    }
  });
});

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSelection = document.querySelector(targetId);
    
    targetSelection.scrollIntoView({ behavior: 'smooth'});
  });
});