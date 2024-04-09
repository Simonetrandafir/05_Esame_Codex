function truncate() {
    let testiTroncati = document.querySelectorAll('.testoSpeciale');
    testiTroncati.forEach(testoTroncato => {
        let btn = testoTroncato.nextElementSibling;
        let btnTesto = btn.querySelector('span');
        if (testoTroncato.classList.contains('text-truncate')) {
            testoTroncato.classList.remove('text-truncate');
            btn.classList.remove('ms-3');
            btnTesto.textContent = 'meno';
        } else {
            testoTroncato.classList.add('text-truncate');
            btnTesto.textContent = 'piu';
            btn.classList.add('ms-3');
        }
    });
}