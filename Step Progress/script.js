const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1 //put a counter on this

next.addEventListener('click', () => { //each click on next
    currentActive++ //the cunter will add 1

    if(currentActive > circles.length) { 
        //will stop the event if the counter is higher than the circles
        currentActive = circles.length 
    }

    update()//continues propperly
})

prev.addEventListener('click', () => {
    //the same as above but if its lower
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    circles.forEach((circle, idx) => { //for each circle on cicles will call a circle and his index
        if(idx < currentActive) { //if index is lower than the counter
            circle.classList.add('active')// will set the new active
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active') //store all the elements with the class active

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%' //update the progress

    if(currentActive === 1) {//disable prev if we're at the fist state
        prev.disabled = true
    } else if(currentActive === circles.length) { //disable next if we're at the last state
        next.disabled = true
    } else { //reactive both btns
        prev.disabled = false
        next.disabled = false
    }
}