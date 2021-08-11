function animacao() {
    let res = document.getElementById('modal')
    res.style.display = 'block'
    }
    
    let botao = document.getElementById('reset')
    
    botao.addEventListener('click', function (event){
    window.location.reload()
    })
    