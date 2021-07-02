import {canvas, context, canvasWidth, canvasHeight, snakee, init} from './js/init.js';

// Ecouteur d' evenement
document.onkeydown = function handleKeyDown(e){
    let key = e.keyCode;
    let newDirection;
    switch(key){
        case 37:
            newDirection = "left";
            break;
        case 38:
            newDirection = "up";
            break;
        case 39:
            newDirection = "right";
            break;
        case 40:
            newDirection = "down";
            break;
        default:
            return;
    }
    snakee.setDirection(newDirection);
}


init();
