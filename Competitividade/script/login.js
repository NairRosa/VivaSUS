document.getElementById('formLogin').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  try {
    const res = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert('Login bem-sucedido!');
      window.location.href = 'chat.html'; // Redirecionar para a interface do chat
    } else {
      alert('Email ou senha incorretos.');
    }
  } catch (err) {
    alert('Erro na conexão com o servidor.');
  }
});