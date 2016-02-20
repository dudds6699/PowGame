function playWoosh(num)
{
    var woosh = new Audio("audio/woosh_1.mp3");
    
    if(num == 2)
    {
        woosh = new Audio("audio/woosh_2.mp3");
    }
    else if(num == 3)
    {
        woosh = new Audio("audio/woosh_3.mp3");
    }
    woosh.play();
}
function playGrunt()
{
    var grunt = new Audio("audio/grunt.mp3")
    grunt.play();
}