const botaoAbrir = document.querySelector(".header-mobile > button")

const body = document.querySelector("body")
const nav = document.querySelector(".header-mobile nav")

botoaoAbrir.addEventListener('click', abrirMenu)

function abrirMenu() {
  body.classList.add("escurecer")
  nav.classList("abrir")
}

function fecharMenu() {
    body.classList.remove("escurecer")
    nav.classList.remove("abrir")
}