	var counter=0;
	var currentMillis=0;
	var previousMillis=0;
	var interval=20000;
	var valor;
	var power;
	var timestamp

function setup() {  
	createCanvas(windowWidth, windowHeight);
//loadJSON("http://api.thingspeak.com/channels/24240/feed/last?key=QYBTY2UU44K8K2DI", drawFeed);
	loadJSON("https://thingspeak.com/channels/24240/feeds/last",drawFeed, 'json');
	//Agrego request a less
	//loadJSON("http://52.10.233.24/v1/circuits/9016/latest",drawFeed2,'json');

}

function draw() {
	background(200);
	fill(120, 120, 1023-valor);
	noStroke();
	ellipse(50, 200, 50, 50);
	fill(120, 120, 120);
	textSize(28);	
	text("Tengo luz en casa?", 85, 50)
	text(valor, 85, 200);
	textSize(14);	
	text(timestamp, 85, 250);

	currentMillis=millis();

if(currentMillis - previousMillis >= interval){
		loadJSON("https://thingspeak.com/channels/24240/feeds/last",drawFeed, 'json');
	//loadJSON("http://52.10.233.24/v1/circuits/9016/latest",apiLess,'json');

	previousMillis = currentMillis;
}
	
}

function drawFeed(feed) {


	var field1 = feed.field1; 
	var _timestamp = feed.created_at;
//	console.log(field1 + " at " + timestamp); 
	valor=field1;
	timestamp=_timestamp
}

function apiLess(feed) {

	//console.log(feed); 
	var _power = feed.data[0].proc.power; 
	//var timestamp = feed.created_at;
	//console.log(field1 + " at " + timestamp); 
	
	console.log(_power);
	power=_power;
}
