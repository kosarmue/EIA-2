namespace game {

    export class snake {

        x: number;
        y: number;

        constructor(x: number, y: number) {
            this.draw();
            this.x = x;
            this.y = y;
        }
        draw(): void {

            crc2.fillStyle = 'black';
            crc2.fillRect(this.x * 10, this.y * 10 + 20, 10, 10);
            crc2.stroke();
        }
    }
}
