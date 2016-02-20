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
}

function playerObj(tex, anchorx, anchory, posx, posy){
    this.texture =  PIXI.Texture.fromImage(tex);
    this.obj = new PIXI.Sprite(this.texture);
    
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
    }
};

playerObj.prototype.Move = function(x, y){
    this.targetx = x;
    this.targety = y;
    this.movey = true;
    this.movex = true;
};

playerObj.prototype.MoveToTarget = function(){
    if(this.obj.position.x > this.targetx && this.movex){
        this.obj.position.x -= this.v;
    }else if (this.obj.position.x < this.targetx && this.movex){
        this.obj.position.x += this.v;        
    }else{
        this.movex = false;
    }
    
    if(this.obj.position.y < this.targety && this.movey){
        this.obj.position.y += this.v;
    }else if (this.obj.position.y > this.targety && this.movey){
        this.obj.position.y -= this.v;        
    }else{
        this.movey = false;
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