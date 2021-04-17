class Apple{
    constructor(position){
        this.position = position;
    }

    drawApple(context,blockSize){
        context.save();
        context.fillStyle = "green";
        context.beginPath();
        let x = this.position[0]*blockSize+(blockSize/2);
        let y = this.position[1]*blockSize+(blockSize/2);
        context.arc(x,y,blockSize/2,0,Math.PI*2,true);
        context.fill();
        context.restore();
    }

    setNewPosition(wib,hib){
        let x = Math.round(Math.random()*(wib-1));
        let y = Math.round(Math.random()*(hib-1));
        this.position = [x,y];
    }

    isOnSnake(snakeToCheck){
        let isOnSnake = false;
        for(let i=0;i<snakeToCheck.body.length;i++){
            if(this.position[0]===snakeToCheck.body[i][0] && this.position[1]===snakeToCheck.body[i][1]){
                isOnSnake = true;
            }
            return isOnSnake;
        }
    }
}

export {Apple}