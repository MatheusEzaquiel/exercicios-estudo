btnMsg = document.getElementById("btn-msg");
btnMsg.addEventListener("click",mostrarMsg);

function mostrarMsg(){
    nome = document.getElementById("nome");
    result = document.getElementById("result")
    result.innerHTML = `Olá ${nome.value} prazer te conhecer`;
}