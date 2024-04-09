<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- ! ICONA PAGINA -->
    <link rel="icon" type="svg" href="./assets/img/codexLogo.svg">
    <!-- ! TITOLO PAGINA -->
    <title>Codex - Home</title>
    <!-- * BOOTSTRAP -->
    <!-- ! STILE -->
    <link rel="stylesheet" href="./assets/scss/index.min.css">
    <!-- ? ICONS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <!-- ? JS COMPLETO -->
    <script defer src="../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <!-- * FINE BOOTSTRAP -->
    <!-- ! SCRYPT TEMA  -->
    <script defer src="js/color-modes.js"></script>
    <!-- ! SCRYPT -->
    <script defer src="js/btn.js"></script><!--* BOTTONI -->
    <script defer src="js/carosello.js"></script><!--* CAROSELLO -->
    <script defer src="js/contenuto.js"></script><!-- * BREADCRUMB E CARD HOVER-->
    <script src="js/navbar.js" defer></script>
    <script src="js/sidebar.js" defer></script>
</head>

<body style="overflow: hidden;">

    <div class="container-fluid">
        <div class="row d-flex flex-column-reverse-md flex-nowrap
             align-items-stretch justify-content-start fixed-top w-100 h-100 m-0 z-1">
            <?php
            //! SIDE-BAR
            include './assets/components/sidebar.php'
            //! FINE SIDE-BAR
            ?>

            <div class="col-md col-md-11 contenuto contMaxi p-0 overflow-auto">
                <?php
                //! NAV-BAR
                include './assets/components/navbar.php'
                //! FINE NAV-BAR
                ?>

                <!-- ! CONTENUTO -->
                <main class="mt-4">
                    <!-- ================================================================================ -->
                    <div class="position-relative overflow-hidden imgElemento pt-5 p-3 d-flex align-items-end text-center bg-body-tertiary"
                        style="background-image: url(assets/img/mummiscene.jpg);">
                        <div class="col-md-6 mx-auto my-2 position-relative z-1 d-flex flex-column align-items-start">
                            <img src="assets/img/la mummia.png" class="img-fluid imgSpeciale mb-3" alt="titolo" width="">
                            <div class="d-flex gap-3 justify-content-between w-100 lead fw-normal">

                                <div>
                                    <button class="btn btn-primary" href="#">
                                        <i class="bi bi-play-circle"></i>
                                        Riproduci</button>
                                    <button class="btn btn-primary" href="#">
                                        <i class="bi bi-info-circle"></i>
                                        Info</button>
                                </div>
                                <div>
                                    <button class="btn btn-secondary rounded-circle audiobtn" href="#">
                                        <i class="bi bi-volume-mute d-none"></i>
                                        <i class="bi bi-volume-up"></i>
                                </div>
                            </div>
                        </div>
                        <div class="overlay position-absolute top-0 start-0 w-100 h-100" id="locandina"></div>
                    </div>

                    <!-- ? CARDS -->
                    <div class="d-flex flex-column mt-5 mb-5 p-1 gap-2">
                        <!-- ! TUTTI -->
                        <div class="container-fluid">
                            <!-- ? BREAD CRUMB SCOPRI -->
                            <nav aria-label="breadcrumb" class="ms-1">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item active">Home</li>
                                    <li class="breadcrumb-item" aria-current="page">
                                        <a href="#" class="icon-link linkBread icon-link-hover link-offset-2
                                           link-offset-3-hover link-underline link-underline-opacity-0">
                                            Tutti

                                            <span class="scopri d-none ms-2">Scopri di più
                                                <i class="bi bi-arrow-right d-flex iconaBread ms-1"></i></span>
                                        </a>
                                    </li>
                                </ol>
                            </nav>
                            <!-- ?/ FINE BREAD CRUMB SCOPRI -->
                            <!-- ! CARDS -->
                            <div class="overflow-x-clip carousel bg-body-tertiary contCard rounded-3 py-4"
                                data-bs-ride="carousel">
                                <div
                                    class="d-flex flex-row justify-content-start align-items-start gap-5 px-md-5 px-4 film">
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 h-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 h-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 h-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 h-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 h-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 h-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 h-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 h-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 h-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 h-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 h-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                </div>
                                <button class="carousel-control-prev prevBtn 
                                    justify-content-center bg-body-secondary rounded-start" type="button"
                                    data-bs-slide="prev">
                                    <span class="bi bi-arrow-left  px-2"></span>
                                </button>
                                <button class="carousel-control-next nextBtn 
                                    justify-content-center  bg-body-secondary rounded-end" type="button"
                                    data-bs-slide="next">
                                    <span class="bi bi-arrow-right  px-2"></span>
                                </button>
                            </div>
                            <!-- ! FINE CARDS -->
                        </div>
                        <!-- ! FILM -->
                        <div class="container-fluid">
                            <!-- ? BREAD CRUMB SCOPRI -->
                            <nav aria-label="breadcrumb" class="ms-1">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item active">Home</li>
                                    <li class="breadcrumb-item" aria-current="page">
                                        <a href="#" class="icon-link linkBread icon-link-hover link-offset-2
                                           link-offset-3-hover link-underline link-underline-opacity-0">
                                            Film
                                            <span class="scopri d-none ms-2">Scopri di più
                                                <i class="bi bi-arrow-right d-flex iconaBread ms-1"></i></span>
                                        </a>
                                    </li>
                                </ol>
                            </nav>
                            <!-- ?/ FINE BREAD CRUMB SCOPRI -->
                            <!-- ! CARDS -->
                            <div class="overflow-x-clip carousel bg-body-tertiary contCard rounded-3 py-4"
                                data-bs-ride="carousel">
                                <div
                                    class="d-flex flex-row justify-content-start align-items-start gap-5 px-md-5 px-4 film">
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 h-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 h-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 h-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 h-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 h-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 h-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 h-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 h-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 h-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 h-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 h-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                </div>
                                <button class="carousel-control-prev prevBtn 
                                    justify-content-center bg-body-secondary rounded-start" type="button"
                                    data-bs-slide="prev">
                                    <span class="bi bi-arrow-left  px-2"></span>
                                </button>
                                <button class="carousel-control-next nextBtn 
                                    justify-content-center  bg-body-secondary rounded-end" type="button"
                                    data-bs-slide="next">
                                    <span class="bi bi-arrow-right  px-2"></span>
                                </button>
                            </div>
                            <!-- ! FINE CARDS -->
                        </div>

                        <!-- ! SERIE TV -->
                        <div class="container-fluid">
                            <!-- ? BREAD CRUMB SCOPRI -->
                            <nav aria-label="breadcrumb" class="ms-1">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item active">Home</li>
                                    <li class="breadcrumb-item" aria-current="page">
                                        <a href="#" class="icon-link linkBread icon-link-hover link-offset-2
                                           link-offset-3-hover link-underline link-underline-opacity-0">
                                            Serie Tv

                                            <span class="scopri d-none ms-2">Scopri di più
                                                <i class="bi bi-arrow-right d-flex iconaBread ms-1"></i></span>
                                        </a>
                                    </li>
                                </ol>
                            </nav>
                            <!-- ?/ FINE BREAD CRUMB SCOPRI -->
                            <!-- ! CARDS -->
                            <div class="overflow-x-clip carousel bg-body-tertiary contCard rounded-3 py-4"
                                data-bs-ride="carousel">
                                <div
                                    class="d-flex flex-row justify-content-start align-items-start gap-5 px-md-5 px-4 film">
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 h-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 h-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 h-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 h-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 h-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 h-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 h-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 h-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 h-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 h-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                    <!-- * CARD -->
                                    <div class="col movie-card colCard">
                                        <div class="card border">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid rounded-2" alt="place">
                                        </div>
                                        <div class="cardSpecial">
                                            <img src="https://placehold.co/90x60"
                                                class="card-img-top img-fluid bg-body-secondary" alt="place">
                                            <img src="https://placehold.co/90x30/red/white"
                                                class="img-fluid opacity-0 titoloCards position-absolute z-1"
                                                alt="titolo" width="30%">
                                            <div class="overlay position-absolute top-0 start-0 w-100 h-100 locandina2">
                                            </div>
                                            <div class="d-none cardsInfo bg-body-secondary">
                                                <div class="card-body bg-body-secondary p-1">
                                                    <p class="card-text px-2">
                                                        info rapide
                                                    </p>
                                                </div>
                                                <div class="card-footer bg-body-secondary">
                                                    <small class="text-body-secondary">
                                                        <div class="hstack gap-1">
                                                            <div class="px-1">
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-play-circle"></i></a>
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-plus-circle"></button>
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                            </div>
                                                            <div class="px-1">
                                                            </div>
                                                            <div class="p-1 ms-auto">
                                                                <button href="#"
                                                                    class="btn py-0 bi bi-download"></button>
                                                                <a href="#" class="btn py-0"><i
                                                                        class="bi bi-info-circle"></i></a>
                                                            </div>
                                                        </div>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- */ FINE CARD -->
                                </div>
                                <button class="carousel-control-prev prevBtn 
                                    justify-content-center bg-body-secondary rounded-start" type="button"
                                    data-bs-slide="prev">
                                    <span class="bi bi-arrow-left  px-2"></span>
                                </button>
                                <button class="carousel-control-next nextBtn 
                                    justify-content-center  bg-body-secondary rounded-end" type="button"
                                    data-bs-slide="next">
                                    <span class="bi bi-arrow-right  px-2"></span>
                                </button>
                            </div>
                            <!-- ! FINE CARDS -->
                        </div>
                    </div>

                </main>
                <!-- ! FINE CONTENUTO -->

                <?php
                //! FOOTER
                include './assets/components/footer.php'
                //! FINE FOOTER
                ?>
            </div>
        </div>
    </div>
</body>

</html>