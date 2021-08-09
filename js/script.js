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
     for(let a = 0; a < linha.length; a++){
      let criarColuna = document.createElement("div")
      if(linha[a] === "c"){
        criarLinha.appendChild(criarColuna)
        criarColuna.classList.add("divisoria")
        } else{
        criarLinha.appendChild(criarColuna)
        criarColuna.classList.add("espaco_branco")
        criarColuna.setAttribute(`id`,`l${i}_${a}`)
      }
     }
  }
}

criarMapa()


// função de vitoria 

// document.addEventListener('click' , (event) => {
//     const box = document.createElement('div');
//     box.id = 'popup'
//     box.innerHTML = 'Parabens! Você conseguiu!'
//     document.body.appendChild(box);
//     const okBtn = document.createElement('button');
//     okBtn.id = 'popup__button'
//     okBtn.innerHTML = 'Close';
//     box.appendChild(okBtn);
//     let audio = new Audio('tada.wav');
//     audio.play();
//     okBtn.addEventListener('click' , event => {
//         location.reload()
//     })
// });