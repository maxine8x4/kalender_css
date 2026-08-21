let datum = new Date();     

let datumText = datum.toLocaleDateString("de-DE", {         
    day: "2-digit",
    month: "long",
    year: "numeric"
});

document.getElementById("titel").textContent = "Kalenderblatt vom " + datumText;        


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
];


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



// Berechnung wievielter Tag im Jahr
let jahresanfang = new Date(year, 0, 1);    
let unterschied = datum - jahresanfang;     // Berechnung der Differenz zwischen dem aktuellen Datum und dem Jahresanfang in Millisekunden
let tagImJahr = Math.floor(unterschied / (1000 * 60 * 60 * 24 )) + 1;          // Berechnung des Tages im Jahr


// Berechnung der verbleibenden Tage bis zum Jahresende
let jahresende = new Date(year, 11, 31);    
let unterschiedEnde = jahresende - datum;     // Berechnung der Differenz zwischen dem aktuellen Datum und dem Jahresende in Millisekunden
let verbleibendeTage = Math.ceil(unterschiedEnde / (1000 * 60 * 60 * 24));     // Berechnung der verbleibenden Tage bis zum Jahresende


let wochentagImMonat = Math.ceil(day / 7);       // Berechnung, welcher Wochentag im Monat es ist (1. bis 7.)

let text = "Es ist der " + nummern[wievielterWochentag] + " " + wochentag + " im Monat.";       // Erstellung des Textes, der den Wochentag im Monat beschreibt



// Gesetzliche Feiertage in Deutschland

let neujahr = day === 1 && month === 1;     
let heiligeDreiKoenige = day === 6 && month === 1;     
let internationalerFrauentag = day === 8 && month === 3;     
let tagDerArbeit = day === 1 && month === 5;     
let mariaHimmelfahrt = day === 15 && month === 8;     
let tagDerDeutschenEinheit = day === 3 && month === 10;     
let weltkindertag = day === 20 && month === 9;     
let reformationstag = day === 31 && month === 10;     
let allerheiligen = day === 1 && month === 11;     
let ersterWeihnachtsfeiertag = day === 25 && month === 12;     
let zweiterWeihnachtsfeiertag = day === 26 && month === 12;     
   


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
    document.getElementById("info5").textContent = "Heute ist kein gesetzlicher Feiertag in Deutschland.";
}


document.getElementById("info1").textContent = "Der " + day + ". " + monatsname + " ist der " + nummern[wievielterWochentag] + " " + wochentag + " im Monat ";
document.getElementById("info2").textContent = "Es handelt sich um den " + tagImJahr + ". Tag des Jahres " + year + ", was bedeutet, dass es noch " + verbleibendeTage + " Tage bis zum Jahresende sind.";
document.getElementById("info4").textContent = "Der Monat " + monatsname + " hat insgesamt 31 Tage";
document.getElementById("aktuellerMonat").textContent = monatsname;