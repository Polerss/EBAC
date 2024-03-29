document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o comportamento padrão de submissão do formulário

    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);

    if (campoB > campoA) {
        exibirMensagem("Formulário válido!", true);
    } else {
        exibirMensagem("Formulário inválido! O número B deve ser maior que o número A.", false);
    }
});

function exibirMensagem(mensagem, isValid) {
    var mensagemElement = document.getElementById("mensagem");
    mensagemElement.textContent = mensagem;
    mensagemElement.className = "message " + (isValid ? "valid" : "invalid");
}