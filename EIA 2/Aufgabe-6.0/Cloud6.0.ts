// Aufgabe: Aufgabe 6
// Name: Müge Kosar
// Matrikel: 256213
// Datum: 15.11.2017
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace Aufgabe6 {
    export class Clouds extends MovingObjects {
        x: number;
        y: number;

         constructor(_x: number, _y: number) {

            super(_x, _y)
        }

        move(): void {
            this.x += 0.1;
            if (this.x > 800) {
                this.x = 0;
            }
        }

        drawcloud1(): void {
            crc2.beginPath();
            crc2.arc(this.x, 140, 25, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 25, 150, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x - 20, 120, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 15, 120, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 35, 135, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
        }

        drawcloud2(): void {
            crc2.beginPath();
            crc2.arc(this.x, 140, 25, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 25, 150, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x - 20, 120, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 15, 120, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 35, 135, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
        }
    }
}
