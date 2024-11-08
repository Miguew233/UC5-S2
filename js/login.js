function validarFormulario(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const feedbackDiv = document.getElementById("feedback");
    let valid = true;
    let mensagem = "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
        mensagem += "Por favor, insira um e-mail válido.<br>";
        valid = false;
    }

    if (password.trim() === "") {
        mensagem += "A senha não pode ser vazia.<br>";
        valid = false;
    }

    if (valid) {
        mensagem = "Login bem-sucedido! Redirecionando...";
        feedbackDiv.style.color = "white";
        setTimeout(function () {
            window.location.href = './index.html';
        }, 2000);
    } else {
        feedbackDiv.style.color = "red";
    }

    feedbackDiv.innerHTML = mensagem;
}

function showPasswordReset() {
    alert("Você será redirecionado para a página de redefinição de senha.");
}