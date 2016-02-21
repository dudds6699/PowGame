
function StartScene(x, y){
    this.state = false;
    this.maxX = x;
    this.maxY = y;
    
    this.obj =  new PIXI.Container();
    this.obj.interactive = true;
    this.obj.visible = false;
    this.obj.hitArea = new PIXI.Rectangle(0, 0, this.maxX, this.maxY);

    // add the renderer view element to the DOM
    //$('body').append(renderer.view);
    this.backgroundimg = 'pics/PixleDungeonFloor.png';
    
    this.background = new gameObj(this.backgroundimg, 0,0,0,0);
    this.background.addSprite(this.obj);
    
    this.SetHandlers();
}

StartScene.prototype.startGame = function(){
    this.state = true;
    this.obj.visible = true;
};

StartScene.prototype.SetHandlers = function(){
    var item = this;
    
    this.obj.mousedown = function (event) 
    {
        item.obj.visible = false;
        item.state = false;
    };
    
    this.obj.tap  = function(event){
        item.obj.visible = false;
        item.state = false;
    };  
};

StartScene.prototype.anim = function(){
    return true;
};

