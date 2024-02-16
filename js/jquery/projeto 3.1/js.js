$(document).ready(function() {
    $('.carousel-imagem').slick({
        autoplay: true
    });

    $('.menuHamburguer').click(function(){
        $('nav').slideToggle();
    });
    
    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true 
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 10 // por exemplo, especifica um comprimento mínimo para o telefone
            }
        },
        messages: {
            telefone: {
                minlength: "Por favor, insira um número de telefone válido"
            }
        }
    });

    // Adicionando lógica para verificar quantos campos não foram preenchidos corretamente
    $('form').submit(function(e) {
        var form = $(this);
        var numCamposNaoPreenchidos = form.find(':input[required]').filter(function() {
            return !this.value;
        }).length;

        if (numCamposNaoPreenchidos > 0) {
            e.preventDefault();
            alert("Por favor, preencha todos os campos obrigatórios.");
        }
    });

    // Adicionando logs para depurar a captura do nome do veículo
    $('.listaVeiculos button').click(function(){
        const destino = $('#contato'); 
        const nomeVeiculo = $(this).parent().find('h3').text();
        console.log("Nome do veículo:", nomeVeiculo);
        $('#veiculo-interesse').val(nomeVeiculo);
        $('html').animate(
            {'scrollTop':destino.offset().top},1000
        );
    });
});
