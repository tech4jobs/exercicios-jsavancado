// 1 - Os dez primeiros
const jogos = [
  "Hollow Knight",
  "FIFA",
  "Fortnite",
  "Dead Cells",
  "PES",
  "Call of Duty",
  "Assassin's Creed Valhalla",
  "Pac-man",
  "Clash Royale",
  "Brawl Stars",
];
const lista = document.getElementById("lista-dez-primeiros");

let azul = true;

jogos.forEach((jogo) => {
  const li = document.createElement("li");
  li.innerText = jogo;
  if (azul == true) {
    li.style.backgroundColor = "red";
    azul = false;
  } else {
    li.style.backgroundColor = "blue";
    azul = true;
  }
  lista.appendChild(li);
});

// 2 - Tabela de notas com média
const alunos = [
  { nome: "Mariana", nota1: 5, nota2: 7 },
  { nome: "João", nota1: 8, nota2: 9 },
  { nome: "Maria", nota1: 4, nota2: 5 },
  { nome: "Pedro", nota1: 6, nota2: 7 },
];

const tabela = document.getElementById("tabela");

function criarTabela() {
  const cabecalho = document.createElement("tr");
  const itensCabecalho = ["Aluno", "Nota 1", "Nota 2", "Média"];
  itensCabecalho.forEach((texto) => {
    const th = document.createElement("th");
    th.innerHTML = texto;
    cabecalho.appendChild(th);
  });
  tabela.appendChild(cabecalho);

  alunos.forEach((aluno) => {
    const media = (aluno.nota1 + aluno.nota2) / 2;

    const linha = document.createElement("tr");

    const tdNome = document.createElement("td");
    tdNome.innerText = aluno.nome;
    linha.appendChild(tdNome);

    const tdNota1 = document.createElement("td");
    tdNota1.innerText = aluno.nota1;
    linha.appendChild(tdNota1);

    const tdNota2 = document.createElement("td");
    tdNota2.innerText = aluno.nota2;
    linha.appendChild(tdNota2);

    const tdMedia = document.createElement("td");
    tdMedia.innerText = media.toFixed(1);
    linha.appendChild(tdMedia);

    if (media < 6) {
      linha.style.backgroundColor = "red";
      linha.style.color = "white";
    } else if (media >= 7) {
      linha.style.backgroundColor = "green";
      linha.style.color = "white";
    }

    tabela.appendChild(linha);
  });
}

criarTabela();