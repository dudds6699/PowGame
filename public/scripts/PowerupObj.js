function powerupObj(){
    var baseTexture = new PIXI.BaseTexture.fromImage("pics/PowerUp.png");
    this.iddleAnimation = [];
    for (var i = 0; i <=32*45; i+=32){
        this.iddleAnimation.push(new PIXI.Texture(baseTexture, new PIXI.Rectangle(i, 0, 32, 32)));
    }

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
    this.soundeffectid = 1;
    this.delay = 400;
    this.hits = 0;
    this.obj.visible = false;
}

function powerupObj(tex, anchorx, anchory){
    var baseTexture = new PIXI.BaseTexture.fromImage(tex);
    this.iddleAnimation = [];
    for (var i = 0; i < 32*45; i+=32){
        this.iddleAnimation.push(new PIXI.Texture(baseTexture, new PIXI.Rectangle(i, 0, 32, 32)));
    }
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
    this.soundeffectid = 1;
    
    //this is a test of event handlers
    this.obj.interactive = true;
    this.delay = 400;
    this.hits = 0;
    this.obj.visible = false;
}

powerupObj.prototype.setAnchor = function(x, y){
    this.obj.anchor.x = x;
    this.obj.anchor.y = y;
};

powerupObj.prototype.setPosition = function(x, y){
    this.obj.position.x = x;
    this.obj.position.y = y;
};

powerupObj.prototype.addSprite = function(container){
    container.addChild(this.obj);
};

powerupObj.prototype.Animate = function(){
    if(this.idle >= this.iddleAnimation.length){
        this.idle = 0;
    }
    
    this.obj.texture = this.iddleAnimation[this.idle];
    this.idle++;
};

powerupObj.prototype.Respawn = function(hazardx,hazardy){
    do{
        this.obj.position.x = Math.floor((Math.random() * 500) + 100);
        this.obj.position.y = Math.floor((Math.random() * 500) + 100);
    }
    while(this.CheckCollide(hazardx,hazardy)===true);
    
    this.delay = 400;
    this.obj.visible = true;
}

powerupObj.prototype.CheckCollide = function(targetx,targety){
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
    
    if(distx < 20 && disty < 20)
    {
        if(this.soundeffectid == 2)
        {
            this.soundeffectid = 1;
        }
        else
        {
            this.soundeffectid = 2;
        }
        return true;
    }
    return false;
};