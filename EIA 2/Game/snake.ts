export class snake {
        constructor() {
            this.draw();
            this.x();
            this.y();
        }

        draw(): void {
           crc2.fillStyle = 'black';
           crc2.fillRect(x * 10, y * 10 + 20, 10, 10);
           crc2.stroke();
            }
}