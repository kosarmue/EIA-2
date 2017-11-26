// Aufgabe: Aufgabe 5
// Name: M�ge Kosar
// Matrikel: 256213
// Datum: 15.11.2017
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe6;
(function (Aufgabe6) {
    class Skier extends Aufgabe6.MovingObjects {
        constructor(_x, _y, color) {
            super(_x, _y);
            this.x = _x;
            this.y = _y;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
        move() {
            this.x += 1;
            if (this.x > 800) {
                this.x = 0;
            }
        }
        draw() {
            //skifahrer
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x, this.y, 8, 0, 2 * Math.PI);
            Aufgabe6.crc2.arc(this.x, this.y + 18, 10, 0, 2 * Math.PI);
            Aufgabe6.crc2.arc(this.x, this.y + 40, 12, 0, 2 * Math.PI);
            Aufgabe6.crc2.strokeStyle = this.color;
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.fillStyle = this.color;
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.closePath();
            //skiding
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.lineTo(this.x + 20, this.y + 52);
            Aufgabe6.crc2.lineTo(this.x - 20, this.y + 52);
            Aufgabe6.crc2.strokeStyle = this.color;
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.fillStyle = this.color;
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.closePath();
        }
    }
    Aufgabe6.Skier = Skier;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=Skifahrer-6.js.map