var renderer;
$(document).ready(function () {
    var resx = 800;
    var resy =  600;
    var loader = PIXI.loader;
    var gameScene; //= new GameScene(resx, resy);
    var startScene;
    
    renderer = PIXI.autoDetectRenderer(resx, resy,{backgroundColor : 0x1099bb});
    
    loader
        .add('pics/Hero.png')
        .add('pics/Antagonist.png')
        .add('pics/DungeonFloor.png')
        .add('pics/PixleDungeonFloor.png')
        .add('pics/DeathAnimation.png')
        .load(startStart);
    
    
    
    document.getElementById("game").appendChild(renderer.view); 
    
    function startStart(){
        startScene = new StartScene(resx, resy);
        startScene.startGame();
        animateStart();
    }
    
    function animateStart(){
        if(startScene.state === true){
            requestAnimationFrame( animateStart );
            startScene.anim();
            renderer.render(startScene.obj);
        }else{
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
            startStart();
        }
    }
});