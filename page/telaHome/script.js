function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var loginResult = document.getElementById("loginResult");

    // Exemplo simples de validação (usuário: "user", senha: "password")
    if (username === "lucas" && password === "123456") {
        loginResult.textContent = "Login successful!";
        loginResult.style.color = "#4caf50";

        // Redireciona para a segunda tela após o login bem-sucedido
        window.location.href = "../telaLogin/index.html";
    } else {
        loginResult.textContent = "Invalid username or password.";
        loginResult.style.color = "#f44336";
    }
}
