
    // CAROSELLO 
    let contenitori = document.querySelectorAll('.contCard');
    
    contenitori.forEach(contenitore => {
        let carousel = contenitore.querySelector(".film");
        let prevBtn = contenitore.querySelector(".prevBtn");
        let nextBtn = contenitore.querySelector(".nextBtn");
    
        // Numero di card da scorrere
        let numCards = carousel.querySelectorAll(".movie-card").length;
    
        // Larghezza di ogni card
        let cardWidth = carousel.querySelector('.movie-card').offsetWidth;
        let gapCard = 48;
        let totalWidth = cardWidth+gapCard;
    
        // Inizializza l'indice corrente
        let currentIndex = 0;
    
        // Aggiorna la posizione del carosello in base all'indice corrente
        function updateCarousel() {
            let newPosition = -currentIndex * totalWidth;
            carousel.style.transition = "transform 0.5s ease-in-out";
            carousel.style.transform = `translateX(${newPosition}px)`;
        };
    
        // Gestisci clic su pulsante di scorrimento a sinistra
        prevBtn.addEventListener("click", function() {
            currentIndex = (currentIndex === 0) ? numCards - 1 : currentIndex - 1;
            updateCarousel();
        });
    
        // Gestisci clic su pulsante di scorrimento a destra
        nextBtn.addEventListener("click", function() {
            currentIndex = (currentIndex === numCards - 1) ? 0 : currentIndex + 1;
            updateCarousel();
        });
    
        // Inizializza il carosello
        updateCarousel();
        
    });
