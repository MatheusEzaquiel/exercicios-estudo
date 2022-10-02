btnSoma = document.getElementById("btn-soma");
btnSoma.addEventListener("click",soma);

function soma(){
    n1 = Number(document.getElementById("n1").value);
    n2 = Number(document.getElementById("n2").value);
    resultDiv = document.getElementById("result");

    result = n1 + n2;
    resultDiv.innerHTML = `A soma entre ${n1} e ${n2} é igual <strong>${result}</strong>`;

}