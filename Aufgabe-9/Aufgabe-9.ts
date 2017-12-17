/* Aufgabe 9
Name: Müge Kosar
Matrikel: 256213
Datum: 15.12.2017
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. 
*/

namespace Aufgabe9 {

    window.addEventListener("load", init);
    window.addEventListener("keydown", handleMousedown);

    let word: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


    function init(_event: Event): void {
        for (let i: number = 0; i < word.length; i++) {
            let letter: HTMLDivElement = document.createElement("div");

            letter.style.backgroundColor = "#DB7093";
            letter.style.textAlign = "center";
            letter.style.width = "2.5em";
            letter.style.height = "2.5em";
            letter.style.margin = "0.4em";
            letter.style.paddingTop = "1em";
            letter.style.display = "inline-block";
            letter.innerText = word[i];


            letter.addEventListener("mousedown", placeLetter);
            document.body.appendChild(letter);
        }

        let paper: HTMLDivElement = document.createElement("div");

        paper.style.width = "60em";
        paper.style.height = "30em";
        paper.style.paddingTop = "2em";
        paper.style.marginLeft = "1em";
        paper.style.backgroundColor = "black";


        paper.addEventListener("mousedown", placeLetter);
        document.body.appendChild(paper);
    }

    function placeLetter(_event: MouseEvent): void {
        let place: HTMLDivElement = document.createElement("div");

        place.style.fontSize = "2em";
        place.style.position = "fixed";

        place.addEventListener("mousedown", handleMousedown);
        document.body.appendChild(place);
    }

    function handleMousedown(_event: MouseEvent): void {
        if (_event.altKey == false)
            return;

        else {
            let remove: HTMLDivElement = <HTMLDivElement>_event.target;
            document.body.removeChild(remove);
        }
    }

}