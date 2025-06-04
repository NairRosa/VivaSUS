function enviarMensagem() {
  const input = document.getElementById('userInput');
  const texto = input.value.trim();

  if (texto !== '') {
    const corpo = document.querySelector('.chatbox-body');

    // Cria e estiliza a mensagem do usuário
    const blocoMensagem = document.createElement('div');
    blocoMensagem.classList.add('message');

    const msgUser = document.createElement('div');
    msgUser.classList.add('user');
    msgUser.textContent = texto;

    blocoMensagem.appendChild(msgUser);
    corpo.appendChild(blocoMensagem);

    input.value = '';
    corpo.scrollTop = corpo.scrollHeight;

    // Mensagem do bot (simulada)
    setTimeout(() => {
      const blocoBot = document.createElement('div');
      blocoBot.classList.add('message');

      const msgBot = document.createElement('div');
      msgBot.classList.add('bot');
      msgBot.textContent = 'Mensagem recebida! Em breve um profissional responderá.';

      blocoBot.appendChild(msgBot);
      corpo.appendChild(blocoBot);
      corpo.scrollTop = corpo.scrollHeight;
    }, 1000);
  }
}