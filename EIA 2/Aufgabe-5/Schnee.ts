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
        
        draw(): void{
        crc2.beginPath();
        crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
        crc2.fillStyle = this.color;
        crc2.fill();
         
         }
        }
       }
    