import { Errori } from "./Errori.js";
import { Utility } from "./Utility.js";

const lettereItalia = "àòèéìù";

export class ValidaDati {
    public static controlloCampiRec(datiInput: RecInput): boolean {
        return this.gestisciControllo(datiInput);
    }

    private static gestisciControllo(datiInput: RecInput): boolean {
        let risult: boolean = false;
        try {
            const datiValue: RecValue = {
                nome: datiInput.nome.value,
                cognome: datiInput.cognome.value,
                dataNascita: datiInput.dataNascita.value,
                nazione: parseInt(datiInput.nazione.value),
                citta: parseInt(datiInput.citta.value),
                provincia: datiInput.provincia.value,
                indirizzo: datiInput.indirizzo.value,
                civico: datiInput.civico.value,
                cittadinanza: datiInput.cittadinanza.value,
                codFiscale: datiInput.codFiscale.value,
                username: datiInput.username.value,
                email: datiInput.email.value,
                psw: datiInput.psw.value,
                pswCheck: datiInput.pswCheck.value,
                checkDati: datiInput.checkDati.checked ? 1 : 0,
            };
            // console.log(datiValue);
            const classErrori = new Errori();

            if (!datiValue) {
                throw new Error("GC-D0");
            }
            if (!classErrori) {
                throw new Error("GC-E0");
            }

            const [testNome, erroreNome] = this.validaNome(datiValue.nome);
            const [testCognome, erroreCognome] = this.validaCognome(datiValue.cognome);
            const [testData, erroreData] = this.validaData(datiValue.dataNascita);
            const [testNazione, erroreNazione] = this.validaNazione(datiValue.nazione);
            const [testCitta, erroreCitta] = this.validaCitta(datiValue.citta);
            const [testProvincia, erroreProvincia] = this.validaProvincia(datiValue.provincia);
            const [testIndirizzo, erroreIndirizzo] = this.validaIndirizzo(datiValue.indirizzo);
            const [testCivico, erroreCivico] = this.validaCivico(datiValue.civico);
            const [testCittadinanza, erroreCittadinanza] = this.validaCittadinanza(datiValue.cittadinanza);

            const [testUsername, erroreUsername] = this.validaUsername(datiValue.username);
            const [testEmail, erroreEmail] = this.validaEmail(datiValue.email);
            const [testPsw, errorePsw, percentuale] = this.validaPsw(datiValue.psw);
            const [testPswCheck, errorePswCheck] = this.validaPswCheck(datiValue.pswCheck, datiValue.psw);

            const valoreCheckDati = this.validaCheckDati(datiValue.checkDati);

            const campiDaValidare = [
                { test: testNome, errore: erroreNome, input: datiInput.nome },
                { test: testCognome, errore: erroreCognome, input: datiInput.cognome },
                { test: testData, errore: erroreData, input: datiInput.dataNascita },
                { test: testNazione, errore: erroreNazione, input: datiInput.nazione },
                { test: testCitta, errore: erroreCitta, input: datiInput.citta },
                { test: testProvincia, errore: erroreProvincia, input: datiInput.provincia },
                { test: testIndirizzo, errore: erroreIndirizzo, input: datiInput.indirizzo },
                { test: testCivico, errore: erroreCivico, input: datiInput.civico },
                { test: testCittadinanza, errore: erroreCittadinanza, input: datiInput.cittadinanza },
                { test: testUsername, errore: erroreUsername, input: datiInput.username },
                { test: testEmail, errore: erroreEmail, input: datiInput.email },
                { test: testPswCheck, errore: errorePswCheck, input: datiInput.pswCheck },
            ];

            //gestisco errori
            campiDaValidare.forEach((campo) => {
                classErrori.gestisciErrore([campo.test, campo.errore], campo.input);
            });

            classErrori.gestisciErrorePsw([testPsw, errorePsw, percentuale], datiInput.psw);

            classErrori.gestisciCheckDati(valoreCheckDati, datiInput.checkDati);

            //controllo cittaddinza per abilitare cod fiscale e ritorno le validazioni in base a cod fiscale se presente
            const cittadinanzeConsentite = ["ita", "ital", "itali", "italia", "italian", "italiano", "italiana"];
            if (cittadinanzeConsentite.includes(datiValue.cittadinanza.toLowerCase())) {
                const [testCodFiscale, erroreCodFiscale] = this.validaCodFiscale(datiValue.codFiscale);
                classErrori.gestisciErrore([testCodFiscale, erroreCodFiscale], datiInput.codFiscale);
                risult =
                    testNome &&
                    testCognome &&
                    testData &&
                    testNazione &&
                    testCitta &&
                    testProvincia &&
                    testIndirizzo &&
                    testCivico &&
                    testCittadinanza &&
                    testCodFiscale &&
                    testUsername &&
                    testEmail &&
                    testPsw &&
                    testPswCheck &&
                    valoreCheckDati;
            } else {
                classErrori.pulisciStato(datiInput.codFiscale);
                risult =
                    testNome &&
                    testCognome &&
                    testData &&
                    testNazione &&
                    testCitta &&
                    testProvincia &&
                    testIndirizzo &&
                    testCivico &&
                    testCittadinanza &&
                    testUsername &&
                    testEmail &&
                    testPsw &&
                    testPswCheck &&
                    valoreCheckDati;
            }
        } catch (error) {
            console.error("GC", error);
        }

        return risult;
    }

    private static validaNome(nome: string): [boolean, string] {
        let msgErrore: string = "";
        const nomeUtente: string = nome.trim();
        const regex = new RegExp(`^[a-zA-Z\\s'${lettereItalia}]+\$`);
        if (nomeUtente === "") {
            msgErrore = "Il campo è obbligatorio";
        } else if (!regex.test(nomeUtente)) {
            msgErrore = "Sono consentite solo lettere";
        } else if (nomeUtente.length > 45) {
            msgErrore = "Nome troppo lungo";
        } else if (nomeUtente.length <= 2) {
            msgErrore = "Nome troppo corto";
        }
        return [
            nomeUtente !== "" && nomeUtente.length > 2 && regex.test(nomeUtente) && nomeUtente.length <= 45,
            msgErrore,
        ];
    }

    private static validaCognome(cognome: string): [boolean, string] {
        let msgErrore = "";
        const cognomeUtente: string = cognome.trim();
        const regex = new RegExp(`^[a-zA-Z\\s'${lettereItalia}]+\$`);
        if (cognomeUtente === "") {
            msgErrore = "Il campo è obbligatorio";
        } else if (!regex.test(cognomeUtente)) {
            msgErrore = "Sono consentite solo lettere";
        } else if (cognomeUtente.length > 45) {
            msgErrore = "Cognome troppo lungo";
        } else if (cognomeUtente.length <= 2) {
            msgErrore = "Cognome troppo corto";
        }
        return [
            cognomeUtente !== "" && cognomeUtente.length > 2 && regex.test(cognomeUtente) && cognomeUtente.length <= 45,
            msgErrore,
        ];
    }

    private static validaData(dataNascita: string): [boolean, string] {
        let msgErrore: string = "";
        const dataUtente: string = dataNascita.trim();
        const regex: RegExp = /^\d{4}-\d{2}-\d{2}$/;
        if (dataUtente === "") {
            msgErrore = "Il campo è obbligatorio";
        } else if (!regex.test(dataUtente)) {
            msgErrore = "Formato non corretto";
        }
        return [dataUtente !== "" && regex.test(dataUtente), msgErrore];
    }

    private static validaNazione(nazione: number): [boolean, string] {
        let msgErrore: string = "";
        if (nazione === 0) {
            msgErrore = "Il campo è obbligatorio";
        } else if (nazione > 252) {
            msgErrore = "Nazione non valida";
        }
        return [nazione !== 0 && nazione <= 252, msgErrore];
    }

    private static validaCitta(citta: number): [boolean, string] {
        let msgErrore: string = "";
        if (citta === 0) {
            msgErrore = "Il campo è obbligatorio";
        } else if (citta > 7981) {
            msgErrore = "Citta non valida";
        }
        return [citta !== 0 && citta <= 7981, msgErrore];
    }

    private static validaProvincia(provincia: string): [boolean, string] {
        let msgErrore: string = "";
        const provinciaUtente: string = provincia.trim();
        const regex = new RegExp(`^[a-zA-Z]+\$`);
        if (provinciaUtente === "") {
            msgErrore = "Il campo è obbligatorio";
        } else if (!regex.test(provinciaUtente)) {
            msgErrore = "Provincia non valida";
        }
        return [provinciaUtente !== "" && regex.test(provinciaUtente), msgErrore];
    }

    private static validaIndirizzo(indirizzo: string): [boolean, string] {
        let msgErrore = "";
        const indirizzoUtente: string = indirizzo.trim();
        const regex = new RegExp(`^[a-zA-Z\\s'${lettereItalia}]+\$`);
        if (indirizzoUtente === "") {
            msgErrore = "Il campo è obbligatorio";
        } else if (!regex.test(indirizzoUtente)) {
            msgErrore = "Formato non corretto";
        } else if (indirizzoUtente.length > 45) {
            msgErrore = "Indirizzo troppo lungo";
        } else if (indirizzoUtente.length <= 2) {
            msgErrore = "Indirizzo troppo corto";
        }
        return [
            indirizzoUtente !== "" &&
                regex.test(indirizzoUtente) &&
                indirizzoUtente.length > 2 &&
                indirizzoUtente.length <= 45,
            msgErrore,
        ];
    }

    private static validaCivico(civico: string): [boolean, string] {
        let msgErrore = "";
        const civicoUtente: string = civico.trim();
        const regex = new RegExp(/^\d+\s?[a-zA-Z]?(?:\/\s?[a-zA-Z])?$/);
        if (civicoUtente === "") {
            msgErrore = "Il campo è obbligatorio";
        } else if (!regex.test(civicoUtente)) {
            msgErrore = "Formato non corretto";
        }
        return [civicoUtente !== "" && regex.test(civicoUtente), msgErrore];
    }

    private static validaCittadinanza(cittadinanza: string): [boolean, string] {
        let msgErrore: string = "";
        const cittadinanzaUtente: string = cittadinanza.trim();
        const regex: RegExp = new RegExp(`^[a-zA-Z\\s${lettereItalia}]+$`);
        if (cittadinanzaUtente === "") {
            msgErrore = "Il campo è obbligatorio";
        } else if (!regex.test(cittadinanzaUtente)) {
            msgErrore = "Formato non corretto";
        } else if (cittadinanzaUtente.length > 45) {
            msgErrore = "Cittadinanza troppo lungo";
        } else if (cittadinanzaUtente.length <= 2) {
            msgErrore = "Cittadinanza troppo corto";
        }
        return [
            cittadinanzaUtente !== "" &&
                regex.test(cittadinanzaUtente) &&
                cittadinanzaUtente.length > 2 &&
                cittadinanzaUtente.length <= 45,
            msgErrore,
        ];
    }

    //TODO: DA SISTEMARE
    private static validaCodFiscale(codFiscale: string): [boolean, string] {
        let msgErrore: string = "";
        const codFiscaleUtente: string = codFiscale.trim();
        const utility: Utility = new Utility();
        const controllo: boolean = utility.checkCodFiscale(codFiscaleUtente);
        if (codFiscaleUtente === "") {
            msgErrore = "Il campo è richiesto per i cittadini italiani";
        } else if (!controllo) {
            msgErrore = "Codice Fiscale non valido";
        } else if (codFiscaleUtente.length <= 2) {
            msgErrore = "Codice Fiscale troppo corto";
        } else if (codFiscaleUtente.length > 16) {
            msgErrore = "Codice Fiscale troppo lungo";
        }
        return [
            codFiscaleUtente !== "" && codFiscaleUtente.length > 2 && codFiscaleUtente.length <= 16 && controllo,
            msgErrore,
        ];
    }

    private static validaUsername(username: string): [boolean, string] {
        let msgErrore: string = "";
        const usernameUtente: string = username.trim();
        const regex: RegExp = new RegExp(`^[a-zA-Z\\d${lettereItalia}%&_!?-]+$`);
        if (usernameUtente === "") {
            msgErrore = "Il campo è obbligatorio";
        } else if (!regex.test(usernameUtente)) {
            msgErrore = "Formato non corretto";
        } else if (usernameUtente.length > 45) {
            msgErrore = "Username troppo lungo";
        } else if (usernameUtente.length <= 2) {
            msgErrore = "Username troppo corto";
        }
        return [
            usernameUtente !== "" &&
                regex.test(usernameUtente) &&
                usernameUtente.length > 2 &&
                usernameUtente.length <= 45,
            msgErrore,
        ];
    }

    private static validaEmail(email: string): [boolean, string] {
        let msgErrore: string = "";
        const emailUtente: string = email.trim();
        const regex: RegExp = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
        if (emailUtente === "") {
            msgErrore = "Il campo è obbligatorio";
        } else if (!regex.test(emailUtente)) {
            msgErrore = "Formato non corretto";
        } else if (emailUtente.length > 45) {
            msgErrore = "Email troppo lungo";
        }
        return [emailUtente !== "" && regex.test(emailUtente) && emailUtente.length <= 45, msgErrore];
    }

    private static validaPsw(psw: string): [boolean, string, number] {
        let msgErrore: string = "";
        const pswUtente: string = psw.trim();
        const utility = new Utility();
        const risultato: { percentuale: number; validita: boolean } = utility.checkPswForza(pswUtente);
        const { validita, percentuale } = risultato;
        const regex: RegExp = new RegExp(`^[a-zA-Z\\d${lettereItalia}$%&_!?-]+$`);

        if (!validita) {
            msgErrore = "La password è troppo debole";
        } else if (pswUtente === "") {
            msgErrore = "Il campo è obbligatorio";
        } else if (!regex.test(pswUtente)) {
            msgErrore = "Formato non corretto";
        } else if (pswUtente.length > 45) {
            msgErrore = "Password troppo lunga";
        } else if (pswUtente.length <= 2) {
            msgErrore = "Password troppo corta";
        }
        return [
            validita && pswUtente !== "" && regex.test(pswUtente) && pswUtente.length <= 45 && pswUtente.length > 2,
            msgErrore,
            percentuale,
        ];
    }

    private static validaPswCheck(pswCheck: string, psw: string): [boolean, string] {
        let msgErrore: string = "";
        const pswCheckUtente: string = pswCheck.trim();
        const pswUtente: string = psw.trim();
        if (pswCheckUtente === "") {
            msgErrore = "Il campo è obbligatorio";
        } else if (pswCheckUtente !== pswUtente) {
            msgErrore = "Le password non corrispondono";
        } else if (pswCheckUtente.length > 45) {
            msgErrore = "Password troppo lunga";
        } else if (pswCheckUtente.length <= 2) {
            msgErrore = "Password troppo corta";
        }
        return [
            pswCheckUtente !== "" &&
                pswCheckUtente === pswUtente &&
                pswCheckUtente.length > 2 &&
                pswCheckUtente.length <= 45,
            msgErrore,
        ];
    }

    private static validaCheckDati(checkDati: number): boolean {
        if (checkDati === 1) {
            return true;
        }
        return false;
    }
}
