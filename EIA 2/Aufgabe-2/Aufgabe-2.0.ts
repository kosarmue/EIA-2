// Aufgabe: Aufagbe 2
// Name: M�ge Kosar
// Matrikel: 256213
// Datum: 22.10.2017
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace Aufagabe2 {
    
window.addEventListener("load", init);

function init() {
    let canvas = document.getElementsByTagName ("canvas")[0];
    console.log(canvas);
    
    let crc2 = canvas.getContext("2d");
    console.log(crc2);

    //Background
    crc2.fillStyle = "#81BEF7";
    crc2.fillRect(0, 0, 800, 600); 
    
    //cloud
    crc2.beginPath();
    crc2.arc(200, 140, 25, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFFFFF";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(225, 150, 20, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFFFFF";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(180, 120, 20, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFFFFF";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(215, 120, 20, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFFFFF";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(235, 135, 20, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFFFFF";
    crc2.fill();
    
    //cloud2
    crc2.beginPath();
    crc2.arc(500, 140, 25, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFFFFF";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(525, 150, 20, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFFFFF";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(480, 120, 20, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFFFFF";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(515, 120, 20, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFFFFF";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(535, 135, 20, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFFFFF";
    crc2.fill();
    
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
    crc2.moveTo(425,200);
    crc2.lineTo(425,240);
    crc2.stroke();
    
    //snowman
    crc2.beginPath();
    crc2.arc(695,300,15,0,2*Math.PI);
    crc2.stroke();
    crc2.fillStyle = "#E6E6E6";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(695,335,20,0,2*Math.PI);
    crc2.stroke();
    crc2.fillStyle = "#E6E6E6";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(695,380,25,0,2*Math.PI);
    crc2.stroke();
    crc2.fillStyle = "#E6E6E6";
    crc2.fill();
    
    //square
    crc2.rect(375,240,100,50);
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
    drawTree(400,445,"#276D28");
    drawTree(440,420,"#276D28");
    drawTree(410,430,"#276D28");
    drawTree(470,430,"#276D28");
     

    //for loop tree
    for (let i = 0; i < 20; i++) {
    let x = 300 + Math.random() * 400;
    let y = 360 + Math.random() * 650;
    drawTree(x, y, "#276D28");
        }
    
    //function tree
    function drawTree(_x:number, _y:number, _color:string) {
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
    
    //foor loop snow
    for (let i = 0; i < 100; i++) {
    let x = Math.random() * (800 + 1);
    let y = Math.random() * (600 + 1);
    drawCircle(x, y, "#FFFFFF");
    }
    
    function drawCircle(_x:number, _y:number, _color:string) {
    //Circle
    crc2.beginPath();
    crc2.arc(_x, _y, 2, 0, 2 * Math.PI);
    crc2.fillStyle = _color;
    crc2.fill();   
    } 
}
}