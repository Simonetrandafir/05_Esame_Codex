<!-- ! SIDEBAR -->
<div class="col-md sideBar col-md-1  p-0 bg-body-tertiary mini">

<div class="h-100 d-flex bar justify-content-around flex-md-column
     align-items-center flex-row flex-shrink-0  p-1 p-md-2">
    <button
        class="btnSide d-md-flex d-none justify-content-center align-items-center btn border-none gap-lg-2 gap-1 text-decoration-none p-0">
        <img src="./assets/img/codexLogo.svg" alt="logo" width="40" height="40">
        <span class="d-none fs-4">Codex</span>
    </button>
    <hr class="w-100 d-none d-md-block">
    <ul id="sideList" class="nav nav-pills flex-md-column flex-row mb-auto w-100
         justify-content-center align-items-center align-items-lg-stretch">
        <li class="nav-item">
            <a href="#"
                class="py-1 py-md-2 py-xl-3 nav-link navLink d-flex flex-row justify-content-center eventoNav active"
                aria-current="page">
                <i class="bi bi-house-door" width="16" height="16">

                </i>
                <span class="d-none">Home</span>
            </a>
        </li>
        <li>
            <a href="#"
                class="py-1 py-md-2 py-xl-3 nav-link navLink d-flex flex-row justify-content-center eventoNav link-body-emphasis">
                <i class="bi bi-stars" width="16" height="16">
                </i>
                <span class="d-none">Nuovi</span>
            </a>
        </li>
        <li>
            <a href="#"
                class="py-1 py-md-2 py-xl-3 nav-link navLink d-flex flex-row justify-content-center eventoNav link-body-emphasis">
                <i class="bi bi-film" width="16" height="16">

                </i>
                <span class="d-none">Film</span>
            </a>
        </li>
        <li>
            <a href="#"
                class="py-1 py-md-2 py-xl-3 nav-link navLink d-flex flex-row justify-content-center eventoNav link-body-emphasis">
                <i class="bi bi-view-list" width="16" height="16">

                </i>
                <span class="d-none">Serie Tv</span>
            </a>
        </li>
        <li class="dropdown bd-mode-toggle">
            <!-- * CAMBIO TEMA -->
            <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
                <symbol id="check2" viewBox="0 0 16 16">
                    <path fill="currentColor"
                        d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                </symbol>
                <symbol id="circle-half" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"
                        fill="currentColor" />
                </symbol>
                <symbol id="moon-stars-fill" viewBox="0 0 16 16">
                    <path fill="currentColor"
                        d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                    <path fill="currentColor"
                        d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                </symbol>
                <symbol id="sun-fill" viewBox="0 0 16 16">
                    <path fill="currentColor"
                        d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                </symbol>
            </svg>
            <a class="nav-link tema py-1 py-md-2 py-xl-3 navLink d-flex flex-row justify-content-center link-body-emphasis align-items-center"
                id="bd-theme" type="button" aria-expanded="false" data-bs-toggle="dropdown"
                aria-label="Toggle theme (auto)">
                <svg class="bi my-1 theme-icon-active link-body-emphasis" width="1em" height="1em">
                    <use href="#circle-half"></use>
                </svg>
                <span class="d-none me-1" id="bd-theme-text">Tema</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-">
                <li>
                    <button type="button" class="dropdown-item d-flex align-items-center"
                        data-bs-theme-value="light" aria-pressed="false">
                        <svg class="bi me-2 opacity-50" width="1em" height="1em">
                            <use href="#sun-fill"></use>
                        </svg>
                        Light
                        <svg class="bi ms-auto d-none" width="1em" height="1em">
                            <use href="#check2"></use>
                        </svg>
                    </button>
                </li>
                <li>
                    <button type="button" class="dropdown-item d-flex align-items-center"
                        data-bs-theme-value="dark" aria-pressed="false">
                        <svg class="bi me-2 opacity-50" width="1em" height="1em">
                            <use href="#moon-stars-fill"></use>
                        </svg>
                        Dark
                        <svg class="bi ms-auto d-none" width="1em" height="1em">
                            <use href="#check2"></use>
                        </svg>
                    </button>
                </li>
                <li>
                    <button type="button" class="dropdown-item d-flex align-items-center active"
                        data-bs-theme-value="auto" aria-pressed="true">
                        <svg class="bi me-2 opacity-50" width="1em" height="1em">
                            <use href="#circle-half"></use>
                        </svg>
                        Auto
                        <svg class="bi ms-auto d-none" width="1em" height="1em">
                            <use href="#check2"></use>
                        </svg>
                    </button>
                </li>
            </ul>
            <!-- * FINE CAMBIO TEMA -->
        </li>

    </ul>

    <hr class="w-100 d-none d-md-block">
    <div class="dropdown z-3">
        <a href="#"
            class="d-flex align-items-center justify-content-center link-body-emphasis text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown" aria-expanded="false">
            <img src="./assets/img/placeHolder_utente.svg" alt="" width="32" height="32" class="rounded-circle me-1">
            <span class="d-none"><strong>Admin</strong></span>
        </a>
        <ul class="dropdown-menu text-small shadow z-2">
            <li><a class="dropdown-item p-2" href="#">
                    <i class="bi bi-database-add me-1"></i>
                    Aggiungi Crediti</a></li>
            <li><a class="dropdown-item p-2" href="#">
                    <i class="bi bi-gear me-1"></i>
                    Impostazioni</a></li>
            <li><a class="dropdown-item p-2" href="#">
                    <i class="bi bi-person-circle me-1"></i>
                    Profilo</a></li>
            <li>
                <hr class="dropdown-divider">
            </li>
            <li class="text-center"><a class="btn-sm btn btn-outline-danger" href="#">
                    <i class="bi bi-box-arrow-right me-1"></i>
                    Log out</a></li>
        </ul>
    </div>
</div>

</div>
<!-- ! FINE SIDEBAR -->