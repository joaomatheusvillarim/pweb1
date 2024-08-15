function questao1() {
  let valores = document.getElementById("inputQuestao1").value.split(", ");
  let output = "<h3>Resposta:</h3>";

  const intervalo = number => number > 60 && number < 300;
  const lista = valores.filter(intervalo);
  output += `A lista de valores filtrados é: ${lista}<br/>`;
  
  let soma = 0;
  lista.forEach(number => soma += parseInt(number));
  output += `A soma dos elementos da lista é: ${soma}`;

  document.getElementById("outputQuestao1").innerHTML = output;
}

function questao2() {
  let valores = document.getElementById("inputQuestao2").value.split(", ");
  let output = "<h3>Resposta:</h3>";

  const progressao = {id: valores[0], nome: valores[1], n: valores[2], a1: valores[3], r: valores[4]};
  
  //resposta iterativa
  let somaPA = 0, somaPG = 0;
  let termosPA = [], termosPG = [];
  for (i = 1; i <= progressao.n; i++)
  
}

function questao3() {
  let valores = document.getElementById("inputQuestao3").value.split(", ");
  let output = "<h3>Resposta:</h3>";

  const conceito = number => "DDDDDCCBBAA"[parseInt(number/10)];
  
}

function questao4() {
  
}

function questao5() {
  
}