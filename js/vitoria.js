let red  = ["l0_3", "l0_5", "l0_6", "l0_7"];  // receber de script.js
let blue = ["l1_0", "l1_1", "l1_2", "l1_3"];  // receber de script.js
let discoDaVez = "l0_4";  // receber de script.js
let corDaVez   = "red";  // receber de script.js

let tamanho = Number(discoDaVez.slice(3));
let preNome = discoDaVez.substring(0,3)

function verificarGeral(cont) {
  let contador = Number(cont)
  contador = verificarHorizontalMenos(contador)
  if (contador < 4) {
    contador = verificarHorizontalMais(contador)
  }
  return contador
}

function verificarHorizontalMenos(contador) {
  let proximoNr = tamanho - 1;
  let comparacao = `${preNome}${proximoNr}`;
  
  for (let i = tamanho; i > 0; i--) {
    if (red.includes(comparacao)) {
      contador++;
    } else {
      return contador;
    }
    proximoNr = Number(comparacao[3])-1;
    comparacao = `${preNome}${proximoNr}`;
  }
  return contador;
}

function verificarHorizontalMais(contador) {
  let proximoNr = tamanho + 1;
  let comparacao = `${preNome}${proximoNr}`;
  for (let i = tamanho; i < 8; i++) {
    if (red.includes(comparacao)) {
      contador++;
    } else {
      return contador;
    }
    proximoNr = Number(comparacao[3])+1;
    comparacao = `${preNome}${proximoNr}`;
  }
  return contador;
}

