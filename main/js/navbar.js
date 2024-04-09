let btnCerca = document.querySelector('.btnCerca');
let form = btnCerca.previousElementSibling;

// Aggiungi un listener per il click sulla finestra
window.addEventListener('click', function(event) {
    // Verifica se il click è avvenuto all'interno del form o del pulsante
    const isClickedInsideForm = form.contains(event.target);
    const isClickedInsideButton = event.target === btnCerca;

    // Se il click non è avvenuto né nel form né nel pulsante, nascondi il form
    if (!isClickedInsideForm && !isClickedInsideButton) {
        form.classList.add('d-none');
        btnCerca.classList.remove('d-none');
    }
});


btnCerca.addEventListener('click',function(event){
    event.preventDefault();
    if (form.classList.contains('d-none')){
        form.classList.remove('d-none');
        form.classList.add('d-flex');
        btnCerca.classList.add('d-none');
    }
});