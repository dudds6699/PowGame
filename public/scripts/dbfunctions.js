function GetScoreBoard(){
    $.get( "score", function( data ) {
        console.log(data);
        //return data;
    });
}

function NewScore(name, score, token){
    $.post( "newRecord", { Name: name, Score: score, Token: token}, function( data ) {
        console.log(data);
    }, "json");
}