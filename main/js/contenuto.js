// ! ----------------------------------------------------------- SCRYPT BREADCRUMB
let linkElements = document.querySelectorAll('.linkBread');

linkElements.forEach(function (linkElement) {
    let iconaBreads = linkElement.querySelectorAll('.iconaBread');


    iconaBreads.forEach(function (iconaBread) {
        let scopri = iconaBread.parentElement;
        linkElement.addEventListener('mouseenter', function () {
            setTimeout(function(){
                // Sposta l'icona a destra in modo graduale
                // Mostra la scritta "Scopri di più" in modo graduale
                scopri.classList.remove('d-none');
                scopri.classList.add('d-flex');
                scopri.classList.add('align-items-center');
                scopri.style.transition = 'opacity 0.3s ease';
                scopri.style.opacity = '1';
                setTimeout(function () {
                    iconaBread.style.transition = 'transform 0.3s ease-in-out';
                    iconaBread.style.transform = 'translateX(15px)';
    
                }, 100);

            }, 100);
        });

        linkElement.addEventListener('mouseleave', function () {
            // Sposta l'icona a sinistra in modo graduale
            iconaBread.style.transition = 'transform 0.3s ease-in-out';
            iconaBread.style.transform = 'translateX(0)';
            // Nascondi la scritta "Scopri di più" in modo graduale
            scopri.style.transition = 'opacity 0.3s ease';
            scopri.style.opacity = '0';
            // Aggiungi un ritardo prima di nascondere completamente lo scopri
            setTimeout(function () {
                scopri.classList.add('d-none');
                scopri.classList.remove('d-flex');
            }, 300); // Attendi 300ms (corrispondenti alla durata della transizione) prima di nascondere completamente la scritta
        });
    });
});

// ! FINE ------------------------------------------------------ SCRYPT BREADCRUMB

// ! ------------------------------------------------------ SCRYPT CARDS
let main = document.querySelector('main');
let cards = main.querySelectorAll('.card');

cards.forEach(function(card) {
    let colCard = card.parentElement;
    let cardHover = card.nextElementSibling;
    let cardInfo = cardHover.querySelector('.cardsInfo');
    let titoloCard = cardHover.querySelector('.titoloCards');

    let isMouseOverCard = false;
    let closeTimeout;

    let contCard = colCard.parentElement.parentElement;
    let prevBtn = contCard.querySelector('.prevBtn');
    let nextBtn = contCard.querySelector('.nextBtn');

    card.addEventListener('mouseenter', function() {
        isMouseOverCard = true;
        clearTimeout(closeTimeout);
        setTimeout(function(){
            if (isMouseOverCard){
                colCard.classList.add('colCardHover');
                cardInfo.classList.remove('d-none');
                cardHover.classList.remove('d-none');
                titoloCard.classList.remove('opacity-0');
                setTimeout(function() {
                    cardHover.classList.add('hovered');
                    titoloCard.style.zIndex = '0';
                }, 100);
                prevBtn.style.zIndex = '0';
        nextBtn.style.zIndex = '0';
            }
        }, 300); // Aggiungi un ritardo prima di mostrare il cardHover
    });

    card.addEventListener('mouseleave', function() {
        isMouseOverCard = false;
        closeTimeout = setTimeout(function(){
            if (!isMouseOverCard){
                cardHover.classList.remove('hovered');
                titoloCard.classList.add('opacity-0');
                colCard.classList.remove('colCardHover');
                setTimeout(function() {
                    titoloCard.style.zIndex = '0';
                    cardInfo.classList.add('d-none');
                    cardHover.classList.add('d-none');
                }, 0);
                prevBtn.style.zIndex = ''; // Rimuovi lo z-index
            nextBtn.style.zIndex = ''; // Rimuovi lo z-index
            }
        }, 200); // Aggiungi un ritardo prima di nascondere il cardHover
    });

    cardHover.addEventListener('mouseenter', function() {
        isMouseOverCard = true;
        clearTimeout(closeTimeout);
        prevBtn.style.zIndex = '0';
        nextBtn.style.zIndex = '0';
    });

    cardHover.addEventListener('mouseleave', function() {
        isMouseOverCard = false;
        closeTimeout = setTimeout(function() {
            if (!isMouseOverCard){
                cardHover.classList.remove('hovered');
                titoloCard.classList.add('opacity-0');
                colCard.classList.remove('colCardHover');
                setTimeout(function() {
                    titoloCard.style.zIndex = '0';
                    cardInfo.classList.add('d-none');
                    cardHover.classList.add('d-none');
                }, 0);
                prevBtn.style.zIndex = ''; // Rimuovi lo z-index
            nextBtn.style.zIndex = ''; // Rimuovi lo z-index
            }
        }, 200); // Aggiungi un ritardo prima di nascondere il cardHover
    });
});

// ! FINE ------------------------------------------------------ SCRYPT CARDS
