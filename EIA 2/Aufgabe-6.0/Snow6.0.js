/* Aufgabe 6
Name: M�ge Kosar
Matrikel:
Datum: 26.11.2017
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe6;
(function (Aufgabe6) {
    class Circle extends Aufgabe6.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            this.y += Math.random();
            if (this.y > 600) {
                this.y = 0;
            }
        }
        draw() {
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#ffffff";
            Aufgabe6.crc2.fill();
        }
    }
    Aufgabe6.Circle = Circle;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=Snow6.0.js.map