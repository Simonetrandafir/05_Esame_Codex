import { CsvController } from "../class/CsvController.js";

// ID della dropdownlist da popolare
const idSelect = "provinciaNascita";

try {
    const csvController = new CsvController();
    // Popola la dropdownlist con i dati dei comuni
    csvController.indexProvincia(idSelect);
} catch (error) {
    console.error("PC-0" + error);
}
