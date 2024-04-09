(() => {
    "use strict";

    const forms = document.querySelectorAll(".needs-validation");

    Array.from(forms).forEach((form) => {
        form.addEventListener(
            "submit",
            (event) => {
                const formType = form.dataset.formType;
                console.log(formType);
                if (formType === "accedi") {
                    // Esegui la logica di validazione per il form di accesso
                    const emailField = form.querySelector("#email");
                    const passwordField = form.querySelector("#password");

                    // Aggiungi controlli personalizzati per il form di accesso
                    if (!form.checkValidity()) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                } else if (formType === "registra") {
                    // Esegui la logica di validazione per il form di registrazione
                    const usernameField = form.querySelector("#username");
                    const emailField = form.querySelector("#email");
                    const passwordField = form.querySelector("#password");

                    // Aggiungi controlli personalizzati per il form di registrazione
                    if (!form.checkValidity()) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                }

                form.classList.add("was-validated");
            },
            false
        );
    });
})();
