const sounds = ['patitas', 'raze', 'thegrefg', 'chamba']

sounds.forEach(sound => {
    const btn = document.createElement('button')//crear boton y añadir clase
    btn.classList.add('btn')

    btn.innerText = sound //asociar etiqueta con el sonido

    btn.addEventListener('click', () => {
        stopSongs() //cancelar si se esta reproduciendo otro sonido

        document.getElementById(sound).play() //reproducir sonido pulsado
    })

    document.getElementById('buttons').appendChild(btn)//acomodar el boton donde corresponde en el html
})

function stopSongs() {//cortar un sonido en reproduccion
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}