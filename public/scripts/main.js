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
    



    loader
        .add("pics/bunny.png")
        .load(animate);   
        
        
    var check = 'pics/bunny.png';
    var test = new gameObj(check, 0.5,0.5,400,300);
    test.addSprite(container);
            
    function animate() {
        requestAnimationFrame( animate );
        //state();
        // just for fun, let's rotate mr rabbit a little
        test.Animate();
    
        renderer.render(container);
    }
});