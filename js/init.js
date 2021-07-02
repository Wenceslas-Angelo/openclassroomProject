import {Snake} from './snake.js';
import {Apple} from './apple.js';
import {drawText} from "./drawText.js";

let canvas, context, snakee, applee;
let blockSize = 30;
let score = 0;
let delay = 500;
const canvasWidth = 900;
const canvasHeight = 600;

const refreshCanvas = () =>{
       snakee.advanceSnake();
       // Gestion des collisions
       if(snakee.checkCollision(canvasWidth/blockSize,canvasHeight/blockSize)){
              // gameOver
              drawText(100, canvasWidth/3, canvasHeight-100, "Game Over", context);
       }else{
              if(snakee.isEatingApple(applee)){
                     snakee.ateApple = true;
                     score++;
                     delay-=30;
                     // Changer la position de la pomme
                     do{
                            applee.setNewPosition(canvasWidth/blockSize,canvasHeight/blockSize);
                     }while(applee.isOnSnake(snakee));
              }
              context.clearRect(0,0,canvasWidth,canvasHeight);
              // drawScore
              drawText(200, canvasWidth/2, canvasHeight/2, score.toString(), context);
              snakee.drawSnake(context,blockSize);
              applee.drawApple(context,blockSize);
              setTimeout(refreshCanvas,delay);
       } 
}


const init = () =>{
       //Creation du canvas
       canvas = document.createElement("canvas");
       canvas.width =  canvasWidth;
       canvas.height = canvasHeight;
       canvas.style.border = "5px solid black";
       canvas.style.marginLeft = "20%";
       document.body.appendChild(canvas);
       context = canvas.getContext('2d');

       //Creation du serpent
       snakee = new Snake([[6,4],[5,4],[4,4]],"right");
       // Creation de la pomme
       applee = new Apple([10,10]);

       // Rafraichir le canvas
       refreshCanvas();
}

export {canvas, context, canvasWidth, canvasHeight, snakee, init};