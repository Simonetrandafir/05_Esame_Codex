import { ValidaDati } from "./ValidaDati.js";
import { Errori } from "./Errori.js";
import { Toast } from "../controllers/toastController.js";
export class FormRegistrazione {
    constructor() {
        const dati = this.prendiInput();
        this.pulisciStati();
        dati.submit.addEventListener("click", this.ascoltaSubmit.bind(this));
    }
    pulisciStati() {
        const forms = document.querySelectorAll(".needs-validation");
        Array.from(forms).forEach((form) => {
            const formType = form.getAttribute("data-form-type");
            if (formType === "registra") {
                const formsLabel = form.querySelectorAll("form-label");
                formsLabel.forEach((label) => {
                    const input = label.nextElementSibling;
                    if (input?.classList.contains("is-invalid")) {
                        input?.classList.remove("is-invalid");
                    }
                    else if (input?.classList.contains("is-valid")) {
                        input?.classList.remove("is-valid");
                    }
                    else {
                        return;
                    }
                });
            }
        });
    }
    prendiDati() {
        const nome = document.getElementById("nome").value;
        const cognome = document.getElementById("cognome").value;
        const sesso = parseInt(document.getElementById("sesso").value);
        const dataNascita = document.getElementById("dataNascita").value;
        const nazione = parseInt(document.getElementById("nazione").value);
        const citta = parseInt(document.getElementById("citta").value);
        const provincia = document.getElementById("provinciaNascita").value;
        const indirizzo = document.getElementById("indirizzo").value;
        const civico = document.getElementById("civico").value;
        const cittadinanza = document.getElementById("cittadinanza").value;
        const codFiscale = document.getElementById("codFiscale").value;
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const psw = document.getElementById("psw").value;
        const pswCheck = document.getElementById("pswCheck").value;
        const preferito = document.getElementById("preferito").checked ? 1 : 0;
        const checkDati = document.getElementById("checkDati").checked ? 1 : 0;
        const datiUtente = {
            nome,
            cognome,
            sesso,
            dataNascita,
            nazione,
            citta,
            provincia,
            indirizzo,
            civico,
            cittadinanza,
            codFiscale,
            username,
            email,
            psw,
            pswCheck,
            preferito,
            checkDati,
        };
        return datiUtente;
    }
    prendiInput() {
        const nome = document.getElementById("nome");
        const cognome = document.getElementById("cognome");
        const sesso = document.getElementById("sesso");
        const dataNascita = document.getElementById("dataNascita");
        const nazione = document.getElementById("nazione");
        const citta = document.getElementById("citta");
        const provincia = document.getElementById("provinciaNascita");
        const indirizzo = document.getElementById("indirizzo");
        const civico = document.getElementById("civico");
        const cittadinanza = document.getElementById("cittadinanza");
        const codFiscale = document.getElementById("codFiscale");
        const username = document.getElementById("username");
        const email = document.getElementById("email");
        const psw = document.getElementById("psw");
        const pswCheck = document.getElementById("pswCheck");
        const preferito = document.getElementById("preferito");
        const checkDati = document.getElementById("checkDati");
        const submit = document.getElementById("registra");
        const inputUtente = {
            nome,
            cognome,
            sesso,
            dataNascita,
            nazione,
            citta,
            provincia,
            indirizzo,
            civico,
            cittadinanza,
            codFiscale,
            username,
            email,
            psw,
            pswCheck,
            preferito,
            checkDati,
            submit,
        };
        return inputUtente;
    }
    verificaValiditaCampi(dati) {
        return ValidaDati.controlloCampiRec(dati);
    }
    ascoltaEventi() {
        const dati = this.prendiInput();
        dati.nome.addEventListener("input", (_event) => {
            this.verificaValiditaCampi(dati);
        });
        dati.cognome.addEventListener("input", (_event) => {
            this.verificaValiditaCampi(dati);
        });
        dati.dataNascita.addEventListener("input", (_event) => {
            this.verificaValiditaCampi(dati);
        });
        dati.nazione.addEventListener("change", (_event) => {
            this.verificaValiditaCampi(dati);
        });
        dati.citta.addEventListener("change", (_event) => {
            this.verificaValiditaCampi(dati);
        });
        dati.provincia.addEventListener("change", (_event) => {
            this.verificaValiditaCampi(dati);
        });
        dati.indirizzo.addEventListener("input", (_event) => {
            this.verificaValiditaCampi(dati);
        });
        dati.civico.addEventListener("input", (_event) => {
            this.verificaValiditaCampi(dati);
        });
        dati.cittadinanza.addEventListener("input", (_event) => {
            this.verificaValiditaCampi(dati);
        });
        dati.codFiscale.addEventListener("input", (_event) => {
            this.verificaValiditaCampi(dati);
        });
        dati.username.addEventListener("input", (_event) => {
            this.verificaValiditaCampi(dati);
        });
        dati.email.addEventListener("input", (_event) => {
            this.verificaValiditaCampi(dati);
        });
        dati.psw.addEventListener("input", (_event) => {
            this.verificaValiditaCampi(dati);
        });
        dati.psw.addEventListener("focus", (_event) => {
            const errori = new Errori();
            errori.gestisciProgress(dati.psw, "focus");
        });
        dati.psw.addEventListener("blur", (_event) => {
            const errori = new Errori();
            errori.gestisciProgress(dati.psw, "blur");
        });
        dati.pswCheck.addEventListener("input", (_event) => {
            this.verificaValiditaCampi(dati);
        });
        dati.checkDati.addEventListener("input", (_event) => {
            this.verificaValiditaCampi(dati);
        });
    }
    ascoltaSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.ascoltaEventi();
        const inputUtente = this.prendiInput();
        const valida = this.verificaValiditaCampi(inputUtente);
        let msgToast = "";
        const toast = new Toast();
        switch (valida) {
            case false:
                msgToast = "Registrazione fallita, ricontrolla i campi!";
                toast.toastController([valida, msgToast]);
                break;
            case true:
                msgToast = "Registrazione avvenuta, effettua l'accesso ora!";
                toast.toastController([valida, msgToast]);
                break;
            default:
                break;
        }
        if (valida) {
            const datiUtente = this.prendiDati();
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybVJlZ2lzdHJhemlvbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9UUy9jbGFzcy9Gb3JtUmVnaXN0cmF6aW9uZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNyQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFZMUQsTUFBTSxPQUFPLGlCQUFpQjtJQXVCMUI7UUFDSSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBR3BCLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQWFPLFlBQVk7UUFDaEIsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFrQixtQkFBbUIsQ0FBQyxDQUFDO1FBRTlFLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDL0IsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3JELElBQUksUUFBUSxLQUFLLFVBQVUsRUFBRSxDQUFDO2dCQUMxQixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3ZELFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDekIsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixDQUFDO29CQUN2QyxJQUFJLEtBQUssRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFD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