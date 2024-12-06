document.querySelector('#cadArv').addEventListener('click', async function (event) {
  event.preventDefault();

  // Obtém os valores dos campos do formulário usando o seletor de id ou classe e armazena em variáveis
  const nomeCientifico = document.querySelector('#nome-cientifico').value;  // Nome científico da árvore
  const nomePopular = document.querySelector('#nome').value;        // Nome popular da árvore
  const localizacao = document.querySelector('#localizacao').value;        // Localização da árvore
  const altura = document.querySelector('#altura').value;                  // Altura da árvore
  const tipoFolha = document.querySelector('#folha').value;           // Tipo de folha da árvore
  const tipoFruto = document.querySelector('#fruto').value;           // Tipo de fruto da árvore
  if (!nomeCientifico || !nomePopular || !localizacao || !altura || !tipoFolha || !tipoFruto) {
    // Exibe um alerta se algum campo obrigatório não for preenchido
    alert("Por favor, preencha todos os campos obrigatórios.");
    return; // Interrompe a execução da função, não prosseguindo com o cadastro
  }
  // Se todos os campos forem preenchidos, exibe uma mensagem de sucesso
  const res = await fetch('http://192.168.1.92:3000/cadArv/novo', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nomeCientifico: nomeCientifico,
      nomePopular: nomePopular,
      localizacao: localizacao,
      altura: altura,
      tipoFolha: tipoFolha,
      tipoFruto: tipoFruto
    })
  })
  alert('Árvore cadastrada com sucesso! Clique no X para voltar a pagina principal'); 
});


const closeButton = document.querySelector('#xiss')
// // Adiciona um evento de clique ao botão de fechar
closeButton.addEventListener('click', function (event) {
  event.preventDefault();
  // Após esconder o formulário, o usuário é redirecionado para a página 'index.html'

  window.location.href = "../HTML/index.html";
});