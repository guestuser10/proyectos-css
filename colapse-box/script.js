const toggles = document.querySelectorAll('.faq')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active')
    })
})