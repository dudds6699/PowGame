
function GrassObj(tex, anchorx, anchory, posx, posy){
    var baseTexture = new PIXI.BaseTexture.fromImage(tex);
    this.iddleAnimation = [];
    
    for (var i = 0; i < 20*16; i+=16){
        this.iddleAnimation.push(new PIXI.Texture(baseTexture, new PIXI.Rectangle(i, 0, 16, 16)));
    }

    this.idle = 0;
    
    
    this.obj = new PIXI.Sprite(this.iddleAnimation[this.idle]);
    
    //sprites anchor point
    this.obj.anchor.x = anchorx;
    this.obj.anchor.y = anchory;
    
    //position
    this.obj.position.x = posx;
    this.obj.position.y = posy;
    this.exists = true;
    
    //this is a test of event handlers
}

GrassObj.prototype.setAnchor = function(x, y){
    this.obj.anchor.x = x;
    this.obj.anchor.y = y;
};

GrassObj.prototype.setPosition = function(x, y){
    this.obj.position.x = x;
    this.obj.position.y = y;
};

GrassObj.prototype.addSprite = function(container){
    container.addChild(this.obj);
};

GrassObj.prototype.Animate = function(){
    if(this.idle >= this.iddleAnimation.length){
        this.idle = 0;
    }
    
    this.obj.texture = this.iddleAnimation[this.idle];
    this.idle++;
};