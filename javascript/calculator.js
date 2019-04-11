
		function math() {
		  x = document.getElementById("x").value;
		  y = document.getElementById("y").value;
		  o = document.getElementById("math").selectedIndex;

		if (o == "0") {		  
		  	document.getElementById("outPut").value = parseInt(x) + parseInt(y) ;
				}
		else if(o == "1") {
			document.getElementById("outPut").value = parseInt(x) - parseInt(y) ;

				} 
		else if(o == "2") {
			document.getElementById("outPut").value = parseInt(x) * parseInt(y) ;

				}
		else if(o == "3") {
			document.getElementById("outPut").value = parseInt(x) / parseInt(y) ;

				}

		};