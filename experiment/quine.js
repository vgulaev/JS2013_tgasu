﻿istep = 0;
function nextstep()
{
	//children i
	chi = istep + 1;
	for (var i = 1; i < 99; i++){
		lifefield[i][chi] = checklife_rule161(i, chi);
	}
	istep = chi;
	/*for (var i = 0; i < 60; i++){
		for (var j = 0; j < 60; j++){
			if (lifefield[i][j] > 0){
				lifefield[i][j] = 1;
			}
			else{
				lifefield[i][j] = 0;
			}
		}
	}*/	
	//checklife(21, 19);
	paintlife();
	if (chi < 99){
		setTimeout("nextstep()", 100)
	}
}