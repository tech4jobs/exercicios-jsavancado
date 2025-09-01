// 1 - Agência de veículos
class Carro {
  constructor(marca, modelo, ano, valorCompra, valorAtual, cor) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.valorCompra = valorCompra;
    this.valorAtual = valorAtual;
    this.cor = cor;
  }

  lucroLoja = () => {
    return 0.03 * this.valorCompra;
  };

  ipva = () => {
    return 0.04 * this.valorAtual;
  };

  licenciamento = () => {
    const anoAtual = new Date().getFullYear();

    if (anoAtual - this.ano <= 10) {
      return 160.0;
    } else {
      return 0.0;
    }
  };
}

const carros = [
  new Carro("Toyota", "Corolla", 2020, 80000, 70000, "Prata"),
  new Carro("Honda", "Civic", 2018, 90000, 65000, "Preto"),
  new Carro("Volkswagen", "Gol", 2012, 35000, 20000, "Branco"),
  new Carro("Chevrolet", "Onix", 2023, 75000, 73000, "Azul"),
  new Carro("Fiat", "Uno", 2005, 25000, 8000, "Vermelho"),
];

const listaCarros = document.getElementById("lista-carros");

carros.forEach((carro) => {
  const li = document.createElement("li");

  li.innerText = `Marca: ${carro.marca}\n Modelo: ${carro.modelo}\n Ano: ${
    carro.ano
  }\n Valor de compra: R$ ${carro.valorCompra}\n Valor atual: R$ ${
    carro.valorAtual
  }\n Cor: ${
    carro.cor
  }\n Lucro da loja: R$ ${carro.lucroLoja()}\n IPVA: R$ ${carro.ipva()}\n Licenciamento: R$ ${carro.licenciamento()}`;

  listaCarros.appendChild(li);
});

// 2 - Academia Fit Life
class Aluno {
  constructor(nome, idade, peso, altura) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
  }

  calcularIMC = () => {
    const imc = (this.peso / (this.altura * this.altura)).toFixed(1);

    if (imc < 18.5) {
      return `IMC: ${imc} - Abaixo do peso`;
    } else if (imc <= 24.9) {
      return `IMC: ${imc} - Peso normal`;
    } else if (imc <= 29.9) {
      return `IMC: ${imc} - Sobrepeso`;
    } else {
      return `IMC: ${imc} - Obesidade`;
    }
  };
}

const alunos = [
  new Aluno("Ana", 20, 50, 1.6),
  new Aluno("João", 22, 75, 1.75),
  new Aluno("Maria", 19, 90, 1.65),
  new Aluno("Pedro", 25, 68, 1.8),
  new Aluno("Carla", 30, 110, 1.7),
];

const listaAlunos = document.getElementById("lista-alunos");

alunos.forEach((aluno) => {
  const li = document.createElement("li");

  li.innerText = `Nome: ${aluno.nome}\n Idade: ${aluno.idade} anos\n Altura: ${
    aluno.altura
  }m\n Peso: ${aluno.peso}kg\n ${aluno.calcularIMC()}`;

  listaAlunos.appendChild(li);
});

// 3 - Supermercado Econômico
class ItemMercado {
  constructor(nome, preco, validade) {
    this.nome = nome;
    this.preco = preco;
    this.validade = validade; // mês de validade (1-12)
  }

  desconto = () => {
    const mesAtual = new Date().getMonth() + 1;

    if (this.validade - mesAtual <= 3 && this.validade >= mesAtual) {
      return 0.2 * this.preco; // desconto maior se estiver perto de vencer
    } else {
      return 0.05 * this.preco; // desconto padrão
    }
  };

  precoFinal = () => {
    return this.preco - this.desconto();
  };

  status = () => {
    const mesAtual = new Date().getMonth() + 1;
    if (this.validade < mesAtual) {
      return "Vencido";
    } else {
      return "Válido";
    }
  };
}

const itensMercado = [
  new ItemMercado("Leite", 7.5, 9),
  new ItemMercado("Arroz", 25.0, 12),
  new ItemMercado("Feijão", 12.0, 2),
  new ItemMercado("Macarrão", 8.0, 3),
  new ItemMercado("Biscoito", 5.5, 1),
];

const listaItensMercado = document.getElementById("lista-itens-mercado");

itensMercado.forEach((item) => {
  const li = document.createElement("li");

  li.innerText = `Produto: ${item.nome}\n Preço: R$ ${item.preco.toFixed(2)}\n Desconto: R$ ${item.desconto().toFixed(2)}\n Preço final: R$ ${item.precoFinal().toFixed(2)}\n Status: ${item.status()}`;

  listaItensMercado.appendChild(li);
});