// Aufgabe: Aufgabe 5
// Name: M�ge Kosar
// Matrikel: 256213
// Datum: 15.11.2017
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe6;
(function (Aufgabe6) {
    class Clouds extends Aufgabe6.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            this.x += 0.1;
            if (this.x > 800) {
                this.x = 0;
            }
        }
        drawCloud1() {
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x, 140, 25, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#FFFFFF";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 25, 150, 20, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#FFFFFF";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x - 20, 120, 20, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#FFFFFF";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 15, 120, 20, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#FFFFFF";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 35, 135, 20, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#FFFFFF";
            Aufgabe6.crc2.fill();
        }
        drawCloud2() {
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x, 140, 25, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#FFFFFF";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 25, 150, 20, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#FFFFFF";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x - 20, 120, 20, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#FFFFFF";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 15, 120, 20, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#FFFFFF";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 35, 135, 20, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#FFFFFF";
            Aufgabe6.crc2.fill();
        }
    }
    Aufgabe6.Clouds = Clouds;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=Wolken-6.js.map