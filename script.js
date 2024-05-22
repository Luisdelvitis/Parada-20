function submitVote() {
    const form = document.getElementById('votingForm');
    const message = document.getElementById('message');
    const selectedOption = form.vote.value;

    if (selectedOption) {
        message.textContent = `Você votou no candidato (a): ${selectedOption}`;
    } else {
        message.textContent = 'Por favor, selecione uma opção para votar.';
    }
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}
