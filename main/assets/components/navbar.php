<!-- ! NAVBAR -->
<header class="col-md-11 col-12 navBarSpec navMaxi position-absolute top-0 z-3">
    <nav class="navbar navbar-dark navbar-expand-md nav-bg p-1 pb-3" aria-label=".contenuto">
        <div class="container-fluid flex-nowrap">

            <ul class="navbar-nav mb-2 flex-row d-flex navList gap-4 mb-md-0">
                <!-- <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Home</a>
                    </li> -->
                <li class="nav-item">
                    <a class="nav-link navLink d-flex flex-row justify-content-center align-items-center"
                        href="#">
                        <i class="bi bi-list-stars"></i>
                        <span class="ms-1">La mia lista</span></a>
                </li>
                <li class="dropdown nav-item">
                    <a class="nav-link navLink d-flex dropdown-toggle flex-row justify-content-center align-items-center"
                        type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-folder2-open" width="16" height="16">

                        </i>
                        <span class="ms-2">Generi</span>
                    </a>
                    <ul class="dropdown-menu position-absolute ">
                        <li><a href="#" class="dropdown-item nav-link eventoNav ps-4 link-body-emphasis"
                                type="button">Azione</a></li>
                        <li><a href="#" class="dropdown-item nav-link eventoNav ps-4 link-body-emphasis"
                                type="button">Avventura</a>
                        </li>
                        <li><a href="#" class="dropdown-item nav-link eventoNav ps-4 link-body-emphasis"
                                type="button">Commedia</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="d-flex flex-row justify-content-end gap-1" >
                <form class="d-none cerca w-75" role="search">
                    <input class="form-control form-control-sm me-2" type="search"
                        placeholder="Cerca..." aria-label="Search">
                    <button class="btn btn-sm p-1 btn-outline-success" type="submit">Cerca</button>
                </form>
                <button type="button" class="btn btn-sm btnCerca bi bi-search"
                    aria-expanded="false" data-bs-theme="dark">
                </button>

                <button type="button" class="btn btn-sm position-relative" data-bs-toggle="collapse"
                    data-bs-target="#notifiche" aria-expanded="false" aria-controls="notifiche" data-bs-theme="dark">
                    <i class="bi bi-bell"></i>
                    <span
                        class="position-absolute mt-1 start-100 translate-middle badge rounded-pill bg-danger">
                        1
                        <span class="visually-hidden">Notifiche</span>
                    </span>
                </button>
                <div class="position-absolute top-3 end-0" style="top: 48px; min-height: 120px;">
                    <div class="collapse" id="notifiche">
                        <div class="card card-body" style="width: 300px;">
                            This is some placeholder content for a horizontal collapse. It's hidden by
                            default and shown when triggered.
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </nav>
</header>
<!-- ! FINE NAVBAR-->