/* Aufgabe 6
Name: Müge Kosar
Matrikel: 
Datum: 26.11.2017
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. 
*/

namespace Aufgabe6 {

    export class Circle extends MovingObjects {

        x: number;
        y: number;



        constructor(_x: number, _y: number) {

            super(_x, _y)
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
            crc2.fillStyle = "#ffffff";
            crc2.fill();
        }

    }

}