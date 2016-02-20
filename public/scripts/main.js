    var state = true;     
$(document).ready(function () {
    var resx = 800;
    var resy = 600;
        
    // create an new instance of a pixi stage
    var container = new PIXI.Container();
    var loader = PIXI.loader;
             
    // create a renderer instance.
    var renderer = PIXI.autoDetectRenderer(resx, resy, {backgroundColor : 0x1099bb});
    state = true;             
    container.interactive = true;
    
    //this we need to keep
    container.hitArea = new PIXI.Rectangle(0, 0, resx, resy);


    // add the renderer view element to the DOM
    //$('body').append(renderer.view);
    document.getElementById("game").appendChild(renderer.view); 
    



    loader
        .add("pics/bunny.png")
        .load(animate);   
        
        
    var check = 'pics/bunny.png';
    var enemyimg = 'pics/enemy.png';
    var test = new playerObj(check, 0.5,0.5,400,300);
    test.addSprite(container);
    test.setPosition(100,500);
    var enemy = new enemyObj(enemyimg, 0.6,0.6,400,300);
    enemy.addSprite(container);
    enemy.setPosition(400,300);
    container.mousedown = function (event) 
    {
        test.Move(event.data.originalEvent.clientX, event.data.originalEvent.clientY);
    };
    
            
    function animate() {
        requestAnimationFrame( animate );
        
        if(enemy.exists === true)
        {
            enemy.Fly(test.obj.position.x, test.obj.position.y);
            
        }
        
        //state();
        // just for fun, let's rotate mr rabbit a little
        if(test.exists === true){
            test.Animate();
        }else{
            state = false;
        }
  
        if(state === true){
            renderer.render(container);
        }
    }
});