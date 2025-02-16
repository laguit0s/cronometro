let tempo = {
    segundos: 0,
    minutos: 0,
    horas: 0,
}
let tempo_contando = false
let contador = null
let display = () => document.querySelector('#tempo').innerHTML = `${String(tempo.horas).padStart(2, '0')}<span class="separador-cronometro">:</span>${String(tempo.minutos).padStart(2, '0')}<span class="separador-cronometro">:</span>${String(tempo.segundos).padStart(2, '0')}`

display()

document.querySelector('#iniciar').addEventListener('click', () => {
    if (!tempo_contando) {
        tempo_contando = true
        contador = setInterval(() => {
            tempo.segundos += 1
            if (tempo.segundos === 60) {
                tempo.minutos += 1
                tempo.segundos = 0
            }
            if (tempo.minutos === 60) {
                tempo.horas += 1
                tempo.minutos = 0
            }
            display()
        }, 1000);
    }
})

document.querySelector('#pausar').addEventListener('click', () => {
    clearInterval(contador)
    tempo_contando = false
})

document.querySelector('#resetar').addEventListener('click', () => {
    clearInterval(contador)
    tempo_contando = false;
    tempo.horas = 0;
    tempo.minutos = 0;
    tempo.segundos = 0;
    display()
})


