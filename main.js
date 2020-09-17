//Start of global variables.
var P1X = -1098;
var P1Y = 0;
var scene = 0;
var space_refresh = 0;
var darktimer = 0;
var goingDark = true;
var darkamount = 5000;
var title_bg = 0;
var spaceTimer = 0;
var select = 0;
var moveInAction = false;
var pokeman1X = 60;
var pokeman1Y = 150;
var pokeman2X = 300;
var pokemon2Y = 50;
var moveInActionTimer = 0;
var pokeBob = 0;
var pokeBobTimer = 0;
var pokeman1HP = 100;
var pokeman2HP = 100;
var pokeman1PP = 100;
var pokeman2PP = 100;
var pokeman1DEF = 100;
var pokeman2DEF = 100;
var moveInAction2 = false;
var pokeHealth = 2;
var musicLoop = 0;
//End of global variables.


if(musicLoop >= 13400){
		musicLoop = 0;
	}else{
		musicLoop += 1;
	}
drawImg("title_bg",0,0);
var timeout_one = setInterval(Title, 1);
function Title(){
	if(game == 1){
	audP("audio");
	if(title_bg == 0){
		drawImg("title_bg", P1X,P1Y);
		P1X += .2;
	}else if(title_bg == 1){
		drawImg("title_2", P1X,P1Y);
		P1Y -= .2;
	}else if(title_bg == 2){
		drawImg("title_3", P1X,P1Y);
		P1Y += .1;
	}else if(title_bg == 3){
		drawImg("title_4", P1X,P1Y);
	}
	drawImg("logo",0, 0);
	document.addEventListener('keydown', function(event) {
		if(scene == 0){
			if(event.keyCode == 32){
				P1X = 0;
				P1Y = 0;
				clearInterval(timeout_one);
				audS("audio");
				audP("battle");
				timeout_one = setInterval(start, 1);
			}
		}
	});
	if(space_refresh == 0){
		if(spaceTimer >= 100){
			drawImg("space",0, 230);
			space_refresh = 1;
			spaceTimer = 0;
		}else{
			spaceTimer += 1;
		}
	}else{
		if(spaceTimer >= 100){
			space_refresh = 0;
			spaceTimer = 0;
		}else{
			drawImg("space",0, 230);
			spaceTimer += 1;
		}
	}

	if(title_bg == 3){
		if(darktest>=100){
			darktest = 100;
		}else{
			darktest++;
		}
	}else{
		darktimer++;
	if(darktimer > darkamount){
			if(goingDark == true){
				darktest -= 1;
				if(darktest <= 0){
					title_bg += 1;
					if(title_bg == 1){
						P1X = 0;
						P1Y = 0;
					}else if(title_bg == 2){
						P1X = 0;
						P1Y = -754;
					}else if(title_bg == 3){
						P1X = 0;
						P1Y = 0;
					}
					darkamount = 300;
					goingDark = false;
					darktimer = 0;
				}
			}else{
				darktest += 1;
				if(darktest >= 100){
					if(title_bg == 1){
						darkamount = 2000;
					}else if(title_bg == 2){
						darkamount = 6000;
					}else if(title_bg == 3){
						darkamount = 1000;
					}
					goingDark = true;
					darktimer = 0;
				}
			}
	}
	}
}
}
function start(){
	if(game == 1){
	drawImg("arena1", 0,0);
	drawImg("pokeman", pokeman1X,pokeman1Y);
	drawImg("pokeman2", pokeman2X,pokemon2Y);
	rect(80,80,120,30,'#055401');
	rect(300,250,100*2-25,30,'#055401');
	if(pokeman2HP == 0){
		drawImg("text_box",0,300);
		ctx.fillStyle = "#ffffff";
		drawText("The opposing Pokemon ",30,340);
		drawText("has fainted!",30,375);
		pokemon2Y += 10;
		audS("battle");
		audP("victory");
	}else{
		if(pokeman2HP > 50){
			rect(90,80,pokeman2HP+2,30,'#00ff2a');
		}else if(pokeman2HP > 20 && pokeman2HP <= 50){
			rect(90,80,pokeman2HP+2,30,'#ff9900');
		}else if(pokeman2HP < 30){
			rect(90,80,pokeman2HP+2,30,'#ff0000');
		}
	}
	if(pokeman1HP > 50){
			rect(370,250,pokeman1HP,30,'#00ff2a');
		}else if(pokeman1HP > 20 && pokeman2HP <= 50){
			rect(370,250,pokeman1HP,30,'#ff9900');
		}else if(pokeman1HP < 30){
			rect(370,250,pokeman1HP,30,'#ff0000');
		}
	drawImg("p2_bar", 0,30);
	drawImg("p1_bar", 270,210);
	if(pokeman2HP == 0){
		
	}else{
	if(select == 0){
		drawImg("text_box",0,300);
		ctx.fillStyle = "#00ff2a";
		drawText("Tackle",80,340);
		ctx.fillStyle = "#ffffff";
		drawText("Swipe",80,385);
		drawText("Bite",300,340);
		drawText("Howl",300,385);
	}else if(select == 1){
		drawImg("text_box",0,300);
		ctx.fillStyle = "#ffffff";
		drawText("Tackle",80,340);
		ctx.fillStyle = "#00ff2a";
		drawText("Swipe",80,385);
		ctx.fillStyle = "#ffffff";
		drawText("Bite",300,340);
		drawText("Howl",300,385);
	}else if(select == 2){
		drawImg("text_box",0,300);
		ctx.fillStyle = "#ffffff";
		drawText("Tackle",80,340);
		drawText("Swipe",80,385);
		ctx.fillStyle = "#00ff2a";
		drawText("Bite",300,340);
		ctx.fillStyle = "#ffffff";
		drawText("Howl",300,385);
	}else if(select == 3){
		drawImg("text_box",0,300);
		ctx.fillStyle = "#ffffff";
		drawText("Tackle",80,340);
		drawText("Swipe",80,385);
		drawText("Bite",300,340);
		ctx.fillStyle = "#00ff2a";
		drawText("Howl",300,385);
	}
	}
	}
	if(moveInAction == true){
		if(moveInActionTimer >= 100){
			pokeman1X -= 60;
			audP("tackle");
			moveInAction = false;
			if(pokeman2HP > 0){
				moveInAction2 = true;
				moveInActionTimer2 = 0;
				pokeman2X -= 60;
				pokeman1HP -= 10;
					
			}
			
		}else{
			drawImg("text_box",0,300);
			ctx.fillStyle = "#ffffff";
			drawText("Mightyena used tackle!",30,340);
			moveInActionTimer += 1;
		}
	}else{
		if(pokeBob == 0){
			if(pokeBobTimer >= 50){
				
				pokeBob = 1;
				pokeBobTimer = 0;
			}else{
				
				pokeman1Y = 150;
				pokeBobTimer += 1;
			}
		}else if(pokeBob == 1){
			if(pokeBobTimer >= 100){
				pokeBob = 0;
				pokeBobTimer = 0;
			}else{
				pokeman1Y = 155;
				pokeBobTimer += 1;
		}
	}
	}
  

	if(moveInAction2 == true){
		if(moveInActionTimer2 >= 100){
			pokeman2X += 60;
			moveInAction2 = false;
		}else{
			drawImg("text_box",0,300);
			ctx.fillStyle = "#ffffff";
			drawText("Puddleglum used tackle!",30,340);
			moveInActionTimer2 += 1;
		}
	}
 

	document.addEventListener('keydown', function(event) {
		if(event.keyCode == 38) {
			if(select == 1){
				select = 0;
			}else if(select == 3){
				select = 2;
			}
		}else if(event.keyCode == 40) {
			if(select == 0){
				select = 1;
			}else if(select == 2){
				select = 3;
			}	
		}else if(event.keyCode == 37) {
			if(select == 2){
				select = 0;
			}else if(select == 3){
				select = 1;
			}	
		}else if(event.keyCode == 39) {
			if(select == 0){
				select = 2;
			}else if(select == 1){
				select = 3;
			}	
		}else if(event.keyCode == 32) {
			if(moveInAction == false){
				if(select == 0){
					if(pokeman2HP == 0){
						
					}else{
						audP("tackle");
						moveInAction = true;
						moveInActionTimer = 0;
						pokeman1X += 60;
						pokeman2HP -= 10;
					}
				}else{
					
				}
			}else{
				
			}
		}
	});
}