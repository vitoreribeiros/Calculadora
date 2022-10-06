const resultado = document.querySelector(".resultado");
const confirmar = document.querySelector(".especial");

function clean() {
  resultado.innerHTML = "";
}
function backspace() {
  if (resultado.textContent) {
    let result = document.querySelector(".resultado").innerHTML;
    resultado.innerHTML = result.substring(0, result.length - 1);
  }
}
function insert(valor) {
  resultado.innerHTML += valor;
}
function confirma() {
  if (resultado.textContent != "Erro") {
    document.querySelector(".resultado").innerHTML = eval(resultado.innerHTML);
  }
}
