// Aufgabe: Aufgabe 5
// Name: Müge Kosar
// Matrikel: 256213
// Datum: 15.11.2017
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace Aufgabe5 {
        export class Skifahrer {
            x: number;
            y: number;
            dx: number;
            color: number; 
            
            constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }
            
            update() {
              this.move();
              this.draw();  
            }
            
         move(): void {
          if (this.x > 800) {
              this.x = 0;    
        }  
         }   
            
        draw(): void {
        //skifahrer
        crc2.beginPath();
        crc2.arc(this.x, this.y, 8, 0, 2 * Math.PI);
        crc2.arc(this.x, this.y + 18, 10, 0, 2 * Math.PI);
        crc2.arc(this.x, this.y  + 40, 12, 0, 2 * Math.PI);
        crc2.strokeStyle = "hsl(" + this.color + ", 100%, 50%)";
        crc2.stroke();
        crc2.fillStyle = "hsl(" + this.color + ", 100%, 50%)";
        crc2.fill();
        crc2.closePath();
        //skiding
        crc2.beginPath();
        crc2.lineTo(this.x + 20,this.y +52);
        crc2.lineTo(this.x - 20,this.y + 52);
        crc2.strokeStyle = "hsl(" + this.color + ", 100%, 50%)";
        crc2.stroke();
        crc2.fillStyle = "hsl(" + this.color + ", 100%, 50%)";
        crc2.fill();
        crc2.closePath();    
                }
                } 
                }
            
   