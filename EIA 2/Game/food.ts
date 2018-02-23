export class food {
    
    x: number;
    y: number;
    
        constructor() {
            this.draw();
        }

        draw(): void {
          crc2.fillStyle = 'blue';
          crc2.fillRect(x * 10, y * 10 + 20, 10, 10);
            }
}