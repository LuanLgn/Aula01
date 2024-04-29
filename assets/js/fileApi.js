document.getElementById("searchBtn").addEventListener("click", function () {
  // Obtém o valor do CEP inserido pelo usuário
  var cep = document.getElementById("cepInput").value;
  // Monta a URL da API com o CEP fornecido
  var apiUrl = "https://brasilapi.com.br/api/cep/v1/" + cep;

  // Faz uma requisição à API usando fetch
  fetch(apiUrl)
    // Converte a resposta para JSON
    .then(function (response) {
      return response.json();
    })
    // Chama a função displayCepInfo com os dados retornados pela API
    .then(function (data) {
      displayCepInfo(data);
    })

    .catch(function (error) {
      console.log("Erro ao buscar CEP:", error);
    });
});

// Função para exibir as informações do CEP na página
function displayCepInfo(data) {
  var cepInfoDiv = document.getElementById("cepInfo");

  cepInfoDiv.innerHTML = "";

  if (data.code) {
    cepInfoDiv.innerHTML = "<p>" + data.message + "</p>";
    return;
  }

  // Se não houver erro, extrai as informações do CEP retornadas pela API
  let city = data.city;
  let state = data.state;
  let neighborhood = data.neighborhood;
  let street = data.street;

  // Cria um elemento div para armazenar as informações do CEP
  let cepInfo = document.createElement("div");
  // Adiciona as informações do CEP ao elemento div criado
  cepInfo.innerHTML =
    "<p><strong>Cidade:</strong> " +
    city +
    "</p>" +
    "<p><strong>Estado:</strong> " +
    state +
    "</p>" +
    "<p><strong>Bairro:</strong> " +
    neighborhood +
    "</p>" +
    "<p><strong>Rua:</strong> " +
    street +
    "</p>";

  // Adiciona o elemento div com as informações do CEP à página
  cepInfoDiv.appendChild(cepInfo);
}

// Função para exibir o conteúdo HTML na página
function mostrarConteudoHTML() {
  // Exibe o conteúdo HTML definido na página
  document.getElementById("conteudoHTML").style.display = "block";
}
