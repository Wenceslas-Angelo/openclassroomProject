class Snake{
    
    constructor(body,direction){
        this.body = body;
        this.direction = direction;
        this.ateApple = false
    }

    drawSnake(context,blockSize){
        context.save();
        context.fillStyle ="red";
        for(let i=0;i<this.body.length;i++){
            context.fillRect(this.body[i][0]*blockSize,this.body[i][1]*blockSize,blockSize,blockSize);
        }
        context.restore();
    }

    advanceSnake(){
        let nextPosition = this.body[0].slice();
        switch (this.direction){
            case "left":
                nextPosition[0]--;
                break;
            case "right":
                nextPosition[0]++;
                break;
            case "up":
                nextPosition[1]--;
                break;
            case "down":
                nextPosition[1]++;
                break;
            default:
                throw("Invalide direction");
        }
        this.body.unshift(nextPosition);

        if(!this.ateApple){
            this.body.pop();
        }else{
            this.ateApple = false;
        }
    }

    setDirection(newDirection){
        let allowedDirection;
        switch(this.direction){
            case "left":
            case "right":
                allowedDirection = ["up","down"];
                break;
            case "up":
            case "down":
                allowedDirection = ["left","right"];
                break;
            default:
                throw("Invalide direction");   
        }
        if(allowedDirection.indexOf(newDirection)>-1){
            this.direction = newDirection;
        }
    }

    checkCollision(widthInBlock,heightInBlock){
        let wallCollision = false;
        let snakeCollision = false;
        let rest = this.body.slice(1);
        let head = this.body[0];

        if((head[0]<0 || head[0]>(widthInBlock-1)) || (head[1]<0 || head[1]>(heightInBlock-1))){
            wallCollision = true;
        }

        for(let i=0;i<rest.length;i++){
            if(head[0]===rest[i][0] && head[1]===rest[i][1]){
                snakeCollision=true;
            }
        }
        return wallCollision || snakeCollision;
    }

    isEatingApple(appleToEat){
        let head = this.body[0];
        if(head[0]===appleToEat.position[0] && head[1]===appleToEat.position[1]){
            return true;
        }else{
            return false;
        }
    }
}

export {Snake}