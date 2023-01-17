var botao = document.getElementById('imagClose');
var sofa = document.getElementById('sofa')

function mudarImagem() {

    botao.classList.toggle('closebg');

    if (botao.classList.contains('closebg')) {
        sofa.setAttribute('src', "assets/Sofa360.gif");
    } else {
        sofa.setAttribute('src', 'assets/sofastatic.png');
    }
}