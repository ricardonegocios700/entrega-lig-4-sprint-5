let mapa = [
    " c c c c c c c ",
    " c c c c c c c ",
    " c c c c c c c ",
    " c c c c c c c ",
    " c c c c c c c ",
    " c c c c c c c ",
]

let dv = document.getElementById("dv")

let criarMapa = () => {
   for(let i = 0; i < mapa.length; i++){
       let criarLinha = document.createElement("div")
       criarLinha.setAttribute(`id`,`linha${i}`)
       criarLinha.setAttribute(`class`,`linha`)
       dv.appendChild(criarLinha)
       let linha = mapa[i]
       let contador = 0
     for(let a = 0; a < linha.length; a++){
      let criarColuna = document.createElement("div")
      if(linha[a] === "c"){
        criarLinha.appendChild(criarColuna)
        criarColuna.classList.add("divisoria")
        } else{
        criarLinha.appendChild(criarColuna)
        criarColuna.classList.add("espaco_branco")
        criarColuna.setAttribute(`id`,`l${i}_${contador}`)
        contador ++
      }
     }
  }
}

criarMapa()