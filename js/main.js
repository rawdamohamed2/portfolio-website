const imgs=document.querySelectorAll('.project-img');
let Title = document.getElementById('Title');
let decs =document.getElementById('decs')
let projectimg = document.getElementById('projectimg')

  imgs.forEach(img => {
    img.addEventListener("click", () => {  
        Title.innerHTML=img.dataset.title;
        decs.innerHTML=img.dataset.desc;  
        projectimg.src= img.dataset.img;
    });
  });

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('NavbarScroll');
  const hero = document.getElementById('Home');
  const heroBottom = hero.offsetHeight-navbar.offsetHeight;
  if (window.scrollY >= heroBottom) {
    navbar.classList.add('cardbg');
    navbar.classList.remove('navColor');
  } else {
    navbar.classList.remove('cardbg');
    navbar.classList.add('navColor');
  }
});








