let inputNumero = document.getElementById("inputNumero");
let btn = document.getElementById("btn");
let novo = document.getElementById("novo_jogo");
let resultado = document.getElementById("resultado");

let counter = 0;
let secret = Math.floor(Math.random() * 50);
console.log(secret)

btn.addEventListener('click', () => {
    if(inputNumero.value != secret && resultado < 3){
        resultado.innerText = "Você Errou"
    } else if (inputNumero.value != secret && resultado == 3) {
        resultado.innerText = "Você perdeu!"
    } else {
        resultado.innerText = "Parabéns, você acertou!"

    }
    resultado += 1;
})

novo.addEventListener('click', () => {
    inputNumero.value = 0
    resultado = 0
    secret = Math.floor(Math.random() * 50)
    console.log(secret)
})