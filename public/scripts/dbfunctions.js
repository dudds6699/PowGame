function GetScoreBoard(){
    $.get( "score", function( data ) {
        console.log(data);
        //return data;
    });
}

function NewScore(name, score){
    $.post( "newRecord", { Name: name, Score: score}, function( data ) {
        
        
    }, "json");
}