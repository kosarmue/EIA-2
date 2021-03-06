// Aufgabe: Aufgabe 5
// Name: M�ge Kosar
// Matrikel: 256213
// Datum: 15.11.2017
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe5;
(function (Aufgabe5) {
    class Skifahrer {
        constructor(_x, _y, color) {
            this.x = _x;
            this.y = _y;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += 1;
            if (this.x > 800) {
                this.x = 0;
            }
        }
        draw() {
            //skifahrer
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x, this.y, 8, 0, 2 * Math.PI);
            Aufgabe5.crc2.arc(this.x, this.y + 18, 10, 0, 2 * Math.PI);
            Aufgabe5.crc2.arc(this.x, this.y + 40, 12, 0, 2 * Math.PI);
            Aufgabe5.crc2.strokeStyle = this.color;
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.fillStyle = this.color;
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.closePath();
            //skiding
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.lineTo(this.x + 20, this.y + 52);
            Aufgabe5.crc2.lineTo(this.x - 20, this.y + 52);
            Aufgabe5.crc2.strokeStyle = this.color;
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.fillStyle = this.color;
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.closePath();
        }
    }
    Aufgabe5.Skifahrer = Skifahrer;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Skifahrer1.0.js.map