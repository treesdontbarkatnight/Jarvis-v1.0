//Global Variables used by the canvas to draw graphics & text aswell as containg the darktest variable to control the fade-to-black transitions used.
var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext('2d');
var red = "#FF0000";
var darktest = 100;
//

function rect(x,y,w,h,c){               //Function used to draw rectangle based on the starting x,y,width,height, and color parameters.
  	if (canvas.getContext) {
		ctx.fillStyle = c;
		ctx.fillRect(x, y, w, h);
	}
}

function background(){                        //Function to draw a rectangle covering the entire space of the canvas to simulate a solid colored background.
	w = canvas.width;
	h = canvas.height;
  	if (canvas.getContext) {
		ctx.fillStyle = '#000000';
		ctx.fillRect(0, 0, w, h);
	}
}

function drawImg(id,x,y){                       //Funcion used to get an image loaded from a HTML Element based on the specified id to draw it to the canvas at a specified x & y coordinat.
	var img = document.getElementById(id);
	ctx.filter = 'brightness(' + darktest + '%)';
	//ctx.rotate(.01);
	ctx.drawImage(img, x, y);
}

//Video Playback Script begins here.
var game;
var eventHandler = 0;
var vid;
document.getElementById("mycanvas").style.display = "none";
function vidt(videoID,time,funName){ // Used to get 
	document.getElementById("mycanvas").style.display = "none";
	game = 0;
	if(game == 0){
		document.addEventListener('keydown', function(event) {
			if(event.keyCode == 32) {
				clearInterval(gameRetunTimer);
				gameReturn(videoID);
			}
	});
	document.getElementById("mycanvas").style.display = "none";
	document.getElementById(videoID).style.display = "";
	document.getElementById("unmuteButton").style.display = "none";
	vid = document.getElementById(videoID);
	//vid.webkitRequestFullscreen();
	vid.muted = false;
	vid.play();
	eventHandler = 1;
	var gameRetunTimer = setTimeout(function(){ gameReturn(videoID,funName);}, time);
	}
}
function gameReturn(videoID,funName){
	if(eventHandler == 1){
		vid.pause();
		document.getElementById("mycanvas").style.display = "";
		var can = document.getElementById("mycanvas");
		document.getElementById(videoID).style.display = "none";
		game = 1;
	}
}
//Video Playback script ends here.


//Script used for audio playback begins here.
function audP(audioID){
	var aud = document.getElementById(audioID);
	document.getElementById(audioID).style.visibility = "visible";
	aud.muted = false;
	aud.play();
}
function audS(audioID){
	var aud = document.getElementById(audioID);
	document.getElementById(audioID).style.display = "none";
	aud.muted = true;
	aud.pause();
}
//Audio Playback script ends here.

function drawText(text,x,y){    //Function used to draw text to the canvas using a specified text string and a starting x and y coordinate.
	ctx.font = '35px pokefont';
	ctx.fillText(text,x,y);
	ctx.fillStyle = "#ffffff";
}


