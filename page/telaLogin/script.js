function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simples lógica para redirecionar com base no tipo de usuário
    if (username === 'cliente' && password === 'senhacliente') {
      window.location.href = 'pagina_cliente.html';
    } else if (username === 'admin' && password === 'senhaadmin') {
      window.location.href = 'pagina_admin.html';
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  }