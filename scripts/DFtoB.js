function convert(){
	var input = document.getElementById("formGroupExampleInput").value;
	var memo = document.getElementById("process");
	memo.innerHTML = "";
	var time = document.getElementById("delayTime").value;
	time = parseInt(time) * 1000;
	var inputArray = input.split(".");
	var decimal = parseInt(inputArray[0]);
	var fraction = parseInt(inputArray[1]);
	var array = [];
	var soFar = [];
	var size = 0;
	var interval = setInterval(convertDecimal, time);
	if(decimal > 0 ){
		
		function convertDecimal(){
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
				memo.innerHTML += "<p style=\"font-size: 30px;\"> Decimal part: "+result+"</p>";
				array=[];
				size=0;
				clearInterval(interval);
			}
		}
	}
	
	if(fraction>0){
		fraction = fraction * 0.1; 
		var interval = setInterval(convertFraction, time);
		function convertFraction(){
			if(!isThereOverlap(soFar, fraction)){
				memo.innerHTML += "<span class=lead> "+ fraction + " * 2 = "+ fraction*2 +"</span>" ;
				if(fraction * 2 < 1){
					memo.innerHTML += "<span class=lead> "+ " < 1 --- </span>";
					memo.innerHTML += "<span class=lead style=\"color:#0000FF;\"> 0 </span><br>";
					array[size]=0;
					fraction = fraction * 2;
				}
				else{
					memo.innerHTML += "<span class=lead> "+ " > 1 --- </span>";
					memo.innerHTML += "<span class=lead style=\"color:#0000FF;\"> 1 </span><br>";
					array[size]=1;
					fraction = fraction * 2 -1;
				}
				soFar[size] = fraction;
				size++;
			}
			else{
				var i;
				for(i=0; i<size ; i++){
					result += array[i].toString();
				}
				memo.innerHTML += "<p style=\"font-size: 30px;\"> Answer: "+result+"</p>";
				clearInterval(interval);
			}
		}
	}
}
function isThereOverlap(soFar, fraction) {
	var i;
	for(i=0; i<soFar.length ; i++){
		if(soFar[i] == fraction){
			return true;
		}
	}
	return false;
}