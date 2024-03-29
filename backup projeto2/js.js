
        const form = document.getElementById("form1");
        const imgAprovado = `<img src="./images/aprovado.png" alt="carinha feliz" ></td>`;
        const imgReprovado = `<img src="./images/reprovado.png" alt="carinha triste" ></td>`;
        const atividades = [];
        const notas = [];
        const spanAprovado = `<span class = "resultado aprovado">aprovado </span>`;
        const spanReprovado = `<span class = "resultado reprovado">reprovado </span>`;
        const notaMinima = parseFloat(prompt("Digite a nota mínima"));

        let linhas = '';

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            adicionaLinha();
            atualizaTabela();
            atualizaMediaFinal();
        });

        function adicionaLinha() {   
            const inputNomeAtividade = document.getElementById("nomeAtividade");
            const inputNotaAtividade = document.getElementById("notaAtividade");

            if (atividades.includes(inputNomeAtividade.value)) {
                alert (`A atividade: ${inputNomeAtividade.value} já foi inserida.`);
            } else {
                atividades.push(inputNomeAtividade.value);
                notas.push(parseFloat(inputNotaAtividade.value)); 

                let linha = "<tr>";
                linha += "<td>" + inputNomeAtividade.value + "</td>";
                linha += "<td>" + inputNotaAtividade.value + "</td>";
                linha += "<td>" + (inputNotaAtividade.value >= 7 ? 'Aprovado' : 'Reprovado') + "</td>";
                linha += "</tr>";

                linhas += linha;
            }
            inputNomeAtividade.value = '';
            inputNotaAtividade.value = '';
        }

        function atualizaTabela() {
            document.getElementById('tabela-corpo').innerHTML = linhas;
        }

        function atualizaMediaFinal() {
            const mediaFinal = calculaMediaFinal();

            document.getElementById('media-final-valor').innerHTML = mediaFinal;
            document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
        }

        function calculaMediaFinal() {
            let somaDasNotas = 0;

            for (let i = 0; i < notas.length; i++) {
                somaDasNotas += notas[i];
            }

            return somaDasNotas / notas.length;
        }
