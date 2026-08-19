let datum = new Date();     // Aktuelles Datum

let datumText = datum.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric"
});

document.getElementById("titel").textContent = "Kalenderblatt vom " + datumText;

datum.getDay();
datum.getDate();
datum.getMonth();
datum.getFullYear();

let wochentage = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];

let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezmeber"
]


let nummern = [
    "",
    "erste",
    "zweite",
    "dritte",
    "vierte",
    "fünfte"
];

let day = datum.getDate();

let month = datum.getMonth() +1 ;

let monatsname = monate[datum.getMonth()]; 

let year = datum.getFullYear();

let wochentag = wochentage[datum.getDay()];

let wievielterWochentag = Math.ceil(day / 7);

let jahresanfang = new Date(year, 0, 1);

let unterschied = datum - jahresanfang;

let tagImJahr = Math.floor(unterschied / (1000 * 60 * 60 * 24 )) + 1;

let text = "Es ist der " + nummern[wievielterWochentag] + " " + wochentag + " im Monat.";

document.getElementById("info1").textContent = "Der " + day + "." + monatsname + " ist der erste " + monatsname + " des Jahres " + year;
document.getElementById("info2").textContent = "Es handelt sich um den 276. Tag des Jahres " + year + ", was bedeutet, dass es noch 89 Tage bis zum Jahresende sind.";
document.getElementById("info4").textContent = "Der Monat " + monatsname + " hat insgesamt 31 Tage";
document.getElementById("info5").textContent = "Heute ist der 'Tag der deutschen Einheit', was in Deutschland ein gesetzlicher Feiertag ist.";
