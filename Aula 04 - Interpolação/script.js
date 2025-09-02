// 1 - Produto em promoção
const temporizador = document.getElementById("temporizador");
const ofertaEncerrada = document.getElementById("oferta-encerrada");

let tempo = 4 * 60;

const timer = setInterval(() => {
  let minutos = Math.floor(tempo / 60);
  let segundos = tempo % 60;

  temporizador.innerText = `${minutos.toString().padStart(2, "0")}:${segundos
    .toString()
    .padStart(2, "0")}`;

  if (tempo == 0) {
    clearInterval(timer);
    ofertaEncerrada.innerText = "OFERTA ENCERRADA!";
  }

  tempo--;
}, 1000);

// 2 - Contrato de Doces
const pessoa = {
  nome: "Maria Silva",
  cpf: "123.456.789-00",
  endereco: "Rua das Flores, 123 - Centro",
};

const servico = {
  titulo: "Buffet de Doces",
  descricao: "Produção e entrega de 300 doces variados.",
  valor: 500.0,
};

const contratoTexto = `
    Pelo presente instrumento, <strong>${pessoa.nome}</strong>,
    inscrita no CPF ${pessoa.cpf}, residente em ${pessoa.endereco},
    doravante denominada Tech4Doces, contrata os servicos de <strong>${
      servico.titulo
    }</strong>, consistindo em ${
  servico.descricao
}, pelo valor de R$ ${servico.valor.toFixed(2)}.

    O presente contrato é firmado de comum acordo entre as partes,
    obrigando-se ao seu fiel cumprimento.
`;

const contrato = document.getElementById("contrato");

contrato.innerHTML = contratoTexto;

// 3 - Loja de Eletrônicos
const produto = {
  nome: "iPhone 12",
  precoOriginal: 2000,
  desconto: 0.15,

  get precoFinal() {
    return this.precoOriginal * (1 - this.desconto);
  },
};

const status = produto.desconto > 0 ? "Em promoção" : "Preço normal";

const infoProduto = `
    <h2>${produto.nome}</h2>
    <p>Preço Original: R$ ${produto.precoOriginal.toFixed(2)}</p>
    <p>Preço com desconto: R$ ${produto.precoFinal.toFixed(2)}</p>
    <p><strong>${status}</strong></p>
`;

const produtoDiv = document.getElementById("produto");
produtoDiv.innerHTML = infoProduto;
