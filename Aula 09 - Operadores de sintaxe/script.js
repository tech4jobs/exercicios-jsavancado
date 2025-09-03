// 1 - Copiando arrays com spread
const frutas = ["Banana", "Melão", "Maçã"];
const novoArrayFrutas = [...frutas, "Abacate", "Limão"];
console.log(frutas);
console.log(novoArrayFrutas);

// 2 - Juntando arrays
const herois = ["Batman", "Homem-aranha", "Homem de ferro"];
const viloes = ["Coringa", "Octopus", "Thanos"];
const personagens = [...herois, ...viloes];

console.log(herois);
console.log(viloes);
console.log(personagens);

// 3 - Objeto com Spread
const usuario = {
  nome: "João Cunha",
  idade: 22,
};

const usuarioComEmail = {
  ...usuario,
  email: "jcunha123@gmail.com",
};

console.log(usuario);
console.log(usuarioComEmail);
