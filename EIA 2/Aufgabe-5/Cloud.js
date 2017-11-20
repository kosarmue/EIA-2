// Aufgabe: Aufgabe 5
// Name: M�ge Kosar
// Matrikel: 256213
// Datum: 15.11.2017
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe5;
(function (Aufgabe5) {
    class Cloud {
        constructor(_x, _y) {
            this.x = _x;
        }
        drawCloud1() {
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x, 140, 25, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#FFFFFF";
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x + 25, 150, 20, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#FFFFFF";
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x - 20, 120, 20, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#FFFFFF";
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x + 15, 120, 20, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#FFFFFF";
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x + 35, 135, 20, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#FFFFFF";
            Aufgabe5.crc2.fill();
        }
        drawCloud2() {
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x, 140, 25, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#FFFFFF";
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x + 25, 150, 20, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#FFFFFF";
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x - 20, 120, 20, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#FFFFFF";
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x + 15, 120, 20, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#FFFFFF";
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x + 35, 135, 20, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#FFFFFF";
            Aufgabe5.crc2.fill();
        }
    }
    Aufgabe5.Cloud = Cloud;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Cloud.js.map