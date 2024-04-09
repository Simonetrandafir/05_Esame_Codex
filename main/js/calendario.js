let currentDate = new Date(); // Data corrente
let months = [
    'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
    'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'
];
// letiabili globali per memorizzare lo stato del mese e dell'anno corrente
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
// Funzione per generare il calendario per un dato mese e anno
function generateWeekdays() {
    let weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let weekRow = document.createElement('div');
    weekRow.className = 'row';

    for (let i = 0; i < 7; i++) {
        let dayName = document.createElement('div');
        dayName.className = 'col border text-center py-3';
        dayName.textContent = weekdays[i];
        weekRow.appendChild(dayName);
    }

    return weekRow;
}

function generateMonthDays(year, month, currentYear, currentMonth, currentDate) {
    let firstDayOfMonth = new Date(year, month, 1).getDay(); // Ottiene il giorno della settimana del primo giorno del mese
    let daysInMonth = new Date(year, month + 1, 0).getDate(); // Ottiene il numero di giorni nel mese
    let dayCounter = 1;
    let calendar = document.getElementById('calendar');

    for (let i = 0; i < 6; i++) {
        let row = document.createElement('div');
        row.className = 'row';

        for (let j = 0; j < 7; j++) {
            let dayElement = document.createElement('div');
            dayElement.className = 'col border text-center py-3';

            if (i === 0 && j < firstDayOfMonth) {
                dayElement.textContent = '';
            } else if (dayCounter > daysInMonth) {
                dayElement.textContent = '';
            } else {
                dayElement.textContent = dayCounter;

                if (year === currentYear && month === currentMonth && dayCounter === currentDate.getDate()) {
                    dayElement.classList.add('current-day');
                } else {
                    dayElement.classList.remove('current-day');
                    dayElement.classList.add('day');
                }

                dayCounter++;
            }
            row.appendChild(dayElement);
        }
        calendar.appendChild(row);
    }
}

function generateCalendar(year, month) {
    let calendar = document.getElementById('calendar');
    calendar.innerHTML = ''; // Pulisce il contenuto precedente del calendario

    let weekRow = generateWeekdays();
    calendar.appendChild(weekRow);

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();

    document.getElementById('currentMonth').textContent = months[month] + ' ' + year;

    generateMonthDays(year, month, currentYear, currentMonth, currentDate);
}
// Esegui la funzione quando il documento è pronto
document.addEventListener('DOMContentLoaded', function () {
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth()); // Genera il calendario iniziale
    // Aggiungi un listener per il click sul pulsante "Mese precedente"
    document.getElementById('prevMonth').addEventListener('click', function () {
        currentDate.setMonth(currentDate.getMonth() - 1); // Sposta al mese precedente
        generateCalendar(currentDate.getFullYear(), currentDate.getMonth()); // Genera il calendario per il nuovo mese
    });
    // Aggiungi un listener per il click sul pulsante "Mese successivo"
    document.getElementById('nextMonth').addEventListener('click', function () {
        currentDate.setMonth(currentDate.getMonth() + 1); // Sposta al mese successivo
        generateCalendar(currentDate.getFullYear(), currentDate.getMonth()); // Genera il calendario per il nuovo mese
    });
});