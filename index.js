// Mobile hamburger menu
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close')
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  smallMenu.classList.toggle('header__sm-menu--active')
  headerHamMenuBtn.classList.toggle('d-none')
  headerHamMenuCloseBtn.classList.toggle('d-none')
})

headerSmallMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
})

// Clicking logo redirects home
const headerLogoConatiner = document.querySelector('.header__logo-container')
headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})
