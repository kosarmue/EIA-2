var game;
(function (game) {
    window.addEventListener('load', function () {
        var canvas = document.createElement('canvas'), crc2 = canvas.getContext('2d'), score = 0, level = 0, direction = 0, snake = new Array(3), playing = true, speed = 500;
        var cnvs = new Array(20);
        for (var i = 0; i < cnvs.length; i++) {
            cnvs[i] = new Array(20);
        }
        canvas.width = 600;
        canvas.height = 624;
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(canvas);
        cnvs = Snake(cnvs);
        cnvs = Food(cnvs);
        drawGame();
        window.addEventListener('keydown', function (e) {
            if (e.keyCode === 38 && direction !== 3) {
                direction = 2; //hoch
            }
            else if (e.keyCode === 40 && direction !== 2) {
                direction = 3; //runter
            }
            else if (e.keyCode === 37 && direction !== 0) {
                direction = 1; //links
            }
            else if (e.keyCode === 39 && direction !== 1) {
                direction = 0; //rechts
            }
        });
        function drawGame() {
            crc2.clearRect(0, 0, canvas.width, canvas.height);
            for (var i = snake.length - 1; i >= 0; i--) {
                if (i === 0) {
                    switch (direction) {
                        case 0:
                            snake[0] = { x: snake[0].x + 1, y: snake[0].y };
                            break;
                        case 1:
                            snake[0] = { x: snake[0].x - 1, y: snake[0].y };
                            break;
                        case 2:
                            snake[0] = { x: snake[0].x, y: snake[0].y - 1 };
                            break;
                        case 3:
                            snake[0] = { x: snake[0].x, y: snake[0].y + 1 };
                            break;
                    }
                    if (snake[0].x < 0 ||
                        snake[0].x >= 20 ||
                        snake[0].y < 0 ||
                        snake[0].y >= 20) {
                        gameOver();
                        return;
                    }
                    if (cnvs[snake[0].x][snake[0].y] === 1) {
                        score += 10;
                        cnvs = Food(cnvs);
                        snake.push({ x: snake[snake.length - 1].x, y: snake[snake.length - 1].y });
                        cnvs[snake[snake.length - 1].x][snake[snake.length - 1].y] = 2;
                        if ((score % 100) == 0) {
                            level += 1;
                        }
                    }
                    else if (cnvs[snake[0].x][snake[0].y] === 2) {
                        gameOver();
                        return;
                    }
                    cnvs[snake[0].x][snake[0].y] = 2;
                }
                else {
                    if (i === (snake.length - 1)) {
                        cnvs[snake[i].x][snake[i].y] = null;
                    }
                    snake[i] = { x: snake[i - 1].x, y: snake[i - 1].y };
                    cnvs[snake[i].x][snake[i].y] = 2;
                }
            }
            drawMain();
            for (var x = 0; x < cnvs.length; x++) {
                for (var y = 0; y < cnvs[0].length; y++) {
                    if (cnvs[x][y] === 1) {
                        crc2.fillStyle = 'blue';
                        crc2.fillRect(x * 10, y * 10 + 20, 10, 10);
                    }
                    else if (cnvs[x][y] === 2) {
                        crc2.fillStyle = 'black';
                        crc2.fillRect(x * 10, y * 10 + 20, 10, 10);
                    }
                }
            }
            if (playing) {
                setTimeout(drawGame, speed - (level * 50));
            }
        }
        function drawMain() {
            crc2.lineWidth = 4;
            crc2.strokeStyle = 'black';
            crc2.strokeRect(2, 20, canvas.width - 4, canvas.height - 24);
            crc2.fillStyle = 'black';
            crc2.font = '12px Indie Flower', 'cursive';
            crc2.fillText('POINTS: ' + score + ' - LEVEL: ' + level, 2, 12);
        }
        function Food(cnvs) {
            var randomX = Math.round(Math.random() * 19), randomY = Math.round(Math.random() * 19);
            while (cnvs[randomX][randomY] === 2) {
                randomX = Math.round(Math.random() * 19);
                randomY = Math.round(Math.random() * 19);
            }
            cnvs[randomX][randomY] = 1;
            return cnvs;
        }
        function Snake(cnvs) {
            var randomX = Math.round(Math.random() * 19), rndY = Math.round(Math.random() * 19);
            while ((randomX - snake.length) < 0) {
                randomX = Math.round(Math.random() * 19);
            }
            for (var i = 0; i < snake.length; i++) {
                snake[i] = { x: randomX - i, y: rndY };
                cnvs[randomX - i][rndY] = 2;
            }
            return cnvs;
        }
        function gameOver() {
            playing = false;
            crc2.clearRect(0, 0, canvas.width, canvas.height);
            crc2.fillStyle = 'black';
            crc2.font = '16px Indie Flower', 'cursive';
            crc2.fillText('GAME OVER', ((canvas.width / 2) - (crc2.measureText('GAME OVER').width / 2)), 50);
        }
    });
})(game || (game = {}));
//# sourceMappingURL=main.js.map