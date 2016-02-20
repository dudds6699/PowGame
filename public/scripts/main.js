$(document).ready(function () {
    var resx = 800;
    var resy = 600;
        
    // create an new instance of a pixi stage
    var container = new PIXI.Container();
    var loader = PIXI.loader;
             
    // create a renderer instance.
    var renderer = PIXI.autoDetectRenderer(resx, resy, {backgroundColor : 0x1099bb});
    var state;             

    // add the renderer view element to the DOM
    //$('body').append(renderer.view);
    document.getElementById("game").appendChild(renderer.view); 
    
 
    //note this is just here for testing purposes we should really make a gaming object
    var texture = PIXI.Texture.fromImage('pics/bunny.png');

    var bunny = new PIXI.Sprite(texture);

    // center the sprite's anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    // move the sprite to the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    container.addChild(bunny);

    loader
        .add("pics/bunny.png")
        .load(animate);   
            
    function animate() {
        requestAnimationFrame( animate );
        //state();
        // just for fun, let's rotate mr rabbit a little
        bunny.rotation += 0.1;
    
        renderer.render(container);
    }
});