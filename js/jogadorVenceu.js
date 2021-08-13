
let victorySound = document.getElementById("victory_sound")
function victoryPlayer1() {
    let res = document.getElementById('modal')
    res.style.display = 'block'
    victorySound.play()
    }
    
    let botao = document.getElementById('reset')
    
    botao.addEventListener('click', function (event){
    window.location.reload()
    })

function victoryPlayer2() {
        let res2 = document.getElementById('modal2')
        res2.style.display = 'block'
        victorySound.play()
        }
        
        let botao2 = document.getElementById('reset2')
        
        botao2.addEventListener('click', function (event){
        window.location.reload()
        })


function draw() {
        let res3 = document.getElementById('modal3')
        res3.style.display = 'block'
        }
        
        let botao4 = document.getElementById('reset3')
        
        botao4.addEventListener('click', function (event){
        window.location.reload()
        })
        