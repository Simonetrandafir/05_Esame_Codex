/**
 * Classe per la gestione dei dati dei file CSV.
 * Raccoglie i dati dei file selezionati e li invia alle select nell'index.
 *
 * @public async indexComuni(idSelect)
 * @public async indexProvincia(idSelect)
 * @public async indexNazioni(idSelect)
 * @private async leggiCsvNazioni()
 * @private async leggiCSVComuni()
 * @private async popolaNazioneOrdinata()
 * @private async popolaComuniOrdinato()
 * @private async popolaProvinciaOrdinato()
 */
export class CsvController {
    /**
     * Richiama la funzione per popolare i campi di una select
     * con i comuni in ordine alfabetico
     *
     * @param idSelect
     * @function popolaComuniOrdinato(idSelect)
     * @returns void
     */
    public async indexCitta(idSelect: string): Promise<void> {
        return await this.popolaComuniOrdinato(idSelect);
    }
    /**
     * Richiama la funzione per popolare i campi di una select
     * con le province in ordine alfabetico
     *
     * @param idSelect
     * @function popolaProvinciaOrdinato(idSelect)
     * @returns void
     */
    public async indexProvincia(idSelect: string): Promise<void> {
        return await this.popolaProvinciaOrdinato(idSelect);
    }
    /**
     * Richiama la funzione per popolare i campi di una select
     * con le nazioni in ordine alfabetico
     *
     * @param idSelect
     * @function popolaNazioneOrdinata(idSelect)
     * @returns void
     */
    public async indexNazioni(idSelect: string): Promise<void> {
        return await this.popolaNazioneOrdinata(idSelect);
    }

    //!---------------------------- PRIVATE ---------------------------------------------

    /**
     * Legge un file csv nel localStorage e riporta,
     * a blocchi di 50, degli oggetti Nazione
     *
     * @param url string
     * @function async
     * @returns object
     * @error L-CSV-N
     */
    private async leggiCsvNazioni(url: string): Promise<Nazione[][]> {
        const risposta = await fetch(url);
        const csvText = await risposta.text();
        const righe = csvText.split("\n").slice(0, -1);

        const blocchi: Nazione[][] = [];
        try {
            if (!risposta.ok) {
                throw new Error("CSV-N0");
            } else {
                for (let i = 0; i < righe.length; i += 50) {
                    const blocco: Nazione[] = [];
                    for (let j = i; j < Math.min(i + 50, righe.length); j++) {
                        const [idNazione, nome, continente, iso, iso4, prefissoTel] = righe[j].split(",");
                        blocco.push({
                            idNazione: parseInt(idNazione),
                            nome: nome,
                            continente: continente,
                            iso: iso,
                            iso4: iso4,
                            prefissoTel: prefissoTel,
                        });
                    }
                    blocchi.push(blocco);
                }
            }
        } catch (error) {
            console.error("L-CSV-N", error);
        }
        return blocchi;
    }

    /**
     * Legge un file csv nel localStorage e riporta,
     * a blocchi di 50, degli oggetti ComuniItalia
     *
     * @param url string
     * @function async
     * @returns object
     * @error L-CSV-C
     */
    private async leggiCSVComuni(url: string): Promise<ComuniItalia[][]> {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("CSV-C0");
            }

            const csvText = await response.text();
            const rows = csvText.split("\n").slice(0, -1); // Rimuovi l'ultima riga vuota

            const blocchi: ComuniItalia[][] = [];
            let blocco: ComuniItalia[] = [];

            for (let i = 0; i < rows.length; i++) {
                const fields = rows[i].split(",");
                const [
                    idComuneItalia,
                    nome,
                    regione,
                    metropolitana,
                    provincia,
                    siglaAuto,
                    codCatastale,
                    capoluogo,
                    multiCap,
                    cap,
                    capInizio,
                    capFine,
                ] = fields;

                blocco.push({
                    idComuneItalia: +idComuneItalia,
                    nome,
                    regione,
                    metropolitana,
                    provincia,
                    siglaAuto,
                    codCatastale,
                    capoluogo: +capoluogo,
                    multiCap: +multiCap,
                    cap: +cap,
                    capInizio: +capInizio,
                    capFine: +capFine,
                });

                // Se il blocco raggiunge la dimensione desiderata o siamo all'ultima riga, aggiungi il blocco a blocchi
                if (blocco.length === 50 || i === rows.length - 1) {
                    blocchi.push(blocco);
                    blocco = []; // Resetta il blocco
                }
            }

            return blocchi;
        } catch (error) {
            console.error("L-CSV-C", error);
            throw error;
        }
    }

    /**
     * Passa un Url alla funzione di lettura CSV e popola una <select> con i dati di ritorno
     *
     * @param idSelect string
     * @function async
     * @const url string
     * @exports leggiCsvNazioni(url)
     * @returns void
     * @error P-N-O
     */
    private async popolaNazioneOrdinata(idSelect: string): Promise<void> {
        try {
            // Identifico la select
            const dropdownlist = document.getElementById(idSelect) as HTMLSelectElement;

            // Verifica preliminare della select
            if (!dropdownlist || dropdownlist.options.length > 1) {
                return;
            }

            // URL del file CSV
            const url = "./assets/storage/csv/nazioni.csv";

            // Leggi il file CSV
            const blocchi = await this.leggiCsvNazioni(url);

            // Controllo se blocchi è valido e non vuoto
            if (!blocchi) {
                throw new Error("CSV-N1");
            }

            // Popola la dropdownlist con le nazioni ordinate
            blocchi.flat().forEach((nazione) => {
                const option = document.createElement("option");
                option.value = nazione.idNazione.toString();
                option.textContent = nazione.nome;
                dropdownlist.appendChild(option);
            });
        } catch (error) {
            console.error(`Errore durante il popolamento della select delle nazioni: ${error}`);
        }
    }

    /**
     * Passa un Url alla funzione di lettura CSV e popola una <select> con i dati
     * riordinati in ordinbe alfabetico
     *
     * @param idSelect string
     * @function async
     * @const url string
     * @exports leggiCSVComuni(url)
     * @returns void
     * @error P-C-O
     */
    private async popolaComuniOrdinato(selectId: string): Promise<void> {
        try {
            const dropdownlist = document.getElementById(selectId) as HTMLSelectElement;
            if (!dropdownlist || dropdownlist.options.length > 1) {
                return;
            }

            const urlComuni = "./assets/storage/csv/comuniItaliani.csv";
            const blocchi = await this.leggiCSVComuni(urlComuni);

            const comuniOrdinati = blocchi.flat().sort((a, b) => a.nome.localeCompare(b.nome));

            for (const comune of comuniOrdinati) {
                const option = document.createElement("option");
                option.value = comune.idComuneItalia.toString();
                option.textContent = comune.nome;
                dropdownlist.appendChild(option);
            }
        } catch (error) {
            console.error(`Errore durante il popolamento della select: ${error}`);
        }
    }

    /**
     * Passa un Url alla funzione di lettura CSV e popola una <select> con i dati
     * riordinati in ordine alfabetico
     *
     * @param idSelect string
     * @function async
     * @const url string
     * @exports leggiCSVComuni(url)
     * @returns void
     * @error P-P-O
     */
    private async popolaProvinciaOrdinato(selectId: string): Promise<void> {
        try {
            // Identifico la select
            const dropdownlist = document.getElementById(selectId) as HTMLSelectElement;

            // Verifica preliminare della select
            if (!dropdownlist || dropdownlist.options.length > 1) {
                return;
            }

            // URL del file CSV
            const urlComuni = "./assets/storage/csv/comuniItaliani.csv";

            // Leggi il file CSV
            const blocchi = await this.leggiCSVComuni(urlComuni);

            // Controllo se blocchi è valido e non vuoto
            if (!blocchi) {
                throw new Error("CSV-C2");
            }

            // Inizializza un Set per tenere traccia delle province senza duplicati
            const provinceSet = new Set<string>();

            // Popola il Set con i nomi delle province o metropolitane
            blocchi.flat().forEach((comune) => {
                provinceSet.add(comune.metropolitana || comune.provincia);
            });

            // Ordina le province alfabeticamente
            const provinceOrdinate = Array.from(provinceSet).sort();

            // Popola la dropdownlist con le province ordinate
            provinceOrdinate.forEach((provincia) => {
                const option = document.createElement("option");
                option.value = provincia;
                option.textContent = provincia;
                dropdownlist.appendChild(option);
            });
        } catch (error) {
            console.error(`Errore durante il popolamento della select delle province: ${error}`);
        }
    }
}
