$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        const addNovaImg = $("#addImg").val();
        const novoItem = $('<li style="display: none;"></li>');
        $(`<img src="${addNovaImg}">`).appendTo(novoItem);
        $(`<div class="overlay">
            <a href="${addNovaImg}" target="_blank" title="ver imagem em tamanho real">Ver imagem em tamanho real</a>
        </div>`).appendTo(novoItem);
        $('ul').append(novoItem);
        novoItem.fadeIn();
        $('#addImg').val('');
    });

    $('#Cancelar').click(function(e) {
        $('form').slideUp();
    });
});
