		var ctx;
		var stopGame = false;
		function runGame(){			
			ctx = $('#cvs').get(0).getContext('2d');
			stopGame = false;
			initial();
			runtime();
		}
		
		function runtime(){
			update();
			draw();
			if(!stopGame) setTimeout("runtime()",16);
			else onExit();
		}
		
		function draw(){
			//override this function
		}	
		
		function update(){
			//override this function
		}
		
		
		function initial(){		
		}
		
		function onExit(){
		}
