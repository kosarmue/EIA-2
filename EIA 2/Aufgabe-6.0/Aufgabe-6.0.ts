/* Aufgabe 6
Name: Müge Kosar
Matrikel: 
Datum: 26.11.2017
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. 
*/

namespace Aufgabe6 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let infoImg: any;
    let shapes: MovingObjects[] = [];
    let cloud1: Clouds;
    let cloud2: Clouds;
    let ski: Skier[] = [];
    let snow: Circle[] = [];


    function init(): void {

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

        //Schnee
        for (let i = 0; i < 100; i++) {
            let snow = new Circle(Math.random() * 800, Math.random() * 600);
            shapes.push();


            //Wolke
            cloud1 = new Clouds(100, 100);

            cloud2 = new Clouds(500, 100);

            //Skifahrer

            ski.push(new Skier(0, 500, this.color));

            ski.push(new Skier(-100, 500, this.color));

            ski.push(new Skier(-200, 500, this.color));


            infoImg = crc2.getImageData(0, 0, 800, 600);
        }
        animate();


        function animate(): void {
            console.log("Timeout")
            crc2.clearRect(0, 0, 800, 600);
            crc2.putImageData(infoImg, 0, 0);
        }
     
   
         for (let i = 0; i < ski.length; i++) {
            ski[i].move();
        }

        cloud1.move();
        cloud1.drawcloud1();
        cloud2.move();
        cloud2.drawcloud2();

        for (let i: number = 0; i < snow.length; i++) {
            snow[i].move();
        }

        window.setTimeout(animate, 20);
    }

}
