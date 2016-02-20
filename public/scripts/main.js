var renderer;
$(document).ready(function () {
    var resx = 800;
    var resy =  600;
    var loader = PIXI.loader;
    var gameScene = new GameScene(resx, resy);
    
    renderer = PIXI.autoDetectRenderer(resx, resy,{backgroundColor : 0x1099bb});
    
    loader
        .add('pics/Hero.png')
        .add('pics/Antagonist.png')
        .load(start);
    
    
    
    document.getElementById("game").appendChild(renderer.view); 
   
    
    function start(){
        gameScene.startGame();
        animate();
    }
    
    function animate(){
         requestAnimationFrame( animate );
         gameScene.Animate();
         renderer.render(gameScene.obj);
    }
});