document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('formPreCadastro').addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

      try {
        const response = await fetch('http://localhost:3000/usuarios', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          alert('Cadastro realizado com sucesso!');
          e.target.reset();
        } else {
          alert('Erro ao cadastrar usuário.');
        }
      } catch (err) {
        console.error(err);
        alert('Erro na conexão com o servidor.');
      }
    });
  });