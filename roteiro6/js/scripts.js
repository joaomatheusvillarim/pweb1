//Etapa 1: Modificar o conteúdo de parágrafos. Se algum dos inputs não estiver preenchido, não modifique o seu respectivo texto.
//Dica01: Utilize a propriedade "textContent" para modificar o texto de um parágrafo.
//Dica02: Utilize a propriedade "value" para recuperar a informação preenchida nos campos de input.
const isEmpty = (string) => string.length == 0;

const alterarTextos = () => {
  texto1 = document.getElementById("input1").value;
  texto2 = document.getElementById("input2").value;
  texto3 = document.getElementById("input3").value;
  

  if (!isEmpty(texto1)) {
    document.getElementById("texto1").innerHTML = texto1;
  }
  if (!isEmpty(texto2)) {
    document.getElementById("texto2").innerHTML = texto2;
  }
  if (!isEmpty(texto3)) {
    document.getElementById("texto3").innerHTML = texto3;
  }
}

const getUlSize = listaId => document.getElementById(listaId).getElementsByTagName("li").length;

//Etapa 2: Adicionar e remover elementos no final da lista de itens
//Dica01: Utilize o método createElement para criar li
//Dica02: Utilize a propriedade "textContent" do li para modificar o seu conteúdo
//Dica03: Utilize a propriedade "ul.children.length" para saber a quantidade de itens na lista
//Dica04: Utilize a propriedade "ul.appendChild" para adicionar o li na lista
function adicionarItem() {
  size = getUlSize("listaItens");
  const li = document.createElement("li");
  const node = document.createTextNode(`Item ${size + 1}`);
  li.appendChild(node);

  const parent = document.getElementById("listaItens");
  parent.appendChild(li);
}

//Dica05: Utilize as propriedades "ul.removeChild" e "ul.lastChild" para fazer remoções de li na lista
//Dica06: Lembre-se de só deixar remover se a lista tiver pelo menos um elemento
function removerItem() {
  size = getUlSize("listaItens");
  if (size > 1) {
    let lastChild = document.getElementById("listaItens").lastChild;
    if (isEmpty(lastChild.textContent.trim())) {
      document.getElementById("listaItens").removeChild(lastChild);
      lastChild = document.getElementById("listaItens").lastChild;
    }
    document.getElementById("listaItens").removeChild(lastChild);
  }
}

//Etapa 3: Modificar estilos de inputs do tipo text
//Obrigatório: Uso de callback function para alterar a cor de fundo de todos os inputs
//Dica01: Utilize a propriedade "style.backgroundColor" para modificar a cor de fundo dos inputs
function mudarCorFundo() {
  const inputs = document.querySelectorAll('input[type="text"]');
  const color = document.getElementById("inputCor").value;

  const changeColor = element => element.style.backgroundColor = color;
  inputs.forEach(changeColor);
}

//Etapa 4: Ocultar e Exibir Elementos
//Dica01: Utilize a propriedade "style.display" e o valor da variável estilo para ocultar ou exibir a imagem
function ocultarImagem() {
  document.getElementById("imagem").style.display = "none";
}

function exibirImagem() {
  document.getElementById("imagem").style.display = "block";
}

//Etapa 4: Mover elementos na página
//Dica01: Utilize apenas as propriedades "box.style.left" e "box.style.top" para fazer a movimentação do elemento
function mover(direcao) {
  const box = document.getElementById('divDeslizavel');
  let left = parseInt(window.getComputedStyle(box).left) || 0;
  let top = parseInt(window.getComputedStyle(box).top) || 0;

  const translateX = value => box.style.left = `${left + value}px`;
  const translateY = value => box.style.top = `${top + value}px`;
  
  switch (direcao) {
    case 'esquerda':
      translateX(-5);
      break;
    case 'direita':
      translateX(5);
      break;
    case 'cima':
      translateY(-5);
      break;
    case 'baixo':
      translateY(5);
      break;
  }
}

//Exercício 6: Trocar Classe de Elementos
//Dica01: Utilize a propriedade "p.classList.toggle" para fazer a alternância
function alternarClasse() {
  const p = document.getElementById('classeParagrafo');
  //TODO
  p.classList.toggle('classeAzul');
  p.classList.toggle('classeVermelha');
}

//Exercício 7: Galeria de Imagens com Zoom
//Dica01: Utilize a função replace para substitutir o 100 por 300 no valor de src da imagem
function mostrarImagemMaior(img) {
  const imagemMaior = document.getElementById('imagem-maior');
  imagemMaior.src = img.src;
  imagemMaior.height = "300";
}

// Exercício 8: Validação de Formulário
//Obrigatório: É preciso aplicar estratégias de validação dos valores dos quatro campos do formulário.
//Pelo menos: não aceitar nome vazio, o cpf precisa estar mascarado e com 14 dígitos, 
//o email precisa ter pelo menos um @ e um ponto duas posições após o @ e a senha não deve conter menos que 8 caracteres.
function validarFormulario() {
  let resp = true;
  const nome = document.getElementById('nome').value;
  const cpf = document.getElementById('cpf').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const erro = document.getElementById('mensagem-erro');

  const validarCpf = cpf => {
    
  }

  if (isEmpty(nome))
    
  erro.textContent = '';
  return resp;
}

// Exercício 9: Contador Incremental
//Dica01: Utilize a propriedade "textContent" para modificar o texto de um parágrafo.
//Desafio01: Implemente a geração da música "Um Elefante Incomodaa Muita Gente"
//quando o número de versos for maior que 9, a função deve colocar reticência (...) para o caso
//do número de "incomodam" ser maior ou igual a 10.
let contador = 0;
function incrementar() {
  contador++;
  document.getElementById("contador").innerHTML = contador;
}

function decrementar() {
  contador--;
  document.getElementById("contador").innerHTML = contador;
}

function geraMusicaElefante(numVersos){

}

// Exercício 10: Filtrar Itens de uma Lista com callback e arrow function
//Dica01: Utilize a propriedade "textContent" para modificar o texto de um parágrafo.
//Desafio02: Transforme a lista de itens em objetos (professor: nome, area, laboratorio, disciplina) e utilize o filtro para atuar considerando todos os atributos do projeto.
function filtrarItens() {
    const filtro = document.getElementById('filtro').value.toLowerCase();
    const itens = document.getElementById('lista-professores').getElementsByTagName('li');

    //Converter o comando de repetição abaixo em uma callback que recebe como parâmetro uma arrow function
    for (let i = 0; i < itens.length; i++) {
        let item = itens[i].textContent || itens[i].innerText;
        if (item.toLowerCase().indexOf(filtro) > -1) {
            itens[i].style.display = "";
        } else {
            itens[i].style.display = "none";
        }
    }
}
