// ! BOTTONE AUDIO
// Seleziona tutti gli elementi con classe "audiobtn"
let audioButtons = document.querySelectorAll('.audiobtn');
// Aggiungi un gestore di eventi a ciascun bottone
audioButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Seleziona gli elementi <i> associati al bottone cliccato
        let icons = this.querySelectorAll('i');
        // Itera su tutti gli elementi <i>
        icons.forEach(function(icon) {
            // Aggiungi o rimuovi la classe "d-none" a seconda della sua presenza attuale
            if (icon.classList.contains('d-none')) {
                icon.classList.remove('d-none');
            } else {
                icon.classList.add('d-none');
            }
        });
    });
});
// ! FINE BOTTONE AUDIO
