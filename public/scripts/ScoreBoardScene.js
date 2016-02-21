
function ScoreBoardScene(x, y){
    this.state = false;
    this.maxX = x;
    this.maxY = y;
    
    this.obj =  new PIXI.Container();
    this.obj.interactive = true;
    this.obj.visible = false;
    this.obj.hitArea = new PIXI.Rectangle(0, 0, this.maxX, this.maxY);

    // add the renderer view element to the DOM
    //$('body').append(renderer.view);
    this.backgroundimg = 'pics/PixleDungeonFloor.png';
    
    this.background = new gameObj(this.backgroundimg, 0,0,0,0);
    this.background.addSprite(this.obj);
    this.title = new PIXI.Text("Score Board",{font : '24px Arial', fill : 'red', stroke: '#000000',strokeThickness: 5});
    this.title.anchor.x = 0.5;
    this.title.anchor.y = 0.5;
    this.title.position.x = x / 2;
    this.title.position.y = 50;
    this.obj.addChild(this.title);
    this.AddPeople();
    
    this.SetHandlers();
}

ScoreBoardScene.prototype.startGame = function(){
    this.state = true;
    this.obj.visible = true;
};

ScoreBoardScene.prototype.SetHandlers = function(){
    var item = this;
    
    this.obj.mousedown = function (event) 
    {
        item.obj.visible = false;
        item.state = false;
        item.obj.destroy();
    };
    
    this.obj.tap  = function(event){
        item.obj.visible = false;
        item.state = false;
        item.obj.destroy();
    };  
};

ScoreBoardScene.prototype.anim = function(){
    return true;
};

ScoreBoardScene.prototype.AddPeople = function(){
    
    var fontInfo = {font : '24px Arial', fill : 'white', stroke: '#000000',strokeThickness: 5};
    var me = this;
    $.get( "score", function( data ) {
   

  
    if(data !== undefined && data !== null){
        var items = data.length;
        var previtem = me.title;
        for(var i = 0; i < items; i++){
            //new PIXI.Text("Score Board"
            var d = data[i];
            var text = new PIXI.Text("(" + (i + 1) +"):" + d.Name +":" + d.Score, fontInfo);
            text.anchor.x = 0.5;
            text.anchor.y = 0.5;
            text.position.x = previtem.position.x;
            text.position.y = previtem.position.y + 50;
            me.obj.addChild(text);
            previtem = text;
        }
    
    }
    });
};