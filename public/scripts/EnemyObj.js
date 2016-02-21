function enemyObj(){
    var baseTexture = new PIXI.BaseTexture.fromImage(tex);
    this.iddleAnimation = [];
    this.iddleAnimation.push(new PIXI.Texture(baseTexture, new PIXI.Rectangle(0, 0, 64, 64)));
    this.iddleAnimation.push(new PIXI.Texture(baseTexture, new PIXI.Rectangle(64, 0, 64, 64)));
    this.iddleAnimation.push(new PIXI.Texture(baseTexture, new PIXI.Rectangle(128, 0, 64, 64)));
    this.iddleAnimation.push(new PIXI.Texture(baseTexture, new PIXI.Rectangle(192, 0, 64, 64)));
    this.iddleAnimation.push(new PIXI.Texture(baseTexture, new PIXI.Rectangle(256, 0, 64, 64)));
    this.idle = 0;
    
    
    this.obj = new PIXI.Sprite(this.iddleAnimation[this.idle]);
    
    //sprites anchor point
    this.obj.anchor.x = 0.5;
    this.obj.anchor.y = 0.5;
    
    //position
    this.obj.position.x = 200;
    this.obj.position.y = 150;
    this.exists = true;
    this.movey = false;
    this.movex = false;
    this.targetx = 0;
    this.targety = 0;
    this.v = 1;
}

function enemyObj(tex, anchorx, anchory, posx, posy){
    var baseTexture = new PIXI.BaseTexture.fromImage(tex);
    this.iddleAnimation = [];
    this.iddleAnimation.push(new PIXI.Texture(baseTexture, new PIXI.Rectangle(0, 0, 64, 64)));
    this.iddleAnimation.push(new PIXI.Texture(baseTexture, new PIXI.Rectangle(64, 0, 64, 64)));
    this.iddleAnimation.push(new PIXI.Texture(baseTexture, new PIXI.Rectangle(128, 0, 64, 64)));
    this.iddleAnimation.push(new PIXI.Texture(baseTexture, new PIXI.Rectangle(192, 0, 64, 64)));
    this.iddleAnimation.push(new PIXI.Texture(baseTexture, new PIXI.Rectangle(256, 0, 64, 64)));
    this.idle = 0;
    
    
    this.obj = new PIXI.Sprite(this.iddleAnimation[this.idle]);
    
    //sprites anchor point
    this.obj.anchor.x = anchorx;
    this.obj.anchor.y = anchory;
    
    //position
    this.obj.position.x = posx;
    this.obj.position.y = posy;
    this.exists = true;
    this.movey = false;
    this.movex = false;
    this.targetx = 0;
    this.targety = 0;
    this.v = 20;
    
    //this is a test of event handlers
    this.obj.interactive = true;
}

enemyObj.prototype.setAnchor = function(x, y){
    this.obj.anchor.x = x;
    this.obj.anchor.y = y;
};

enemyObj.prototype.setPosition = function(x, y){
    this.obj.position.x = x;
    this.obj.position.y = y;
};

enemyObj.prototype.addSprite = function(container){
    container.addChild(this.obj);
};

enemyObj.prototype.Move = function(x, y){
    this.targetx = x;
    this.targety = y;
    this.movey = true;
    this.movex = true;
};

enemyObj.prototype.Explode = function()
{
    this.visble = false;
}

enemyObj.prototype.Fly = function(targetx,targety, speed)
{
    var distx = 0;
    var disty = 0;
    
    if(
        (this.obj.position.x + 20 == targetx && this.obj.position.y == targety)
        ||(this.obj.position.x == targetx + 20 && this.obj.position.y == targety)
        || (this.obj.position.x == targetx && this.obj.position.y + 40 == targety)
        || (this.obj.position.x == targetx && this.obj.position.y == targety + 40)
      )
    {
        return true;
    }
    
    if(this.obj.position.x > targetx)
    {
        distx = this.obj.position.x - targetx;
        this.obj.position.x -= speed;
        this.obj.scale.x = 1;
    }
    else if(this.obj.position.x < targetx){
        distx = targetx - this.obj.position.x;
        this.obj.position.x += speed;
        this.obj.scale.x = -1;
    }

    if(this.obj.position.y > targety)
    {
        disty = this.obj.position.y - targety;
        this.obj.position.y -= speed;
    }
    else if(this.obj.position.y < targety){
        disty = targety - this.obj.position.y;
        this.obj.position.y += speed;
    }
    
    if(this.idle >= this.iddleAnimation.length){
         this.idle = 0;
    }
         
    this.obj.texture = this.iddleAnimation[this.idle];
    this.idle++;
    
    return distx < 20 && disty < 40;
}