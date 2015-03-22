  var counter=0;
  var currentMillis=0;
  var previousMillis=0;
  var interval=1000;
	var valor;


function setup() {  
  createCanvas(640, 480);
//loadJSON("http://api.thingspeak.com/channels/24240/feed/last?key=QYBTY2UU44K8K2DI", drawFeed);
	loadJSON("https://api.thingspeak.com/channels/24240/feed.json?key=QYBTY2UU44K8K2DI",drawFeed);

}

function draw() {
	background(200);
	fill(120, 120, 1023-valor);
	noStroke();
  	ellipse(50, 50, 50, 50);
  	fill(120, 120, 120);
	textSize(28);	
	text(valor, 85, 60);

	currentMillis=millis();

if(currentMillis - previousMillis >= interval){
    loadJSON("https://api.thingspeak.com/channels/24240/feed.json?key=QYBTY2UU44K8K2DI",drawFeed);

	previousMillis = currentMillis;
}
  
}
function drawFeed(feed) {

  // Get the loaded JSON data
  //console.log(feed); // inspect the weather JSON
 var field1 = feed.feeds[0].field1;
  //var field1 = feed.created_at; // get the main.humidity out of the loaded JSON
  //console.log(field1); // inspect the humidity in the console
  valor=field1;
}
