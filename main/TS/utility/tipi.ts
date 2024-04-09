/**
 * ? ELENCO:
 * * RecValue
 * * RecInput
 * * LogValue
 * * LogInput
 */

/**
 * --------VALORI INPUT REGISTRAZIONE
 *
 * @param nome string
 * @param cognome string
 * @param sesso number
 * @param dataNascita date
 * @param nazione number
 * @param citta string
 * @param provinciaNascita string
 * @param indirizzo string
 * @param civico number
 * @param cittadinanza string
 * @param codFiscale string
 * @param username string
 * @param email string
 * @param psw string
 * @param pswCheck string
 * @param preferito number
 * @param checkDati number
 */
type RecValue = {
    nome: string;
    cognome: string;
    sesso?: number;
    dataNascita: string;
    nazione: number;
    citta: number;
    provincia: string;
    indirizzo: string;
    civico: string;
    cittadinanza: string;
    codFiscale: string;
    username: string;
    email: string;
    psw: string;
    pswCheck: string;
    preferito?: number;
    checkDati: number;
};

/**
 * -------- INPUT FORM REGISTRAZIONE
 *
 * @param nome HTMLInputElement
 * @param cognome HTMLInputElement
 * @param sesso HTMLSelectElement
 * @param dataNascita HTMLInputElement
 * @param nazione HTMLSelectElement
 * @param citta HTMLSelectElement
 * @param provinciaNascita HTMLSelectElement
 * @param indirizzo HTMLInputElement
 * @param civico number
 * @param cittadinanza HTMLInputElement
 * @param codFiscale HTMLInputElement
 * @param username HTMLInputElement
 * @param email HTMLInputElement
 * @param psw HTMLInputElement
 * @param pswCheck HTMLInputElement
 * @param preferito HTMLInputElement
 * @param checkDati HTMLInputElement
 * @param submit HTMLButtonElement
 */
type RecInput = {
    nome: HTMLInputElement;
    cognome: HTMLInputElement;
    sesso?: HTMLSelectElement;
    dataNascita: HTMLInputElement;
    nazione: HTMLSelectElement;
    citta: HTMLSelectElement;
    provincia: HTMLSelectElement;
    indirizzo: HTMLInputElement;
    civico: HTMLInputElement;
    cittadinanza: HTMLInputElement;
    codFiscale: HTMLInputElement;
    username: HTMLInputElement;
    email: HTMLInputElement;
    psw: HTMLInputElement;
    pswCheck: HTMLInputElement;
    preferito?: HTMLInputElement;
    checkDati: HTMLInputElement;
    submit: HTMLButtonElement;
};
//!-------------------------------------------------------------------------------------------------------------
/**
 * --------VALORI INPUT ACCEDI
 *
 * @param username string
 * @param email string
 * @param psw string
 * @param ricordami number
 */
type LogValue = {
    username: string;
    email: string;
    psw: string;
    ricordami?: number;
};
/**
 * -------- INPUT FORM ACCEDI
 *
 * @param username HTMLInputElement
 * @param email HTMLInputElement
 * @param psw HTMLInputElement
 * @param ricordami HTMLInputElement
 * @param submit HTMLButtonElement
 */
type LogInput = {
    username: HTMLInputElement;
    email: HTMLInputElement;
    psw: HTMLInputElement;
    ricordami?: HTMLInputElement;
    submit: HTMLButtonElement;
};
