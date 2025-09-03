// 1 - Expressões condicionais
let nome = prompt("Digite o seu nome:");

if (nome === "" || nome === null) {
  alert("Bem-vindo visitante!");
} else if (nome.length > 0 && nome.length < 20) {
  alert("Bem-vindo " + nome + "!");
} else {
  alert("Nome inválido, bem-vindo visitante!");
}
