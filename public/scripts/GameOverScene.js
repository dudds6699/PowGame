
function GameOverScene(x, y, Score){
    this.state = false;
    this.maxX = x;
    this.maxY = y;
    this.Score = Score;
    
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
    
    var PlayAgain = new PIXI.Text("Back to Start Screen",{font : '24px Arial', fill : 'white', stroke: '#000000',strokeThickness: 5});
    PlayAgain.anchor.x = 0.5;
    PlayAgain.anchor.y = 0.5;
    PlayAgain.position.x = x / 2;
    PlayAgain.position.y = text.position.y + 50;
    PlayAgain.interactive = true;
    this.obj.addChild(PlayAgain);
    
    var item = this;
    
    PlayAgain.mousedown = function (event) 
    {
        item.obj.visible = false;
        item.state = false;
    };
    
    PlayAgain.tap  = function(event){
        item.obj.visible = false;
        item.state = false;
    };  
    
    
        
    this.Submitscore = new PIXI.Text("Submit Your Score",{font : '24px Arial', fill : 'white', stroke: '#000000',strokeThickness: 5});
    this.Submitscore.anchor.x = 0.5;
    this.Submitscore.anchor.y = 0.5;
    this.Submitscore.position.x = x / 2;
    this.Submitscore.position.y = PlayAgain.position.y + 50;
    this.Submitscore.interactive = true;
    this.obj.addChild(this.Submitscore);
    
    item = this;
    
    this.Submitscore.mousedown = function (event) 
    {
        var person = prompt("Please enter your name", "Harry Potter");
        if(person !== null && person !== ""){
            NewScore(person, item.Score, "sad;lkfja;klj;laskdjf;ljlaskdjf;laksjdf;lasdjf;lasdkjf;laskjfd");
        }
        item.Submitscore.visible = false;
        item.Submitscore.interactive = false;
    };
    
    this.Submitscore.tap  = function(event){
        var person = prompt("Please enter your name");
        if(person !== null && person !== ""){
            NewScore(person, item.Score, "sad;lkfja;klj;laskdjf;ljlaskdjf;laksjdf;lasdjf;lasdkjf;laskjfd");
        }
        item.Submitscore.visible = false;
        item.Submitscore.interactive = false;
    }; 
    
    
    
    
    this.SetHandlers();
}

GameOverScene.prototype.startGame = function(){
    this.state = true;
    this.obj.visible = true;
};

GameOverScene.prototype.SetHandlers = function(){
    var item = this;
    

};

GameOverScene.prototype.anim = function(){
    return true;
};