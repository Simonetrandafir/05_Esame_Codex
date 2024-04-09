<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- ! ICONA PAGINA -->
    <link rel="icon" type="svg" href="./assets/img/codexLogo.svg">
    <!-- ! TITOLO PAGINA -->
    <title>Codex - Elemento</title>
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
    <script defer src="js/contenuto.js"></script><!-- * BREADCRUMB E CARD HOVER -->
    <script defer src="js/troncaTxt.js"></script><!-- * TRONCA TESTO -->
    <script src="js/navbar.js" defer></script><!-- * NAV BAR -->
    <script src="js/sidebar.js" defer></script><!-- * SIDE BAR -->
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
                <main class="mt-4 d-flex flex-column overflow-auto">
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
                                        <i class="bi bi-plus-circle"></i></button>
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
                    <div class="container-fluid p-0 gap-4 m-0 d-flex flex-column my-4 my-md-5">
                        <div class="container-fluid">
                            <div class="row text-md-center bg-body-tertiary pt-3">
                                <div class="col-md">
                                    <span class="fw-light">Genere:</span> Fantascienza, Avventura, Romance
                                </div>
                                <div class="col-md">
                                    <span class="fw-light">Data di Uscita:</span> 15 maggio 2024
                                </div>
                            </div>
                            <div class="row p-2 gap-3 justify-content-center bg-body-tertiary">
                                <div class=" ">
                                    <span><strong>Trama:</strong></span>
                                    <div class="d-flex flex-row flex-wrap text-justify">
                                        <p class="text-truncate testoSpeciale m-0">In un mondo dominato
                                            dall'intelligenza
                                            artificiale, Kael, un giovane ribelle, si unisce a un gruppo di
                                            rivoluzionari
                                            per scoprire la verità nascosta dietro
                                            il
                                            loro
                                            mondo. Durante la sua lotta per la libertà, incontra Alara, una scienziata
                                            con
                                            un
                                            passato misterioso. Tra di loro scatta una scintilla, ma il loro amore viene
                                            messo
                                            alla prova dalle forze che cercano di distruggere le loro speranze.
                                        </p>
                                        <button class="btn p-0 border-0 ms-3 text-body-emphasis"
                                            onclick="truncate()">leggi
                                            <span>piu</span></button>
                                    </div>
                                </div>
                                <!-- <div class="col-md col-md-4 p-md-0 text-body-secondary">Cast:
                                    <p class="text-body-emphasis">Ezra Thompson, Olivia Chen, Liam Johnson, Isabella Cruz.
                                    </p>
                                </div> -->
                                <div class="row text-body-secondary">
                                    <div class="col p-0">
                                        <span class="fw-light">Lingua:</span><br> italiano, inglese, francese
                                    </div>
                                    <div class="col p-0">
                                        <span class="fw-light">Sottotitoli:</span><br> italiano, inglese, francese,
                                        tedesco,
                                        rumeno
                                    </div>
                                    <div class="col p-0">
                                        <span class="fw-light">Caratteristiche:</span><br> irriverente, arrogante,
                                        leggero
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row p-2 my-3 g-3">
                            <div class="col-12 m-0 p-2">
                                <ul class="nav nav-tabs border-none mb-1" id="myTab" role="tablist">
                                    <li class="nav-item border-none" role="presentation">
                                        <button class="nav-link border-none active" id="home-tab" data-bs-toggle="tab"
                                            data-bs-target="#home-tab-pane" type="button" role="tab"
                                            aria-controls="home-tab-pane" aria-selected="true">Episodi</button>
                                    </li>
                                    <li class="nav-item border-none" role="presentation">
                                        <button class="nav-link border-none" id="profile-tab" data-bs-toggle="tab"
                                            data-bs-target="#profile-tab-pane" type="button" role="tab"
                                            aria-controls="profile-tab-pane" aria-selected="false">Dettagli</button>
                                    </li>
                                    <li class="nav-item border-none" role="presentation">
                                        <button class="nav-link border-none" id="contact-tab" data-bs-toggle="tab"
                                            data-bs-target="#contact-tab-pane" type="button" role="tab"
                                            aria-controls="contact-tab-pane" aria-selected="false">Trailer</button>
                                    </li>
                                </ul>
                                <div class="tab-content " id="myTabContent">
                                    <!--! STAGIONI -->
                                    <div class="tab-pane fade p-1 show active" id="home-tab-pane" role="tabpanel"
                                        aria-labelledby="home-tab" tabindex="0">
                                        <div class="accordion" id="accordionPanelsStayOpenExample">
                                            <div class="accordion-item bg-body-tertiary">
                                                <h2 class="accordion-header">
                                                    <button class="accordion-button bg-body-secondary collapsed p-2"
                                                        type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#panelsStayOpen-collapseOne"
                                                        aria-expanded="false"
                                                        aria-controls="panelsStayOpen-collapseOne">
                                                        <p class="m-0">Stagione: <span> 1</span></p>
                                                    </button>
                                                </h2>
                                                <div id="panelsStayOpen-collapseOne"
                                                    class="accordion-collapse collapse">
                                                    <div class="accordion-body p-0">
                                                        <!--! EPISODI -->
                                                        <div class="container-fluid d-flex flex-column gap-3 p-2">
                                                            <!--=================================================================-->
                                                            <button class="btn bg-body-secondary position-relative">
                                                                <span id="numEpisodio" class="position-absolute badgePersonale text-bg-success
                                                                 translate-middle badge rounded-pill">
                                                                    1
                                                                    <span class="visually-hidden">unread messages</span>
                                                                </span>
                                                                <div
                                                                    class="row d-flex flex-row align-items-center episodi p-2">

                                                                    <div
                                                                        class="col col-10 p-0 d-flex flex-row flex-nowrap gap-1 gap-md-4 align-items-center">
                                                                        <img src="https://placehold.co/600x400/000000/FFFFFF/png"
                                                                            class="imgEpisodi rounded-3" alt="plca">
                                                                        <p class="text-truncate m-0"><strong>Titolo
                                                                                dell'
                                                                                episodio</strong></p>
                                                                    </div>
                                                                    <div class="col col-2 p-0 fw-lighter">
                                                                        <span><strong>22</strong>min</span>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                            <!--=================================================================-->
                                                            <!--=================================================================-->
                                                            <button class="btn bg-body-secondary position-relative">
                                                                <span id="numEpisodio" class="position-absolute badgePersonale text-bg-success
                                                                 translate-middle badge rounded-pill">
                                                                    2
                                                                    <span class="visually-hidden">unread messages</span>
                                                                </span>
                                                                <div
                                                                    class="row d-flex flex-row align-items-center episodi p-2">

                                                                    <div
                                                                        class="col col-10 p-0 d-flex flex-row flex-nowrap gap-1 gap-md-4 align-items-center">
                                                                        <img src="https://placehold.co/600x400/000000/FFFFFF/png"
                                                                            class="imgEpisodi rounded-3" alt="plca">
                                                                        <p class="text-truncate m-0"><strong>Titolo
                                                                                dell'
                                                                                episodio</strong></p>
                                                                    </div>
                                                                    <div class="col col-2 p-0 fw-lighter">
                                                                        <span><strong>22</strong>min</span>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                            <!--=================================================================-->
                                                            <!--=================================================================-->
                                                            <button class="btn bg-body-secondary position-relative">
                                                                <span id="numEpisodio" class="position-absolute badgePersonale text-bg-success
                                                                 translate-middle badge rounded-pill">
                                                                    3
                                                                    <span class="visually-hidden">unread messages</span>
                                                                </span>
                                                                <div
                                                                    class="row d-flex flex-row align-items-center episodi p-2">

                                                                    <div
                                                                        class="col col-10 p-0 d-flex flex-row flex-nowrap gap-1 gap-md-4 align-items-center">
                                                                        <img src="https://placehold.co/600x400/000000/FFFFFF/png"
                                                                            class="imgEpisodi rounded-3" alt="plca">
                                                                        <p class="text-truncate m-0"><strong>Titolo
                                                                                dell'
                                                                                episodio</strong></p>
                                                                    </div>
                                                                    <div class="col col-2 p-0 fw-lighter">
                                                                        <span><strong>22</strong>min</span>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                            <!--=================================================================-->
                                                            <!--=================================================================-->
                                                            <button class="btn bg-body-secondary position-relative">
                                                                <span id="numEpisodio" class="position-absolute badgePersonale text-bg-success
                                                                 translate-middle badge rounded-pill">
                                                                    4
                                                                    <span class="visually-hidden">unread messages</span>
                                                                </span>
                                                                <div
                                                                    class="row d-flex flex-row align-items-center episodi p-2">

                                                                    <div
                                                                        class="col col-10 p-0 d-flex flex-row flex-nowrap gap-1 gap-md-4 align-items-center">
                                                                        <img src="https://placehold.co/600x400/000000/FFFFFF/png"
                                                                            class="imgEpisodi rounded-3" alt="plca">
                                                                        <p class="text-truncate m-0"><strong>Titolo
                                                                                dell'
                                                                                episodio</strong></p>
                                                                    </div>
                                                                    <div class="col col-2 p-0 fw-lighter">
                                                                        <span><strong>22</strong>min</span>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                            <!--=================================================================-->
                                                            <!--=================================================================-->
                                                            <button class="btn bg-body-secondary position-relative">
                                                                <span id="numEpisodio" class="position-absolute badgePersonale text-bg-success
                                                                 translate-middle badge rounded-pill">
                                                                    5
                                                                    <span class="visually-hidden">unread messages</span>
                                                                </span>
                                                                <div
                                                                    class="row d-flex flex-row align-items-center episodi p-2">

                                                                    <div
                                                                        class="col col-10 p-0 d-flex flex-row flex-nowrap gap-1 gap-md-4 align-items-center">
                                                                        <img src="https://placehold.co/600x400/000000/FFFFFF/png"
                                                                            class="imgEpisodi rounded-3" alt="plca">
                                                                        <p class="text-truncate m-0"><strong>Titolo
                                                                                dell'
                                                                                episodio</strong></p>
                                                                    </div>
                                                                    <div class="col col-2 p-0 fw-lighter">
                                                                        <span><strong>22</strong>min</span>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                            <!--=================================================================-->
                                                            <!--=================================================================-->
                                                            <button class="btn bg-body-secondary position-relative">
                                                                <span id="numEpisodio" class="position-absolute badgePersonale text-bg-success
                                                                 translate-middle badge rounded-pill">
                                                                    6
                                                                    <span class="visually-hidden">unread messages</span>
                                                                </span>
                                                                <div
                                                                    class="row d-flex flex-row align-items-center episodi p-2">

                                                                    <div
                                                                        class="col col-10 p-0 d-flex flex-row flex-nowrap gap-1 gap-md-4 align-items-center">
                                                                        <img src="https://placehold.co/600x400/000000/FFFFFF/png"
                                                                            class="imgEpisodi rounded-3" alt="plca">
                                                                        <p class="text-truncate m-0"><strong>Titolo
                                                                                dell'
                                                                                episodio</strong></p>
                                                                    </div>
                                                                    <div class="col col-2 p-0 fw-lighter">
                                                                        <span><strong>22</strong>min</span>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                            <!--=================================================================-->
                                                            <!--=================================================================-->
                                                            <button class="btn bg-body-secondary position-relative">
                                                                <span id="numEpisodio" class="position-absolute badgePersonale text-bg-success
                                                                 translate-middle badge rounded-pill">
                                                                    7
                                                                    <span class="visually-hidden">unread messages</span>
                                                                </span>
                                                                <div
                                                                    class="row d-flex flex-row align-items-center episodi p-2">

                                                                    <div
                                                                        class="col col-10 p-0 d-flex flex-row flex-nowrap gap-1 gap-md-4 align-items-center">
                                                                        <img src="https://placehold.co/600x400/000000/FFFFFF/png"
                                                                            class="imgEpisodi rounded-3" alt="plca">
                                                                        <p class="text-truncate m-0"><strong>Titolo
                                                                                dell'
                                                                                episodio</strong></p>
                                                                    </div>
                                                                    <div class="col col-2 p-0 fw-lighter">
                                                                        <span><strong>22</strong>min</span>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                            <!--=================================================================-->
                                                        </div>
                                                        <!--! FINE EPISODI -->
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-body-tertiary">
                                                <h2 class="accordion-header">
                                                    <button class="accordion-button bg-body-secondary collapsed p-2"
                                                        type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#panelsStayOpen-collapseTwo"
                                                        aria-expanded="false"
                                                        aria-controls="panelsStayOpen-collapseTwo">
                                                        <p class="m-0">Stagione: <span> 2</span></p>
                                                    </button>
                                                </h2>
                                                <div id="panelsStayOpen-collapseTwo"
                                                    class="accordion-collapse collapse">
                                                    <div class="accordion-body p-0">
                                                        <!--! EPISODI -->
                                                        <div class="container d-flex flex-column gap-3 p-2">
                                                            <!--=================================================================-->
                                                            <button class="btn bg-body-secondary position-relative">
                                                                <span id="numEpisodio" class="position-absolute badgePersonale text-bg-success
                                                                 translate-middle badge rounded-pill">
                                                                    1
                                                                    <span class="visually-hidden">unread messages</span>
                                                                </span>
                                                                <div
                                                                    class="row d-flex flex-row align-items-center episodi p-2">

                                                                    <div
                                                                        class="col col-10 p-0 d-flex flex-row flex-nowrap gap-1 gap-md-4 align-items-center">
                                                                        <img src="https://placehold.co/600x400/000000/FFFFFF/png"
                                                                            class="imgEpisodi rounded-3" alt="plca">
                                                                        <p class="text-truncate m-0"><strong>Titolo
                                                                                dell'
                                                                                episodio</strong></p>
                                                                    </div>
                                                                    <div class="col col-2 p-0 fw-lighter">
                                                                        <span><strong>22</strong>min</span>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                            <!--=================================================================-->
                                                            <!--=================================================================-->
                                                            <button class="btn bg-body-secondary position-relative">
                                                                <span id="numEpisodio" class="position-absolute badgePersonale text-bg-success
                                                                 translate-middle badge rounded-pill">
                                                                    2
                                                                    <span class="visually-hidden">unread messages</span>
                                                                </span>
                                                                <div
                                                                    class="row d-flex flex-row align-items-center episodi p-2">

                                                                    <div
                                                                        class="col col-10 p-0 d-flex flex-row flex-nowrap gap-1 gap-md-4 align-items-center">
                                                                        <img src="https://placehold.co/600x400/000000/FFFFFF/png"
                                                                            class="imgEpisodi rounded-3" alt="plca">
                                                                        <p class="text-truncate m-0"><strong>Titolo
                                                                                dell'
                                                                                episodio</strong></p>
                                                                    </div>
                                                                    <div class="col col-2 p-0 fw-lighter">
                                                                        <span><strong>22</strong>min</span>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                            <!--=================================================================-->
                                                            <!--=================================================================-->
                                                            <button class="btn bg-body-secondary position-relative">
                                                                <span id="numEpisodio" class="position-absolute badgePersonale text-bg-success
                                                                 translate-middle badge rounded-pill">
                                                                    3
                                                                    <span class="visually-hidden">unread messages</span>
                                                                </span>
                                                                <div
                                                                    class="row d-flex flex-row align-items-center episodi p-2">

                                                                    <div
                                                                        class="col col-10 p-0 d-flex flex-row flex-nowrap gap-1 gap-md-4 align-items-center">
                                                                        <img src="https://placehold.co/600x400/000000/FFFFFF/png"
                                                                            class="imgEpisodi rounded-3" alt="plca">
                                                                        <p class="text-truncate m-0"><strong>Titolo
                                                                                dell'
                                                                                episodio</strong></p>
                                                                    </div>
                                                                    <div class="col col-2 p-0 fw-lighter">
                                                                        <span><strong>22</strong>min</span>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                            <!--=================================================================-->
                                                            <!--=================================================================-->
                                                            <button class="btn bg-body-secondary position-relative">
                                                                <span id="numEpisodio" class="position-absolute badgePersonale text-bg-success
                                                                 translate-middle badge rounded-pill">
                                                                    4
                                                                    <span class="visually-hidden">unread messages</span>
                                                                </span>
                                                                <div
                                                                    class="row d-flex flex-row align-items-center episodi p-2">

                                                                    <div
                                                                        class="col col-10 p-0 d-flex flex-row flex-nowrap gap-1 gap-md-4 align-items-center">
                                                                        <img src="https://placehold.co/600x400/000000/FFFFFF/png"
                                                                            class="imgEpisodi rounded-3" alt="plca">
                                                                        <p class="text-truncate m-0"><strong>Titolo
                                                                                dell'
                                                                                episodio</strong></p>
                                                                    </div>
                                                                    <div class="col col-2 p-0 fw-lighter">
                                                                        <span><strong>22</strong>min</span>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                            <!--=================================================================-->
                                                            <!--=================================================================-->
                                                            <button class="btn bg-body-secondary position-relative">
                                                                <span id="numEpisodio" class="position-absolute badgePersonale text-bg-success
                                                                 translate-middle badge rounded-pill">
                                                                    5
                                                                    <span class="visually-hidden">unread messages</span>
                                                                </span>
                                                                <div
                                                                    class="row d-flex flex-row align-items-center episodi p-2">

                                                                    <div
                                                                        class="col col-10 p-0 d-flex flex-row flex-nowrap gap-1 gap-md-4 align-items-center">
                                                                        <img src="https://placehold.co/600x400/000000/FFFFFF/png"
                                                                            class="imgEpisodi rounded-3" alt="plca">
                                                                        <p class="text-truncate m-0"><strong>Titolo
                                                                                dell'
                                                                                episodio</strong></p>
                                                                    </div>
                                                                    <div class="col col-2 p-0 fw-lighter">
                                                                        <span><strong>22</strong>min</span>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                            <!--=================================================================-->
                                                            <!--=================================================================-->
                                                            <button class="btn bg-body-secondary position-relative">
                                                                <span id="numEpisodio" class="position-absolute badgePersonale text-bg-success
                                                                 translate-middle badge rounded-pill">
                                                                    6
                                                                    <span class="visually-hidden">unread messages</span>
                                                                </span>
                                                                <div
                                                                    class="row d-flex flex-row align-items-center episodi p-2">

                                                                    <div
                                                                        class="col col-10 p-0 d-flex flex-row flex-nowrap gap-1 gap-md-4 align-items-center">
                                                                        <img src="https://placehold.co/600x400/000000/FFFFFF/png"
                                                                            class="imgEpisodi rounded-3" alt="plca">
                                                                        <p class="text-truncate m-0"><strong>Titolo
                                                                                dell'
                                                                                episodio</strong></p>
                                                                    </div>
                                                                    <div class="col col-2 p-0 fw-lighter">
                                                                        <span><strong>22</strong>min</span>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                            <!--=================================================================-->
                                                            <!--=================================================================-->
                                                            <button class="btn bg-body-secondary position-relative">
                                                                <span id="numEpisodio" class="position-absolute badgePersonale text-bg-success
                                                                 translate-middle badge rounded-pill">
                                                                    7
                                                                    <span class="visually-hidden">unread messages</span>
                                                                </span>
                                                                <div
                                                                    class="row d-flex flex-row align-items-center episodi p-2">

                                                                    <div
                                                                        class="col col-10 p-0 d-flex flex-row flex-nowrap gap-1 gap-md-4 align-items-center">
                                                                        <img src="https://placehold.co/600x400/000000/FFFFFF/png"
                                                                            class="imgEpisodi rounded-3" alt="plca">
                                                                        <p class="text-truncate m-0"><strong>Titolo
                                                                                dell'
                                                                                episodio</strong></p>
                                                                    </div>
                                                                    <div class="col col-2 p-0 fw-lighter">
                                                                        <span><strong>22</strong>min</span>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                            <!--=================================================================-->
                                                        </div>
                                                        <!--! FINE EPISODI -->
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item bg-body-tertiary">
                                                <h2 class="accordion-header">
                                                    <button class="accordion-button bg-body-secondary collapsed p-2"
                                                        type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#panelsStayOpen-collapseThree"
                                                        aria-expanded="false"
                                                        aria-controls="panelsStayOpen-collapseThree">
                                                        <p class="m-0">Stagione: <span> 3</span></p>
                                                    </button>
                                                </h2>
                                                <div id="panelsStayOpen-collapseThree"
                                                    class="accordion-collapse collapse">
                                                    <div class="accordion-body p-0">
                                                        <!--! EPISODI -->
                                                        <div class="container d-flex flex-column gap-3 p-2">
                                                            <!--=================================================================-->
                                                            <button class="btn bg-body-secondary position-relative">
                                                                <span id="numEpisodio" class="position-absolute badgePersonale text-bg-success
                                                                 translate-middle badge rounded-pill">
                                                                    1
                                                                    <span class="visually-hidden">unread messages</span>
                                                                </span>
                                                                <div
                                                                    class="row d-flex flex-row align-items-center episodi p-2">

                                                                    <div
                                                                        class="col col-10 p-0 d-flex flex-row flex-nowrap gap-1 gap-md-4 align-items-center">
                                                                        <img src="https://placehold.co/600x400/000000/FFFFFF/png"
                                                                            class="imgEpisodi rounded-3" alt="plca">
                                                                        <p class="text-truncate m-0"><strong>Titolo
                                                                                dell'
                                                                                episodio</strong></p>
                                                                    </div>
                                                                    <div class="col col-2 p-0 fw-lighter">
                                                                        <span><strong>22</strong>min</span>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                            <!--=================================================================-->
                                                            <!--=================================================================-->
                                                            <button class="btn bg-body-secondary position-relative">
                                                                <span id="numEpisodio" class="position-absolute badgePersonale text-bg-success
                                                                 translate-middle badge rounded-pill">
                                                                    2
                                                                    <span class="visually-hidden">unread messages</span>
                                                                </span>
                                                                <div
                                                                    class="row d-flex flex-row align-items-center episodi p-2">

                                                                    <div
                                                                        class="col col-10 p-0 d-flex flex-row flex-nowrap gap-1 gap-md-4 align-items-center">
                                                                        <img src="https://placehold.co/600x400/000000/FFFFFF/png"
                                                                            class="imgEpisodi rounded-3" alt="plca">
                                                                        <p class="text-truncate m-0"><strong>Titolo
                                                                                dell'
                                                                                episodio</strong></p>
                                                                    </div>
                                                                    <div class="col col-2 p-0 fw-lighter">
                                                                        <span><strong>22</strong>min</span>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                            <!--=================================================================-->
                                                            <!--=================================================================-->
                                                            <button class="btn bg-body-secondary position-relative">
                                                                <span id="numEpisodio" class="position-absolute badgePersonale text-bg-success
                                                                 translate-middle badge rounded-pill">
                                                                    3
                                                                    <span class="visually-hidden">unread messages</span>
                                                                </span>
                                                                <div
                                                                    class="row d-flex flex-row align-items-center episodi p-2">

                                                                    <div
                                                                        class="col col-10 p-0 d-flex flex-row flex-nowrap gap-1 gap-md-4 align-items-center">
                                                                        <img src="https://placehold.co/600x400/000000/FFFFFF/png"
                                                                            class="imgEpisodi rounded-3" alt="plca">
                                                                        <p class="text-truncate m-0"><strong>Titolo
                                                                                dell'
                                                                                episodio</strong></p>
                                                                    </div>
                                                                    <div class="col col-2 p-0 fw-lighter">
                                                                        <span><strong>22</strong>min</span>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                            <!--=================================================================-->
                                                            <!--=================================================================-->
                                                            <button class="btn bg-body-secondary position-relative">
                                                                <span id="numEpisodio" class="position-absolute badgePersonale text-bg-success
                                                                 translate-middle badge rounded-pill">
                                                                    4
                                                                    <span class="visually-hidden">unread messages</span>
                                                                </span>
                                                                <div
                                                                    class="row d-flex flex-row align-items-center episodi p-2">

                                                                    <div
                                                                        class="col col-10 p-0 d-flex flex-row flex-nowrap gap-1 gap-md-4 align-items-center">
                                                                        <img src="https://placehold.co/600x400/000000/FFFFFF/png"
                                                                            class="imgEpisodi rounded-3" alt="plca">
                                                                        <p class="text-truncate m-0"><strong>Titolo
                                                                                dell'
                                                                                episodio</strong></p>
                                                                    </div>
                                                                    <div class="col col-2 p-0 fw-lighter">
                                                                        <span><strong>22</strong>min</span>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                            <!--=================================================================-->
                                                            <!--=================================================================-->
                                                            <button class="btn bg-body-secondary position-relative">
                                                                <span id="numEpisodio" class="position-absolute badgePersonale text-bg-success
                                                                 translate-middle badge rounded-pill">
                                                                    5
                                                                    <span class="visually-hidden">unread messages</span>
                                                                </span>
                                                                <div
                                                                    class="row d-flex flex-row align-items-center episodi p-2">

                                                                    <div
                                                                        class="col col-10 p-0 d-flex flex-row flex-nowrap gap-1 gap-md-4 align-items-center">
                                                                        <img src="https://placehold.co/600x400/000000/FFFFFF/png"
                                                                            class="imgEpisodi rounded-3" alt="plca">
                                                                        <p class="text-truncate m-0"><strong>Titolo
                                                                                dell'
                                                                                episodio</strong></p>
                                                                    </div>
                                                                    <div class="col col-2 p-0 fw-lighter">
                                                                        <span><strong>22</strong>min</span>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                            <!--=================================================================-->
                                                            <!--=================================================================-->
                                                            <button class="btn bg-body-secondary position-relative">
                                                                <span id="numEpisodio" class="position-absolute badgePersonale text-bg-success
                                                                 translate-middle badge rounded-pill">
                                                                    6
                                                                    <span class="visually-hidden">unread messages</span>
                                                                </span>
                                                                <div
                                                                    class="row d-flex flex-row align-items-center episodi p-2">

                                                                    <div
                                                                        class="col col-10 p-0 d-flex flex-row flex-nowrap gap-1 gap-md-4 align-items-center">
                                                                        <img src="https://placehold.co/600x400/000000/FFFFFF/png"
                                                                            class="imgEpisodi rounded-3" alt="plca">
                                                                        <p class="text-truncate m-0"><strong>Titolo
                                                                                dell'
                                                                                episodio</strong></p>
                                                                    </div>
                                                                    <div class="col col-2 p-0 fw-lighter">
                                                                        <span><strong>22</strong>min</span>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                            <!--=================================================================-->
                                                            <!--=================================================================-->
                                                            <button class="btn bg-body-secondary position-relative">
                                                                <span id="numEpisodio" class="position-absolute badgePersonale text-bg-success
                                                                 translate-middle badge rounded-pill">
                                                                    7
                                                                    <span class="visually-hidden">unread messages</span>
                                                                </span>
                                                                <div
                                                                    class="row d-flex flex-row align-items-center episodi p-2">

                                                                    <div
                                                                        class="col col-10 p-0 d-flex flex-row flex-nowrap gap-1 gap-md-4 align-items-center">
                                                                        <img src="https://placehold.co/600x400/000000/FFFFFF/png"
                                                                            class="imgEpisodi rounded-3" alt="plca">
                                                                        <p class="text-truncate m-0"><strong>Titolo
                                                                                dell'
                                                                                episodio</strong></p>
                                                                    </div>
                                                                    <div class="col col-2 p-0 fw-lighter">
                                                                        <span><strong>22</strong>min</span>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                            <!--=================================================================-->
                                                        </div>
                                                        <!--! FINE EPISODI -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--! FINE EPISODI -->
                                    <!--! INFO -->
                                    <div class="tab-pane fade p-3" id="profile-tab-pane" role="tabpanel"
                                        aria-labelledby="profile-tab" tabindex="0">
                                        <h4>Second heading</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet dict
                                            um
                                            odio, at placerat neque
                                            vehicula a. Vivamus dictum hendrerit lobortis. Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Sed
                                            malesuada venenatis urna, a laoreet odio efficitur quis. Aenean ultrices
                                            sagittis dui, tempus congue
                                            lectus
                                            volutpat quis. Nulla in risus vitae leo dapibus rhoncus non eu neque. Duis
                                            felis
                                            ante, vehicula non
                                            pulvinar
                                            at, condimentum non mi. Quisque ut dignissim lectus, nec tristique nunc.
                                            Donec
                                            rhoncus diam non tellus
                                            pretium
                                            lobortis. Mauris scelerisque ex et rhoncus egestas. Proin molestie, velit id
                                            tempor commodo, tellus est
                                            consectetur sem, eget placerat ligula justo nec est. Cras rutrum diam ac
                                            vestibulum viverra. Integer
                                            commodo
                                            nulla eu fermentum pellentesque. Suspendisse accumsan, nunc sit amet
                                            porttitor
                                            dictum, mi metus varius
                                            eros,
                                            ut efficitur quam nisi sit amet velit. Vestibulum ante ipsum primis in
                                            faucibus
                                            orci luctus et ultrices
                                            posuere cubilia curae;</p>
                                    </div>
                                    <!--! FINE INFO -->
                                    <!--! CORRELATI -->
                                    <div class="tab-pane fade p-3" id="contact-tab-pane" role="tabpanel"
                                        aria-labelledby="contact-tab" tabindex="0">
                                        <h4>Third heading</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet dict
                                            um
                                            odio, at placerat neque
                                            vehicula a. Vivamus dictum hendrerit lobortis. Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Sed
                                            malesuada venenatis urna, a laoreet odio efficitur quis. Aenean ultrices
                                            sagittis dui, tempus congue
                                            lectus
                                            volutpat quis. Nulla in risus vitae leo dapibus rhoncus non eu neque. Duis
                                            felis
                                            ante, vehicula non
                                            pulvinar
                                            at, condimentum non mi. Quisque ut dignissim lectus, nec tristique nunc.
                                            Donec
                                            rhoncus diam non tellus
                                            pretium
                                            lobortis. Mauris scelerisque ex et rhoncus egestas. Proin molestie, velit id
                                            tempor commodo, tellus est
                                            consectetur sem, eget placerat ligula justo nec est. Cras rutrum diam ac
                                            vestibulum viverra. Integer
                                            commodo
                                            nulla eu fermentum pellentesque. Suspendisse accumsan, nunc sit amet
                                            porttitor
                                            dictum, mi metus varius
                                            eros,
                                            ut efficitur quam nisi sit amet velit. Vestibulum ante ipsum primis in
                                            faucibus
                                            orci luctus et ultrices
                                            posuere cubilia curae;</p>
                                    </div>
                                    <!--! FINE CORRELATI -->
                                    <div class="tab-pane fade p-3" id="disabled-tab-pane" role="tabpanel"
                                        aria-labelledby="disabled-tab" tabindex="0">
                                        <h4>Fourth heading</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet dict
                                            um
                                            odio, at placerat neque
                                            vehicula a. Vivamus dictum hendrerit lobortis. Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Sed
                                            malesuada venenatis urna, a laoreet odio efficitur quis. Aenean ultrices
                                            sagittis dui, tempus congue
                                            lectus
                                            volutpat quis. Nulla in risus vitae leo dapibus rhoncus non eu neque. Duis
                                            felis
                                            ante, vehicula non
                                            pulvinar
                                            at, condimentum non mi. Quisque ut dignissim lectus, nec tristique nunc.
                                            Donec
                                            rhoncus diam non tellus
                                            pretium
                                            lobortis. Mauris scelerisque ex et rhoncus egestas. Proin molestie, velit id
                                            tempor commodo, tellus est
                                            consectetur sem, eget placerat ligula justo nec est. Cras rutrum diam ac
                                            vestibulum viverra. Integer
                                            commodo
                                            nulla eu fermentum pellentesque. Suspendisse accumsan, nunc sit amet
                                            porttitor
                                            dictum, mi metus varius
                                            eros,
                                            ut efficitur quam nisi sit amet velit. Vestibulum ante ipsum primis in
                                            faucibus
                                            orci luctus et ultrices
                                            posuere cubilia curae;</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container-fluid">
                            <!-- ? BREAD CRUMB SCOPRI -->
                            <nav aria-label="breadcrumb" class="ms-1">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item" aria-current="page">
                                        <a href="#" class="icon-link linkBread icon-link-hover link-offset-2
                                           link-offset-3-hover link-underline link-underline-opacity-0">
                                            Correlati

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