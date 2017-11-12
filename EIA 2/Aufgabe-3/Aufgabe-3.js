// Aufgabe: Aufgabe 3
// Name: Muege Kosar
// Matrikel: 256213
// Datum: 22.10.2017
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe3;
(function (Aufgabe3) {
    window.addEventListener("load", init);
    let crc2;
    let cloudX = [];
    let cloudY = [];
    let snowX = [];
    let snowY = [];
    let skifahrerX = [0, -100, -200];
    let skifahrerY = [500, 500, 500];
    let Image;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        //Background
        crc2.fillStyle = "#81BEF7";
        crc2.fillRect(0, 0, 800, 600);
        //sun
        crc2.beginPath();
        crc2.arc(700, 85, 60, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFF00";
        crc2.fill();
        //rope
        crc2.beginPath();
        crc2.moveTo(0, 300);
        crc2.lineTo(800, 145);
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.closePath();
        //rope2
        crc2.beginPath();
        crc2.moveTo(0, 300);
        crc2.lineTo(800, 145);
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.closePath();
        //linedown
        crc2.beginPath();
        crc2.moveTo(425, 200);
        crc2.lineTo(425, 240);
        crc2.stroke();
        //snowman
        crc2.beginPath();
        crc2.arc(695, 300, 15, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#E6E6E6";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(695, 335, 20, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#E6E6E6";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(695, 380, 25, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#E6E6E6";
        crc2.fill();
        //square
        crc2.rect(375, 240, 100, 50);
        crc2.stroke();
        crc2.fillStyle = "#E6E6E6";
        crc2.fill();
        //hill
        crc2.beginPath();
        crc2.moveTo(0, 400);
        crc2.bezierCurveTo(150, 380, 200, 420, 300, 450);
        crc2.strokeStyle = "#BDBDBD";
        crc2.stroke();
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(0, 400);
        crc2.lineTo(300, 450);
        crc2.lineTo(120, 540);
        crc2.lineTo(0, 550);
        crc2.strokeStyle = "#FFFFFF";
        crc2.stroke();
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(120, 540);
        crc2.bezierCurveTo(450, 350, 650, 350, 800, 420);
        crc2.strokeStyle = "#BDBDBD";
        crc2.stroke();
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(300, 500);
        crc2.lineTo(800, 420);
        crc2.lineTo(800, 550);
        crc2.strokeStyle = "#FFFFFF";
        crc2.stroke();
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.rect(0, 500, 800, 100);
        crc2.strokeStyle = "#BDBDBD";
        crc2.stroke();
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
        crc2.closePath();
        //tree
        crc2.beginPath();
        crc2.moveTo(100, 600);
        crc2.lineTo(150, 400);
        crc2.lineTo(180, 600);
        crc2.lineTo(100, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#276D28";
        crc2.fill();
        //Aufgabe 2 - Tree
        drawTree(400, 445, "#276D28");
        drawTree(440, 420, "#276D28");
        drawTree(410, 430, "#276D28");
        drawTree(470, 430, "#276D28");
        //for loop tree
        for (let i = 0; i < 20; i++) {
            let x = 300 + Math.random() * 400;
            let y = 360 + Math.random() * 650;
            drawTree(x, y, "#276D28");
            console.log(i);
        }
        for (let i = 0; i < 100; i++) {
            snowX[i] = Math.random() * 800;
            snowY[i] = Math.random() * 600;
            console.log(snowX[i]);
        }
        Image = crc2.getImageData(0, 0, 800, 600);
        cloudX[0] = 100;
        cloudY[0] = 100;
        cloudX[1] = 500;
        cloudY[1] = 100;
        animate();
    }
    //function tree
    function drawTree(_x, _y, _color) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 20, _y);
        crc2.lineTo(_x + 10, _y - 60);
        crc2.closePath();
        crc2.strokeStyle = _color;
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
    }
    //drawCloud(200, 140, 25, 0, 2, "#FFFFFF");
    function drawCircle(_x, _y, _color) {
        //Circle
        crc2.beginPath();
        crc2.arc(_x, _y, 2, 0, 2 * Math.PI);
        crc2.fillStyle = _color;
        crc2.fill();
    }
    //window.setTimeout(animate, 200);
    //cloud
    function drawCloud(_x, _y, _radius, _startAngle, _endAngle, _color) {
        crc2.beginPath();
        crc2.arc(_x, _y, _radius, _startAngle, _endAngle * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_x + 25, _y + 10, _radius - 5, _startAngle, 2 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_x - 20, _y - 20, _radius - 5, _startAngle, 2 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_x + 15, _y - 20, _radius - 5, _startAngle, 2 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_x + 35, _y - 5, _radius - 5, _startAngle, 2 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
        crc2.closePath();
    }
    function drawSkifahrer(_x, _y) {
        //skifahrer
        crc2.beginPath();
        crc2.arc(_x, _y, 8, 0, 2 * Math.PI);
        crc2.arc(_x, _y + 18, 10, 0, 2 * Math.PI);
        crc2.arc(_x, _y + 40, 12, 0, 2 * Math.PI);
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.closePath();
        //skiding
        crc2.beginPath();
        crc2.lineTo(_x + 20, _y + 52);
        crc2.lineTo(_x - 20, _y + 52);
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath();
    }
    function animate() {
        console.log("Timeout");
        crc2.clearRect(0, 0, 800, 600);
        crc2.putImageData(Image, 0, 0);
        for (let i = 0; i < cloudX.length; i++) {
            cloudX[i] += 0.1;
            drawCloud(cloudX[i], cloudY[i], 25, 0, 2, "#FFFFFF");
        }
        for (let i = 0; i < snowX.length; i++) {
            drawCircle(snowX[i], snowY[i], "#FFFFFF");
            snowY[i] += Math.random();
            if (snowY[i] > 600) {
                snowY[i] = 0;
            }
        }
        for (let i = 0; i < skifahrerX.length; i++) {
            skifahrerX[i] += 1;
            drawSkifahrer(skifahrerX[i], skifahrerY[i]);
            if (skifahrerX[i] > 800) {
                skifahrerX[i] = 0;
            }
        }
        window.setTimeout(animate, 20);
    }
})(Aufgabe3 || (Aufgabe3 = {}));
//# sourceMappingURL=Aufgabe-3.js.map