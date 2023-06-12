const btnMinor = document.querySelector(".bx-minus");
const btnPlus = document.querySelector(".bx-plus");
const add = document.querySelector(".add");
const finalizar = document.querySelector(".finalizar");




function somar() {
    var valorAtual = parseInt(add.innerText);
    var novoValor = valorAtual + 1;

    add.innerText = novoValor;
}

function diminuir() {
    var valorAtual = parseInt(add.innerText);
    var novoValor = valorAtual - 1;

    if (valorAtual > 0) {
        add.innerText = novoValor;
    }
}

btnPlus.addEventListener("click", somar);
btnMinor.addEventListener("click", diminuir);


function finalizarCompra () {
setTimeout(()=>{
    window.location.href = "login.html"
    console.log("deu certo!")
}, 1000)
}

finalizar.addEventListener("click", finalizarCompra);




