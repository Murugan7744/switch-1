


//*---switch----*//

var a=parseFloat (prompt ("enter a value"));
var operator=prompt("enter the opertor");
var b=parseFloat(prompt("enter b value"));

switch(operator){
	 case "+":
		 c=a+b;
	    break;
	 
	 case "-":
		 c=a-b;
	      break;
		  
	 case "*":
		 c=a*b;
		 break;
	 
	 case "/":
		 c=a%b;
		 break;
	 
	 
	      
}
document.write(c);