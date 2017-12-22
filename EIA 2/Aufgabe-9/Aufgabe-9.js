/* Aufgabe 9
Name: M�ge Kosar
Matrikel: 256213
Datum: 15.12.2017
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe9;
(function (Aufgabe9) {
    window.addEventListener("load", init);
    window.addEventListener("keydown", handleKeyDown);
    let word = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let letter = [];
    let selectedLetter;
    function init(_event) {
        //Startwert der Variable setzen, Durchlaufbedingung,Operation auf Variable ausf�hren
        for (let i = 0; i < word.length; i++) {
            let tempLetter = document.createElement("div");
            tempLetter.style.backgroundColor = "#DB7093";
            tempLetter.style.border = "1px solid #000000";
            tempLetter.style.textAlign = "center";
            tempLetter.style.width = "2.5em";
            tempLetter.style.height = "2.5em";
            tempLetter.style.margin = "0.4em";
            tempLetter.style.paddingTop = "1em";
            tempLetter.style.display = "inline-block";
            tempLetter.innerText = word[i];
            tempLetter.addEventListener("mousedown", selectLetter);
            document.body.appendChild(tempLetter);
            //am ende vom array hinzugef�gt
            letter.push(tempLetter);
        }
        let paper = document.createElement("div");
        paper.id = "paper";
        paper.style.width = "60em";
        paper.style.height = "30em";
        paper.style.paddingTop = "2em";
        paper.style.marginLeft = "1em";
        paper.style.backgroundColor = "black";
        paper.addEventListener("mousedown", placeLetter);
        document.body.appendChild(paper);
    }
    //funktion f�r gedr�ckten Buchstaben
    function handleKeyDown(_event) {
        console.log("hi");
        //Startwert der Variable setzen, Durchlaufbedingung,Operation auf Variable ausf�hren
        for (let i = 0; i < letter.length; i++) {
            //ascii code abfrage der Buchstaben wird auf �bereinstimmung �berpr�ft
            if (String.fromCharCode(_event.keyCode) == letter[i].innerHTML) {
                console.log("test");
                //wertabfrage der Variable, da sie leer sein kann
                if (selectedLetter != undefined)
                    selectedLetter.style.backgroundColor = "#DB7093";
                selectedLetter = letter[i];
                console.log(selectedLetter);
                selectedLetter.style.backgroundColor = "#ffffff";
            }
        }
    }
    function selectLetter(_event) {
        //wertabfrage der Variable, da leer sein kann
        if (selectedLetter != undefined)
            selectedLetter.style.backgroundColor = "#DB7093";
        selectedLetter = _event.target;
        console.log(selectedLetter);
        selectedLetter.style.backgroundColor = "#ffffff";
    }
    function placeLetter(_event) {
        if (_event.altKey == true)
            //return unterbricht die Funktion
            return;
        //liest und speichert Inhalt des HTML-Dokuments
        let place = document.createElement("div");
        place.innerHTML = selectedLetter.innerHTML;
        place.style.textAlign = "center";
        place.style.width = "2.5em";
        place.style.height = "2.5em";
        place.style.paddingTop = "1em";
        place.style.top = _event.pageY + "px";
        console.log(place.style.marginTop);
        place.style.left = _event.pageX + "px";
        place.style.backgroundColor = "#DB7093";
        place.style.position = "absolute";
        place.addEventListener("mousedown", removeLetter);
        document.getElementById("paper").appendChild(place);
    }
    //l�schen eines Buchstabens w�hrend die alt-taste gedr�ckt ist
    function removeLetter(_event) {
        if (_event.altKey == true) {
            let remove = _event.target;
            document.getElementById("paper").removeChild(remove);
        }
    }
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=Aufgabe-9.js.map