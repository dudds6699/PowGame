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
    this.backgroundimg = 'pics/PixleDungeonFloor.png';
    this.fireimg = 'pics/FirePit.png';
    this.powerupimg = 'pics/PowerUp.png';
    this.grastext = 'pics/Grass.png';
    this.mossText = "pics/Moss.png";
    
    
    this.totalGrasses = 1000;
    this.totalMoss = 50;
    this.scoreDelay = 0;
    this.maxDelay = 25;
    this.score = 0;
    
    this.grasses = [];
    this.mosses = [];
    
    this.background = new gameObj(this.backgroundimg, 0,0,0,0);
    this.background.addSprite(this.obj);
    

    //this.SetupMoss();
    this.SetupGrass();

    this.fire = new hazardObj(this.fireimg, 0.5,0.5);
    this.fire.obj.scale.y = 0.5;
    this.fire.obj.scale.x = 0.5;
    this.fire.addSprite(this.obj);
    
    this.powerup = new powerupObj(this.powerupimg, 0.5,0.5);
    this.powerup.addSprite(this.obj);

    this.player = new playerObj(this.heroLocation, 0.5,0.5,100,100);
    this.player.addSprite(this.obj);
    this.player.setPosition(100,500);
    
    this.enemy = new enemyObj(this.enemyimg, 0.5,0.5,400,300);
    this.enemy.addSprite(this.obj);
    this.enemy.setPosition(400,300);
    
    this.score = new scoreObj(0.5,0.5, 700, 50);
    this.score.addSprite(this.obj);
    
    this.bgmusic = new Audio('audio/GameSound2.wav');
    this.bgmusic.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
    
    this.SetHandlers();
}

GameScene.prototype.startGame = function() {
    this.state = true;
    this.obj.visible = true;
    this.bgmusic.play();
};

GameScene.prototype.SetHandlers = function(){
    var pl = this.player;
    var gs = this;
    
    this.obj.mousedown = function (event) 
    {
        if(pl.dead === false){
            pl.Move(event.data.originalEvent.clientX, event.data.originalEvent.clientY);
            playWoosh(pl.soundeffectid);
        }else if(pl.deadit <= pl.DeathAnimation.length) {
            gs.state = false;
            //gs.obj.destroy();
        }
    };
    
    this.obj.tap  = function(event){
        if(pl.dead === false){
            pl.Move(event.data.originalEvent.clientX, event.data.originalEvent.clientY);
            playWoosh(pl.soundeffectid);
        }else if(pl.deadit <= pl.DeathAnimation.length) {
            gs.state = false;
            //gs.obj.destroy();
        }
    };  
};

GameScene.prototype.Animate = function () {
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
    
    if(this.enemy.exists === true)
    {
        this.enemy.speed = (this.score.SCORE/(20+(this.powerup.hits*5)))+1;
        if(this.enemy.Fly(this.player.obj.position.x, this.player.obj.position.y))
        {
            if(!this.player.dead){
                playGrunt();
                this.score.exists = false;
                this.player.dead = true;
                this.enemy.obj.visible = false;
                this.bgmusic.pause();
            }
        }
    }
    
    if(this.fire.exists === true)
    {
        this.fire.Animate();
        if(this.fire.CheckCollide(this.player.obj.position.x, this.player.obj.position.y))
        {
            if(!this.player.dead){
                playGrunt();
                this.score.exists = false;
                this.player.dead = true;
                this.enemy.obj.visible = false;
                this.bgmusic.pause();
            }
        }
    }
    if(this.powerup.exists === true)
    {
        this.powerup.Animate();
        if(this.powerup.obj.visible === true)
        {
            if(this.powerup.CheckCollide(this.player.obj.position.x, this.player.obj.position.y))
            {
                playPop(this.powerup.soundeffectid);
                this.powerup.obj.visible = false;
                this.powerup.hits++;
            }
        }
        else
        {
            if(this.powerup.delay === 0)
            {
                this.powerup.Respawn(this.fire.obj.position.x,this.fire.obj.position.y);
                playBeep();
            }
            else
            {
                if(this.score.SCORE < 50)
                {
                    this.powerup.delay--;
                }
                else
                {
                    this.powerup.delay-=2;
                }
            }
        }
    }
    
    if(this.grasses.length > 0){
        var total = this.grasses.length;
        for(var i = 0; i < total; i ++){
            this.grasses[i].Animate();
        }
    }
    
};

GameScene.prototype.SetupGrass = function(){
  for(var i = 0; i < this.totalGrasses; i++){
      //randomly generate an x y posidion
      var grass =  new GrassObj(
          this.grastext, 
          0.5,
          0.5,
          Math.floor((Math.random() * this.maxX)),
          Math.floor((Math.random() * this.maxY))
        );
        grass.addSprite(this.obj);
        this.grasses.push(grass);
  }
};

GameScene.prototype.SetupMoss= function(){
  for(var i = 0; i < this.totalMoss; i++){
      //randomly generate an x y posidion
      var moss =  new gameObj(
          this.mossText, 
          0.5,
          0.5,
          Math.floor((Math.random() * this.maxX)),
          Math.floor((Math.random() * this.maxY))
        );
        moss.obj.scale.x = 0.3;
        moss.obj.scale.y = 0.3;
        moss.addSprite(this.obj);
        this.mosses.push(moss);
  }
};