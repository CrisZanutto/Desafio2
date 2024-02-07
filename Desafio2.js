// Função que calcula o nível de um jogador com base nas vitórias e derrotas
function calcularNivel(vitorias, derrotas) {
  // Calculando o saldo de Ranqueadas
  var saldoVitorias = vitorias - derrotas;

  // Determinando o nível com base no saldo de vitórias
  let nivel;

  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  // Mensagem de saída
  console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`);
}

// Substitua os valores de vitórias e derrotas pelos valores desejados
calcularNivel(120, 110); 


