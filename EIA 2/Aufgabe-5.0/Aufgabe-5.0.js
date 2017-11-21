// Aufgabe: Aufgabe 5
// Name: M�ge Kosar
// Matrikel: 256213
// Datum: 15.11.2017
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe5;
(function (Aufgabe5) {
    window.addEventListener("load", init);
    let fahrer = [];
    let cloud = [];
    let snow = [];
    let infoImg;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Aufgabe5.crc2 = canvas.getContext("2d");
        console.log(Aufgabe5.crc2);
        fahrer[0] = new Aufgabe5.Skifahrer(0, 500);
        fahrer[1] = new Aufgabe5.Skifahrer(-100, 500);
        fahrer[2] = new Aufgabe5.Skifahrer(-200, 500);
        //Background
        Aufgabe5.crc2.fillStyle = "#81BEF7";
        Aufgabe5.crc2.fillRect(0, 0, 800, 600);
        //sun
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.arc(700, 85, 60, 0, 2 * Math.PI);
        Aufgabe5.crc2.fillStyle = "#FFFF00";
        Aufgabe5.crc2.fill();
        //rope
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(0, 300);
        Aufgabe5.crc2.lineTo(800, 145);
        Aufgabe5.crc2.strokeStyle = "#000000";
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.closePath();
        //rope2
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(0, 300);
        Aufgabe5.crc2.lineTo(800, 145);
        Aufgabe5.crc2.strokeStyle = "#000000";
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.closePath();
        //linedown
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(425, 200);
        Aufgabe5.crc2.lineTo(425, 240);
        Aufgabe5.crc2.stroke();
        //snowman
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.arc(695, 300, 15, 0, 2 * Math.PI);
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#E6E6E6";
        Aufgabe5.crc2.fill();
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.arc(695, 335, 20, 0, 2 * Math.PI);
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#E6E6E6";
        Aufgabe5.crc2.fill();
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.arc(695, 380, 25, 0, 2 * Math.PI);
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#E6E6E6";
        Aufgabe5.crc2.fill();
        //square
        Aufgabe5.crc2.rect(375, 240, 100, 50);
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#E6E6E6";
        Aufgabe5.crc2.fill();
        //hill
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(0, 400);
        Aufgabe5.crc2.bezierCurveTo(150, 380, 200, 420, 300, 450);
        Aufgabe5.crc2.strokeStyle = "#BDBDBD";
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#FFFFFF";
        Aufgabe5.crc2.fill();
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(0, 400);
        Aufgabe5.crc2.lineTo(300, 450);
        Aufgabe5.crc2.lineTo(120, 540);
        Aufgabe5.crc2.lineTo(0, 550);
        Aufgabe5.crc2.strokeStyle = "#FFFFFF";
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#FFFFFF";
        Aufgabe5.crc2.fill();
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(120, 540);
        Aufgabe5.crc2.bezierCurveTo(450, 350, 650, 350, 800, 420);
        Aufgabe5.crc2.strokeStyle = "#BDBDBD";
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#FFFFFF";
        Aufgabe5.crc2.fill();
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(300, 500);
        Aufgabe5.crc2.lineTo(800, 420);
        Aufgabe5.crc2.lineTo(800, 550);
        Aufgabe5.crc2.strokeStyle = "#FFFFFF";
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#FFFFFF";
        Aufgabe5.crc2.fill();
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.rect(0, 500, 800, 100);
        Aufgabe5.crc2.strokeStyle = "#BDBDBD";
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#FFFFFF";
        Aufgabe5.crc2.fill();
        Aufgabe5.crc2.closePath();
        //tree
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(100, 600);
        Aufgabe5.crc2.lineTo(150, 400);
        Aufgabe5.crc2.lineTo(180, 600);
        Aufgabe5.crc2.lineTo(100, 600);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#276D28";
        Aufgabe5.crc2.fill();
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
            snow[i] = new Aufgabe5.Circle(Math.random() * 800, Math.random() * 600);
        }
        infoImg = Aufgabe5.crc2.getImageData(0, 0, 800, 600);
        cloud[0] = new Aufgabe5.Cloud(100, 100);
        cloud[1] = new Aufgabe5.Cloud(500, 100);
        animate();
    }
    //function tree
    function drawTree(_x, _y, _color) {
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(_x, _y);
        Aufgabe5.crc2.lineTo(_x + 20, _y);
        Aufgabe5.crc2.lineTo(_x + 10, _y - 60);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.strokeStyle = _color;
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = _color;
        Aufgabe5.crc2.fill();
    }
    //drawCloud(200, 140, 25, 0, 2, "#FFFFFF");
    function animate() {
        console.log("Timeout");
        Aufgabe5.crc2.clearRect(0, 0, 800, 600);
        Aufgabe5.crc2.putImageData(infoImg, 0, 0);
        for (let i = 0; i < fahrer.length; i++) {
            fahrer[i].update();
        }
        cloud[0].update1();
        cloud[1].update2();
        for (let i = 0; i < snow.length; i++) {
            snow[i].update();
        }
        /* for (let i = 0; i < skifahrer.length; i++) {
            skifahrer[i].x += 1;
            moveandDrawSkifahrer(skifahrer[i]);
            if (skifahrer[i].x > 800) {
                skifahrer[i].x = 0;
            }
        }
        
        */
        window.setTimeout(animate, 20);
    }
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Aufgabe-5.0.js.map