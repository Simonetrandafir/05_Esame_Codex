import { Errori } from "./Errori.js";
import { Utility } from "./Utility.js";
const lettereItalia = "àòèéìù";
export class ValidaDati {
    static controlloCampiRec(datiInput) {
        return this.gestisciControllo(datiInput);
    }
    static gestisciControllo(datiInput) {
        let risult = false;
        try {
            const datiValue = {
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
            campiDaValidare.forEach((campo) => {
                classErrori.gestisciErrore([campo.test, campo.errore], campo.input);
            });
            classErrori.gestisciErrorePsw([testPsw, errorePsw, percentuale], datiInput.psw);
            classErrori.gestisciCheckDati(valoreCheckDati, datiInput.checkDati);
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
            }
            else {
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
        }
        catch (error) {
            console.error("GC", error);
        }
        return risult;
    }
    static validaNome(nome) {
        let msgErrore = "";
        const nomeUtente = nome.trim();
        const regex = new RegExp(`^[a-zA-Z\\s'${lettereItalia}]+\$`);
        if (nomeUtente === "") {
            msgErrore = "Il campo è obbligatorio";
        }
        else if (!regex.test(nomeUtente)) {
            msgErrore = "Sono consentite solo lettere";
        }
        else if (nomeUtente.length > 45) {
            msgErrore = "Nome troppo lungo";
        }
        else if (nomeUtente.length <= 2) {
            msgErrore = "Nome troppo corto";
        }
        return [
            nomeUtente !== "" && nomeUtente.length > 2 && regex.test(nomeUtente) && nomeUtente.length <= 45,
            msgErrore,
        ];
    }
    static validaCognome(cognome) {
        let msgErrore = "";
        const cognomeUtente = cognome.trim();
        const regex = new RegExp(`^[a-zA-Z\\s'${lettereItalia}]+\$`);
        if (cognomeUtente === "") {
            msgErrore = "Il campo è obbligatorio";
        }
        else if (!regex.test(cognomeUtente)) {
            msgErrore = "Sono consentite solo lettere";
        }
        else if (cognomeUtente.length > 45) {
            msgErrore = "Cognome troppo lungo";
        }
        else if (cognomeUtente.length <= 2) {
            msgErrore = "Cognome troppo corto";
        }
        return [
            cognomeUtente !== "" && cognomeUtente.length > 2 && regex.test(cognomeUtente) && cognomeUtente.length <= 45,
            msgErrore,
        ];
    }
    static validaData(dataNascita) {
        let msgErrore = "";
        const dataUtente = dataNascita.trim();
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        if (dataUtente === "") {
            msgErrore = "Il campo è obbligatorio";
        }
        else if (!regex.test(dataUtente)) {
            msgErrore = "Formato non corretto";
        }
        return [dataUtente !== "" && regex.test(dataUtente), msgErrore];
    }
    static validaNazione(nazione) {
        let msgErrore = "";
        if (nazione === 0) {
            msgErrore = "Il campo è obbligatorio";
        }
        else if (nazione > 252) {
            msgErrore = "Nazione non valida";
        }
        return [nazione !== 0 && nazione <= 252, msgErrore];
    }
    static validaCitta(citta) {
        let msgErrore = "";
        if (citta === 0) {
            msgErrore = "Il campo è obbligatorio";
        }
        else if (citta > 7981) {
            msgErrore = "Citta non valida";
        }
        return [citta !== 0 && citta <= 7981, msgErrore];
    }
    static validaProvincia(provincia) {
        let msgErrore = "";
        const provinciaUtente = provincia.trim();
        const regex = new RegExp(`^[a-zA-Z]+\$`);
        if (provinciaUtente === "") {
            msgErrore = "Il campo è obbligatorio";
        }
        else if (!regex.test(provinciaUtente)) {
            msgErrore = "Provincia non valida";
        }
        return [provinciaUtente !== "" && regex.test(provinciaUtente), msgErrore];
    }
    static validaIndirizzo(indirizzo) {
        let msgErrore = "";
        const indirizzoUtente = indirizzo.trim();
        const regex = new RegExp(`^[a-zA-Z\\s'${lettereItalia}]+\$`);
        if (indirizzoUtente === "") {
            msgErrore = "Il campo è obbligatorio";
        }
        else if (!regex.test(indirizzoUtente)) {
            msgErrore = "Formato non corretto";
        }
        else if (indirizzoUtente.length > 45) {
            msgErrore = "Indirizzo troppo lungo";
        }
        else if (indirizzoUtente.length <= 2) {
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
    static validaCivico(civico) {
        let msgErrore = "";
        const civicoUtente = civico.trim();
        const regex = new RegExp(/^\d+\s?[a-zA-Z]?(?:\/\s?[a-zA-Z])?$/);
        if (civicoUtente === "") {
            msgErrore = "Il campo è obbligatorio";
        }
        else if (!regex.test(civicoUtente)) {
            msgErrore = "Formato non corretto";
        }
        return [civicoUtente !== "" && regex.test(civicoUtente), msgErrore];
    }
    static validaCittadinanza(cittadinanza) {
        let msgErrore = "";
        const cittadinanzaUtente = cittadinanza.trim();
        const regex = new RegExp(`^[a-zA-Z\\s${lettereItalia}]+$`);
        if (cittadinanzaUtente === "") {
            msgErrore = "Il campo è obbligatorio";
        }
        else if (!regex.test(cittadinanzaUtente)) {
            msgErrore = "Formato non corretto";
        }
        else if (cittadinanzaUtente.length > 45) {
            msgErrore = "Cittadinanza troppo lungo";
        }
        else if (cittadinanzaUtente.length <= 2) {
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
    static validaCodFiscale(codFiscale) {
        let msgErrore = "";
        const codFiscaleUtente = codFiscale.trim();
        const utility = new Utility();
        const controllo = utility.checkCodFiscale(codFiscaleUtente);
        if (codFiscaleUtente === "") {
            msgErrore = "Il campo è richiesto per i cittadini italiani";
        }
        else if (!controllo) {
            msgErrore = "Codice Fiscale non valido";
        }
        else if (codFiscaleUtente.length <= 2) {
            msgErrore = "Codice Fiscale troppo corto";
        }
        else if (codFiscaleUtente.length > 16) {
            msgErrore = "Codice Fiscale troppo lungo";
        }
        return [
            codFiscaleUtente !== "" && codFiscaleUtente.length > 2 && codFiscaleUtente.length <= 16 && controllo,
            msgErrore,
        ];
    }
    static validaUsername(username) {
        let msgErrore = "";
        const usernameUtente = username.trim();
        const regex = new RegExp(`^[a-zA-Z\\d${lettereItalia}%&_!?-]+$`);
        if (usernameUtente === "") {
            msgErrore = "Il campo è obbligatorio";
        }
        else if (!regex.test(usernameUtente)) {
            msgErrore = "Formato non corretto";
        }
        else if (usernameUtente.length > 45) {
            msgErrore = "Username troppo lungo";
        }
        else if (usernameUtente.length <= 2) {
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
    static validaEmail(email) {
        let msgErrore = "";
        const emailUtente = email.trim();
        const regex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
        if (emailUtente === "") {
            msgErrore = "Il campo è obbligatorio";
        }
        else if (!regex.test(emailUtente)) {
            msgErrore = "Formato non corretto";
        }
        else if (emailUtente.length > 45) {
            msgErrore = "Email troppo lungo";
        }
        return [emailUtente !== "" && regex.test(emailUtente) && emailUtente.length <= 45, msgErrore];
    }
    static validaPsw(psw) {
        let msgErrore = "";
        const pswUtente = psw.trim();
        const utility = new Utility();
        const risultato = utility.checkPswForza(pswUtente);
        const { validita, percentuale } = risultato;
        const regex = new RegExp(`^[a-zA-Z\\d${lettereItalia}$%&_!?-]+$`);
        if (!validita) {
            msgErrore = "La password è troppo debole";
        }
        else if (pswUtente === "") {
            msgErrore = "Il campo è obbligatorio";
        }
        else if (!regex.test(pswUtente)) {
            msgErrore = "Formato non corretto";
        }
        else if (pswUtente.length > 45) {
            msgErrore = "Password troppo lunga";
        }
        else if (pswUtente.length <= 2) {
            msgErrore = "Password troppo corta";
        }
        return [
            validita && pswUtente !== "" && regex.test(pswUtente) && pswUtente.length <= 45 && pswUtente.length > 2,
            msgErrore,
            percentuale,
        ];
    }
    static validaPswCheck(pswCheck, psw) {
        let msgErrore = "";
        const pswCheckUtente = pswCheck.trim();
        const pswUtente = psw.trim();
        if (pswCheckUtente === "") {
            msgErrore = "Il campo è obbligatorio";
        }
        else if (pswCheckUtente !== pswUtente) {
            msgErrore = "Le password non corrispondono";
        }
        else if (pswCheckUtente.length > 45) {
            msgErrore = "Password troppo lunga";
        }
        else if (pswCheckUtente.length <= 2) {
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
    static validaCheckDati(checkDati) {
        if (checkDati === 1) {
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhRGF0aS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1RTL2NsYXNzL1ZhbGlkYURhdGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNyQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXZDLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQztBQUUvQixNQUFNLE9BQU8sVUFBVTtJQUNaLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxTQUFtQjtRQUMvQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU8sTUFBTSxDQUFDLGlCQUFpQixDQUFDLFNBQW1CO1FBQ2hELElBQUksTUFBTSxHQUFZLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUM7WUFDRCxNQUFNLFNBQVMsR0FBYTtnQkFDeEIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSztnQkFDMUIsT0FBTyxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSztnQkFDaEMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSztnQkFDeEMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDMUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztnQkFDdEMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSztnQkFDcEMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSztnQkFDcEMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSztnQkFDOUIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxZQUFZLENBQUMsS0FBSztnQkFDMUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSztnQkFDdEMs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