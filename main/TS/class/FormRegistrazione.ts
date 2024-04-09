import { ValidaDati } from "./ValidaDati.js";
import { Errori } from "./Errori.js";
import { Toast } from "../controllers/toastController.js";
/**
 * Classe per la gestione dei dati di registrazione utente.
 * Raccoglie i dati inseriti in un modulo di registrazione HTML e li valida.
 * @private dataObject
 * @constructor eventListener
 * @private pulisciStati()
 * @private prendiDati()
 * @private prendiInput()
 * @private verificaValiditaCampi()
 * @private ascoltaSubmit()
 */
export class FormRegistrazione {
    /**
     * Costruisco alscoltatori input e submit
     * @const dati
     * @function prendiInput
     * @function pulisciStati
     * @event nome
     * @event cognome
     * @event dataNascita
     * @event nazione
     * @event citta
     * @event provinciaNascita
     * @event indirizzo
     * @event civico
     * @event cittadinanza
     * @event codFiscale
     * @event username
     * @event email
     * @event psw
     * @event pswCheck
     * @event checkDati
     * @event submit
     */
    constructor() {
        const dati = this.prendiInput();
        this.pulisciStati();

        //ascoltatore submit
        dati.submit.addEventListener("click", this.ascoltaSubmit.bind(this));
    }

    /**
     * Rimuovo le classi della validazione
     *
     * @const forms
     * @forEach form
     * @const formType
     * @action remove class
     * @class was-Valideted
     * @class is-invalid
     * @class is-valid
     */
    private pulisciStati(): void {
        const forms = document.querySelectorAll<HTMLFormElement>(".needs-validation");

        Array.from(forms).forEach((form) => {
            const formType = form.getAttribute("data-form-type");
            if (formType === "registra") {
                const formsLabel = form.querySelectorAll("form-label");
                formsLabel.forEach((label) => {
                    const input = label.nextElementSibling;
                    if (input?.classList.contains("is-invalid")) {
                        input?.classList.remove("is-invalid");
                    } else if (input?.classList.contains("is-valid")) {
                        input?.classList.remove("is-valid");
                    } else {
                        return;
                    }
                });
            }
        });
    }

    /**
     * Prende i dati di un form in base all'id dell'elemento
     * e ritorna il valore in stringa o numero
     *
     * @param nome: string;
     * @param cognome: string;
     * @param sesso?: number;
     * @param dataNascita: Date;
     * @param nazione: number;
     * @param citta: string;
     * @param provinciaNascita: string;
     * @param indirizzo: string;
     * @param civico: number;
     * @param cittadinanza: string;
     * @param codFiscale: string;
     * @param username: string;
     * @param email: string;
     * @param psw: string;
     * @param pswCheck: string;
     * @param preferito?: number;
     * @param checkDati: number;
     * @returns object
     */
    private prendiDati(): RecValue {
        const nome = (document.getElementById("nome") as HTMLInputElement).value;
        const cognome = (document.getElementById("cognome") as HTMLInputElement).value;
        const sesso = parseInt((document.getElementById("sesso") as HTMLSelectElement).value);
        const dataNascita = (document.getElementById("dataNascita") as HTMLInputElement).value;
        const nazione = parseInt((document.getElementById("nazione") as HTMLSelectElement).value);
        const citta = parseInt((document.getElementById("citta") as HTMLInputElement).value);
        const provincia = (document.getElementById("provinciaNascita") as HTMLInputElement).value;
        const indirizzo = (document.getElementById("indirizzo") as HTMLInputElement).value;
        const civico = (document.getElementById("civico") as HTMLInputElement).value;
        const cittadinanza = (document.getElementById("cittadinanza") as HTMLInputElement).value;
        const codFiscale = (document.getElementById("codFiscale") as HTMLInputElement).value;
        const username = (document.getElementById("username") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const psw = (document.getElementById("psw") as HTMLInputElement).value;
        const pswCheck = (document.getElementById("pswCheck") as HTMLInputElement).value;
        const preferito = (document.getElementById("preferito") as HTMLInputElement).checked ? 1 : 0;
        const checkDati = (document.getElementById("checkDati") as HTMLInputElement).checked ? 1 : 0;
        const datiUtente: RecValue = {
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

    /**
     * Prende i dati di un form in base all'id dell'elemento
     * e ritorna tutto l'elemento
     *
     * @param nome: HTMLInputElement;
     * @param cognome: HTMLInputElement;
     * @param sesso?: HTMLSelectElement;
     * @param dataNascita: HTMLInputElement;
     * @param nazione: HTMLSelectElement;
     * @param citta: HTMLSelectElement;
     * @param provinciaNascita: HTMLSelectElement;
     * @param indirizzo: HTMLInputElement;
     * @param civico: HTMLInputElement;
     * @param cittadinanza: HTMLInputElement;
     * @param codFiscale: HTMLInputElement;
     * @param username: HTMLInputElement;
     * @param email: HTMLInputElement;
     * @param psw: HTMLInputElement;
     * @param pswCheck: HTMLInputElement;
     * @param preferito?: HTMLInputElement;
     * @param checkDati: HTMLInputElement;
     * @param submit: HTMLButtonElement;
     * @returns object
     */
    private prendiInput(): RecInput {
        const nome = document.getElementById("nome") as HTMLInputElement;
        const cognome = document.getElementById("cognome") as HTMLInputElement;
        const sesso = document.getElementById("sesso") as HTMLSelectElement;
        const dataNascita = document.getElementById("dataNascita") as HTMLInputElement;
        const nazione = document.getElementById("nazione") as HTMLSelectElement;
        const citta = document.getElementById("citta") as HTMLSelectElement;
        const provincia = document.getElementById("provinciaNascita") as HTMLSelectElement;
        const indirizzo = document.getElementById("indirizzo") as HTMLInputElement;
        const civico = document.getElementById("civico") as HTMLInputElement;
        const cittadinanza = document.getElementById("cittadinanza") as HTMLInputElement;
        const codFiscale = document.getElementById("codFiscale") as HTMLInputElement;
        const username = document.getElementById("username") as HTMLInputElement;
        const email = document.getElementById("email") as HTMLInputElement;
        const psw = document.getElementById("psw") as HTMLInputElement;
        const pswCheck = document.getElementById("pswCheck") as HTMLInputElement;
        const preferito = document.getElementById("preferito") as HTMLInputElement;
        const checkDati = document.getElementById("checkDati") as HTMLInputElement;
        const submit = document.getElementById("registra") as HTMLButtonElement;
        const inputUtente: RecInput = {
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

    /**
     * Passando un oggetto di dati li invia alla classe che li controlla
     *
     * @param dati object
     * @function ValidaDati.controlloCampiRec(dati)
     * @return boolean
     */
    private verificaValiditaCampi(dati: RecInput): boolean {
        return ValidaDati.controlloCampiRec(dati);
    }

    private ascoltaEventi() {
        const dati = this.prendiInput();
        //ascoltatore nome
        dati.nome.addEventListener("input", (_event: Event) => {
            this.verificaValiditaCampi(dati);
        });
        //ascoltatore cognome
        dati.cognome.addEventListener("input", (_event: Event) => {
            this.verificaValiditaCampi(dati);
        });
        //ascoltatore dataNascita
        dati.dataNascita.addEventListener("input", (_event: Event) => {
            this.verificaValiditaCampi(dati);
        });
        //ascoltatore nazione
        dati.nazione.addEventListener("change", (_event: Event) => {
            this.verificaValiditaCampi(dati);
        });
        //ascoltatore citta
        dati.citta.addEventListener("change", (_event: Event) => {
            this.verificaValiditaCampi(dati);
        });
        //ascoltatore provinciaNascita
        dati.provincia.addEventListener("change", (_event: Event) => {
            this.verificaValiditaCampi(dati);
        });
        //ascoltatore indirizzo
        dati.indirizzo.addEventListener("input", (_event: Event) => {
            this.verificaValiditaCampi(dati);
        });
        //ascoltatore civico
        dati.civico.addEventListener("input", (_event: Event) => {
            this.verificaValiditaCampi(dati);
        });
        //ascoltatore cittadinanza
        dati.cittadinanza.addEventListener("input", (_event: Event) => {
            this.verificaValiditaCampi(dati);
        });
        //ascoltatore codFiscale
        dati.codFiscale.addEventListener("input", (_event: Event) => {
            this.verificaValiditaCampi(dati);
        });
        //ascoltatore username
        dati.username.addEventListener("input", (_event: Event) => {
            this.verificaValiditaCampi(dati);
        });
        //ascoltatore email
        dati.email.addEventListener("input", (_event: Event) => {
            this.verificaValiditaCampi(dati);
        });
        //ascoltatore psw
        dati.psw.addEventListener("input", (_event: Event) => {
            this.verificaValiditaCampi(dati);
        });
        dati.psw.addEventListener("focus", (_event: Event) => {
            const errori = new Errori();
            errori.gestisciProgress(dati.psw, "focus");
        });
        dati.psw.addEventListener("blur", (_event: Event) => {
            const errori = new Errori();
            errori.gestisciProgress(dati.psw, "blur");
        });
        //ascoltatore pswCheck
        dati.pswCheck.addEventListener("input", (_event: Event) => {
            this.verificaValiditaCampi(dati);
        });
        //ascoltatore checkDati
        dati.checkDati.addEventListener("input", (_event: Event) => {
            this.verificaValiditaCampi(dati);
        });
    }

    /**
     * Ascolto il submit del form, ricontrollo i dati e
     * se corretti li invio al server
     *
     * @param event
     * @event preventDefault()
     * @event stopPropagation()
     * @function prendiInput()
     * @function verificaValiditaCampi()
     * @throws AS-00
     */
    private ascoltaSubmit(event: Event): void {
        // Se i campi non sono validi, impedisco l'invio al server
        event.preventDefault();
        event.stopPropagation();

        //ascolta eventi input dopo il primo invio
        this.ascoltaEventi();

        //prendo di nuovo gli input e li controllo
        const inputUtente: RecInput = this.prendiInput();
        const valida: boolean = this.verificaValiditaCampi(inputUtente);

        let msgToast: string = "";
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
            //prendo i dati da mandare al server
            const datiUtente: RecValue = this.prendiDati();

            //chiamata della funzione che invia al server

            // //TODO: reindirizzamento
            // window.location.href = "";
        }
    }
}
