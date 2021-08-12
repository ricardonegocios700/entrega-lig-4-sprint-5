let mapa = [
    " c c c c c c ",
    " c c c c c c ",
    " c c c c c c ",
    " c c c c c c ",
    " c c c c c c ",
    " c c c c c c ",
]

let dv = document.getElementById("dv")

let criarMapa = () => {
  let divAllButtons = document.createElement("div")
  dv.appendChild(divAllButtons)
  divAllButtons.classList.add("all_buttons")
  for(let b = 0; b < 7; b++){
    let divButton = document.createElement("div")
    divAllButtons.appendChild(divButton)
    divButton.setAttribute(`class`,`div_botaoRed`)
      if( b % 2 === 0){
        divButton.classList.add("red")
      } else{
        divButton.classList.add("black")
      }

    let criarBotao = document.createElement("button")
    divButton.appendChild(criarBotao)
    criarBotao.setAttribute(`id`,`botao${b}`)
    criarBotao.setAttribute(`class`,`botao_play`)
    
  }
  

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



let button1 = document.getElementById("botao0")
let button2 = document.getElementById("botao1")
let button3 = document.getElementById("botao2")
let button4 = document.getElementById("botao3")
let button5 = document.getElementById("botao4")
let button6 = document.getElementById("botao5")
let button7 = document.getElementById("botao6")
let ficha = document.createElement("div")

let linha5_0 = document.getElementById("l5_0")
let linha4_0 = document.getElementById("l4_0")
let linha3_0 = document.getElementById("l3_0")
let linha2_0 = document.getElementById("l2_0")
let linha1_0 = document.getElementById("l1_0")
let linha0_0 = document.getElementById("l0_0")
let linha5_1 = document.getElementById("l5_1")
let linha4_1 = document.getElementById("l4_1")
let linha3_1 = document.getElementById("l3_1")
let linha2_1 = document.getElementById("l2_1")
let linha1_1 = document.getElementById("l1_1")
let linha0_1 = document.getElementById("l0_1")
let linha5_2 = document.getElementById("l5_2")
let linha4_2 = document.getElementById("l4_2")
let linha3_2 = document.getElementById("l3_2")
let linha2_2 = document.getElementById("l2_2")
let linha1_2 = document.getElementById("l1_2")
let linha0_2 = document.getElementById("l0_2")
let linha5_3 = document.getElementById("l5_3")
let linha4_3 = document.getElementById("l4_3")
let linha3_3 = document.getElementById("l3_3")
let linha2_3 = document.getElementById("l2_3")
let linha1_3 = document.getElementById("l1_3")
let linha0_3 = document.getElementById("l0_3")
let linha5_4 = document.getElementById("l5_4")
let linha4_4 = document.getElementById("l4_4")
let linha3_4 = document.getElementById("l3_4")
let linha2_4 = document.getElementById("l2_4")
let linha1_4 = document.getElementById("l1_4")
let linha0_4 = document.getElementById("l0_4")
let linha5_5 = document.getElementById("l5_5")
let linha4_5 = document.getElementById("l4_5")
let linha3_5 = document.getElementById("l3_5")
let linha2_5 = document.getElementById("l2_5")
let linha1_5 = document.getElementById("l1_5")
let linha0_5 = document.getElementById("l0_5")
let linha5_6 = document.getElementById("l5_6")
let linha4_6 = document.getElementById("l4_6")
let linha3_6 = document.getElementById("l3_6")
let linha2_6 = document.getElementById("l2_6")
let linha1_6 = document.getElementById("l1_6")
let linha0_6 = document.getElementById("l0_6")

let dropSound = document.getElementById("drop_sound")

let red = []
let black = []
let control = true

button1.addEventListener("click", () => {
  if((linha5_0.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha5_0.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l5_0")
    verificarVitoria()
    control = false
    dropSound.play()


  }else if((linha4_0.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha4_0.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l4_0")
    verificarVitoria()
    control = false
    dropSound.play()

  }else if((linha3_0.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha3_0.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l3_0")
    verificarVitoria()
    control = false
    dropSound.play()

  }else if((linha2_0.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha2_0.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l2_0")
    verificarVitoria()
    control = false
    dropSound.play()

  }else if((linha1_0.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha1_0.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l1_0")
    verificarVitoria()
    control = false
    dropSound.play()

  } else if((linha0_0.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha0_0.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l0_0")
    verificarVitoria()
    control = false
    dropSound.play()

  }
  


  else if((linha5_0.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha5_0.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l5_0")
    verificarVitoria()
    control = true
    dropSound.play()

  }else if((linha4_0.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha4_0.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l4_0")
    verificarVitoria()
    control = true
    dropSound.play()

  }else if((linha3_0.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha3_0.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l3_0")
    dropSound.play()
    verificarVitoria()
    control = true

  }else if((linha2_0.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha2_0.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l2_0")

    dropSound.play()

    verificarVitoria()

    control = true


  }else if((linha1_0.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha1_0.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l1_0")

    dropSound.play()

    verificarVitoria()

    control = true


  } else if((linha0_0.childElementCount === 0) && (control === false)){
  
    let ficha2 = document.createElement("div")
    linha0_0.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l0_0")

    dropSound.play()

    verificarVitoria()

    control = true

  }
})


button2.addEventListener("click", () => {
  if((linha5_1.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha5_1.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l5_1")

    dropSound.play()

    verificarVitoria()

    control = false

  }else if((linha4_1.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha4_1.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l4_1")

    dropSound.play()

    verificarVitoria()

    control = false

  }else if((linha3_1.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha3_1.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l3_1")

    dropSound.play()

    verificarVitoria()

    control = false

  }else if((linha2_1.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha2_1.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l2_1")

    dropSound.play()

    verificarVitoria()

    control = false

  }else if((linha1_1.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha1_1.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l1_1")

    dropSound.play()

    verificarVitoria()

    control = false

  } else if((linha0_1.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha0_1.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l0_1")
    verificarVitoria()
    control = false
    dropSound.play()

  }
  


  else if((linha5_1.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha5_1.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l5_1")
    verificarVitoria()
    control = true
    dropSound.play()

  }else if((linha4_1.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha4_1.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l4_1")
    verificarVitoria()
    control = true
    dropSound.play()

  }else if((linha3_1.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha3_1.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l3_1")

    dropSound.play()

    verificarVitoria()

    control = true

  }else if((linha2_1.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha2_1.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l2_1")

    dropSound.play()

    verificarVitoria()

    control = true


  }else if((linha1_1.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha1_1.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l1_1")

    dropSound.play()

    verificarVitoria()

    control = true


  } else if((linha0_1.childElementCount === 0) && (control === false)){
  
    let ficha2 = document.createElement("div")
    linha0_1.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l0_1")

    dropSound.play()

    verificarVitoria()

    control = true

  }
})



button3.addEventListener("click", () => {
  if((linha5_2.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha5_2.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l5_2")

    dropSound.play()

    verificarVitoria()

    control = false

  }else if((linha4_2.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha4_2.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l4_2")

    dropSound.play()

    verificarVitoria()

    control = false

  }else if((linha3_2.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha3_2.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l3_2")

    dropSound.play()

    verificarVitoria()

    control = false

  }else if((linha2_2.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha2_2.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l2_2")

    dropSound.play()

    verificarVitoria()

    control = false

  }else if((linha1_2.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha1_2.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l1_2")

    dropSound.play()

    verificarVitoria()

    control = false

  } else if((linha0_2.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha0_2.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l0_2")

    dropSound.play()

    verificarVitoria()

    control = false

  }
  


  else if((linha5_2.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha5_2.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l5_2")

    dropSound.play()

    verificarVitoria()

    control = true

  }else if((linha4_2.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha4_2.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l4_2")

    dropSound.play()

    verificarVitoria()

    control = true

  }else if((linha3_2.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha3_2.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l3_2")

    dropSound.play()

    verificarVitoria()

    control = true

  }else if((linha2_2.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha2_2.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l2_2")

    dropSound.play()

    verificarVitoria()

    control = true


  }else if((linha1_2.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha1_2.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l1_2")

    dropSound.play()

    verificarVitoria()

    control = true


  } else if((linha0_2.childElementCount === 0) && (control === false)){
  
    let ficha2 = document.createElement("div")
    linha0_2.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l0_2")

    dropSound.play()

    verificarVitoria()

    control = true

  }
})




button4.addEventListener("click", () => {
  if((linha5_3.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha5_3.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l5_3")

    dropSound.play()

    verificarVitoria()

    control = false

  }else if((linha4_3.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha4_3.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l4_3")

    dropSound.play()

    verificarVitoria()

    control = false

  }else if((linha3_3.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha3_3.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l3_3")

    dropSound.play()

    verificarVitoria()

    control = false

  }else if((linha2_3.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha2_3.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l2_3")

    dropSound.play()

    verificarVitoria()

    control = false

  }else if((linha1_3.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha1_3.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l1_3")

    dropSound.play()

    verificarVitoria()

    control = false

  } else if((linha0_3.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha0_3.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l0_3")

    dropSound.play()

    verificarVitoria()

    control = false

  }
  


  else if((linha5_3.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha5_3.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l5_3")

    dropSound.play()

    verificarVitoria()

    control = true

  }else if((linha4_3.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha4_3.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l4_3")

    dropSound.play()

    verificarVitoria()

    control = true

  }else if((linha3_3.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha3_3.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l3_3")

    dropSound.play()

    verificarVitoria()

    control = true

  }else if((linha2_3.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha2_3.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l2_3")

    dropSound.play()

    verificarVitoria()

    control = true


  }else if((linha1_3.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha1_3.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l1_3")

    dropSound.play()

    verificarVitoria()

    control = true


  } else if((linha0_3.childElementCount === 0) && (control === false)){
  
    let ficha2 = document.createElement("div")
    linha0_3.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l0_3")

    dropSound.play()

    verificarVitoria()

    control = true

  }
})



button5.addEventListener("click", () => {
  if((linha5_4.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha5_4.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l5_4")

    dropSound.play()

    verificarVitoria()

    control = false

  }else if((linha4_4.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha4_4.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l4_4")

    dropSound.play()

    verificarVitoria()

    control = false

  }else if((linha3_4.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha3_4.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l3_4")

    dropSound.play()

    verificarVitoria()

    control = false

  }else if((linha2_4.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha2_4.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l2_4")

    dropSound.play()

    verificarVitoria()

    control = false

  }else if((linha1_4.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha1_4.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l1_4")

    dropSound.play()

    verificarVitoria()

    control = false

  } else if((linha0_4.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha0_4.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l0_4")

    dropSound.play()

    verificarVitoria()

    control = false

  }

  
  
  else if((linha5_4.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha5_4.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l5_4")

    dropSound.play()

    verificarVitoria()

    control = true

  }else if((linha4_4.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha4_4.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l4_4")

    dropSound.play()

    verificarVitoria()

    control = true

  }else if((linha3_4.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha3_4.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l3_4")

    dropSound.play()

    verificarVitoria()

    control = true

  }else if((linha2_4.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha2_4.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l2_4")

    dropSound.play()

    verificarVitoria()

    control = true


  }else if((linha1_4.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha1_4.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l1_4")

    dropSound.play()

    verificarVitoria()

    control = true


  } else if((linha0_4.childElementCount === 0) && (control === false)){
  
    let ficha2 = document.createElement("div")
    linha0_4.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l0_4")

    dropSound.play()

    verificarVitoria()

    control = true

  }
})



button6.addEventListener("click", () => {
  if((linha5_5.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha5_5.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l5_5")

    dropSound.play()

    verificarVitoria()

    control = false

  }else if((linha4_5.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha4_5.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l4_5")

    dropSound.play()

    verificarVitoria()

    control = false

  }else if((linha3_5.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha3_5.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l3_5")

    dropSound.play()

    verificarVitoria()

    control = false

  }else if((linha2_5.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha2_5.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l2_5")

    dropSound.play()

    verificarVitoria()

    control = false

  }else if((linha1_5.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha1_5.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l1_5")

    dropSound.play()

    verificarVitoria()

    control = false

  } else if((linha0_5.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha0_5.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l0_5")

    dropSound.play()

    verificarVitoria()

    control = false

  }
  


  else if((linha5_5.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha5_5.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l5_5")

    dropSound.play()

    verificarVitoria()

    control = true

  }else if((linha4_5.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha4_5.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l4_5")

    dropSound.play()

    verificarVitoria()

    control = true

  }else if((linha3_5.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha3_5.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l3_5")

    dropSound.play()

    verificarVitoria()

    control = true

  }else if((linha2_5.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha2_5.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l2_5")

    dropSound.play()

    verificarVitoria()

    control = true


  }else if((linha1_5.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha1_5.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l1_5")

    dropSound.play()

    verificarVitoria()

    control = true


  } else if((linha0_5.childElementCount === 0) && (control === false)){
  
    let ficha2 = document.createElement("div")
    linha0_5.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l0_5")

    dropSound.play()

    verificarVitoria()

    control = true

  }
})


button7.addEventListener("click", () => {
  if((linha5_6.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha5_6.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l5_6")

    dropSound.play()

    verificarVitoria()

    control = false

  }else if((linha4_6.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha4_6.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l4_6")

    dropSound.play()

    verificarVitoria()

    control = false

  }else if((linha3_6.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha3_6.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l3_6")

    dropSound.play()

    verificarVitoria()

    control = false

  }else if((linha2_6.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha2_6.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l2_6")

    dropSound.play()

    verificarVitoria()

    control = false

  }else if((linha1_6.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha1_6.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l1_6")

    dropSound.play()

    verificarVitoria()

    control = false

  } else if((linha0_6.childElementCount === 0) && (control === true)){
    let ficha = document.createElement("div")
    linha0_6.appendChild(ficha)
    ficha.classList.add("ficha_player")
    red.push("l0_6")

    dropSound.play()

    verificarVitoria()

    control = false

  }
  


  else if((linha5_6.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha5_6.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l5_6")

    dropSound.play()

    verificarVitoria()

    control = true

  }else if((linha4_6.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha4_6.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l4_6")

    dropSound.play()

    verificarVitoria()

    control = true

  }else if((linha3_6.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha3_6.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l3_6")

    dropSound.play()

    verificarVitoria()

    control = true

  }else if((linha2_6.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha2_6.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l2_6")

    dropSound.play()

    verificarVitoria()

    control = true


  }else if((linha1_6.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha1_6.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l1_6")
    dropSound.play()
    verificarVitoria()
    control = true


  } else if((linha0_6.childElementCount === 0) && (control === false)){
    let ficha2 = document.createElement("div")
    linha0_6.appendChild(ficha2)
    ficha2.classList.add("ficha_computer")
    black.push("l0_6")
    dropSound.play()
    verificarVitoria()
    control = true

  }
})

function mudaABolinha() {
  if (control === true) {
    let documento = document.getElementsByClassName('div_botaoRed')
      let x = [... documento]
      for(let i = 0; i < x.length; i++){
        x[i].classList.replace('div_botaoRed', 'div_botaoBlack')
      }
  } else {
    let documento = document.getElementsByClassName('div_botaoBlack')
      let x = [... documento]
      for(let i = 0; i < x.length; i++){
        x[i].classList.replace('div_botaoBlack', 'div_botaoRed')
      }
  }
}

