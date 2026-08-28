const botoes = document.querySelectorAll("button");//variável para acessar o botão.
botoes.forEach(function(botao){
botao.addEventListener("click", botaoClicado);//quando acontecer um clique, será executada uma função chamada botaoClicado.

function botaoClicado() { //cria uma função chamada botaoClicado.
console.log("fui clicado");// exibe uma mensagem no console.
let texto = botao.querySelector("span");////seleciona o elemento "span" que esta dentro do botão e o guarda na variavel texto.
texto.textContent++;// soma 1 ao valor atual. Assim, o contador aumenta a cada clique.

}
})