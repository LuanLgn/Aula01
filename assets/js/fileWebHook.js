let counter = 0;
let intervalId;

// Função para iniciar o contador automático
function startCounter() {
  intervalId = setInterval(function () {
    counter++;
    document.getElementById("counter").textContent = counter;

    if (counter === 10) {
      clearInterval(intervalId); // Para o contador automático
      document.getElementById("webhookMsg").style.display = "block"; // Exibe a mensagem do webhook
      counter = 0;
      alert("Webhook ativado");
    }
  }, 1000); // Incrementa o contador a cada segundo
}

document.getElementById("btnMais").addEventListener("click", function () {
  startCounter(); // Inicia o contador automático quando o botão é clicado
});

function mostrarConteudoHTML() {
  // Exibe o conteúdo HTML
  document.getElementById("conteudoHTML").style.display = "block";
}
