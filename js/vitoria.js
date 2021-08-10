let red  = ["l0_8", "l1_0", "l2_2", "l4_4"];  // receber de script.js
let blue = ["l1_0", "l1_1", "l1_2", "l1_3"];  // receber de script.js
let discoDaVez = "l3_3";  // receber de script.js
let corDaVez   = "red";  // receber de script.js
let posNome;
let tamanho = Number(discoDaVez[3]);
let preNome = discoDaVez.substring(0,3);
let coluna;
let linha;

function verificarGeral() {
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
    return `Siga o jogo, conseguiu ${contador} fichas na sequência`
  }
  return `Você venceu, conseguiu ${contador} fichas na sequência`
}

function verificarDiagonalDirMais(contador) {
  let proximaL = linha + 1;
  let proximaC = coluna + 1;
  let comparacao = `l${proximaL}_${proximaC}`;
  for (let i = tamanho; i < 7; i++) {
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
  let comparacao = `${preNome}${proximoNr}`;
  for (let i = tamanho; i < 7; i++) {
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
