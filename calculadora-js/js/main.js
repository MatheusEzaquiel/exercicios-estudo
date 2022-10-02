//insere números
function insert(num){
  var numero = document.getElementById('resultado').innerHTML
  document.getElementById('resultado').innerHTML = numero + num
}
//botão p/ limpar o visor
function clean(){
  document.getElementById('resultado').innerHTML = ''
}
//apagar número por número
function back(){
  var resultado = document.getElementById('resultado').innerHTML
  document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1) //length verifica o número de caracteres e depois diminui 1
}
//efetua os cálculos (+,-,*,/)
function calcular(){
  var resultado = document.getElementById('resultado').innerHTML
  if (resultado) {
    document.getElementById('resultado').innerHTML = eval(resultado) //eval faz as operações básicas e transforma as strings em operações
  }else{
    document.getElementById('resultado').innerHTML = "Sem valores"
  }
}
