const pokedevs = [
  {
    id: "devchu",
    nome: "Devchu",
    numero: "#001",
    tipo: "eletrico",
    imagem: "src/imagens/devchu.png",
    descricao: "Quando se depara com um erro no código, fica bastante irritado. Sente a tensão acumulada em cada músculo, como se estivesse prestes a soltar raios pelos dedos. Mas, em vez de se deixar abater, canaliza toda essa energia em busca da solução. Cada linha de código é examinada e ele não descansa até que o erro seja encontrado e corrigido."
  },
  {
    id: "scriptle",
    nome: "Scriptle",
    numero: "#002",
    tipo: "agua",
    imagem: "src/imagens/scriptle.png",
    descricao: "Mesmo sendo um programador iniciante, este pokedev já domina habilidades fundamentais em Javascript como: Depurar o código, Manipulação do DOM, Trabalhar com APIs, Conhecimento de frameworks e bibliotecas tornando o código mais eficiente."
  },
  {
    id: "codevee",
    nome: "Codevee",
    numero: "#003",
    tipo: "fogo",
    imagem: "src/imagens/codevee.png",
    descricao: "Sua capacidade de evoluir continuamente permite que ele se adapte de forma eficaz a qualquer ambiente de desenvolvimento. Isso reflete a flexibilidade e a capacidade de aprendizado contínuo que são essenciais para um desenvolvedor pleno."
  },
  {
    id: "psycoder",
    nome: "Psycoder",
    numero: "#022",
    tipo: "agua",
    imagem: "src/imagens/psycoder.png",
    descricao: "Um pokedev sênior constantemente atormentado por uma dor de cabeça persistente. Quando a dor se torna intensa demais, consegue acessar habilidades de programação extraordinárias, resolvendo problemas complexos com uma facilidade surpreendente."
  },
  {
    id: "charmandev",
    nome: "Charmandev",
    numero: "#015",
    tipo: "fogo",
    imagem: "src/imagens/charmandev.png",
    descricao: "Este pokedev nunca deixa a chama do aprendizado se apagar! Está sempre se atualizando, pois sabe que um bom desenvolvedor deve ser resiliente e adaptável às mudanças constantes no mundo da tecnologia. Estar aberto a aprender novas ferramentas e metodologias é crucial."
  },
  {
    id: "devlypuff",
    nome: "Devlypuff",
    numero: "#062",
    tipo: "fada",
    imagem: "src/imagens/devlypuff.png",
    descricao: "A expressão '''trabalhe enquanto eles dormem''' poderia ter sido facilmente criada por este pokedev. Afinal, ele tem o dom de codar por horas e horas, madrugada adentro, regado a muito café e energéticos. Sua dedicação é tão intensa que, enquanto a maioria das pessoas está descansando, ele está imerso em linhas de código."
  }
];

const pokedevsListContainer = document.querySelector(".listagem ul");
const pokedevsCardsContainer = document.querySelector(".cartoes-pokedev");
const somSelecao = document.getElementById("som-selecao");
const themeMeta = document.getElementById("nav-theme");

const coresHex = {
  eletrico: "#fcc719",
  fogo: "#f15000",
  agua: "#015C98",
  grama: "#49D0B0",
  trevas: "#BA68C8",
  fada: "#C29791"
};

let allCardsHtml = "";
let allListHtml = "";

pokedevs.forEach((pokedev, index) => {
  const isFirst = index === 0;
  
  allCardsHtml += `
    <article class="cartao-pokedev tipo-${pokedev.tipo} ${isFirst ? 'aberto' : ''}" id="cartao-${pokedev.id}" role="tabpanel">
      <header class="cartao-topo">
        <div class="detalhes">
          <h2 class="nome">${pokedev.nome}</h2>
          <span>${pokedev.numero}</span>
        </div>
        <span class="tipo">${pokedev.tipo}</span>
        <figure class="cartao-imagem">
          <img src="${pokedev.imagem}" alt="${pokedev.nome}" loading="lazy"/>
        </figure>
      </header>
      <div class="cartao-informacoes">
        <section class="descricao">
          <h3>Descrição</h3>
          <p>${pokedev.descricao}</p>
        </section>
      </div>
    </article>`;

  allListHtml += `
    <li class="pokedev ${isFirst ? 'ativo' : ''}" id="${pokedev.id}" role="tab">
      <img src="${pokedev.imagem}" alt="Ícone ${pokedev.nome}" loading="lazy"/>
      <span>${pokedev.nome}</span>
    </li>`;
});

pokedevsCardsContainer.innerHTML = allCardsHtml;
pokedevsListContainer.innerHTML = allListHtml;

const alternarEstadoAtivo = (idSelecionado) => {
  const pokedevData = pokedevs.find(p => p.id === idSelecionado);
  const corBase = coresHex[pokedevData.tipo] || "#6b727a";

  if (somSelecao) {
    somSelecao.currentTime = 0;
    somSelecao.play().catch(() => {});
  }

  document.querySelector(".pokedev.ativo")?.classList.remove("ativo");
  document.querySelector(".cartao-pokedev.aberto")?.classList.remove("aberto");

  document.getElementById(idSelecionado).classList.add("ativo");
  document.getElementById(`cartao-${idSelecionado}`).classList.add("aberto");

  if (themeMeta) themeMeta.setAttribute("content", corBase);
  document.documentElement.style.setProperty('--bg-global', corBase + "99");
};

document.querySelectorAll(".pokedev").forEach(pokedev => {
  pokedev.addEventListener("click", () => alternarEstadoAtivo(pokedev.id));
});