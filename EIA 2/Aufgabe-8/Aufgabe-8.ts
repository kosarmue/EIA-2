/* Aufgabe 8
Name: Müge Kosar
Matrikel: 
Datum: 10.12.2017
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. 
*/

namespace Aufgabe8 {

    window.addEventListener("load", init);

    function init(): void {
        let Square: string = prompt("Wie viele Quadrate sollen gezeichnet werden?");
        let Squares: number = parseInt(Square);

        let Squarewidth: string = prompt("Wie breit sollen die Quadrate sein?");
        let Squarewidths: number = parseInt(Squarewidth)

        let Squareheight: string = prompt("Wie hoch sollen die Quadrate sein?");
        let Squareheights: number = parseInt(Squareheight)

        var x: number = 10;
        var total: number = 100;
        if (Squares >= x && Squares <= 100) {
            for (var i: number = 0; i < Squares; i++) {
                drawSquare(Math.random() * 500, Math.random() * 500, Squarewidths, Squareheights);
            }
        }
        else {
            window.alert("Falsche Eingabe - Versuchs nochmal :D");
            init();
        }
    }
    function drawSquare(x: number, y: number, width: number, height: number): void {
        let div: HTMLDivElement = document.createElement("div");
        div.style.width = width + "px";
        div.style.height = height + "px";
        div.style.marginLeft = x + "px";
        div.style.marginTop = y + "px";
        div.style.backgroundColor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        document.body.appendChild(div);
    }
}