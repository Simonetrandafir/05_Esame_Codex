export class CsvController {
    async indexCitta(idSelect) {
        return await this.popolaComuniOrdinato(idSelect);
    }
    async indexProvincia(idSelect) {
        return await this.popolaProvinciaOrdinato(idSelect);
    }
    async indexNazioni(idSelect) {
        return await this.popolaNazioneOrdinata(idSelect);
    }
    async leggiCsvNazioni(url) {
        const risposta = await fetch(url);
        const csvText = await risposta.text();
        const righe = csvText.split("\n").slice(0, -1);
        const blocchi = [];
        try {
            if (!risposta.ok) {
                throw new Error("CSV-N0");
            }
            else {
                for (let i = 0; i < righe.length; i += 50) {
                    const blocco = [];
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
        }
        catch (error) {
            console.error("L-CSV-N", error);
        }
        return blocchi;
    }
    async leggiCSVComuni(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("CSV-C0");
            }
            const csvText = await response.text();
            const rows = csvText.split("\n").slice(0, -1);
            const blocchi = [];
            let blocco = [];
            for (let i = 0; i < rows.length; i++) {
                const fields = rows[i].split(",");
                const [idComuneItalia, nome, regione, metropolitana, provincia, siglaAuto, codCatastale, capoluogo, multiCap, cap, capInizio, capFine,] = fields;
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
                if (blocco.length === 50 || i === rows.length - 1) {
                    blocchi.push(blocco);
                    blocco = [];
                }
            }
            return blocchi;
        }
        catch (error) {
            console.error("L-CSV-C", error);
            throw error;
        }
    }
    async popolaNazioneOrdinata(idSelect) {
        try {
            const dropdownlist = document.getElementById(idSelect);
            if (!dropdownlist || dropdownlist.options.length > 1) {
                return;
            }
            const url = "./assets/storage/csv/nazioni.csv";
            const blocchi = await this.leggiCsvNazioni(url);
            if (!blocchi) {
                throw new Error("CSV-N1");
            }
            blocchi.flat().forEach((nazione) => {
                const option = document.createElement("option");
                option.value = nazione.idNazione.toString();
                option.textContent = nazione.nome;
                dropdownlist.appendChild(option);
            });
        }
        catch (error) {
            console.error(`Errore durante il popolamento della select delle nazioni: ${error}`);
        }
    }
    async popolaComuniOrdinato(selectId) {
        try {
            const dropdownlist = document.getElementById(selectId);
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
        }
        catch (error) {
            console.error(`Errore durante il popolamento della select: ${error}`);
        }
    }
    async popolaProvinciaOrdinato(selectId) {
        try {
            const dropdownlist = document.getElementById(selectId);
            if (!dropdownlist || dropdownlist.options.length > 1) {
                return;
            }
            const urlComuni = "./assets/storage/csv/comuniItaliani.csv";
            const blocchi = await this.leggiCSVComuni(urlComuni);
            if (!blocchi) {
                throw new Error("CSV-C2");
            }
            const provinceSet = new Set();
            blocchi.flat().forEach((comune) => {
                provinceSet.add(comune.metropolitana || comune.provincia);
            });
            const provinceOrdinate = Array.from(provinceSet).sort();
            provinceOrdinate.forEach((provincia) => {
                const option = document.createElement("option");
                option.value = provincia;
                option.textContent = provincia;
                dropdownlist.appendChild(option);
            });
        }
        catch (error) {
            console.error(`Errore durante il popolamento della select delle province: ${error}`);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3N2Q29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1RTL2NsYXNzL0NzdkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYUEsTUFBTSxPQUFPLGFBQWE7SUFTZixLQUFLLENBQUMsVUFBVSxDQUFDLFFBQWdCO1FBQ3BDLE9BQU8sTUFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQVNNLEtBQUssQ0FBQyxjQUFjLENBQUMsUUFBZ0I7UUFDeEMsT0FBTyxNQUFNLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBU00sS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFnQjtRQUN0QyxPQUFPLE1BQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFhTyxLQUFLLENBQUMsZUFBZSxDQUFDLEdBQVc7UUFDckMsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsTUFBTSxPQUFPLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEMsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFL0MsTUFBTSxPQUFPLEdBQWdCLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUM7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUIsQ0FBQztpQkFBTSxDQUFDO2dCQUNKLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztv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