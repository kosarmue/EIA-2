/* Aufgabe 7
Name: Müge Kosar
Matrikel: 
Datum: 02.12.2017
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. 
*/

namespace StudiVZ {
    interface StudentData {
        Matrikelnummer: number;
        Name: string;
        Vorname: string;
        Alter: number;
        Geschlecht: boolean;
        Kommentar: string;
    }
    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (m oder w) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {

        let splitted: string[] = _input.split(',');

        let StudentDat: StudentData = {

            Matrikelnummer: parseInt(splitted[0]),
            Name: splitted[1],
            Vorname: splitted[2],
            Alter: parseInt(splitted[3]),
            Geschlecht: parseInt(splitted[4]) == 0,
            Kommentar: splitted[5],

        }

        if (Number.isNaN(StudentDat.Matrikelnummer)) {

            return "Matrikelnummer falsch";

        }

        students.push(StudentDat);

        return "Deine Daten: " + "\nMatrikelnr: " + StudentDat.Matrikelnummer + "\nName: " + StudentDat.Name + "\nVorname: " + StudentDat.Vorname + "\nAlter: " + StudentDat.Alter + "\nGeschlecht: " + StudentDat.Geschlecht + "\nKommentar: " + StudentDat.Kommentar;
    }



    function queryData(_matrikel: number): string {

        for (let i: number = 0; i < students.length; i++) {

            if (students[i].Matrikelnummer == _matrikel) {

                return "Deine Daten: " + "\nMatrikelnr: " + students[i].Matrikelnummer + "\nName: " + students[i].Name + "\nVorname: " + students[i].Vorname + "\nAlter: " + students[i].Alter + "\nGeschlecht: " + students[i].Geschlecht + "\nKommentar: " + students[i].Kommentar;

            }

        }
    }
}