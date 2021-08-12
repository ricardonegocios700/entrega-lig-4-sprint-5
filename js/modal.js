// MODAL INFORMAÇÕES
// inicio
let botao3 = document.getElementById("popup__button");
botao3.addEventListener("click", hiddenInformation);

function hiddenInformation(){
  let element = document.getElementById("openInformation");
  element.style.visibility = "hidden";
}

let information = document.getElementById("information__btn");
information.addEventListener("click", visibilityInformation);

function visibilityInformation(){
  let element = document.getElementById("openInformation");
  element.style.visibility = "visible"
}
// fim