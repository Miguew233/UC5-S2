function validarFormulario(event) {
    event.preventDefault();

    const nome = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const feedbackDiv = document.getElementById("feedback");
    let valid = true;
    let mensagem = "";

    if (nome.trim() === "") {
        mensagem += "O nome não pode ser vazio.<br>";
        valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
        mensagem += "Por favor, insira um e-mail válido.<br>";
        valid = false;
    }

    if (password.trim() === "") {
        mensagem += "A senha não pode ser vazia.<br>";
        valid = false;
    } else if (password.length < 8) {
        mensagem += "A senha deve ter pelo menos 8 caracteres.<br>";
        valid = false;
    }

    if (valid) {
        mensagem = "Cadastro realizado com sucesso! Redirecionando...";
        feedbackDiv.style.color = "white";
        setTimeout(function () {
            window.location.href = './index.html';
        }, 2000);
    } else {
        feedbackDiv.style.color = "red";
    }

    feedbackDiv.innerHTML = mensagem;
}