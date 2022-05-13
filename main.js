window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()


  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
  // activateMenuAtCurrentSection(services)
}

function activateMenuAtCurrentSection(section){
  //Linha alvo
  const targetLine = scrollY + innerHeight / 2;

  //O topo da seção
  const sectionTop = section.offsetTop

  //A altura da seção
  const sectionHeight = section.offsetHeight
  
  // O topo da seção chegou ou ultrapassou a linha alvo.
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionHeight
  
  //Coletando informações
  

//Verificar se a base está abaixo da linha alvo
//Quais dados vou precisar?

// A seção termina aonde?
const sectionEndsAt = sectionTop + sectionHeight

//O final da seção passou da linha alvo
const sectionEndPassedTargetLine = sectionEndsAt <= targetLine



// Limites da seção
const sectionBoundaries = 
sectionTopReachOrPassedTargetLine &&
!sectionEndPassedTargetLine

const sectionId = section.getAttribute(id)
const menuElement = document
.querySelector(`.menu a[href*=${sectionId}]`)


menuElement.classList.remove('active')
if(sectionBoundaries){
  menuElement.classList.add('active')
}
}



function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card
#about,
#about header,
#about .content`)

