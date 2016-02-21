
function GameOverScene(x, y){
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
    var text = new PIXI.Text("Game Over",{font : '24px Arial', fill : 'red', stroke: '#000000',strokeThickness: 5});
    text.anchor.x = 0.5;
    text.anchor.y = 0.5;
    text.position.x = x / 2;
    text.position.y = y / 2;
    this.obj.addChild(text);
    
    
    this.SetHandlers();
}

GameOverScene.prototype.startGame = function(){
    this.state = true;
    this.obj.visible = true;
};

GameOverScene.prototype.SetHandlers = function(){
    var item = this;
    
    this.obj.mousedown = function (event) 
    {
        item.obj.visible = false;
        item.state = false;
        item.obj.destroy();
    };
    
    this.obj.tap  = function(event){
        item.obj.visible = false;
        item.state = false;
        item.obj.destroy();
    };  
};

GameOverScene.prototype.anim = function(){
    return true;
};