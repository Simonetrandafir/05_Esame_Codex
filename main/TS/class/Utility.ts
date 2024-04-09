/**
 * @function calcolaRisultato
 * @function pariDispari
 * @function sommaNumeri_0_N
 * @function trovaMinore
 * @function ordinaArrayNumeri
 * @function controllaCodFiscale
 * @function checkPswForza
 */
export class Utility {
    /**
     * Calcola il perimetro di un rettangolo dato il valore della base e dell'altezza.
     *
     * @param scelta Scelta Area o Perimetro
     * @param base Lunghezza della base del rettangolo.
     * @param altezza Altezza del rettangolo.
     * @returns Il perimetro o l'area del rettangolo.
     */
    private calcolaRisultato(scelta: string, base: number, altezza: number): number | null {
        if (scelta === "area") {
            return base * altezza;
        } else if (scelta === "perimetro") {
            return 2 * (base + altezza);
        } else {
            console.log("Scelta non valida. Si prega di inserire 'area' o 'perimetro'.");
            return null;
        }
    }

    /**
     * Vede se un numero is pari o dispari.
     *
     * @param numero Numero intero.
     * @returns Pari o dispari.
     */
    private pariDispari(numero: number): string {
        if (numero % 2 === 0) {
            return "pari";
        } else {
            return "dispari";
        }
    }

    /**
     * Vede la somma dei numeri fra 0 e n
     *
     * @param n Numero intero.
     * @returns Somma dei numeri fra 0 e n
     */
    private sommaNumeri_0_N(N: number): number {
        let somma: number = 0;
        for (let i = 0; i <= N; i++) {
            somma += i;
        }
        return somma;
    }

    /**
     * Verifica il numero minore fra n numeri
     *
     * @param numeri Numeri interi.
     * @returns Numero minore
     */
    private trovaMinore(...numeri: number[]): number {
        if (numeri.length === 1) {
            throw new Error("Devi fornire almeno due numero.");
        }
        let minimo: number = numeri[0];
        for (let i = 1; i < numeri.length; i++) {
            if (numeri[i] < minimo) {
                minimo = numeri[i];
            }
        }
        return minimo;
    }

    /**
     * Riordina un array di numeri
     *
     * @param array Numeri interi.
     * @returns Arry ordinato
     */
    private ordinaArrayNumeri(array: number[]): number[] {
        return array.slice().sort((a, b) => a - b);
    }

    //TODO: DA SISTEMARE
    /**
     * Controlla il codice fiscale secondo le regole e convenzioni italiane
     *
     * @param codiceFiscale string
     * @returns true ? false
     */
    public checkCodFiscale(codFiscale: string): boolean {
        return this.controllaCodFiscale(codFiscale);
    }
    private controllaCodFiscale(codiceFiscale: string): boolean {
        // Controllo della lunghezza
        if (codiceFiscale.length !== 16) {
            // console.error("Il codice fiscale deve essere composto da 16 caratteri.");
            return false;
        }

        // // Controllo delle prime tre consonanti del cognome
        // const cognome = codiceFiscale.substring(0, 3).toUpperCase();
        // const regexConsonantiCognome = /[BCDFGHJKLMNPQRSTVWXYZ]{3}/;
        // if (!regexConsonantiCognome.test(cognome)) {
        //     console.error("Le prime tre lettere del codice fiscale non corrispondono alle consonanti del cognome.");
        //     return false;
        // }

        // // Controllo delle prime tre consonanti del nome
        // const nome = codiceFiscale.substring(3, 6).toUpperCase();
        // const regexConsonantiNome = /[BCDFGHJKLMNPQRSTVWXYZ]{3}/;
        // if (!regexConsonantiNome.test(nome)) {
        //     console.error("Le lettere dalla quarta alla sesta del codice fiscale non corrispondono alle consonanti del nome.");
        //     return false;
        // }

        // Controllo dell'anno di nascita
        const annoNascita = parseInt(codiceFiscale.substring(6, 8));
        if (isNaN(annoNascita)) {
            // console.error("Le ultime due cifre del codice fiscale non rappresentano un anno di nascita valido.");
            return false;
        }

        // Controllo del mese di nascita
        const meseNascitaChar = codiceFiscale.substring(8, 9).toUpperCase();
        const mesi = {
            A: "gennaio",
            B: "febbraio",
            C: "marzo",
            D: "aprile",
            E: "maggio",
            H: "giugno",
            L: "luglio",
            M: "agosto",
            P: "settembre",
            R: "ottobre",
            S: "novembre",
            T: "dicembre",
        };
        if (!mesi.hasOwnProperty(meseNascitaChar)) {
            // console.error("Il carattere del mese di nascita nel codice fiscale non è valido.");
            return false;
        }

        // Controllo del giorno di nascita
        let giornoNascita = parseInt(codiceFiscale.substring(9, 11));
        if (isNaN(giornoNascita)) {
            // console.error("Il giorno di nascita nel codice fiscale non è valido.");
            return false;
        }

        // Controllo del comune di nascita
        const comuneNascita = codiceFiscale.substring(11, 15).toUpperCase();
        const regexComune = /^[A-Z]\d{3}$/;
        const regexStatoEstero = /^Z\d{3}$/;
        if (!regexComune.test(comuneNascita) && !regexStatoEstero.test(comuneNascita)) {
            // console.error("Il codice del comune (o Stato) di nascita nel codice fiscale non è valido.");
            return false;
        }

        function calcolaCarattereControllo(codiceFiscale: string): string {
            // Definiamo le tabelle per la conversione dei caratteri in valori numerici
            const dispari: { [key: string]: number } = {
                "0": 1,
                "9": 21,
                I: 19,
                R: 8,
                "1": 0,
                A: 1,
                J: 21,
                S: 12,
                "2": 5,
                B: 0,
                K: 2,
                T: 14,
                "3": 7,
                C: 5,
                L: 4,
                U: 16,
                "4": 9,
                D: 7,
                M: 18,
                V: 10,
                "5": 13,
                E: 9,
                N: 20,
                W: 22,
                "6": 15,
                F: 13,
                O: 11,
                X: 25,
                "7": 17,
                G: 15,
                P: 3,
                Y: 24,
                "8": 19,
                H: 17,
                Q: 6,
                Z: 23,
            };

            const pari: { [key: string]: number } = {
                "0": 0,
                "9": 9,
                I: 8,
                R: 17,
                "1": 1,
                A: 0,
                J: 9,
                S: 18,
                "2": 2,
                B: 1,
                K: 10,
                T: 19,
                "3": 3,
                C: 2,
                L: 11,
                U: 20,
                "4": 4,
                D: 3,
                M: 12,
                V: 21,
                "5": 5,
                E: 4,
                N: 13,
                W: 22,
                "6": 6,
                F: 5,
                O: 14,
                X: 23,
                "7": 7,
                G: 6,
                P: 15,
                Y: 24,
                "8": 8,
                H: 7,
                Q: 16,
                Z: 25,
            };

            // Inizializziamo la somma dei valori dei caratteri dispari e pari
            let sommaDispari = 0;
            let sommaPari = 0;

            // Calcoliamo le somme dei valori dei caratteri dispari e pari
            for (let i = 0; i < codiceFiscale.length - 1; i++) {
                const carattere = codiceFiscale[i].toUpperCase();
                if (i % 2 === 0) {
                    sommaDispari += dispari[carattere];
                } else {
                    sommaPari += pari[carattere];
                }
            }

            // Calcoliamo il resto della divisione tra la somma dei valori dispari e pari e 26
            const resto = (sommaDispari + sommaPari) % 26;

            // Determiniamo il carattere di controllo dalla tabella di conversione
            const carattereControllo = String.fromCharCode(65 + resto);

            return carattereControllo;
        }

        // Calcolo del carattere di controllo
        const carattereControllo = calcolaCarattereControllo(codiceFiscale);
        if (codiceFiscale.substring(15, 16) !== carattereControllo) {
            // console.error("Il carattere di controllo nel codice fiscale non è corretto.");
            // console.error(carattereControllo);
            return false;
        }

        // Verifica la validità di tipo (lettere dove richiesto e numeri dove richiesto)
        const indiceLettere = [0, 1, 2, 3, 4, 5, 8, 11, 15]; // Indici dei caratteri che richiedono lettere
        const indiceNumeri = [6, 7, 9, 10, 12, 13, 14]; // Indici dei caratteri che richiedono numeri

        for (const indice of indiceLettere) {
            const carattere = codiceFiscale.charAt(indice);
            if (!isNaN(parseInt(carattere))) {
                // console.error(`Il carattere alla posizione ${indice} deve essere una lettera.`);
                return false;
            }
        }

        for (const indice of indiceNumeri) {
            const carattere = codiceFiscale.charAt(indice);
            if (isNaN(parseInt(carattere))) {
                // console.error(`Il carattere alla posizione ${indice} deve essere un numero.`);
                return false;
            }
        }

        // Se tutti i controlli passano, il codice fiscale è corretto
        return true;
    }

    /**
     * Controlla la robustezza di una password ritornando un numero su una scala da 0 a 100
     *
     * @param password: string
     * @returns numero da 0 a 100: number
     */
    public checkPswForza(psw: string): { percentuale: number; validita: boolean } {
        return this.checkForza(psw);
    }
    private checkForza(psw: string): { percentuale: number; validita: boolean } {
        let x = 0;

        const controlloPsw: RegExp[] = [/^.{8,45}$/, /[0-9]/, /[a-z]/, /[A-Z]/, /[$-/:-?{-~!"^_`\[\]]/];

        const nControlli: number = controlloPsw.length;
        let incremento: number = 100 / nControlli;

        const password = psw.trim();

        // Verifica se la password contiene spazi
        let controllo = /\s\S/;

        // Calcola la robustezza della password in base ai criteri
        if (controllo.test(password)) {
            x = 0;
        } else {
            for (let i: number = 0; i < nControlli; i++) {
                controllo = controlloPsw[i];
                if (controllo.test(password)) {
                    x = x + incremento;
                }
            }
        }
        const validita: boolean = x > 40;

        return { percentuale: x, validita };
    }
}
