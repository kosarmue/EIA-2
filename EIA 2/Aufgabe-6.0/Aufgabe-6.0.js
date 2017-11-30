/* Aufgabe 6
Name: M�ge Kosar
Matrikel:
Datum: 26.11.2017
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe6;
(function (Aufgabe6) {
    window.addEventListener("load", init);
    let infoImg;
    let shapes = [];
    let cloud1;
    let cloud2;
    let ski = [];
    let snow = [];
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Aufgabe6.crc2 = canvas.getContext("2d");
        console.log(Aufgabe6.crc2);
        //Background
        Aufgabe6.crc2.fillStyle = "#81BEF7";
        Aufgabe6.crc2.fillRect(0, 0, 800, 600);
        //sun
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(700, 85, 60, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#FFFF00";
        Aufgabe6.crc2.fill();
        //rope
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(0, 300);
        Aufgabe6.crc2.lineTo(800, 145);
        Aufgabe6.crc2.strokeStyle = "#000000";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.closePath();
        //rope2
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(0, 300);
        Aufgabe6.crc2.lineTo(800, 145);
        Aufgabe6.crc2.strokeStyle = "#000000";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.closePath();
        //linedown
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(425, 200);
        Aufgabe6.crc2.lineTo(425, 240);
        Aufgabe6.crc2.stroke();
        //snowman
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(695, 300, 15, 0, 2 * Math.PI);
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#E6E6E6";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(695, 335, 20, 0, 2 * Math.PI);
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#E6E6E6";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(695, 380, 25, 0, 2 * Math.PI);
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#E6E6E6";
        Aufgabe6.crc2.fill();
        //square
        Aufgabe6.crc2.rect(375, 240, 100, 50);
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#E6E6E6";
        Aufgabe6.crc2.fill();
        //hill
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(0, 400);
        Aufgabe6.crc2.bezierCurveTo(150, 380, 200, 420, 300, 450);
        Aufgabe6.crc2.strokeStyle = "#BDBDBD";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#FFFFFF";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(0, 400);
        Aufgabe6.crc2.lineTo(300, 450);
        Aufgabe6.crc2.lineTo(120, 540);
        Aufgabe6.crc2.lineTo(0, 550);
        Aufgabe6.crc2.strokeStyle = "#FFFFFF";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#FFFFFF";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(120, 540);
        Aufgabe6.crc2.bezierCurveTo(450, 350, 650, 350, 800, 420);
        Aufgabe6.crc2.strokeStyle = "#BDBDBD";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#FFFFFF";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(300, 500);
        Aufgabe6.crc2.lineTo(800, 420);
        Aufgabe6.crc2.lineTo(800, 550);
        Aufgabe6.crc2.strokeStyle = "#FFFFFF";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#FFFFFF";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.rect(0, 500, 800, 100);
        Aufgabe6.crc2.strokeStyle = "#BDBDBD";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#FFFFFF";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.closePath();
        //tree
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(100, 600);
        Aufgabe6.crc2.lineTo(150, 400);
        Aufgabe6.crc2.lineTo(180, 600);
        Aufgabe6.crc2.lineTo(100, 600);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#276D28";
        Aufgabe6.crc2.fill();
        //Schnee
        for (let i = 0; i < 100; i++) {
            let snowflake = new Aufgabe6.Circle(Math.random() * 800, Math.random() * 600);
            snow.push(snowflake);
        }
        //Wolke
        cloud1 = new Aufgabe6.Clouds(100, 100);
        cloud2 = new Aufgabe6.Clouds(500, 100);
        //Skifahrer
        ski.push(new Aufgabe6.Skier(0, 500, this.color));
        ski.push(new Aufgabe6.Skier(-100, 500, this.color));
        ski.push(new Aufgabe6.Skier(-200, 500, this.color));
        infoImg = Aufgabe6.crc2.getImageData(0, 0, 800, 600);
        animate();
        function animate() {
            console.log("Timeout");
            Aufgabe6.crc2.clearRect(0, 0, 800, 600);
            Aufgabe6.crc2.putImageData(infoImg, 0, 0);
            for (let i = 0; i < ski.length; i++) {
                ski[i].move();
                ski[i].draw();
            }
            cloud1.drawcloud1();
            cloud1.move();
            cloud1.draw();
            cloud2.drawcloud2();
            cloud2.move();
            cloud2.draw();
            for (let i = 0; i < snow.length; i++) {
                snow[i].move();
                snow[i].draw();
            }
            window.setTimeout(animate, 20);
        }
    }
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=Aufgabe-6.0.js.map