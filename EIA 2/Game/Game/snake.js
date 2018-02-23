var game;
(function (game) {
    class snake {
        constructor(x, y) {
            this.draw();
            this.x = x;
            this.y = y;
        }
        draw() {
            crc2.fillStyle = 'black';
            crc2.fillRect(this.x * 10, this.y * 10 + 20, 10, 10);
            crc2.stroke();
        }
    }
    game.snake = snake;
})(game || (game = {}));
//# sourceMappingURL=snake.js.map