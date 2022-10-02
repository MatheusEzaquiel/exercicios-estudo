const relogioDigital = () => {
    const result = document.querySelector("h1");
    
    let date = new Date();
    let hora = date.getHours();
    let min = date.getMinutes();
    let s = date.getSeconds();

    hora = hora < 10 ? `0${hora}` : hora;
    min = min < 10 ? `0${min}` : min;
    s = s < 10 ? `0${s}` : s;


    let relogio = `${hora} : ${min} : ${s}`;
    result.innerText = relogio; 

}

relogioDigital();
setInterval(relogioDigital, 1000);

//setInterval() : a cada x milésimos de segundos essa função é executada, neste caso 1 segundo
