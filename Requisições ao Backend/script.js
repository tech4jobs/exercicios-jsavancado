const url = "http://localhost:8080";

// 1 - Lista de montadoras
const buscarCarro = async (id) => {
  const response = await fetch(`${url}/carros/${id}`);
  const carro = await response.json();
  console.log("Carro com id 3:", carro);
};

const adicionarCarro = async (novoCarro) => {
  const response = await fetch(`${url}/carros`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(novoCarro),
  });
  const carroAdicionado = await response.json();
  console.log("Novo carro adicionado:", carroAdicionado);
};

buscarCarro(3);

const carroNovo = {
  marca: "Chevrolet",
  modelo: "Onix",
  ano: 2021,
};

adicionarCarro(carroNovo);

// 2 - Lista de Produtos de Mercado
const listarBebidas = async () => {
  const response = await fetch(`${url}/produtos?categoria=bebidas`);
  const produtos = await response.json();
  console.log("Produtos da categoria bebidas:", produtos);
};

const adicionarProduto = async (novoProduto) => {
  const response = await fetch(`${url}/produtos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(novoProduto),
  });
  const produtoAdicionado = await response.json();
  console.log("Novo produto adicionado:", produtoAdicionado);
};

const removerProduto = async (id) => {
  const response = await fetch(`${url}/produtos/${id}`, { method: "DELETE" });
  if (response.ok) {
    console.log(`Produto com id ${id} removido com sucesso!`);
  } else {
    console.log("Erro ao remover produto");
  }
};

listarBebidas();

const produtoNovo = {
  nome: "Suco de Laranja",
  preco: 6.5,
  categoria: "bebidas",
  estoque: 20,
};
adicionarProduto(produtoNovo);

removerProduto(5);

// 3 - Cadastro de alunos
const buscarAlunoPorId = async (id) => {
  const response = await fetch(`${url}/alunos/${id}`);
  const aluno = response.json();
  console.log(aluno);
};

const adicionarAluno = async (novoAluno) => {
  const response = await fetch(`${url}/alunos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(novoAluno),
  });
  const alunoAdicionado = await response.json();
  console.log("Novo aluno adicionado:", alunoAdicionado);
};

const atualizarAluno = async (id, dadosAtualizados) => {
  const response = await fetch(`${url}/alunos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dadosAtualizados),
  });
  const alunoAtualizado = await response.json();
  console.log(`Aluno com id ${id} atualizado:`, alunoAtualizado);
};

buscarAlunoPorId(4);

const novoAluno = {
  nome: "Fernando",
  idade: 20,
  curso: "Engenharia",
};
adicionarAluno(novoAluno);

const alunoAtualizado = {
  nome: "Carla Souza",
  idade: 20,
  curso: "Design Gráfico",
};

atualizarAluno(3, alunoAtualizado);
