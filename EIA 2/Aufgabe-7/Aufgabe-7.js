/* Aufgabe 7
Name: M�ge Kosar
Matrikel:
Datum: 02.12.2017
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (m oder w) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        let splitted = _input.split(',');
        let StudentDat = {
            Matrikelnummer: parseInt(splitted[0]),
            Name: splitted[1],
            Vorname: splitted[2],
            Alter: parseInt(splitted[3]),
            Geschlecht: parseInt(splitted[4]) == 0,
            Kommentar: splitted[5],
        };
        if (Number.isNaN(StudentDat.Matrikelnummer)) {
            return "Matrikelnummer falsch";
        }
        students.push(StudentDat);
        return "Deine Daten: " + "\nMatrikelnr: " + StudentDat.Matrikelnummer + "\nName: " + StudentDat.Name + "\nVorname: " + StudentDat.Vorname + "\nAlter: " + StudentDat.Alter + "\nGeschlecht: " + StudentDat.Geschlecht + "\nKommentar: " + StudentDat.Kommentar;
    }
    function queryData(_matrikel) {
        for (let i = 0; i < students.length; i++) {
            if (students[i].Matrikelnummer == _matrikel) {
                return "Deine Daten: " + "\nMatrikelnr: " + students[i].Matrikelnummer + "\nName: " + students[i].Name + "\nVorname: " + students[i].Vorname + "\nAlter: " + students[i].Alter + "\nGeschlecht: " + students[i].Geschlecht + "\nKommentar: " + students[i].Kommentar;
            }
        }
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=Aufgabe-7.js.map