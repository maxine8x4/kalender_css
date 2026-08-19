let datum1 = new Date();     // Aktuelles Datum
datum = datum.toLocaleDateString("de-DE", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
});
document.getElementById("titel").textContent = "Kalenderblatt vom " + datum;

let day = datum.split(" ")[1];
let month = datum.split(" ")[2];
let year = datum.split(" ")[3];


let datum2 = new Date(2026, 0, 1);      // 1. Januar 2026
let summe = calculate(datum1 - datum2);     // Berechnung wievielter Tag im Jahr


document.getElementById("info1").textContent = "Der " + day + " " + month + " ist der erste " + firstDayOfMonthName + " im Monat " + month + " des Jahres " + year;
document.getElementById("info2").textContent = "Es handelt sich um den 276. Tag des Jahres " + year + ", was bedeutet, dass es noch 89 Tage bis zum Jahresende sind.";
document.getElementById("info4").textContent = "Der Monat " + month + " hat insgesamt 31 Tage";
document.getElementById("info5").textContent = "Heute ist der 'Tag der deutschen Einheit', was in Deutschland ein gesetzlicher Feiertag ist.";
