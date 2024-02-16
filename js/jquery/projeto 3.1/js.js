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

    $('listaVeiculos button').click(function(){
      const destino = $('#contato')
      
      $('html').animate(
          {'scrollTop':destino.offset().top},
    })
    
});
