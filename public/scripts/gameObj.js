function gameObj(){
    this.texture = PIXI.Texture.fromImage('pics/bunny.png');
    this.obj = new PIXI.Sprite(this.texture);
    
    //sprites anchor point
    this.obj.anchor.x = 0.5;
    this.obj.anchor.y = 0.5;
    
    //position
    this.obj.position.x = 200;
    this.obj.position.y = 150;
    this.exists = true;
}

function gameObj(tex, anchorx, anchory, posx, posy){
    this.texture =  PIXI.Texture.fromImage(tex);
    this.obj = new PIXI.Sprite(this.texture);
    
    //sprites anchor point
    this.obj.anchor.x = anchorx;
    this.obj.anchor.y = anchory;
    
    //position
    this.obj.position.x = posx;
    this.obj.position.y = posy;
    this.exists = true;
    
    //this is a test of event handlers
}

gameObj.prototype.setAnchor = function(x, y){
    this.obj.anchor.x = x;
    this.obj.anchor.y = y;
};

gameObj.prototype.setPosition = function(x, y){
    this.obj.position.x = x;
    this.obj.position.y = y;
};

gameObj.prototype.addSprite = function(container){
    container.addChild(this.obj);
};

gameObj.prototype.Animate = function(){
    this.obj.rotation += 0.1;  
};