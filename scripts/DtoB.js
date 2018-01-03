function convert(){
	var decimal = document.getElementById("formGroupExampleInput").value;
	var memo = document.getElementById("process");
	var time = document.getElementById("delayTime").value;
	time = parseInt(time) * 1000;
	memo.innerHTML="";
	decimal = parseInt(decimal);
	var array = [];
	var size = 0;
	var interval = setInterval(startInterval, time);
	function startInterval(){
		if(decimal > 0){
			var quotient = decimal/2;
			var remainder = decimal%2;
			memo.innerHTML += "<span class=lead> "+decimal+" / 2 = "+parseInt(quotient)+" ---</span>";
			memo.innerHTML += "<span class=lead style=\"color:#0000FF;\"> "+remainder+"</span><br>";
			array[size] = remainder;
			size++;
			decimal=parseInt(decimal/2);
		}
		else{
			var i, result = "";
			for(i=size-1; i>=0 ; i--){
				result += array[i].toString();
			}
			memo.innerHTML += "<p style=\"font-size: 30px;\"> Answer: "+result+"</p>";
			clearInterval(interval);
		}
	}
	
}
