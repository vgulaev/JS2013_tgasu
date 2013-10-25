﻿function makesomething()
{
	alert("jr");
	
}
lifefield = new Array(60);

for (var i = 0; i < 60; i++){
	lifefield[i] = new Array(60);
	for (var j = 0; j < 60; j++){
		lifefield[i][j] = 0;
	}
}


function checklife(x, y)
{
	var nx, ny;
	var neib = -lifefield[x][y];
	for (var i = -1; i < 2; i++){
		for (var j = -1; j < 2; j++){
			nx = x + i;
			ny = y + j;
			if ((nx < 0) || (nx > 59) || (ny < 0) || (ny > 59)){
			}
			else{
			if (Math.abs(lifefield[nx][ny]) == 1){
			neib = neib + 1;
			}
			}
		}
	}
	
	var r = 0;
	if ((neib == 3)&&(lifefield[x][y] == 0)){
		r = 2; //new born
	}
	if (((neib == 3)||(neib == 2))&&(lifefield[x][y] == 1)){
		r = 1; //stay life
	}
	if ((r == 0)&&(lifefield[x][y] == 1)){
		r = -1;
	}
	return r;
}

function nextstep()
{
	for (var i = 0; i < 60; i++){
		for (var j = 0; j < 60; j++){
			lifefield[i][j] = checklife(i, j);
		}
	}
	for (var i = 0; i < 60; i++){
		for (var j = 0; j < 60; j++){
			if (lifefield[i][j] > 0){
				lifefield[i][j] = 1;
			}
			else{
				lifefield[i][j] = 0;
			}
		}
	}	
	//checklife(21, 19);
	paintlife();
	setTimeout("nextstep()", 100)
}

function paintlife()
{
	var elements = document.querySelectorAll(".cells");
	if (elements != null){
		for (var i = 0; i < elements.length; i++){
			elements[i].remove();
		}
	}
	
	for (var i = 0; i < 60; i++){
		for (var j = 0; j < 60; j++){
		if (lifefield[i][j] == 1){
			ll = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
			ll.setAttribute("x", 0 + 10 * i);
			ll.setAttribute("y", 0 + 10 * j);
			ll.setAttribute("width", 10);
			ll.setAttribute("height", 10);
			ll.setAttribute("fill", "black");
			ll.setAttribute("stroke", "black");
			ll.setAttribute("stroke-width", "0px");
			ll.setAttribute("troke-opacity", "0.5");
			ll.setAttribute("id", "lf"+i+"-"+j);
			ll.setAttribute("class", "cells");
			
			document.getElementById("fieldgrid").appendChild(ll);
		}
		}
	}
	//alert(lifefield[0][0]);
}

function paintgrid()
{
	for (var i = 0; i < 60; i++)
	{
		ll = document.createElementNS('http://www.w3.org/2000/svg', 'line')
		ll.setAttribute("x1", 0);
		ll.setAttribute("y1", 10 + i * 10);
		ll.setAttribute("x2", 600);
		ll.setAttribute("y2", 10 + i * 10);
		ll.setAttribute("style", "stroke:rgb(0,0,0);stroke-width:0.5");
		
		document.getElementById("fieldgrid").appendChild(ll);

		ll = document.createElementNS('http://www.w3.org/2000/svg', 'line')
		ll.setAttribute("x1", 10 + i * 10);
		ll.setAttribute("y1", 0);
		ll.setAttribute("x2", 10 + i * 10);
		ll.setAttribute("y2", 600);
		ll.setAttribute("style", "stroke:rgb(0,0,0);stroke-width:0.5");
		
		document.getElementById("fieldgrid").appendChild(ll);
	}
	paintlife();
}
var mX,mY; 

function getMouseCoords()
{
 bt=document.getElementById("fieldgrid");
  mX = this.event.x;
  mY = this.event.y; 
}

function mouseclick()
{
var t=Math.floor(mX/10)-1;
var k=Math.floor(mY/10)-3;
lifefield[t][k] = 1;
ll = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
                        ll.setAttribute("x", 0 + 10 * t);
                        ll.setAttribute("y", 0 + 10 * k);
                        ll.setAttribute("width", 10);
                        ll.setAttribute("height", 10);
                        ll.setAttribute("fill", "black");
                        ll.setAttribute("stroke", "black");
                        ll.setAttribute("stroke-width", "0px");
                        ll.setAttribute("stroke-opacity", "0.5");
                        ll.setAttribute("id", "lf"+t+"-"+k);
                        ll.setAttribute("class", "cells");
                        lifefield[t][k] = 1;
                        document.getElementById("fieldgrid").appendChild(ll);
}
