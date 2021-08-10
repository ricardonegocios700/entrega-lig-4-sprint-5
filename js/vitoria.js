let red  = ["l0_0", "l0_8", "l0_2", "l0_3", "l0_5"];
let blue = ["l1_0", "l1_1", "l1_2", "l1_3"];

let discoDaVez = "l0_4";
let contrutorPosicao = discoDaVez.substring(0,3)
let corDaVez   = "red";

function verificarHorizontalMenos() {
  let contador = 0;
  let discoComparando = Number(discoDaVez[3])-1
  let comparacao = `${contrutorPosicao}${discoComparando}`;
  console.log(comparacao)

  if (corDaVez === "red") {
    for (let i = 0; i < red.length; i++) {
      if (red.includes(comparacao)) {
        contador++;
      } else {
        compararHorizontalMais();
      }
      discoComparando = Number(comparacao[3])-1;
      comparacao = `${contrutorPosicao}${discoComparando}`;
    }
  } else {
    for (let i = 0; i < blue.length; i++) {
      if (blue.includes(comparacao)) {
        contador++;
      } else {
        compararHorizontalMais();
      }
      discoComparando = Number(comparacao[3])-1;
      comparacao = `${contrutorPosicao}${discoComparando}`;
    }
  }
  return contador;
}

function compararHorizontalMais() {
  let contador = 0;
  let discoComparando = Number(discoDaVez[3])+1
  let comparacao = `${contrutorPosicao}${discoComparando}`;
  console.log(comparacao)

  if (corDaVez === "red") {
    for (let i = 0; i < red.length; i++) {
      if (red.includes(comparacao)) {
        contador++;
      } else {
        return "antes não tem";
      }
      discoComparando = Number(comparacao[3])+1;
      comparacao = `${contrutorPosicao}${discoComparando}`;
    }
  } else {
    for (let i = 0; i < blue.length; i++) {
      if (blue.includes(comparacao)) {
        contador++;
      } else {
        return "antes não tem";
      }
      discoComparando = Number(comparacao[3])+1;
      comparacao = `${contrutorPosicao}${discoComparando}`;
    }
  }
  return contador;
}
