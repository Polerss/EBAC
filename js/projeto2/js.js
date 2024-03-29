const formContato = document.getElementById("formContato");
let contatos = [];

formContato.addEventListener('submit', function(e) {
    e.preventDefault();
    cadastrarContato();
});

function cadastrarContato() {
    const inputNomeContato = document.getElementById("nomeContato");
    const inputTelefoneContato = document.getElementById("telefoneContato");

    const contato = {
        nome: inputNomeContato.value,
        telefone: inputTelefoneContato.value
    };

    contatos.push(contato);
    inputNomeContato.value = '';
    inputTelefoneContato.value = '';

    atualizaTabelaContatos();
}

function atualizaTabelaContatos() {
    const tabelaContatos = document.getElementById('contatos-tabela-corpo');
    tabelaContatos.innerHTML = '';

    contatos.forEach(contato => {
        const linha = `<tr><td>${contato.nome}</td><td>${contato.telefone}</td></tr>`;
        tabelaContatos.innerHTML += linha;
    });
}