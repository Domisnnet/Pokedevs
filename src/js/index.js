/* 
OBJETIVO - quando clicar no pokedev da listagem temos que esconder o cartão do pokedev aberto 
e mostrar o cartão correspondente ao que foi selecionado na listagem
*/

const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

listaSelecaoPokedevs.forEach(pokedev => {
  pokedev.addEventListener("click", () => {
    // Esconde o cartão que está aberto
    const cartaoPokedevAberto = document.querySelector(".aberto");
    if (cartaoPokedevAberto) {
      cartaoPokedevAberto.classList.remove("aberto");
    }

    // Desativa o pokedev que estava ativo na listagem
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    if (pokedevAtivoNaListagem) {
      pokedevAtivoNaListagem.classList.remove("ativo");
    }
    
    // Mostra o novo cartão
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    if (cartaoPokedevParaAbrir) {
      cartaoPokedevParaAbrir.classList.add("aberto");
    }

    // Ativa o pokedev selecionado na listagem
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    if (pokedevSelecionadoNaListagem) {
      pokedevSelecionadoNaListagem.classList.add("ativo");
    }
  });
});
