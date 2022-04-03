const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

//for dark/light mode

function darkFunction() {
  var modeID = document.getElementById("mode-icon");
  modeID.classList.toggle("fa-sun");
}

const container = document.getElementsByClassName('overarching-container')[0]

const button = document.getElementsByClassName('button')[0]
const text1 = document.getElementsByClassName('article-titleA')[0]
const text2 = document.getElementsByClassName('article-descriptionA')[0]
const text3 = document.getElementsByClassName('article-titleB')[0]
const text4 = document.getElementsByClassName('article-descriptionB')[0]
const text5 = document.getElementsByClassName('article-titleC')[0]
const text6 = document.getElementsByClassName('article-descriptionC')[0]
const text7 = document.getElementsByClassName('article-titleD')[0]
const text8 = document.getElementsByClassName('article-descriptionD')[0]
const textHeader = document.getElementsByClassName('main-containerB')[0]

button.addEventListener('click', () => {
  container.classList.toggle('dark')
  text1.classList.toggle('light')
  text2.classList.toggle('light')
  text3.classList.toggle('light')
  text4.classList.toggle('light')
  text5.classList.toggle('light')
  text6.classList.toggle('light')
  text7.classList.toggle('light')
  text8.classList.toggle('light')
  textHeader.classList.toggle('light')
})

const mainContainer = document.getElementsByClassName('content-container')[0]

button.addEventListener('click', () => {
  mainContainer.classList.toggle('dark')
})
