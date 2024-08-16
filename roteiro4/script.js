function questao1() {
  let input = document.getElementById("inputQuestao1").value.split(", ");
  let output = "<h3>Resposta:</h3>";

  const intervalo = number => number > 60 && number < 300;
  const lista = input.filter(intervalo);
  output += `A lista de valores filtrados é: ${lista}<br/>`;
  
  let soma = 0;
  lista.forEach(number => soma += parseInt(number));
  output += `A soma dos elementos da lista é: ${soma}`;

  document.getElementById("outputQuestao1").innerHTML = output;
}

function questao2() {
  let input = document.getElementById("inputQuestao2").value.split(", ");
  let output = "<h3>Resposta:</h3>";

  const progressao = {id: input[0], nome: input[1], n: input[2], a1: input[3], r: input[4]};
  
  //resposta iterativa
  let somaPA = 0, somaPG = 0;
  let termosPA = [], termosPG = [];
  for (i = 0; i < progressao.n; i++) {
    let termoPA = parseInt(progressao.a1) + i * parseInt(progressao.r);
    let termoPG = parseInt(progressao.a1) * parseInt(progressao.r) ** i;
    termosPA.push(termoPA);
    termosPG.push(termoPG);
    somaPA += termoPA;
    somaPG += termoPG;
  }
  
  output += `Os termos da PA são ${termosPA} e a sua soma é ${somaPA}<br/>`;
  output += `Os termos da PG são ${termosPG} e a sua soma é ${somaPG}`;
  document.getElementById("outputQuestao2").innerHTML = output;
}

function questao3() {
  let input = document.getElementById("inputQuestao3").value.split(", ");
  let output = "<h3>Resposta:</h3>";

  const conceito = "DDDDDCCBBAA";
  const conceitos = input.map(nota => conceito[parseInt(nota)]);
  
  output += `Os conceitos das notas são, respectivamente: ${conceitos}`;
  document.getElementById("outputQuestao3").innerHTML = output;
}

function questao4() {
  let input = document.getElementById("inputQuestao4").value;
  let output = "<h3>Resposta:</h3>";

  const somatorio = x => (x % 2 == 0) ? 20 + 5 * x : 25 + 5 * x;

  output += `O somatório é ${somatorio(input)}`;
  document.getElementById("outputQuestao4").innerHTML = output;
}

//não consegui ainda
function questao5() {
  let input = document.getElementById("inputQuestao5").value.split(", ");
  let output = "<h3>Resposta:</h3>";

  const ordenarValores = (a, b) => a > b ? [b, a] : [a, b];

  const range = (a, b) => {
    let menor, maior = ordenarValores(a, b);
    let intervalo = [];
    for (i = menor; i <= maior; i++) {
      intervalo.push(i);
    }
    return intervalo;
  }

  function isPrime(number) {
    result = true;
    for (i = 2; i < number; i++) {
      if (number % i == 0) {
        result = false;
        break;
      }
    }
    return result;
  }

  const filtro = number => isPrime(number);
  const intervalo = range(parseInt(input[0]), parseInt(input[1]));
  const resultado = intervalo.filter(filtro);
  output += `Os números primos no intervalo selecionado são ${resultado}`;
  document.getElementById("outputQuestao5").innerHTML = output;
}