window.onload = function (){


	buttons = document.getElementsByClassName("button");
	for(var i = 0; i<buttons.length; i++){
		// console.log(buttons[i]);
		buttons[i].addEventListener("click", function(){
			val = this.innerHTML;
			loadOperator(val);
		})
	}

	function loadOperator(val){
		
		operator = document.getElementById("operator_display");
		result = document.getElementById("result_display_value");
		holder = document.getElementById("holder");

		if(val == "CLR"){
			operator.innerHTML = "";
			result.innerHTML = "";
			holder.innerHTML = "";
		} else if ((val=="+")||(val=="-")||(val=="*")||(val=="/")){
			operator.innerHTML = val;
			holder.innerHTML = result.innerHTML;
			result.innerHTML = "";
		} else if (val == "ENT"){
			// console.log(holder.innerHTML, operator.innerHTML, result.innerHTML);
			calc = eval(holder.innerHTML + operator.innerHTML + result.innerHTML);
			result.innerHTML = calc;
			operator.innerHTML = "";
		} else {
			result.innerHTML += val;
		}

	}

	
}