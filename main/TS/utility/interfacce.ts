/*
 ? ELENCO:
 * - NAZIONE
 * - STATO
 * - CONTATTO
 * - PSW
 * - AUTHS
 * - COMUNI ITALIA
 * - TIPO INDIRIZZO
 * - INDIRIZZO
 * - GENERE
 * - CATEGORIA
 * - FILM
 * - SERIE TV
 * - EPISODIO
 */

/**
 * ------- NAZIONI
 *
 * @param idNazione number
 * @param nome string
 * @param continente string
 * @param iso string
 * @param iso4 string
 * @param prefissoTel string
 */
interface Nazione {
    idNazione: number;
    nome: string;
    continente: string;
    iso: string;
    iso4: string;
    prefissoTel: string;
}

/**
 * -------- STATI
 *
 * @param idStato number
 * @param nome string
 */
interface Stato {
    idStato: number;
    stato: string;
}

/**
 * -------- RUOLO
 *
 * @param idRuolo number
 * @param ruolo string
 */
interface Ruolo {
    idRuolo: number;
    ruolo: string;
}

/**
 * --------- CONTATTO
 *
 * @param idContatto number
 * @param idStato number
 * @param nome string
 * @param cognome string
 * @param sesso number | null
 * @param codFiscale string
 * @param partitaIva string
 * @param cittadinanza string
 * @param idNazione number
 * @param cittaN string
 * @param provinciaN string
 * @param dataN Date
 */
interface Contatto extends Pick<Stato, "idStato">, Pick<Nazione, "idNazione"> {
    idContatto: number;
    nome: string;
    cognome: string;
    sesso?: number | null;
    codFiscale: string;
    partitaIva: string;
    cittadinanza: string;
    cittaN: string;
    provinciaN: string;
    dataN: Date;
}

/**
 * ------------ PASSWORD
 * @param idPassword number
 * @param idContatto number
 * @param psw string
 * @param sale string
 */
interface psw extends Pick<Contatto, "idContatto"> {
    idPassword: number;
    psw: string;
    sale: string;
}

/**
 * --------- AUTHS
 *
 * @param idAuth: number;
 * @param idContatto: number;
 * @param username: string;
 * @param email?: string;
 * @param sfida?: string;
 * @param secretJWT: string;
 * @param inizioSfida: number;
 * @param obbligoCambio?: number;
 */
interface Auths extends Pick<Contatto, "idContatto"> {
    idAuth: number;
    username: string;
    email?: string;
    sfida?: string;
    secretJWT: string;
    inizioSfida: number;
    obbligoCambio?: number;
}

/**
 * ---------------- COMUNE ITALIA
 *
 * @param idComuneItalia number
 * @param nome string
 * @param regione string
 * @param metropolitana string
 * @param provincia string
 * @param siglaAuto string
 * @param codCatastale string
 * @param capoluogo number
 * @param multiCap number
 * @param cap number
 * @param capInizio number
 * @param capFine number
 */
interface ComuniItalia {
    idComuneItalia: number;
    nome: string;
    regione: string;
    metropolitana: string;
    provincia: string;
    siglaAuto: string;
    codCatastale: string;
    capoluogo: number;
    multiCap: number;
    cap: number;
    capInizio: number;
    capFine: number;
}

/**
 * -------------- TIPO INDIRIZZO
 *
 * @param idTipoIndirizzo number
 * @param nome string
 */
interface TipoIndirizzo {
    idTipoIndirizzo: number;
    nome: string;
}

/**
 * -----------------INDIRIZZO
 *
 * @param idIndirizzo number
 * @param idTipoIndirizzo number
 * @param idContatto number
 * @param idNazione number
 * @param idComuneItalia number
 * @param preferito string
 * @param cap number
 * @param indirizzo string
 * @param civico string
 * @param citta string
 * @param lat number|null
 * @param lng number|null
 * @param altro_1 string|null
 * @param altro_2 string|null
 */
interface Indirizzo
    extends Pick<Contatto, "idContatto">,
        Pick<TipoIndirizzo, "idTipoIndirizzo">,
        Pick<ComuniItalia, "idComuneItalia">,
        Pick<Nazione, "idNazione"> {
    idIndirizzo: number;
    preferito: string;
    cap: number;
    indirizzo: string;
    civico: string;
    citta: string;
    lat?: number | null;
    lng?: number | null;
    altro_1?: string | null;
    altro_2?: string | null;
}

/**
 * ---------GENERI
 *
 * @param idGenere number
 * @param nome string
 * @param sku string
 * @param visualizzato string
 */
interface Genere {
    idGenere: number;
    nome: string;
    sku: string;
    visualizzato: string;
}

/**
 * ------- CATEGORIE
 *
 * @param idCategoria number
 * @param nome string
 * @param sku string
 * @param visualizzato string
 */
interface Categoria {
    idCategoria: number;
    nome: string;
    sku: string;
    visualizzato: string;
}

/**
 * --------- FILM
 *
 * @param idFilm number
 * @param idCategoria number
 * @param idGenere number
 * @param titolo string
 * @param trama string
 * @param durataMin string
 * @param annoUscita string
 * @param regista? string | null
 * @param attori? string | null
 * @param visualizzato string
 * @param idFile? number | null
 * @param idVideo? number | null
 */
interface Film extends Pick<Categoria, "idCategoria">, Pick<Genere, "idGenere"> {
    idFilm: number;
    titolo: string;
    trama: string;
    durataMin: string;
    annoUscita: string;
    regista?: string | null;
    attori?: string | null;
    visualizzato: string;
    idFile?: number | null;
    idVideo?: number | null;
}

/**
 * --------- SERIE TV
 *
 * @param idSerieTv number
 * @param idCategoria number
 * @param idGenere number
 * @param titolo string
 * @param trama string
 * @param totStagioni number
 * @param nEpisodi number
 * @param regista? string | null
 * @param attori? string | null
 * @param annoInizio string | null
 * @param annoFine? string | null
 * @param visualizzato string
 * @param idFile? number | null
 * @param idVideo? number | null
 */
interface SerieTv extends Pick<Categoria, "idCategoria">, Pick<Genere, "idGenere"> {
    idSerieTv: number;
    titolo: string;
    trama: string;
    totStagioni: number;
    nEpisodi: number;
    regista?: string | null;
    attori?: string | null;
    annoInizio: string | null;
    annoFine?: string | null;
    visualizzato: string;
    idFile?: number | null;
    idVideo?: number | null;
}

/**
 * --------- EPISODI
 *
 * @param idEpisodio number
 * @param idSerieTv number
 * @param titolo string
 * @param trama string
 * @param stagione number
 * @param episodio number
 * @param durata number
 * @param anno? string | null
 * @param visualizzato string
 * @param idFile? number | null
 * @param idVideo? number | null
 */
interface Episodio extends Pick<SerieTv, "idSerieTv"> {
    idEpisodio: number;
    titolo: string;
    trama: string;
    stagione: number;
    episodio: number;
    durata: number;
    anno?: string | null;
    visualizzato: string;
    idFile?: number | null;
    idVideo?: number | null;
}
