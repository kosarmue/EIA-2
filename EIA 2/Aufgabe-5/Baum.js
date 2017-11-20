// Aufgabe: Aufgabe 5
// Name: M�ge Kosar
// Matrikel: 256213
// Datum: 15.11.2017
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe5;
(function (Aufgabe5) {
    class Baum {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        draw() {
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.moveTo(this.x, this.y);
            Aufgabe5.crc2.lineTo(this.x + 20, this.y);
            Aufgabe5.crc2.lineTo(this.x + 10, this.y - 60);
            Aufgabe5.crc2.closePath();
            Aufgabe5.crc2.strokeStyle = this.color;
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.fillStyle = this.color;
            Aufgabe5.crc2.fill();
        }
    }
    Aufgabe5.Baum = Baum;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Baum.js.map