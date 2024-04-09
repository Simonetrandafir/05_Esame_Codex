export class Utility {
    calcolaRisultato(scelta, base, altezza) {
        if (scelta === "area") {
            return base * altezza;
        }
        else if (scelta === "perimetro") {
            return 2 * (base + altezza);
        }
        else {
            console.log("Scelta non valida. Si prega di inserire 'area' o 'perimetro'.");
            return null;
        }
    }
    pariDispari(numero) {
        if (numero % 2 === 0) {
            return "pari";
        }
        else {
            return "dispari";
        }
    }
    sommaNumeri_0_N(N) {
        let somma = 0;
        for (let i = 0; i <= N; i++) {
            somma += i;
        }
        return somma;
    }
    trovaMinore(...numeri) {
        if (numeri.length === 1) {
            throw new Error("Devi fornire almeno due numero.");
        }
        let minimo = numeri[0];
        for (let i = 1; i < numeri.length; i++) {
            if (numeri[i] < minimo) {
                minimo = numeri[i];
            }
        }
        return minimo;
    }
    ordinaArrayNumeri(array) {
        return array.slice().sort((a, b) => a - b);
    }
    checkCodFiscale(codFiscale) {
        return this.controllaCodFiscale(codFiscale);
    }
    controllaCodFiscale(codiceFiscale) {
        if (codiceFiscale.length !== 16) {
            return false;
        }
        const annoNascita = parseInt(codiceFiscale.substring(6, 8));
        if (isNaN(annoNascita)) {
            return false;
        }
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
            return false;
        }
        let giornoNascita = parseInt(codiceFiscale.substring(9, 11));
        if (isNaN(giornoNascita)) {
            return false;
        }
        const comuneNascita = codiceFiscale.substring(11, 15).toUpperCase();
        const regexComune = /^[A-Z]\d{3}$/;
        const regexStatoEstero = /^Z\d{3}$/;
        if (!regexComune.test(comuneNascita) && !regexStatoEstero.test(comuneNascita)) {
            return false;
        }
        function calcolaCarattereControllo(codiceFiscale) {
            const dispari = {
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
            const pari = {
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
            let sommaDispari = 0;
            let sommaPari = 0;
            for (let i = 0; i < codiceFiscale.length - 1; i++) {
                const carattere = codiceFiscale[i].toUpperCase();
                if (i % 2 === 0) {
                    sommaDispari += dispari[carattere];
                }
                else {
                    sommaPari += pari[carattere];
                }
            }
            const resto = (sommaDispari + sommaPari) % 26;
            const carattereControllo = String.fromCharCode(65 + resto);
            return carattereControllo;
        }
        const carattereControllo = calcolaCarattereControllo(codiceFiscale);
        if (codiceFiscale.substring(15, 16) !== carattereControllo) {
            return false;
        }
        const indiceLettere = [0, 1, 2, 3, 4, 5, 8, 11, 15];
        const indiceNumeri = [6, 7, 9, 10, 12, 13, 14];
        for (const indice of indiceLettere) {
            const carattere = codiceFiscale.charAt(indice);
            if (!isNaN(parseInt(carattere))) {
                return false;
            }
        }
        for (const indice of indiceNumeri) {
            const carattere = codiceFiscale.charAt(indice);
            if (isNaN(parseInt(carattere))) {
                return false;
            }
        }
        return true;
    }
    checkPswForza(psw) {
        return this.checkForza(psw);
    }
    checkForza(psw) {
        let x = 0;
        const controlloPsw = [/^.{8,45}$/, /[0-9]/, /[a-z]/, /[A-Z]/, /[$-/:-?{-~!"^_`\[\]]/];
        const nControlli = controlloPsw.length;
        let incremento = 100 / nControlli;
        const password = psw.trim();
        let controllo = /\s\S/;
        if (controllo.test(password)) {
            x = 0;
        }
        else {
            for (let i = 0; i < nControlli; i++) {
                controllo = controlloPsw[i];
                if (controllo.test(password)) {
                    x = x + incremento;
                }
            }
        }
        const validita = x > 40;
        return { percentuale: x, validita };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXRpbGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1RTL2NsYXNzL1V0aWxpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0EsTUFBTSxPQUFPLE9BQU87SUFTUixnQkFBZ0IsQ0FBQyxNQUFjLEVBQUUsSUFBWSxFQUFFLE9BQWU7UUFDbEUsSUFBSSxNQUFNLEtBQUssTUFBTSxFQUFFLENBQUM7WUFDcEIsT0FBTyxJQUFJLEdBQUcsT0FBTyxDQUFDO1FBQzFCLENBQUM7YUFBTSxJQUFJLE1BQU0sS0FBSyxXQUFXLEVBQUUsQ0FBQztZQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQztRQUNoQyxDQUFDO2FBQU0sQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0RBQStELENBQUMsQ0FBQztZQUM3RSxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO0lBQ0wsQ0FBQztJQVFPLFdBQVcsQ0FBQyxNQUFjO1FBQzlCLElBQUksTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUNuQixPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDO2FBQU0sQ0FBQztZQUNKLE9BQU8sU0FBUyxDQUFDO1FBQ3JCLENBQUM7SUFDTCxDQUFDO0lBUU8sZUFBZSxDQUFDLENBQVM7UUFDN0IsSUFBSSxLQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMxQixLQUFLLElBQUksQ0FBQyxDQUFDO1FBQ2YsQ0FBQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFRTyxXQUFXLENBQUMsR0FBRyxNQUFnQjtRQUNuQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDdEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFD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Q0FBQztnQkFDSixDQUFDLEVBQUUsRUFBRTtnQkFDTCxDQUFDLEVBQUUsRUFBRTtnQkFDTCxHQUFHLEVBQUUsQ0FBQztnQkFDTixDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsRUFBRTtnQkFDTCxHQUFHLEVBQUUsQ0FBQztnQkFDTixDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsRUFBRTtnQkFDTCxHQUFHLEVBQUUsQ0FBQztnQkFDTixDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsRUFBRTtnQkFDTCxDQUFDLEVBQUUsRUFBRTtnQkFDTCxHQUFHLEVBQUUsRUFBRTtnQkFDUCxDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsRUFBRTtnQkFDTCxDQUFDLEVBQUUsRUFBRTtnQkFDTCxHQUFHLEVBQUUsRUFBRTtnQkFDUCxDQUFDLEVBQUUsRUFBRTtnQkFDTCxDQUFDLEVBQUUsRUFBRTtnQkFDTCxDQUFDLEVBQUUsRUFBRTtnQkFDTCxHQUFHLEVBQUUsRUFBRTtnQkFDUCxDQUFDLEVBQUUsRUFBRTtnQkFDTCxDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsRUFBRTtnQkFDTCxHQUFHLEVBQUUsRUFBRTtnQkFDUCxDQUFDLEVBQUUsRUFBRTtnQkFDTCxDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsRUFBRTthQUNSLENBQUM7WUFFRixNQUFNLElBQUksR0FBOEI7Z0JBQ3BDLEdBQUcsRUFBRSxDQUFDO2dCQUNOLEdBQUcsRUFBRSxDQUFDO2dCQUNOLENBQUMsRUFBRSxDQUFDO2dCQUNKLENBQUMsRUFBRSxFQUFFO2dCQUNMLEdBQUcsRUFBRSxDQUFDO2dCQUNOLENBQUMsRUFBRSxDQUFDO2dCQUNKLENBQUMsRUFBRSxDQUFDO2dCQUNKLENBQUMsRUFBRSxFQUFFO2dCQUNMLEdBQUcsRUFBRSxDQUFDO2dCQUNOLENBQUMsRUFBRSxDQUFDO2dCQUNKLENBQUMsRUFBRSxFQUFFO2dC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