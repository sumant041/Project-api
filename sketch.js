

var api = 'http://api.giphy.com/v1/gifs/search?&q=';
var apikey ='&api_key=dc6zaTOxFJmzC';
//var query = 'joker';

var input;

function setup() {
  noCanvas();
  var button = select('#submit');
  button.mousePressed(AskGif);
  input = select('#query');
  
 
}
function AskGif(){
  var url = api + input.value()+ apikey;
  loadJSON(url, gotData);
}
    
function gotData(giphy){
    for(i=0; i<giphy.data.length; i++){
 createImg(giphy.data[i].images.original.url); 
    }
}



