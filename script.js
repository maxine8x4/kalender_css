let datum = new Date();     // Aktuelles Datum

let datumText = datum.toLocaleDateString("de-DE", {         // Formatierung des Datums in deutscher Schreibweise
    day: "2-digit",
    month: "long",
    year: "numeric"
});

document.getElementById("titel").textContent = "Kalenderblatt vom " + datumText;        // Anzeige des aktuellen Datums im Titel

datum.getDay();     // Ermittlung des Wochentags (0 = Sonntag, 1 = Montag, ..., 6 = Samstag)
datum.getDate();     // Ermittlung des aktuellen Tages im Monat (1 bis 31)
datum.getMonth();       // Ermittlung des aktuellen Monats (0 = Januar, 1 = Februar, ..., 11 = Dezember)
datum.getFullYear();        // Ermittlung des aktuellen Jahres

let wochentage = [      // Array zur Darstellung der Wochentage
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];

let monate = [      // Array zur Darstellung der Monatsnamen
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


let nummern = [     // Array zur Darstellung der Wochentage im Monat
    "",
    "erste",
    "zweite",
    "dritte",
    "vierte",
    "fünfte"
];

let day = datum.getDate();      // Ermittlung des aktuellen Tages im Monat (1 bis 31)
let month = datum.getMonth() +1 ;       // Ermittlung des aktuellen Monats
let monatsname = monate[datum.getMonth()];  // Ermittlung des aktuellen Monatsnamens
let year = datum.getFullYear();     // Ermittlung des aktuellen Jahres
let wochentag = wochentage[datum.getDay()];     // Ermittlung des Wochentags (0 = Sonntag, 1 = Montag, ..., 6 = Samstag)
let wievielterWochentag = Math.ceil(day / 7);       // Berechnung, welcher Wochentag im Monat es ist (1. bis 7.)

let jahresanfang = new Date(year, 0, 1);    // Erster Tag des Jahres (1. Januar)
let unterschied = datum - jahresanfang;     // Berechnung der Differenz zwischen dem aktuellen Datum und dem Jahresanfang in Millisekunden
let tagImJahr = Math.floor(unterschied / (1000 * 60 * 60 * 24 )) + 1;          // Berechnung des Tages im Jahr

let jahresende = new Date(year, 11, 31);    // Letzter Tag des Jahres (31. Dezember)
let unterschiedEnde = jahresende - datum;     // Berechnung der Differenz zwischen dem aktuellen Datum und dem Jahresende in Millisekunden
let verbleibendeTage = Math.ceil(unterschiedEnde / (1000 * 60 * 60 * 24));     // Berechnung der verbleibenden Tage bis zum Jahresende

let wochentagImMonat = Math.ceil(day / 7);       // Berechnung, welcher Wochentag im Monat es ist (1. bis 7.)

let text = "Es ist der " + nummern[wievielterWochentag] + " " + wochentag + " im Monat.";       // Erstellung des Textes, der den Wochentag im Monat beschreibt

// Gesetzliche Feiertage in Deutschland
let neujahr = day === 1 && month === 1;     // Überprüfung, ob es sich um den 1. Januar handelt (Neujahr)
let heiligeDreiKoenige = day === 6 && month === 1;     // Überprüfung, ob es sich um den 6. Januar handelt (Heilige Drei Könige)
let internationalerFrauentag = day === 8 && month === 3;     // Überprüfung, ob es sich um den 8. März handelt (Internationaler Frauentag)
let tagDerArbeit = day === 1 && month === 5;     // Überprüfung, ob es sich um den 1. Mai handelt (Tag der Arbeit)
let mariaHimmelfahrt = day === 15 && month === 8;     // Überprüfung, ob es sich um den 15. August handelt (Mariä Himmelfahrt)
let tagDerDeutschenEinheit = day === 3 && month === 10;     // Überprüfung, ob es sich um den 3. Oktober handelt (Tag der Deutschen Einheit)
let weltkindertag = day === 20 && month === 9;     // Überprüfung, ob es sich um den 20. September handelt (Weltkindertag)
let reformationstag = day === 31 && month === 10;     // Überprüfung, ob es sich um den 31. Oktober handelt (Reformationstag)
let allerheiligen = day === 1 && month === 11;     // Überprüfung, ob es sich um den 1. November handelt (Allerheiligen)
let ersterWeihnachtsfeiertag = day === 25 && month === 12;     // Überprüfung, ob es sich um den 25. Dezember handelt (Erster Weihnachtsfeiertag)
let zweiterWeihnachtsfeiertag = day === 26 && month === 12;     // Überprüfung, ob es sich um den 26. Dezember handelt (Zweiter Weihnachtsfeiertag)
   

if (neujahr) {
        document.getElementById("info5").textContent = "Heute ist 'Neujahr', was in Deutschland ein gesetzlicher Feiertag ist.";
}
else if (heiligeDreiKoenige) {
        document.getElementById("info5").textContent = "Heute ist 'Heilige Drei Könige', was in Baden-Württemberg, Bayern und Sachsen-Anhalt ein gesetzlicher Feiertag ist.";
}
else if (internationalerFrauentag) {
        document.getElementById("info5").textContent = "Heute ist 'Internationaler Frauentag', was in Berlin und Mecklenburg-Vorpommern ein gesetzlicher Feiertag ist.";
}
else if (tagDerArbeit) {
        document.getElementById("info5").textContent = "Heute ist 'der Tag der Arbeit', was in Saarland und teilweise in Bayern ein gesetzlicher Feiertag ist.";
}
else if (mariaHimmelfahrt) {
        document.getElementById("info5").textContent = "Heute ist 'Mariä Himmelfahrt', was in Bayern und Saarland ein gesetzlicher Feiertag ist.";
}
else if (tagDerDeutschenEinheit) {
        document.getElementById("info5").textContent = "Heute ist 'der Tag der Deutschen Einheit', was in Deutschland ein gesetzlicher Feiertag ist.";
}
else if (weltkindertag) {
        document.getElementById("info5").textContent = "Heute ist 'Weltkindertag', was in Thüringen ein gesetzlicher Feiertag ist.";
}
else if (reformationstag) {
        document.getElementById("info5").textContent = "Heute ist 'Reformationstag', was in Brandenburg, Bremen, Hamburg, Mecklenburg-Vorpommern, Niedersachsen, Sachsen, Sachsen-Anhalt, Schleswig-Holstein und Thüringen ein gesetzlicher Feiertag ist.";
}
else if (allerheiligen) {
        document.getElementById("info5").textContent = "Heute ist 'Allerheiligen', was in Baden-Württemberg, Bayern, Nordrhein-Westfalen, Rheinland-Pfalz und Saarland ein gesetzlicher Feiertag ist.";
}
else if (ersterWeihnachtsfeiertag) {
        document.getElementById("info5").textContent = "Heute ist 'der erste Weihnachtsfeiertag', was in Deutschland ein gesetzlicher Feiertag ist.";
}
else if (zweiterWeihnachtsfeiertag) {
        document.getElementById("info5").textContent = "Heute ist 'der zweite Weihnachtsfeiertag', was in Deutschland ein gesetzlicher Feiertag ist.";
}
else {
    document.getElementById("info5").textContent = "Heute ist kein gesetzlicher Feiertag.";
}

document.getElementById("info1").textContent = "Der " + day + ". " + monatsname + " ist der " + nummern[wievielterWochentag] + " " + wochentag + " im Monat ";
document.getElementById("info2").textContent = "Es handelt sich um den " + tagImJahr + ". Tag des Jahres " + year + ", was bedeutet, dass es noch " + verbleibendeTage + " Tage bis zum Jahresende sind.";
document.getElementById("info4").textContent = "Der Monat " + monatsname + " hat insgesamt 31 Tage";