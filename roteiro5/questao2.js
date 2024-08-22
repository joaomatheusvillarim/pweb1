const getCorrecao = (e, d) => {

  const getParte2 = mensagem => d <= 22 ? mensagem + " TCC Apresentado!" : mensagem + " Não deu! Só no próximo ano agora.";

  const getParte1 = () => e <= d - 3 ? "Muito bem! O aluno está apto a apresentar até o natal!" : getParte2("O trabalho está muito ruim!");

  return getParte1();
}

console.log(getCorrecao(13, 19));
console.log(getCorrecao(22, 23));
console.log(getCorrecao(21, 22));