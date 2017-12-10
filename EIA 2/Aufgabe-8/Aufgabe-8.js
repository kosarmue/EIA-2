/* Aufgabe 8
Name: M�ge Kosar
Matrikel:
Datum: 10.12.2017
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe8;
(function (Aufgabe8) {
    window.addEventListener("load", init);
    function init() {
        let Square = prompt("Wie viele Quadrate sollen gezeichnet werden?");
        let Squares = parseInt(Square);
        let Squarewidth = prompt("Wie breit sollen die Quadrate sein?");
        let Squarewidths = parseInt(Squarewidth);
        let Squareheight = prompt("Wie hoch sollen die Quadrate sein?");
        let Squareheights = parseInt(Squareheight);
        var x = 10;
        var total = 100;
        if (Squares >= x && Squares <= 100) {
            for (var i = 0; i < Squares; i++) {
                drawSquare(Math.random() * 500, Math.random() * 500, Squarewidths, Squareheights);
            }
        }
        else {
            window.alert("Falsche Eingabe - Versuchs nochmal :D");
            init();
        }
    }
    function drawSquare(x, y, width, height) {
        let div = document.createElement("div");
        div.style.width = width + "px";
        div.style.height = height + "px";
        div.style.marginLeft = x + "px";
        div.style.marginTop = y + "px";
        div.style.backgroundColor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        document.body.appendChild(div);
    }
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=Aufgabe-8.js.map