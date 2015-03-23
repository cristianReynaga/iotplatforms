	var counter=0;
	var currentMillis=0;
	var previousMillis=0;
	var interval=4000;
	var valor;


function setup() {  
	createCanvas(640, 480);
//loadJSON("http://api.thingspeak.com/channels/24240/feed/last?key=QYBTY2UU44K8K2DI", drawFeed);
	loadJSON("https://thingspeak.com/channels/24240/feeds/last",drawFeed, 'json');

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
		loadJSON("https://thingspeak.com/channels/24240/feeds/last",drawFeed, 'json');
	previousMillis = currentMillis;
}
	
}

function drawFeed(feed) {

	console.log(feed); 
	var field1 = feed.field1; 
	console.log(field1); 
	valor=field1;
}
