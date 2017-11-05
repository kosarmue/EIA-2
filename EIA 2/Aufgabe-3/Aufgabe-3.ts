// Aufgabe: Aufagbe 2
// Name: Müge Kosar
// Matrikel: 256213
// Datum: 22.10.2017
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace Aufgabe3 {

    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;
    let cloudX: number[] = [];
    let cloudY: number[] = [];
    let snowX: number[] = [];
    let snowY: number[] = [];
    let skifahrerX: number[] = [0, -100, -200];
    let skifahrerY: number[] = [500, 500, 500];
    let Image: ImageData;

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

            for (let i = 0; i < 200; i++)
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
    //        drawCloud(200, 140, 25, 0, 2, "#FFFFFF");


    function drawCircle(_x: number, _y: number, _color: string) {
        //Circle
        crc2.beginPath();
        crc2.arc(_x, _y, 2, 0, 2 * Math.PI);
        crc2.fillStyle = _color;
        crc2.fill();
    }

    //        window.setTimeout(animate, 200);
    //cloud
    function drawCloud(_x: number, _y: number, _radius: number, _startAngle: number, _endAngle: number, _color: string) {
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


    function drawSkifahrer(_x: number, _y: number) {
        crc2.fillStyle = "#000000";
        crc2.beginPath();
        crc2.arc(_x - 10, _y, 4, 0, 2 * Math.PI);
        crc2.fill();
       crc2.fillStyle = "#00000";
        crc2.fillRect(_x - 7.5, _y + 3, -4, 12);
        crc2.beginPath();
        crc2.stroke()
        crc2.strokeStyle = "#000000";
        crc2.beginPath();
        crc2.moveTo(_x + 3, _y + 32);
        crc2.lineTo(_x - 9, _y + 8);
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(_x - 10, _y + 32);
        crc2.lineTo(_x - 11, _y + 7);
        crc2.stroke();

    }



    function animate(): void {
        console.log("Timeout")
        crc2.clearRect(0, 0, 800, 600);
        crc2.putImageData(Image, 0, 0);


        for (let i: number = 0; i < cloudX.length; i++) {
            cloudX[i] += 0.1;
            drawCloud(cloudX[i], cloudY[i], 25, 0, 2, "#FFFFFF");

        }

        for (let i: number = 0; i < snowX.length; i++) {
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
}




