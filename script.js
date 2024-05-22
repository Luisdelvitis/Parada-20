document.addEventListener('DOMContentLoaded', (event) => {
    function enviarVoto() {
        const formulario = document.getElementById('formularioVotacao');
        const opcaoSelecionada = formulario.voto.value;

        if (opcaoSelecionada) {
            prompt(`Você votou no canditado (a): ${opcaoSelecionada}, digite -SIM- para confirmar`);
        } else {
            alert('Por favor, selecione uma opção para votar nas eleições 2024.');
        }
    }

    function mudarCorDeFundo(cor) {
        document.body.style.backgroundColor = cor;
    }

    window.enviarVoto = enviarVoto;
    window.mudarCorDeFundo = mudarCorDeFundo;
});
