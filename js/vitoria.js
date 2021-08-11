// verificarHorizontalMenos
//let red  = ["l3_2", "l3_1", "l3_0"];  // receber de script.js
// verificarHorizontalMais
//let red  = ["l3_4", "l3_5", "l3_6"];  // receber de script.js
// verificarHorizontalMais & verificarHorizontalMenos
//let red  = ["l3_4", "l3_2", "l3_1"];  // receber de script.js
// verificarVerticalMenos
//let red  = ["l2_3", "l1_3", "l0_3"];  // receber de script.js
// verificarVerticalMais
//let red  = ["l4_3", "l5_3", "l6_3"];  // receber de script.js
// verificarVerticalMais verificarVerticalMenos
//let red  = ["l4_3", "l2_3", "l1_3"];  // receber de script.js
// verificarDiagonalEsqMenos
//"l3_4" let red  = ["l2_3", "l1_2", "l0_1"];  // receber de script.js
// verificarDiagonalDirMais
//"l3_1" let red  = ["l4_2", "l5_3", "l6_4"];  // receber de script.js
// verificarDiagonalDirMais e verificarDiagonalEsqMenos
//"l3_4" let red  = ["l2_3", "l1_2", "l4_5"];  // receber de script.js
// verificarDiagonalEsqMais
//let red  = ["l2_4", "l1_5", "l0_6"];  // receber de script.js
// verificarDiagonalDirMenos
let red  = ["l2_4", "l1_5", "l0_6"];  // receber de script.js

let blue = ["l1_0", "l1_1", "l1_2", "l1_3"];  // receber de script.js
let discoDaVez = "l3_3";             // receber de script.js
let corDaVez   = "red";                       // receber de script.js
let posNome;
let tamanho = Number(discoDaVez[3]);
let preNome = discoDaVez.substring(0,3);
let coluna;
let linha;

function verificarVitoria() {
  let contador = 1;
  contador = verificarHorizontalMenos(contador);
  if (contador < 4) {
    contador = verificarHorizontalMais(contador);
  }
  if (contador < 4) {
    contador = 1;
    posNome = discoDaVez.substring(2,4);
    tamanho = Number(discoDaVez[1]);
    contador = verificarVerticalMais(contador);
  }
  if (contador < 4) {
    contador = verificarVerticalMenos(contador);
  }
  if (contador < 4) {
    contador = 1;
    coluna = Number(discoDaVez[3]);
    linha  = Number(discoDaVez[1]);
    contador = verificarDiagonalEsqMenos(contador);
  }
  if (contador < 4) {
    coluna = Number(discoDaVez[3]);
    linha  = Number(discoDaVez[1]);
    contador = verificarDiagonalDirMais(contador);
  }
  if (contador < 4) {
    contador = 1;
    coluna = Number(discoDaVez[3]);
    linha  = Number(discoDaVez[1]);
    contador = verificarDiagonalEsqMais(contador);
  }
  if (contador < 4) {
    coluna = Number(discoDaVez[3]);
    linha  = Number(discoDaVez[1]);
    contador = verificarDiagonalDirMenos(contador);
  }

  if (contador < 4) {
    return `Siga o jogo, conseguiu ${contador} fichas na sequência`
  }
  return `Você venceu, conseguiu ${contador} fichas na sequência`
}

function verificarDiagonalDirMenos(contador) {
  let proximaL = linha - 1;
  let proximaC = coluna + 1;
  let comparacao = `l${proximaL}_${proximaC}`;
  for (let i = tamanho; i < 6; i++) {
    if (red.includes(comparacao)) {
      contador++;
    } else {
      return contador;
    }
    proximaL = Number(comparacao[1])-1;
    proximaC = Number(comparacao[3])+1;
    comparacao = `l${proximaL}_${proximaC}`;
  }
  return contador;
}

function verificarDiagonalEsqMais(contador) {
  let proximaL = linha + 1;
  let proximaC = coluna - 1;
  let comparacao = `l${proximaL}_${proximaC}`;
  for (let i = tamanho; i < 6; i++) {
    if (red.includes(comparacao)) {
      contador++;
    } else {
      return contador;
    }
    console.log(comparacao)
    proximaL = Number(comparacao[1])+1;
    proximaC = Number(comparacao[3])-1;
    comparacao = `l${proximaL}_${proximaC}`;
  }
  return contador;
}

function verificarDiagonalDirMais(contador) {
  let proximaL = linha + 1;
  let proximaC = coluna + 1;
  let comparacao = `l${proximaL}_${proximaC}`;
  for (let i = tamanho; i < 6; i++) {
    if (red.includes(comparacao)) {
      contador++;
    } else {
      return contador;
    }
    proximaL = Number(comparacao[1])+1;
    proximaC = Number(comparacao[3])+1;
    comparacao = `l${proximaL}_${proximaC}`;
  }
  return contador;
}

function verificarDiagonalEsqMenos(contador) {
  let proximaL = linha - 1;
  let proximaC = coluna - 1;
  let comparacao = `l${proximaL}_${proximaC}`;
  for (let i = tamanho; i > 0; i--) {
    if (red.includes(comparacao)) {
      contador++;
    } else {
      return contador;
    }
    proximaL = Number(comparacao[1])-1;
    proximaC = Number(comparacao[3])-1;
    comparacao = `l${proximaL}_${proximaC}`;
  }
  return contador;
}

function verificarVerticalMenos(contador) {
  let proximoNr = tamanho - 1;
  let comparacao = `l${proximoNr}${posNome}`;
  for (let i = tamanho; i > 0; i--) {
    if (red.includes(comparacao)) {
      contador++;
    } else {
      return contador;
    }
    proximoNr = Number(comparacao[1])-1;
    comparacao = `l${proximoNr}${posNome}`;
  }
  return contador;
}

function verificarVerticalMais(contador) {
  let proximoNr = tamanho + 1;
  let comparacao = `l${proximoNr}${posNome}`;
  for (let i = tamanho; i < 6; i++) {
    if (red.includes(comparacao)) {
      contador++;
    } else {
      return contador;
    }
    proximoNr = Number(comparacao[1])+1;
    comparacao = `l${proximoNr}${posNome}`;
  }
  return contador;
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
  let comparacao = `${preNome}${proximoNr}`; //l1_3  => l1_4 => l1_2 => l1_1
  for (let i = tamanho; i < 6; i++) {
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
