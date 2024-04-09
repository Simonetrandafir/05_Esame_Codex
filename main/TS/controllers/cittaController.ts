import { CsvController } from "../class/CsvController.js";

// ID della dropdownlist da popolare
const idSelect = "citta";

try {
    const csvController = new CsvController();
    // Popola la dropdownlist con i dati dei comuni
    csvController.indexCitta(idSelect);
} catch (error) {
    console.error("CC-0" + error);
}
