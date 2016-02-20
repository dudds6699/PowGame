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
    
    
<<<<<<< HEAD


    var enemyimg = 'pics/Antagonist.png';

    var enemy = new enemyObj(enemyimg, 0.5,0.5,400,300);
    enemy.addSprite(container);
    enemy.setPosition(400,300);

    container.mousedown = function (event) 
    {
        player.Move(event.data.originalEvent.clientX, event.data.originalEvent.clientY);
        playWoosh(player.soundeffectid);
    };
    
    container.tap  = function(event){
        player.Move(event.data.global.x, event.data.global.y);
        playWoosh(player.soundeffectid);
    };
=======
    
    document.getElementById("game").appendChild(renderer.view); 
   
    
    function start(){
        gameScene.startGame();
        animate();
    }
>>>>>>> a75098d3797709cf37b04e4f13e59a6fad2e0747
    
    function animate(){
         requestAnimationFrame( animate );
         gameScene.Animate();
         renderer.render(gameScene.obj);
    }
});