import { CsvController } from "../class/CsvController.js";

// ID della dropdownlist da popolare
const idSelect = "nazione";

try {
    const csvController = new CsvController();
    // Popola la dropdownlist con i dati dei comuni
    csvController.indexNazioni(idSelect);
} catch (error) {
    console.error("NC-0" + error);
}
