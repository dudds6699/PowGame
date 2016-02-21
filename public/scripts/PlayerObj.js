function playerObj(){
    this.texture = PIXI.Texture.fromImage('pics/bunny.png');
    this.obj = new PIXI.Sprite(this.texture);
    
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
    this.soundeffectid = 1;
    this.dead = false;
    this.deadit = 0;
}

function playerObj(tex, anchorx, anchory, posx, posy){
    //this.texture =  PIXI.Texture.fromImage(tex);
    var baseTexture = new PIXI.BaseTexture.fromImage(tex);
    this.iddleAnimation = [];
    this.iddleAnimation.push(new PIXI.Texture(baseTexture, new PIXI.Rectangle(0, 0, 64, 64)));
    this.iddleAnimation.push(new PIXI.Texture(baseTexture, new PIXI.Rectangle(64, 0, 64, 64)));
    this.iddleAnimation.push(new PIXI.Texture(baseTexture, new PIXI.Rectangle(128, 0, 64, 64)));
    this.iddleAnimation.push(new PIXI.Texture(baseTexture, new PIXI.Rectangle(192, 0, 64, 64)));
    this.iddleAnimation.push(new PIXI.Texture(baseTexture, new PIXI.Rectangle(256, 0, 64, 64)));
    this.iddleAnimation.push(new PIXI.Texture(baseTexture, new PIXI.Rectangle(320, 0, 64, 64)));
    this.iddleAnimation.push(new PIXI.Texture(baseTexture, new PIXI.Rectangle(384, 0, 64, 64)));
    this.iddleAnimation.push(new PIXI.Texture(baseTexture, new PIXI.Rectangle(448, 0, 64, 64)));
    this.iddleAnimation.push(new PIXI.Texture(baseTexture, new PIXI.Rectangle(512, 0, 64, 64)));
    
    var baseDeathtex = new PIXI.BaseTexture.fromImage('pics/DeathAnimation.png');
    this.DeathAnimation = [];
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(0, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(64, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(128, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(192, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(256, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(320, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(384, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(448, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(512, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(576, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(640, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(704, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(768, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(832, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(896, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(960, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(1024, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(1088, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(1152, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(1216, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(1280, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(1344, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(1408, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(1472, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(1536, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(1600, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(1664, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(1728, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(1792, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(1856, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(1920, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(1984, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(2048, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(2112, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(2176, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(2240, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(2304, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(2368, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(2432, 0, 64, 64)));
    this.DeathAnimation.push(new PIXI.Texture(baseDeathtex, new PIXI.Rectangle(2496, 0, 64, 64)));




    
    
    this.obj = new PIXI.Sprite(this.iddleAnimation[0]);
    
    //sprites anchor point
    this.obj.anchor.x = anchorx;
    this.obj.anchor.y = anchory;
    this.idle = 0;
    //position
    this.obj.position.x = posx;
    this.obj.position.y = posy;
    this.exists = true;
    this.movey = false;
    this.movex = false;
    this.targetx = 0;
    this.targety = 0;
    this.v = 10;
    
    //this is a test of event handlers
    this.obj.interactive = true;
    
    //soundeffectid
    this.soundeffectid = 1;
    this.dead = false;
    this.deadit = 0;
}

playerObj.prototype.setAnchor = function(x, y){
    this.obj.anchor.x = x;
    this.obj.anchor.y = y;
};

playerObj.prototype.setPosition = function(x, y){
    this.obj.position.x = x;
    this.obj.position.y = y;
};

playerObj.prototype.addSprite = function(container){
    container.addChild(this.obj);
};

playerObj.prototype.Animate = function(){
    //this.obj.rotation += 0.1;  
    if(this.movex || this.movey){
        this.MoveToTarget();
    }else if(this.dead)
    {
        if(this.deadit < this.DeathAnimation.length){
            this.obj.texture = this.DeathAnimation[this.deadit];
            this.deadit ++;
        }
    }else if (this.dead === false){
        if(this.idle >= this.iddleAnimation.length){
            this.idle = 0;
        }
        
        this.obj.texture = this.iddleAnimation[this.idle];
        this.idle++;
    }
};

playerObj.prototype.Move = function(x, y){
    this.targetx = x;
    this.targety = y;
    this.movey = true;
    this.movex = true;
    if(this.soundeffectid == 4)
    {
        this.soundeffectid = 1;
    }
    else
    {
        this.soundeffectid += 1;
    }
};

playerObj.prototype.MoveToTarget = function(){
    if(this.obj.position.x > this.targetx && this.movex){
        this.obj.position.x -= this.v;
        this.obj.scale.x = -1;
    }else if (this.obj.position.x < this.targetx && this.movex){
        this.obj.position.x += this.v;        
        this.obj.scale.x = 1;
    }
    
    if(this.obj.position.y < this.targety && this.movey){
        this.obj.position.y += this.v;
    }else if (this.obj.position.y > this.targety && this.movey){
        this.obj.position.y -= this.v;        
    }
    
    var checkx = this.targetx - this.obj.position.x;
    if(checkx <= 10 && checkx >= -10){
        this.movex = false;
    }
    
    var checky = this.targety - this.obj.position.y;
    if(checky <= 10 && checky >= -10){
        this.movey = false;
    }
};