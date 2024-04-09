/**
 * Gestisce gli errori ricevendo una tuple e l'input che deve cambaire
 * aggiunge le classi degli errori e restituisce messaggi dinamci
 *
 * @function gestisciErrore([boolean,string],HTMLElement)
 * @function gestisciCheckDati(boolean,HTMLElement)
 * @function gestisciErrorePsw(tuple[boolean,string],input:HTMLElement)
 * @function gestisciProgress(HTMLElement,string)
 */
export class Errori {
    /**
     * Funzione per la gestione della maggior parte degli errrori
     * Prende un input e una tuple con i dati di validazione ed inserisce le classi di validazione
     *
     * @param tuple [boolean,string]
     * @param input HTMLElemnt
     */
    public gestisciErrore(tuple: [boolean, string], input: HTMLElement): void {
        try {
            const divErrore = input.nextElementSibling;
            if (!divErrore) {
                throw new Error("GE-01");
            }
            const msgAiuto = divErrore.querySelector(".invalid-help") as HTMLSpanElement; // Usiamo "as" per forzare il tipo
            if (!msgAiuto) {
                throw new Error("GE-00");
            }
            // console.log(input);
            // console.log(tuple);
            switch (tuple[0]) {
                case false:
                    if (input.classList.contains("is-valid")) {
                        input.classList.remove("is-valid");
                    }
                    input.classList.add("is-invalid");
                    msgAiuto.textContent = tuple[1];
                    break;
                case true:
                    if (input.classList.contains("is-invalid")) {
                        input.classList.remove("is-invalid");
                    }
                    input.classList.add("is-valid");
                    msgAiuto.textContent = "";
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.error("GE" + error);
        }
    }

    /**
     * Funzione per la gestione della validazione della check box di autorizzazione
     * al trattanmento dati
     *
     * @param x boolean
     * @param input HTMLElement
     */
    public gestisciCheckDati(x: boolean, input: HTMLElement): void {
        switch (x) {
            case false:
                if (input.classList.contains("is-valid")) {
                    input.classList.remove("is-valid");
                }
                input.classList.add("is-invalid");
                break;
            case true:
                if (input.classList.contains("is-invalid")) {
                    input.classList.remove("is-invalid");
                }
                input.classList.add("is-valid");
                break;
            default:
                break;
        }
    }

    /**
     * Funzione per la gestione della risposta di validazione
     * Riceve, nella tuple, oltre al messeggaio d'errore e il risultato della validazione
     * riceve anche un numero che indica la forza della password
     *
     * @param tuple  [boolean, string, number]
     * @param input HTMLElement
     */
    public gestisciErrorePsw(tuple: [boolean, string, number], input: HTMLElement): void {
        try {
            //trovo elementi
            const divErrore = input.nextElementSibling as HTMLDivElement;
            if (!divErrore) {
                throw new Error("GEP-01");
            }
            const msgAiuto = divErrore.querySelector(".invalid-help") as HTMLSpanElement; // Usiamo "as" per forzare il tipo
            if (!msgAiuto) {
                throw new Error("GEP-00");
            }
            const parentDiv = input.parentElement as HTMLDivElement;
            if (!parentDiv) {
                throw new Error("GEP-02");
            }
            const progressDiv = parentDiv.nextElementSibling as HTMLDivElement;
            if (!progressDiv) {
                throw new Error("GEP-03");
            }
            const progressBar = progressDiv.querySelector(".progress-bar") as HTMLDivElement;
            if (!progressBar) {
                throw new Error("GEP-03");
            }
            //logica
            progressBar.style.width = `${tuple[2]}%`;
            switch (tuple[0]) {
                case false:
                    if (input.classList.contains("is-valid")) {
                        input.classList.remove("is-valid");
                    }
                    input.classList.add("is-invalid");
                    msgAiuto.textContent = tuple[1];
                    if (!progressBar.classList.contains("bg-danger")) {
                        progressBar.classList.add("bg-danger");
                    }
                    if (progressBar.classList.contains("bg-succes")) {
                        progressBar.classList.remove("bg-success");
                    }
                    break;
                case true:
                    if (input.classList.contains("is-invalid")) {
                        input.classList.remove("is-invalid");
                    }
                    input.classList.add("is-valid");
                    msgAiuto.textContent = "";

                    if (progressBar.classList.contains("bg-danger")) {
                        progressBar.classList.remove("bg-danger");
                    }
                    if (!progressBar.classList.contains("bg-succes")) {
                        progressBar.classList.add("bg-success");
                    }
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.error("GEP" + error);
        }
    }

    /**
     * Gestisce la barra di risposta per la robustezza della password
     * riceve l'input associato alla progress e l'evento
     * Gestisce il focus e il blur dell'evento aggiungendo e togliendo la progress dinamicamente
     *
     * @param input HTMLElement
     * @param tipoEvento string
     */
    public gestisciProgress(input: HTMLElement, tipoEvento: string): void {
        try {
            const parentDiv = input.parentElement as HTMLDivElement;
            if (!parentDiv) {
                throw new Error("GEP-02");
            }
            const progressDiv = parentDiv.nextElementSibling as HTMLDivElement;
            if (!progressDiv) {
                throw new Error("GEP-03");
            }
            const progressBar = progressDiv.querySelector(".progress-bar") as HTMLDivElement;
            if (!progressBar) {
                throw new Error("GEP-03");
            }
            //logica
            if (tipoEvento === "focus") {
                if (progressDiv.classList.contains("d-none")) {
                    progressDiv.classList.remove("d-none");
                }
            } else if (tipoEvento === "blur") {
                if (!progressDiv.classList.contains("d-none")) {
                    progressDiv.classList.add("d-none");
                }
            }
        } catch (error) {
            console.error("GPR" + error);
        }
    }

    /**
     * Rimuovo le classi della validazione
     *
     * @param input
     * @action remove class
     * @class is-invalid
     * @class is-valid
     */
    public pulisciStato(input: HTMLElement): void {
        if (input.classList.contains("is-invalid")) {
            input.classList.remove("is-invalid");
        }
        if (input.classList.contains("is-valid")) {
            input.classList.remove("is-valid");
        }
    }
}
