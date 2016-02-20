
function scoreObj(anchorx, anchory, posx, posy){
    this.SCORE = 0;
    
    this.obj = new PIXI.Text(this.SCORE,{font : '24px Arial', fill : 0xff1010});
    
    //sprites anchor point
    this.obj.anchor.x = anchorx;
    this.obj.anchor.y = anchory;
    
    //position
    this.obj.position.x = posx;
    this.obj.position.y = posy;
    this.exists = true;
    
    
}

scoreObj.prototype.setAnchor = function(x, y){
    this.obj.anchor.x = x;
    this.obj.anchor.y = y;
};

scoreObj.prototype.setPosition = function(x, y){
    this.obj.position.x = x;
    this.obj.position.y = y;
};

scoreObj.prototype.addSprite = function(container){
    container.addChild(this.obj);
};

scoreObj.prototype.Animate = function(){
    this.SCORE++;
    this.obj.text = this.SCORE;
};

scoreObj.prototype.Bonus = function (more){
    this.SCORE += more;
};

function test(){
    var snd = new Audio("audio/explosion.mp3"); // buffers automatically when created
	snd.play();
    this.visible = false;
}