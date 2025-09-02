// 1 - Novos alunos no curso
const inputAluno = document.getElementById("input-nome-aluno");
const botaoAluno = document.getElementById("add-aluno");
const listaAluno = document.getElementById("lista-alunos");

botaoAluno.addEventListener("click", () => {
  const nome = inputAluno.value;

  if (nome !== "") {
    const item = document.createElement("li");
    item.innerText = nome.toUpperCase();
    listaAluno.appendChild(item);

    inputAluno.value = "";
  } else {
    alert("Digite um nome válido!");
  }
});

// 2 - Lista de convidados
const inputConvidado = document.getElementById("input-nome-convidado");
const botaoConvidado = document.getElementById("add-convidado");
const listaConvidado = document.getElementById("lista-convidados");
const numeroConvidados = document.getElementById("numero-convidados");
const convidados = [];

botaoConvidado.addEventListener("click", () => {
  const nome = inputConvidado.value;

  if (nome !== "") {
    const item = document.createElement("li");
    item.innerText = nome;
    listaConvidado.appendChild(item);

    inputConvidado.value = "";
    convidados.push(nome);
    numeroConvidados.innerText = convidados.length;
  } else {
    alert("Digite um nome válido!");
  }
});

// 3 - Cadastro de Filmes
const inputAddFilme = document.getElementById("input-nome-filme");
const botaoAddFilme = document.getElementById("add-filme");
const inputBuscarFilme = document.getElementById("input-busca-filme");
const ordenarAZ = document.getElementById("ordenar-a-z");
const ordenarZA = document.getElementById("ordenar-z-a");
const listaFilmes = document.getElementById("lista-filmes");
const filmes = [];
let ordem;

const mostrarLista = () => {
  listaFilmes.innerHTML = "";
  let busca = inputBuscarFilme.value.toLowerCase();

  let filtrados = filmes.filter((filme) => filme.toLowerCase().includes(busca));

  if (ordem === "az") {
    filtrados.sort();
  } else if (ordem === "za") {
    filtrados.sort().reverse();
  }

  filtrados.forEach((filme) => {
    const li = document.createElement("li");
    li.innerText = filme.toUpperCase();
    listaFilmes.appendChild(li);
  });
};

botaoAddFilme.addEventListener("click", () => {
  const nomeFilme = inputAddFilme.value;

  if (nomeFilme) {
    filmes.push(nomeFilme);
    inputAddFilme.value = "";
    mostrarLista();
  }
});

ordenarAZ.addEventListener("click", () => {
  ordem = "az";
  ordenarAZ.style.backgroundColor = "green";
  ordenarAZ.style.color = "white";
  ordenarZA.style.backgroundColor = "#fff";
  ordenarZA.style.color = "black";
  mostrarLista();
});

ordenarZA.addEventListener("click", () => {
  ordem = "za";
  ordenarZA.style.backgroundColor = "green";
  ordenarZA.style.color = "white";
  ordenarAZ.style.backgroundColor = "#fff";
  ordenarAZ.style.color = "black";
  mostrarLista();
});

inputBuscarFilme.addEventListener("input", mostrarLista);