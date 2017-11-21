// Aufgabe: Aufgabe 5
// Name: Müge Kosar
// Matrikel: 256213
// Datum: 15.11.2017
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace Aufgabe5 {
    export class Circle {
        x: number;
        y: number;
        color: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.y += Math.random();
            if (this.y > 600) {
                this.y = 0;
            }
        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();
        }
    }
}