const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes) //scroll listener 

checkBoxes() //initialize animations

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4 //define threshold for animations to be considered

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top //retrieve the distance from the top of the element to the top of the viewport.

        if(boxTop < triggerBottom) { 
            box.classList.add('show') //user entered to the trigger zone
        } else {
            box.classList.remove('show') //user left to the trigger zone
        }
    })
}