/**
 * Classe per la gestione del emssaggio di risposta per la registrazione dati
 *
 * @function toastController([boolean,string])
 * @private gestioneToast
 * @private trovaToast
 */
export class Toast {
    /**
     * Richiama la funzione per la gestione del messaggio
     *
     * @param dati [boolean, string]
     * @returns void
     */
    public toastController(dati: [boolean, string]): void {
        return this.gestioneToast(dati);
    }

    /**
     * Trova l'elemento Toast e inserisce in base alla risposta finale della validazione
     * un boolean e un messaggio che gestiscono la risposta dinamicamente
     *
     * @param dati [boolean, string]
     */
    private gestioneToast(dati: [boolean, string]): void {
        try {
            const elementi: (Element | undefined)[] = this.trovaToast();
            if (!elementi) {
                throw new Error("GT-1");
            }
            // Accedere a ciascun elemento e ai suoi valori
            const divLiveToast = elementi[0] as HTMLElement;
            const headerToast = elementi[1] as HTMLElement;
            const txtHeader: HTMLElement = headerToast.querySelector("strong") as HTMLElement;
            if (!txtHeader) {
                throw new Error("GT-2");
            }
            const bodyToast = elementi[2] as HTMLElement;
            const dangerIcon = elementi[3] as HTMLElement;
            const successIcon = elementi[4] as HTMLElement;
            const closeToast = elementi[5] as HTMLButtonElement;

            if (!divLiveToast.classList.contains("d-block")) {
                divLiveToast.classList.add("d-block");
            }
            if (divLiveToast.classList.contains("d-none")) {
                divLiveToast.classList.remove("d-none");
            }
            divLiveToast.style.transition = "opacity 1.0s ease";
            divLiveToast.style.opacity = "1";
            // Verifica il valore di dati[0] e imposta le classi e i contenuti di conseguenza
            if (dati[0] === false) {
                divLiveToast.classList.remove("text-bg-success");
                divLiveToast.classList.add("text-bg-danger");

                successIcon.classList.remove("d-block");
                successIcon.classList.add("d-none");

                dangerIcon.classList.add("d-block");
                dangerIcon.classList.remove("d-none");

                txtHeader.textContent = "Attenzione";
                txtHeader.classList.remove("text-success");
                txtHeader.classList.add("text-danger");
            } else if (dati[0] === true) {
                divLiveToast.classList.remove("text-bg-danger");
                divLiveToast.classList.add("text-bg-success");

                dangerIcon.classList.remove("d-block");
                dangerIcon.classList.add("d-none");

                successIcon.classList.add("d-block");
                successIcon.classList.remove("d-none");

                txtHeader.textContent = "Successo";
                txtHeader.classList.remove("text-danger");
                txtHeader.classList.add("text-success");
            }

            bodyToast.textContent = dati[1]; // Imposta il contenuto del bodyToast indipendentemente dai casi

            closeToast.addEventListener("click", (event) => {
                divLiveToast.style.opacity = "0";
                setTimeout(() => {
                    if (divLiveToast.classList.contains("d-block")) {
                        divLiveToast.classList.remove("d-block");
                    }
                    if (!divLiveToast.classList.contains("d-none")) {
                        divLiveToast.classList.add("d-none");
                    }
                }, 1000);
            });
            setTimeout(() => {
                divLiveToast.style.opacity = "0";
                setTimeout(() => {
                    if (divLiveToast.classList.contains("d-block")) {
                        divLiveToast.classList.remove("d-block");
                    }
                    if (!divLiveToast.classList.contains("d-none")) {
                        divLiveToast.classList.add("d-none");
                    }
                }, 1000);
            }, 3000);
        } catch (error) {
            console.error("GT" + error);
        }
    }

    /**
     * Funzione per trovare l'elemento Toast
     *
     * @param void
     * @return (Element | undefined)[]
     */
    private trovaToast(): (Element | undefined)[] {
        try {
            const toastDiv = document.querySelector("#liveToast");
            if (!toastDiv) {
                throw new Error("TT-01");
            }
            const headToast = toastDiv?.querySelector(".toast-header");
            if (!headToast) {
                throw new Error("TT-02");
            }
            const bodyToast = toastDiv?.querySelector(".toast-body");
            if (!bodyToast) {
                throw new Error("TT-03");
            }
            const dangerIcon = headToast?.querySelector(".bi-exclamation-triangle");
            if (!dangerIcon) {
                throw new Error("TT-04");
            }
            const successIcon = headToast?.querySelector(".bi-check2-circle");
            if (!successIcon) {
                throw new Error("TT-05");
            }
            const closeToast = headToast?.querySelector(".closeToast");
            if (!closeToast) {
                throw new Error("TT-06");
            }
            const toastElement: (Element | undefined)[] = [
                toastDiv,
                headToast,
                bodyToast,
                dangerIcon,
                successIcon,
                closeToast,
            ];
            return toastElement;
        } catch (error) {
            console.error("TT" + error);
            return [undefined, undefined, undefined, undefined, undefined, undefined];
        }
    }
}
