# 🚀 Blueprint do Projeto: Pokedevs

Este documento serve como um guia técnico completo para o projeto Pokedevs, detalhando sua arquitetura, estrutura e processos de desenvolvimento e deploy.

---

## 1. Visão Geral do Projeto

O **Pokedevs** é um projeto interativo que transforma arquétipos de desenvolvedores em personagens inspirados no universo Pokémon. Desenvolvido com foco em lógica de programação e manipulação de DOM, o projeto oferece uma experiência de usuário dinâmica e visualmente agradável, onde a seleção de um "Pokedev" na lista lateral atualiza o cartão de destaque central em tempo real.

---

## 2. Estrutura de Arquivos

A estrutura do projeto é organizada para separar o código-fonte (`src`) dos arquivos de build (`public`). O desenvolvimento acontece na raiz do projeto, que é a estrutura servida pelo GitHub Pages. A pasta `public` é o diretório de saída do build, gerado para o deploy no Firebase.

```
. (raiz do projeto)
│
├── .firebaserc         # Conecta o projeto local ao projeto Firebase.
├── .gitattributes      # Atributos de arquivos para o Git.
├── .prettierrc         # Configurações do formatador de código Prettier.
├── LICENSE             # Licença do projeto (MIT).
├── README.md           # Documentação principal para o GitHub.
├── blueprint.md        # Esta documentação técnica.
├── build.sh            # Script de build para preparar o deploy no Firebase.
├── firebase.json       # Configurações do Firebase, aponta para o diretório 'public'.
├── index.html          # Ponto de entrada HTML (usado pelo GitHub Pages e como fonte para o build).
│
├── public/             # Diretório de build, gerado pelo script build.sh. NÃO DEVE SER EDITADO DIRETAMENTE.
│
└── src/                # Código-fonte da aplicação (onde o desenvolvimento acontece).
    │
    ├── css/            # Arquivos de estilo.
    ├── fonts/          # Arquivos de fontes.
    ├── imagens/        # Imagens dos personagens e assets visuais.
    ├── js/             # Código JavaScript.
    │   └── index.js    # Lógica principal da aplicação.
    └── media/          # Arquivos de áudio.
```

---

## 3. Tecnologias Utilizadas

| Camada | Tecnologias | Descrição |
| :--- | :--- | :--- |
| **Frontend** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | Estrutura semântica e estilização de cartões. |
| **Interatividade** | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Manipulação de eventos e troca dinâmica de estados. |
| **Tipografia** | ![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=flat-square&logo=google&logoColor=white) | Fontes personalizadas para imersão no tema. |
| **Hospedagem**| ![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-181717?style=flat-square&logo=github&logoColor=white) ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black) | Hospedagem dupla para diferentes ambientes. |
| **Build** | ![Bash](https://img.shields.io/badge/Bash-4EAA25?style=flat-square&logo=gnubash&logoColor=white) | Script para automação do processo de build. |

---

## 4. Destaques Técnicos

### ⚡ Manipulação de DOM
Utilização de `querySelectorAll` para criar uma lista de todos os personagens e `addEventListener` para escutar os cliques. A lógica em `src/js/index.js` gerencia a troca de classes CSS para ocultar o cartão ativo e exibir o cartão selecionado.

### 🎨 CSS Modular
Organização de estilos focada em classes reutilizáveis. Cada cartão possui um estado base, e classes modificadoras (`.aberto`) controlam sua visibilidade.

### 🥚 Easter Egg
Foi implementado um Easter Egg que é ativado ao clicar 7 vezes seguidas no número do Pokedev. A cada clique, o som de seleção é reproduzido com um tom crescente e, no sétimo clique, um som de moeda do Mario é tocado e o card do Pokedev realiza uma animação de pirueta. A lógica se encontra no final do arquivo `src/js/index.js` e a animação no `src/css/estilos-globais.css`.

---

## 5. Como Contribuir

Deseja adicionar um novo Pokedev? Siga o fluxo abaixo:

| Fase | Ação | Comando |
| :---: | :--- | :--- |
| **01** | **Fork** | `https://github.com/Domisnnet/Pokedevs/fork` |
| **02** | **Branch** | `git checkout -b feat/seu-novo-pokedev` |
| **03** | **Commit** | `git commit -m '''feat: adiciona o Pokedev [Nome]'''` |
| **04** | **Push** | `git push origin feat/seu-novo-pokedev` |
| **05** | **PR** | Abra um Pull Request no repositório original. |

---

## 6. 🚀 Processo de Build e Deploy

O projeto está configurado para ser hospedado em dois ambientes: GitHub Pages (a partir da raiz) e Firebase Hosting (a partir da pasta `public`). Para gerenciar essa dualidade, foi criado um processo de build.

### Passo 1: Entendendo o Build

O script `build.sh` prepara os arquivos para o Firebase. Ele executa as seguintes ações:
1.  **Limpa** o diretório `public/` para remover arquivos antigos.
2.  **Copia** o `index.html` da raiz para dentro de `public/`.
3.  **Copia** a pasta `src/` inteira para dentro de `public/`.

### Passo 2: Executando o Build

Antes de fazer o deploy para o Firebase, **sempre** execute o script de build para garantir que a pasta `public` tenha a versão mais recente do código.

```bash
# Executa o build
./build.sh
```

### Passo 3: Fazendo o Deploy no Firebase

Com a pasta `public` atualizada, faça o deploy para o Firebase Hosting.

```bash
firebase deploy --only hosting
```

**IMPORTANTE:** Nunca edite os arquivos dentro da pasta `public` diretamente. Eles são gerados automaticamente e suas alterações serão perdidas. **Todas as edições devem ser feitas nos arquivos da raiz do projeto (`index.html` e na pasta `src`).**

---

## 7. Estrutura de Dados dos Personagens

Para adicionar um novo personagem, edite o array `pokedevs` localizado em **`src/js/index.js`**. Cada personagem é um objeto JavaScript com a seguinte estrutura:

### Exemplo de Objeto
```javascript
{
    id: "dev-frontend",
    nome: "Dev Front-End",
    numero: "#001",
    tipo: "🎨 front-end",
    descricao: "O mestre da trindade HTML, CSS e JavaScript...",
    habilidades: ["HTML5", "CSS3", "JavaScript", "React", "Vue.js"],
    imagem: "./src/imagens/dev-frontend.png"
}
```

### Detalhamento dos Campos

| Campo | Tipo | Obrigatório | Descrição |
| :--- | :--- | :---: | :--- |
| `id` | `String` | Sim | Identificador único em `kebab-case`. |
| `nome` | `String` | Sim | Nome completo do arquétipo. |
| `numero`| `String` | Sim | Número do Pokedev, formato `"#XXX"`. |
| `tipo` | `String` | Sim | Especialidade principal. |
| `descricao`| `String` | Sim | Descrição do arquétipo. |
| `habilidades`| `Array` | Sim | Lista de tecnologias/habilidades. |
| `imagem` | `String` | Sim | Caminho relativo para a imagem. |

---

## 8. Licença

Este projeto é distribuído sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 9. Autor

Feito com ❤️ por **DomisDev**.

- **GitHub:** [@Domisnnet](https://github.com/Domisnnet)
