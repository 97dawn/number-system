//document.getElementsByClassName("btn btn-warning").onclick = function() {convertBtoD()};
function checkInput() {
    var binary = document.getElementById("formGroupExampleInput").value;
    if (binary.includes("2") || binary.includes("3") || binary.includes("4")
    	&& binary.includes("5") || binary.includes("6") || binary.includes("7")
    	 && binary.includes("8") || binary.includes("9")) 
    {
        alert("It is not a binary number!");
    }
    else{
    	convertBtoD(binary);
    }
}
function convertBtoD(input){
	var memo = document.getElementById("process");
	memo.innerHTML="";
	var time = document.getElementById("delayTime").value;
	time = parseInt(time) * 1000;
	var showBinary = document.getElementById("binaryWithColor");
	var numOfIteration = input.length;
	var i=1,indexOfCharToChangeColor=0;
	var result = 0;
	//for(i=1 ; i<numOfIteration+1 ; i++){
	var interval = setInterval(startInterval, time);
	function startInterval(){
		if(i < numOfIteration+1){
			if(i==1){
				memo.innerHTML += "<span class=lead>"+i+"st Step: </span>";
			}
			else{
				if(i==2){
					memo.innerHTML += "<span class=lead>"+i+"nd Step: </span>";
				}
				else if(i==3){
					memo.innerHTML += "<span class=lead>"+i+"rd Step: </span>";
				}
				else{
					memo.innerHTML += "<span class=lead>"+i+"th Step: </span>";
				}
			}
			changeCharColor(memo, indexOfCharToChangeColor, input);
			memo.innerHTML += "<span class=lead>" +result+ " * 2 = </span>" ;
			memo.innerHTML += "<span class=lead style=\"color:#0000FF;\"> " +result*2+"</span><br>";
			if(i <= numOfIteration){
				result *=2;
				memo.innerHTML += "<span class=lead style=\"color:#0000FF;\">             "+result+" + </span>";
				memo.innerHTML += "<span class=lead style=\"color:	#FF0000;\">"+input[indexOfCharToChangeColor]+"</span>";
				memo.innerHTML += "<span class=lead> = "+(result+parseInt(input[indexOfCharToChangeColor]))+"</span><br>";
				result+=parseInt(input[indexOfCharToChangeColor]);
				indexOfCharToChangeColor++;
			}
			i++;
		}
		else{
			memo.innerHTML += "<p style=\"font-size: 30px;\"> Answer: "+result+"</p>";	
			clearInterval(interval);
		}
	}
}

function changeCharColor(memo, indexOfCharToChangeColor, input){
	var j;
	for(j=0; j<input.length ; j++){
		if(j==indexOfCharToChangeColor){
			memo.innerHTML+="<span style=\"color:#FF0000; font-size:30px;\">"+input[j]+"</span>";
		}
		else{
			memo.innerHTML+="<span style=\"color:#000000; font-size:30px;\">"+input[j]+"</span>";
		}
	}
	memo.innerHTML+="<br>";
}