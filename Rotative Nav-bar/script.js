const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
//evento click asigna la clase show a la nav
open.addEventListener('click', () => container.classList.add('show-nav'))
//evento click quita la clase show de la nav
close.addEventListener('click', () => container.classList.remove('show-nav'))