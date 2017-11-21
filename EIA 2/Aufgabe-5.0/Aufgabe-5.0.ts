// Aufgabe: Aufgabe 5
// Name: Müge Kosar
// Matrikel: 256213
// Datum: 15.11.2017
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace Aufgabe5 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let fahrer: Skifahrer[] = [];
    let cloud: Cloud[] = [];
    let snow: Circle[] = [];
    let infoImg: any;

    function init(): void {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);




        fahrer[0] = new Skifahrer(0, 500);
        fahrer[1] = new Skifahrer(-100, 500);
        fahrer[2] = new Skifahrer(-200, 500);

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
            snow[i] = new Circle(Math.random() * 800, Math.random() * 600);
        }
        infoImg = crc2.getImageData(0, 0, 800, 600);

        cloud[0] = new Cloud(100, 100);
        cloud[1] = new Cloud(500, 100);



        animate();

    }

    //function tree
    function drawTree(_x: number, _y: number, _color: string) {
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


    function animate(): void {
        console.log("Timeout")
        crc2.clearRect(0, 0, 800, 600);
        crc2.putImageData(infoImg, 0, 0);

        for (let i = 0; i < fahrer.length; i++) {
            fahrer[i].update();
        }

        cloud[0].update1();
        cloud[1].update2();

        for (let i: number = 0; i < snow.length; i++) {
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
}

