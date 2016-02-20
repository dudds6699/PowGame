function enemyObj(){
    this.texture = PIXI.Texture.fromImage('pics/enemy.png');
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

function enemyObj(tex, anchorx, anchory, posx, posy){
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

enemyObj.prototype.Fly = function(targetx,targety)
{
    if(this.obj.position.x > targetx)
    {
        this.obj.position.x -= 1;
    }
    else if(this.obj.position.x < targetx){
        this.obj.position.x += 1;
    }
    else
    {
        return true;
    }
    if(this.obj.position.y > targety)
    {
        this.obj.position.y -= 1;
    }
    else if(this.obj.position.y < targety){
        this.obj.position.y += 1;
    }
    else
    {
        return true;
    }
    return false;
    //if(this.obj.position.x >=  container.obj.width(integer))
    //{
        
    //}
}