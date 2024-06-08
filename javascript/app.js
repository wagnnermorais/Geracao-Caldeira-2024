let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.floor(Math.random() * numeroMaximo + 1));
let tentativas = 1;
let chute;

while (chute != numeroSecreto) {
  chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
  if (chute == numeroSecreto) {
    alert("Você descobriu o número secreto " + numeroSecreto);
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++;
  }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
  `Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`
);
