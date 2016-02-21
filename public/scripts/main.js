var renderer;
$(document).ready(function () {
    var resx = 800;
    var resy =  600;
    var loader = PIXI.loader;
    var gameScene; //= new GameScene(resx, resy);
    var startScene;
    var gameOverScene;
    var scoreBScene;
    
    renderer = PIXI.autoDetectRenderer(resx, resy,{backgroundColor : 0x1099bb});
    
    loader
        .add('pics/Hero.png')
        .add('pics/Antagonist.png')
        .add('pics/DungeonFloor.png')
        .add('pics/PixleDungeonFloor.png')
        .add('pics/DeathAnimation.png')
        .add('pics/Title.png')
        .add('pics/Grass.png')
        .add('pics/Moss.png')
        .load(startStart);

    
    
    
    document.getElementById("game").appendChild(renderer.view); 
    
    function scoreBoardStart(){
        scoreBScene = new ScoreBoardScene(resx, resy);
        scoreBScene.startGame();
        animateScoreBoard();
    }
    
    function animateScoreBoard(){
        if(scoreBScene.state === true){
            requestAnimationFrame( animateScoreBoard );
            scoreBScene.anim();
            renderer.render(scoreBScene.obj);
        }else{
            startStart();
        }
    }
    
    
    
    function startStart(){
        startScene = new StartScene(resx, resy);
        startScene.startGame();
        animateStart();
    }
    
    function animateStart(){
        if(startScene.state === true && startScene.showScoreBoard === false){
            requestAnimationFrame( animateStart );
            startScene.anim();
            renderer.render(startScene.obj);
        }else if(startScene.showScoreBoard === true){
            scoreBoardStart();
        }
        else{
            startGame();
        }
    }
    
    function startGame(){
        gameScene = new GameScene(resx, resy);
        gameScene.startGame();
        animateGame();
    }
    
    function animateGame(){
        if(gameScene.state === true){
            requestAnimationFrame( animateGame );
            gameScene.Animate();
            renderer.render(gameScene.obj);
        }else{
            gameOver();
        }
    }
    
    function gameOver(){
        gameOverScene = new GameOverScene(resx, resy, gameScene.score.SCORE);
        gameOverScene.startGame();
        animateGameOver();
    }
    
    function animateGameOver(){
        if(gameOverScene.state === true){
            requestAnimationFrame( animateGameOver );
            gameOverScene.anim();
            renderer.render(gameOverScene.obj);
        }else{
            startStart();
        }
    }
    
});