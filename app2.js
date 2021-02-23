window.onload = function(){
    let canvas;
    let context;
    let canvasWidth = 900;
    let canvasHeight = 600;
    let blockSize = 30;
    let delay = 500;
    let snakee;
    let applee;
    let score=0;
    
    const init = () =>{
        //Creation du canvas
        canvas = document.createElement("canvas");
        canvas.width =  canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.border = "5px solid black";
        document.body.appendChild(canvas);
        context = canvas.getContext('2d');
        //Creation du serpent
        snakee = new Snake([[6,4],[5,4],[4,4]],"right");
        applee = new Apple([10,10]);
        refreshCanvas();
    }

    const refreshCanvas = () =>{
        snakee.advanceSnake();
        if(snakee.checkCollision(canvasWidth/blockSize,canvasHeight/blockSize)){
            //Game Over
        }else{
            if(snakee.isEatingApple(applee)){
                snakee.ateApple = true;
                score++;
                delay-=20;
                do{
                    applee.setNewPosition(canvasWidth/blockSize,canvasHeight/blockSize);
                }while(applee.isOnSnake(snakee));
            }
            context.clearRect(0,0,canvasWidth,canvasHeight);
            drawScore();
            snakee.drawSnake(context,blockSize);
            applee.drawApple(context,blockSize);
            setTimeout(refreshCanvas,delay);
        } 
    }

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

function drawScore(){
    context.save();
    context.font = "bold 200px sans-serif ";
    context.fillStyle = "gray";
    context.textAligne = "center";
    context.textBaseLine = "middle";
    let centerX = canvasWidth/2;
    let centerY = canvasHeight/2;
    context.fillText(score.toString(),centerX-50,centerY);
    context.restore();
}

    init();
}