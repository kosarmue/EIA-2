// Aufgabe: Aufgabe 5
// Name: Müge Kosar
// Matrikel: 256213
// Datum: 15.11.2017
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace Aufgabe5 {
        export class Baum {
            x: number;
            y: number;
            color:string;
            
        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }
            
        draw(): void {
            crc2.beginPath();
        crc2.moveTo(this.x, this.y);
        crc2.lineTo(this.x + 20, this.y);
        crc2.lineTo(this.x + 10, this.y - 60);
        crc2.closePath();
        crc2.strokeStyle = this.color;
        crc2.stroke();
        crc2.fillStyle = this.color;
        crc2.fill();
        }
        }
        }