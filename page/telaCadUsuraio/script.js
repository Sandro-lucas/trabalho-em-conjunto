function registrar() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    // Simples lógica para registrar o usuário (armazenamento em um banco de dados seguro em um ambiente de produção)
    alert('Usuário registrado com sucesso!');

    // Redirecionar para a página de login após o registro
    window.location.href = 'login.html';
  }

  
