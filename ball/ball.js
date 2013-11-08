function sayhay(){
	alert("Hello");
}
mv = {};
mv.x = 2;
mv.y = 0.9;
function moveball(){
	var bl = document.getElementById("ball");
	var nx, ny;
	
	nx = parseFloat(bl.getAttribute("cx")) + mv.x;
	ny = parseFloat(bl.getAttribute("cy")) + mv.y;
	
	if (nx > 580){
		//mv.x = -mv.x + Math.random()*2 - 1;
		mv.x = Math.random()*2 - 1;
	}
	if (nx < 20){
		//mv.x = -mv.x + Math.random()*2 - 1;
		mv.x = Math.random()*2 - 1;
	}
	
	if (ny > 580){
		//mv.y = -mv.y + Math.random()*2 - 1;
		mv.y = Math.random()*2 - 1;
	}
	if ((ny < 20)&&(1 == 1)){
		//mv.y = -mv.y + Math.random()*2 - 1;
		mv.y = Math.random()*2 - 1;
	}

	bl.setAttribute("cx", nx);
	bl.setAttribute("cy", ny);

	setTimeout("moveball()", 20)
	//bl.cx
	//var nx = 
}