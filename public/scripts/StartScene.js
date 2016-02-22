
function StartScene(x, y){
    this.state = false;
    this.showScoreBoard = false;
    this.maxX = x;
    this.maxY = y;
    
    this.obj =  new PIXI.Container();
    this.obj.interactive = true;
    this.obj.visible = false;
    this.obj.hitArea = new PIXI.Rectangle(0, 0, this.maxX, this.maxY);

    // add the renderer view element to the DOM
    //$('body').append(renderer.view);
    this.backgroundimg = 'pics/PixleDungeonFloor.png';
    this.titleimg = 'pics/Title.png';
    
    this.background = new gameObj(this.backgroundimg, 0,0,0,0);
    this.background.addSprite(this.obj);
    
    this.titlescreen = new gameObj(this.titleimg, 0,0,0,0);
    this.titlescreen.addSprite(this.obj);
    
    var insText = new PIXI.Text(
            "Click to move, don't let the ogre get you!",
            {
                font : '24px Arial',
                fill : 'red', 
                stroke: '#000000',
                strokeThickness: 5
            }
            );
    insText.anchor.x = 0.5;
    insText.anchor.y = 0.5;
    insText.position.x = x / 2;
    insText.position.y = y / 2;
    this.obj.addChild(insText);
    
    var scoreBoardText = new PIXI.Text(
        "View Score Board",
        {
            font : '24px Arial',
            fill : "white",
            stroke: '#000000',
            strokeThickness: 5            
        }
        );
    scoreBoardText.anchor.x = 0.5;
    scoreBoardText.anchor.y = 0.5;
    scoreBoardText.position.x = insText.position.x;
    scoreBoardText.position.y = insText.position.y + 25 ;
    scoreBoardText.interactive = true;
    
    var sc = this;
    scoreBoardText.mousedown = function (event) {
        sc.showScoreBoard = true;
    };
    
    scoreBoardText.tap = function (event) {
        sc.showScoreBoard = true;
    };
    
    this.obj.addChild(scoreBoardText);
    
    
    var startGameText = new PIXI.Text(
        "Play Game",
        {
            font : '24px Arial',
            fill : "white",
            stroke: '#000000',
            strokeThickness: 5            
        }
    );
    startGameText.anchor.x = 0.5;
    startGameText.anchor.y = 0.5;
    startGameText.position.x = insText.position.x;
    startGameText.position.y = scoreBoardText.position.y + 25;
    startGameText.interactive = true;
    
    startGameText.mousedown = function (event) {
        sc.obj.visible = false;
        sc.state = false;
        //sc.obj.destroy();
    };
    
    startGameText.tap = function (event) {
        sc.obj.visible = false;
        sc.state = false;
        //sc.obj.destroy();
    };
    
    
    this.obj.addChild(startGameText);
    
    this.SetHandlers();
}

StartScene.prototype.startGame = function(){
    this.state = true;
    this.obj.visible = true;
};

StartScene.prototype.SetHandlers = function(){
    var item = this;
};

StartScene.prototype.anim = function(){
    return true;
};

