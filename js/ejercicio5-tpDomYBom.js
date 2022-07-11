let hs = `00`;
let min = `00`;
let seg = `00`;
let hora = document.getElementById('tiempo')
let tiempo;

  function cronometro() {

    seg ++

    if (seg < 10) seg = `0` + seg

    if (seg > 59) {
      seg = `00`
      min ++

      if (min < 10) min = `0` + min
    }

    if (min > 59) {
      min = `00`
      hs ++
      
      if (hs < 10) hs = `0` + hs
    }

    hora.innerHTML = `${hs}:${min}:${seg}`

  }

  function play(){
    tiempo = setInterval(cronometro, 1000);
  }

  function pausar(){
    clearInterval(tiempo);
  }

  function reset(){
    clearInterval(tiempo);
    hora.innerHTML = '00:00:00'
    hs = '00'
    min = '00'
    seg = '00'
  }