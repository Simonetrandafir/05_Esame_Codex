import { FormRegistrazione } from "./class/FormRegistrazione.js";

//eseguo direttamente la funzione
(() => {
    document.addEventListener("DOMContentLoaded", function () {
        const registrazioneForm = new FormRegistrazione();
    });

    const forms = document.querySelectorAll<HTMLFormElement>(".needs-validation");
    //ciclo tra i forms
    Array.from(forms).forEach((form) => {
        //trovo il tipo di form
        const formType = form.getAttribute("data-form-type");
        //aggiungo ascoltatore evento pulsante invio
        form.addEventListener(
            "submit",
            (event) => {
                switch (formType) {
                    //se accedi
                    case "accedi":
                        // se non valido e quidni vuoto
                        if (!form.checkValidity()) {
                            event.preventDefault();
                            event.stopPropagation();
                            form.classList.add("was-validated");
                        }
                        break;

                    default:
                        break;
                }
            },
            false
        );
    });
})();
