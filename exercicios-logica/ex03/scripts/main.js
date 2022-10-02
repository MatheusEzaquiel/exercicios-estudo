btnInfo = document.getElementById("btn-informacoes");
btnInfo.addEventListener("click",listInfo);


function listInfo(){
    a = document.getElementById("txt-info").value;
    resultDiv = document.getElementById("result");


    resultDiv.innerHTML = `<h2>informações sobre a variável <strong>${a}</strong>:</h2>
                            <p>Tipo primitivo: ${typeof(a)}</p>
                            <p>Só tem espaços? ${(a == "" ? true : false)}</p>
                            <p>É um número? ${(isNaN(a) ? false : true)}</p>
                            <p>É alfabético?</p>
                            <p>É alfanumérico?</p>
                            <p>Está em maiúsculo? ${(a == a.toUpperCase() ? true : false)}</p>
                            <p>Está em minúsculo? ${(a == a.toLowerCase() ? true : false)}</p>
                            <p>Está capitalizada?</p>`;

}