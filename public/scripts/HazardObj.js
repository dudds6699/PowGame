function hazardObj(){
    var baseTexture = new PIXI.BaseTexture.fromImage("pics/FirePit.png");
    this.iddleAnimation = [];
    this.iddleAnimation.push(new PIXI.Texture(baseTexture, new PIXI.Rectangle(0, 0, 96, 96)));
    this.iddleAnimation.push(new PIXI.Texture(baseTexture, new PIXI.Rectangle(96, 0, 96, 96)));
    this.iddleAnimation.push(new PIXI.Texture(baseTexture, new PIXI.Rectangle(192, 0, 96, 96)));
    this.iddleAnimation.push(new PIXI.Texture(baseTexture, new PIXI.Rectangle(288, 0, 96, 96)));
    this.idle = 0;
    
    
    this.obj = new PIXI.Sprite(this.iddleAnimation[this.idle]);
    
    //sprites anchor point
    this.obj.anchor.x = 0.5;
    this.obj.anchor.y = 0.5;
    
    //position
    this.obj.position.x = Math.floor((Math.random() * 500) + 100);
    this.obj.position.y = Math.floor((Math.random() * 500) + 100);
    this.exists = true;
    this.movey = false;
    this.movex = false;
    this.targetx = 0;
    this.targety = 0;
    this.v = 1;
}

function hazardObj(tex, anchorx, anchory){
    var baseTexture = new PIXI.BaseTexture.fromImage(tex);
    this.iddleAnimation = [];
    this.iddleAnimation.push(new PIXI.Texture(baseTexture, new PIXI.Rectangle(0, 0, 96, 96)));
    this.iddleAnimation.push(new PIXI.Texture(baseTexture, new PIXI.Rectangle(96, 0, 96, 96)));
    this.iddleAnimation.push(new PIXI.Texture(baseTexture, new PIXI.Rectangle(192, 0, 96, 96)));
    this.iddleAnimation.push(new PIXI.Texture(baseTexture, new PIXI.Rectangle(288, 0, 96, 96)));
    this.idle = 0;
    
    this.obj = new PIXI.Sprite(this.iddleAnimation[this.idle]);
    
    //sprites anchor point
    this.obj.anchor.x = anchorx;
    this.obj.anchor.y = anchory;
    
    //position
    this.obj.position.x = Math.floor((Math.random() * 500) + 100);
    this.obj.position.y = Math.floor((Math.random() * 500) + 100);
    this.exists = true;
    this.v = 20;
    
    //this is a test of event handlers
    this.obj.interactive = true;
}

hazardObj.prototype.setAnchor = function(x, y){
    this.obj.anchor.x = x;
    this.obj.anchor.y = y;
};

hazardObj.prototype.setPosition = function(x, y){
    this.obj.position.x = x;
    this.obj.position.y = y;
};

hazardObj.prototype.addSprite = function(container){
    container.addChild(this.obj);
};

hazardObj.prototype.Animate = function(){
    if(this.idle >= this.iddleAnimation.length){
        this.idle = 0;
    }
    
    this.obj.texture = this.iddleAnimation[this.idle];
    this.idle++;
};

hazardObj.prototype.CheckCollide = function(targetx,targety){
    var distx = 0;
    var disty = 0;
    
    if(this.obj.position.x > targetx)
    {
        distx = this.obj.position.x - targetx;
    }
    else if(this.obj.position.x < targetx){
        distx = targetx - this.obj.position.x;
    }

    if(this.obj.position.y > targety)
    {
        disty = this.obj.position.y - targety;
    }
    else if(this.obj.position.y < targety){
        disty = targety - this.obj.position.y;
    }
    
    return distx < 60 && disty < 60;
};