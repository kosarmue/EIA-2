// Aufgabe: Aufgabe 5
// Name: Müge Kosar
// Matrikel: 256213
// Datum: 15.11.2017
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace Aufgabe6 {
    export class Skier extends MovingObjects {
        x: number;
        y: number;
        color: string;

        constructor(_x: number, _y: number, color: string) {

            super(_x, _y)
            this.x = _x;
            this.y = _y;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }

        move(): void {
            this.x += 1;
            if (this.x > 800) {
                this.x = 0;
            }
        }

        draw(): void {
            //skifahrer
            crc2.beginPath();
            crc2.arc(this.x, this.y, 8, 0, 2 * Math.PI);
            crc2.arc(this.x, this.y + 18, 10, 0, 2 * Math.PI);
            crc2.arc(this.x, this.y + 40, 12, 0, 2 * Math.PI);
            crc2.strokeStyle = this.color;
            crc2.stroke();
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.closePath();
            //skiding
            crc2.beginPath();
            crc2.lineTo(this.x + 20, this.y + 52);
            crc2.lineTo(this.x - 20, this.y + 52);
            crc2.strokeStyle = this.color;
            crc2.stroke();
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.closePath();
        }
    }
}
