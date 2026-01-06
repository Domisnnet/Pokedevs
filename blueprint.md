# 🚀 Blueprint do Projeto: Pokedevs

Este documento serve como um guia técnico completo para o projeto Pokedevs, detalhando sua arquitetura, estrutura e processos de desenvolvimento e deploy.

---

## 1. Visão Geral do Projeto

O **Pokedevs** é um projeto interativo que transforma arquétipos de desenvolvedores em personagens inspirados no universo Pokémon. Desenvolvido com foco em lógica de programação e manipulação de DOM, o projeto oferece uma experiência de usuário dinâmica e visualmente agradável, onde a seleção de um "Pokedev" na lista lateral atualiza o cartão de destaque central em tempo real.

---

## 2. Estrutura de Arquivos

A estrutura do projeto é organizada para separar o conteúdo (`public`) do código-fonte da aplicação (`src`) e das configurações de ambiente.

```
. (raiz do projeto)
│
├── .firebaserc         # Conecta o projeto local ao projeto Firebase correto.
├── .gitattributes      # Atributos de arquivos para o Git.
├── .prettierrc         # Configurações do formatador de código Prettier.
├── LICENSE             # Licença do projeto (MIT).
├── README.md           # Documentação principal e porta de entrada do projeto no GitHub.
├── blueprint.md        # Esta documentação técnica.
├── firebase.json       # Configurações do Firebase, aponta para o diretório 'public'.
├── index.html          # Ponto de entrada HTML que estava na raiz (pode ser obsoleto ou um backup).
│
└── public/             # Diretório raiz para o deploy no Firebase.
    │
    ├── index.html      # O arquivo HTML principal da aplicação.
    │
    └── src/            # Contém todos os assets e o código-fonte da aplicação.
        │
        ├── css/        # Arquivos de estilo.
        │   ├── cartao.css
        │   ├── estilo.css
        │   └── reset.css
        │
        ├── imagens/    # Imagens dos personagens e assets visuais.
        │
        └── js/         # Código JavaScript.
            └── index.js    # Lógica de manipulação de DOM e interatividade.
```

---

## 3. Tecnologias Utilizadas

| Camada | Tecnologias | Descrição |
| :--- | :--- | :--- |
| **Frontend** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | Estrutura semântica e estilização de cartões. |
| **Interatividade** | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Manipulação de eventos e troca dinâmica de estados. |
| **Tipografia** | ![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=flat-square&logo=google&logoColor=white) | Fontes personalizadas para imersão no tema. |
| **Hospedagem**| ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black) | Hospedagem estática do projeto. |

---

## 4. Destaques Técnicos

### ⚡ Manipulação de DOM
Utilização de `querySelectorAll` para criar uma lista de todos os personagens e `addEventListener` para escutar os cliques. A lógica em `js/index.js` gerencia a troca de classes CSS para ocultar o cartão ativo e exibir o cartão selecionado, criando uma interface reativa sem recarregar a página.

### 🎨 CSS Modular
Organização de estilos focada em classes reutilizáveis. Cada cartão possui um estado base, e classes modificadoras (`.aberto`, `.fechado`) controlam sua visibilidade. Isso facilita a manutenção e a adição de novos Pokedevs.

---

## 5. Como Contribuir

Deseja adicionar um novo Pokedev? Siga o fluxo abaixo:

| Fase | Ação | Comando |
| :---: | :--- | :--- |
| **01** | **Fork** | `https://github.com/Domisnnet/Pokedevs/fork` |
| **02** | **Branch** | `git checkout -b feat/seu-novo-pokedev` |
| **03** | **Commit** | `git commit -m '''feat: adiciona o Pokedev [Nome] que representa [Arquétipo]'''` |
| **04** | **Push** | `git push origin feat/seu-novo-pokedev` |
| **05** | **PR** | Abra um Pull Request no repositório original. |

---

## 6. 🚀 Como Fazer o Deploy no Firebase

Para garantir que o deploy seja feito no projeto correto do Firebase, é crucial que seu ambiente local esteja configurado adequadamente.

### Passo a Passo

1.  **Verifique o arquivo de configuração do Firebase (`.firebaserc`):**
    Na raiz do seu projeto, certifique-se de que o arquivo `.firebaserc` existe e contém o ID do projeto correto.

    ```json
    {
      "projects": {
        "default": "pokedevs-01319317-5da45"
      }
    }
    ```

2.  **Verifique a configuração de Deploy (`firebase.json`):**
    Este arquivo deve instruir o Firebase a fazer o deploy do conteúdo da pasta `public`.

    ```json
    {
      "hosting": {
        "public": "public",
        "ignore": [
          "firebase.json",
          "**/.*",
          "**/node_modules/**"
        ]
      }
    }
    ```

3.  **Execute o Comando de Deploy:**
    Com os arquivos acima configurados corretamente, execute o seguinte comando no terminal para publicar o projeto:

    ```bash
    firebase deploy --only hosting
    ```

Este processo garante que todas as suas atualizações sejam enviadas para a versão correta do site que está no ar.

---

## 7. Estrutura de Dados dos Personagens

Para adicionar um novo personagem ao projeto, é fundamental entender a estrutura do array `pokedevs` localizado em `public/src/js/index.js`. Cada personagem é um objeto JavaScript dentro deste array, seguindo a estrutura abaixo.

### Exemplo de Objeto de um Pokedev

```javascript
{
    id: "dev-frontend",
    nome: "Dev Front-End",
    numero: "#001",
    tipo: "🎨 front-end",
    descricao: "O mestre da trindade HTML, CSS e JavaScript. Sua missão é criar interfaces que não apenas funcionem, mas que encantem. Cada pixel, cada animação e cada interação são pensados para proporcionar a melhor experiência ao usuário. É o arquiteto da primeira impressão digital.",
    habilidades: ["HTML5", "CSS3", "JavaScript", "React", "Vue.js"],
    imagem: "./src/imagens/dev-frontend.png"
}
```

### Detalhamento dos Campos

| Campo | Tipo | Obrigatório | Descrição |
| :--- | :--- | :---: | :--- |
| `id` | `String` | Sim | Um identificador único em formato `kebab-case`. Usado para vincular o item da lista ao seu respectivo cartão. |
| `nome` | `String` | Sim | O nome completo do arquétipo de desenvolvedor. Será exibido no cartão. |
| `numero`| `String` | Sim | O número do Pokedev, no formato `"#XXX"`. |
| `tipo` | `String` | Sim | A especialidade principal do desenvolvedor (ex: "🎨 front-end", "🔧 back-end"). |
| `descricao`| `String` | Sim | Um parágrafo descrevendo as características e responsabilidades do arquétipo. |
| `habilidades`| `Array` | Sim | Uma lista de strings contendo as principais tecnologias e habilidades do Pokedev. |
| `imagem` | `String` | Sim | O caminho relativo para a imagem do personagem, a partir do diretório `public`. |