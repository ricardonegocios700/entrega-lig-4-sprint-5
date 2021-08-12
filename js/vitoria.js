let discoDaVez;
let fichaDaVez;
let posNome;
let tamanho;
let preNome;
let coluna;
let linha;

function verificarVitoria() {
  mudaABolinha()
  if (control === true) {
    fichaDaVez = "red";
    discoDaVez = red[red.length - 1]
  } else {
    fichaDaVez = "black";
    discoDaVez = black[black.length - 1]
  }
  
  

  tamanho = Number(discoDaVez[3]);
  preNome = discoDaVez.substring(0, 3);

  let contador = 1;
  contador = verificarHorizontalMenos(contador);
  if (contador < 4) {
    contador = verificarHorizontalMais(contador);
  }
  if (contador < 4) {
    contador = 1;
    posNome = discoDaVez.substring(2, 4);
    tamanho = Number(discoDaVez[1]);
    contador = verificarVerticalMais(contador);
  }
  if (contador < 4) {
    contador = verificarVerticalMenos(contador);
  }
  if (contador < 4) {
    contador = 1;
    coluna = Number(discoDaVez[3]);
    linha = Number(discoDaVez[1]);
    contador = verificarDiagonalEsqMenos(contador);
  }
  if (contador < 4) {
    coluna = Number(discoDaVez[3]);
    linha = Number(discoDaVez[1]);
    contador = verificarDiagonalDirMais(contador);
  }
  if (contador < 4) {
    contador = 1;
    coluna = Number(discoDaVez[3]);
    linha = Number(discoDaVez[1]);
    contador = verificarDiagonalEsqMais(contador);
  }
  if (contador < 4) {
    coluna = Number(discoDaVez[3]);
    linha = Number(discoDaVez[1]);
    contador = verificarDiagonalDirMenos(contador);
  }

  if (contador < 4) {
  } else if((contador === 4) && (control === true)){
    victoryPlayer1()
  } else if ((contador === 4) && (control === false)){
    victoryPlayer2()
  }
  
  
  if((red.length === 21) && (black.length === 21)){
    draw()
  }
  
}

function verificarDiagonalDirMenos(contador) {
  let proximaL = linha - 1;
  let proximaC = coluna + 1;
  let comparacao = `l${proximaL}_${proximaC}`;
  if (fichaDaVez === "red") {
    for (let i = tamanho; i < 6; i++) {
      if (red.includes(comparacao)) {
        contador++;
      } else {
        return contador;
      }
      proximaL = Number(comparacao[1]) - 1;
      proximaC = Number(comparacao[3]) + 1;
      comparacao = `l${proximaL}_${proximaC}`;
    }
  }
  if (fichaDaVez === "black") {
    for (let i = tamanho; i < 6; i++) {
      if (black.includes(comparacao)) {
        contador++;
      } else {
        return contador;
      }
      proximaL = Number(comparacao[1]) - 1;
      proximaC = Number(comparacao[3]) + 1;
      comparacao = `l${proximaL}_${proximaC}`;
    }
  }
  return contador;
}

function verificarDiagonalEsqMais(contador) {
  let proximaL = linha + 1;
  let proximaC = coluna - 1;
  let comparacao = `l${proximaL}_${proximaC}`;
  if (fichaDaVez === "red") {
    for (let i = tamanho; i < 6; i++) {
      if (red.includes(comparacao)) {
        contador++;
      } else {
        return contador;
      }
      proximaL = Number(comparacao[1]) + 1;
      proximaC = Number(comparacao[3]) - 1;
      comparacao = `l${proximaL}_${proximaC}`;
    }
  }
  if (fichaDaVez === "black") {
    for (let i = tamanho; i < 6; i++) {
      if (black.includes(comparacao)) {
        contador++;
      } else {
        return contador;
      }
      proximaL = Number(comparacao[1]) + 1;
      proximaC = Number(comparacao[3]) - 1;
      comparacao = `l${proximaL}_${proximaC}`;
    }
  }
  return contador;
}

function verificarDiagonalDirMais(contador) {
  let proximaL = linha + 1;
  let proximaC = coluna + 1;
  let comparacao = `l${proximaL}_${proximaC}`;
  if (fichaDaVez === "red") {
    for (let i = tamanho; i < 6; i++) {
      if (red.includes(comparacao)) {
        contador++;
      } else {
        return contador;
      }
      proximaL = Number(comparacao[1]) + 1;
      proximaC = Number(comparacao[3]) + 1;
      comparacao = `l${proximaL}_${proximaC}`;
    }
  }
  if (fichaDaVez === "black") {
    for (let i = tamanho; i < 6; i++) {
      if (black.includes(comparacao)) {
        contador++;
      } else {
        return contador;
      }
      proximaL = Number(comparacao[1]) + 1;
      proximaC = Number(comparacao[3]) + 1;
      comparacao = `l${proximaL}_${proximaC}`;
    }
  }
  return contador;
}

function verificarDiagonalEsqMenos(contador) {
  let proximaL = linha - 1;
  let proximaC = coluna - 1;
  let comparacao = `l${proximaL}_${proximaC}`;
  if (fichaDaVez === "red") {
    for (let i = tamanho; i > 0; i--) {
      if (red.includes(comparacao)) {
        contador++;
      } else {
        return contador;
      }
      proximaL = Number(comparacao[1]) - 1;
      proximaC = Number(comparacao[3]) - 1;
      comparacao = `l${proximaL}_${proximaC}`;
    }
  }
  if (fichaDaVez === "black") {
    for (let i = tamanho; i > 0; i--) {
      if (black.includes(comparacao)) {
        contador++;
      } else {
        return contador;
      }
      proximaL = Number(comparacao[1]) - 1;
      proximaC = Number(comparacao[3]) - 1;
      comparacao = `l${proximaL}_${proximaC}`;
    }
  }
  return contador;
}

function verificarVerticalMenos(contador) {
  let proximoNr = tamanho - 1;
  let comparacao = `l${proximoNr}${posNome}`;
  if (fichaDaVez === "red") {
    for (let i = tamanho; i > 0; i--) {
      if (red.includes(comparacao)) {
        contador++;
      } else {
        return contador;
      }
      proximoNr = Number(comparacao[1]) - 1;
      comparacao = `l${proximoNr}${posNome}`;
    }
  }
  if (fichaDaVez === "black") {
    for (let i = tamanho; i > 0; i--) {
      if (black.includes(comparacao)) {
        contador++;
      } else {
        return contador;
      }
      proximoNr = Number(comparacao[1]) - 1;
      comparacao = `l${proximoNr}${posNome}`;
    }
  }
  return contador;
}

function verificarVerticalMais(contador) {
  let proximoNr = tamanho + 1;
  let comparacao = `l${proximoNr}${posNome}`;
  if (fichaDaVez === "red") {
    for (let i = tamanho; i < 6; i++) {
      if (red.includes(comparacao)) {
        contador++;
      } else {
        return contador;
      }
      proximoNr = Number(comparacao[1]) + 1;
      comparacao = `l${proximoNr}${posNome}`;
    }
  }
  if (fichaDaVez === "black") {
    for (let i = tamanho; i < 6; i++) {
      if (black.includes(comparacao)) {
        contador++;
      } else {
        return contador;
      }
      proximoNr = Number(comparacao[1]) + 1;
      comparacao = `l${proximoNr}${posNome}`;
    }
  }
  return contador;
}

function verificarHorizontalMenos(contador) {
  let proximoNr = tamanho - 1;
  let comparacao = `${preNome}${proximoNr}`;

  if (fichaDaVez === "red") {
    for (let i = tamanho; i > 0; i--) {
      if (red.includes(comparacao)) {
        contador++;
      } else {
        return contador;
      }
      proximoNr = Number(comparacao[3]) - 1;
      comparacao = `${preNome}${proximoNr}`;
    }
  }
  if (fichaDaVez === "black") {
    for (let i = tamanho; i > 0; i--) {
      if (black.includes(comparacao)) {
        contador++;
      } else {
        return contador;
      }
      proximoNr = Number(comparacao[3]) - 1;
      comparacao = `${preNome}${proximoNr}`;
    }
  }

  return contador;
}

function verificarHorizontalMais(contador) {
  let proximoNr = tamanho + 1;
  let comparacao = `${preNome}${proximoNr}`;

  if (fichaDaVez === "red") {
    for (let i = tamanho; i < 6; i++) {
      if (red.includes(comparacao)) {
        contador++;
      } else {
        return contador;
      }
      proximoNr = Number(comparacao[3]) + 1;
      comparacao = `${preNome}${proximoNr}`;
    }
  }
  if (fichaDaVez === "black") {
    for (let i = tamanho; i < 6; i++) {
      if (black.includes(comparacao)) {
        contador++;
      } else {
        return contador;
      }
      proximoNr = Number(comparacao[3]) + 1;
      comparacao = `${preNome}${proximoNr}`;
    }
  }

  return contador;
}
