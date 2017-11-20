// Aufgabe: Aufgabe 5
// Name: M�ge Kosar
// Matrikel: 256213
// Datum: 15.11.2017
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe5;
(function (Aufgabe5) {
    class Circle {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        draw() {
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = this.color;
            Aufgabe5.crc2.fill();
        }
    }
    Aufgabe5.Circle = Circle;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Schnee.js.map