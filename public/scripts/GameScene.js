//var gameContainer = new PIXI.Container();

function GameScene(x, y){
    this.state = false;
    this.maxX = x;
    this.maxY = y;
    
    this.obj =  new PIXI.Container();
    this.obj.interactive = true;
    this.obj.visible = false;
    this.obj.hitArea = new PIXI.Rectangle(0, 0, this.maxX, this.maxY);

    // add the renderer view element to the DOM
    //$('body').append(renderer.view);
    
    this.heroLocation = 'pics/Hero.png';
    this.enemyimg = 'pics/Antagonist.png';
    this.scoreDelay = 0;
    this.maxDelay = 25;
    this.score = 0;
    
    this.player = new playerObj(this.heroLocation, 0.5,0.5,100,100);
    this.player.addSprite(this.obj);
    this.player.setPosition(100,500);
    
    this.enemy = new enemyObj(this.enemyimg, 0.6,0.6,400,300);
    this.enemy.addSprite(this.obj);
    this.enemy.setPosition(400,300);
    
    this.score = new scoreObj(0.5,0.5, 700, 50);
    this.score.addSprite(this.obj);
    
    this.SetHandlers();
}

GameScene.prototype.startGame = function() {
    this.state = true;
    this.obj.visible = true;
};

GameScene.prototype.SetHandlers = function(){
    var pl = this.player;  
    
    this.obj.mousedown = function (event) 
    {
        pl.Move(event.data.originalEvent.clientX, event.data.originalEvent.clientY);
        playWoosh(pl.soundeffectid);
    };
    
    this.obj.tap  = function(event){
        pl.Move(event.data.global.x, event.data.global.y);
        playWoosh(pl.soundeffectid);
    };  
};

GameScene.prototype.Animate = function () {
       
        if(this.state === true){
            
            if(this.enemy.exists === true)
            {
                if(this.enemy.Fly(this.player.obj.position.x, this.player.obj.position.y))
                {
                    playGrunt();
                }
            
            }
        
        //state();
        // just for fun, let's rotate mr rabbit a little
            if(this.player.exists === true){
                this.player.Animate();
            }else{
                this.state = false;
            }
        
            if(this.score.exists === true && (this.scoreDelay == this.maxDelay)){
                this.score.Animate();
                this.scoreDelay = 0;
            }else{
                this.scoreDelay++;
            }
 
        }
    };