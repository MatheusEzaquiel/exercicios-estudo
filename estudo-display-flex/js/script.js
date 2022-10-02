var imgP = document.getElementById('imgPersonagem')
var btnA1 = document.getElementById('botaoA1')
btnA1.addEventListener('mouseover',alterarPesonagem1)
btnA1.addEventListener('mouseout',limparPesonagem)


var btnB1 = document.getElementById('botaoB1')
btnB1.addEventListener('mouseover',alterarPesonagem2)
btnB1.addEventListener('mouseout',limparPesonagem)

var btnA2 = document.getElementById('botaoA2')
btnA2.addEventListener('mouseover',alterarPesonagem3)
btnA2.addEventListener('mouseout',limparPesonagem)


function alterarPesonagem1(){
  imgP.src = "../img/jojo/joseph.jpg"
}
function alterarPesonagem2(){
  imgP.src = "../img/jojo/jotaro.jpg"

}
function alterarPesonagem3(){
  imgP.src = "../img/jojo/josuke.jpg"
}
function limparPesonagem(){
  imgP.src = "../img/jojo/nenhumPersonagem.png"
}

/* TESTAR C/ ARRAY
if(buttom[1]){
  imgP.src = "../img/jojo/joseph.jpg"
} else if(button[2]){
  imgP.src = "../img/jojo/jotaro.jpg"
} else if(button[3]){
  imgP.src = "../img/jojo/josuke.jpg"
}
*/
