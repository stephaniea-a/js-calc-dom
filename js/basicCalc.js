document.addEventListener('DOMContentLoaded', function () {
  // your code here

  // variables

  var display = document.getElementsByClassName('display')[0];
  display.value = 0;  
  var num1 = 0;
  var num2 = 0;
  var total = 0;
  var calculation = '';

  // get button elements

  var seven = document.getElementsByName('seven')[0];
  var eight = document.getElementsByName('eight')[0];
  var nine = document.getElementsByName('nine')[0];

  var four = document.getElementsByName('four')[0];
  var five = document.getElementsByName('five')[0];
  var six = document.getElementsByName('six')[0];

  var one = document.getElementsByName('one')[0];
  var two = document.getElementsByName('two')[0];
  var three = document.getElementsByName('three')[0];

  var plus = document.getElementsByName('plus')[0];
  var eq = document.getElementsByName('eq')[0];

  // add event listeners

  seven.addEventListener('click', clickSeven);
  eight.addEventListener('click', clickEight);

  plus.addEventListener('click', add);
  eq.addEventListener('click', equals);

  function clickSeven (event) {

  	if (num1 > 0){
  		display.value = parseFloat(display.value + this.value);
  		num2 = display.value;
  		console.log(num2);

  	}

  	else { display.value = parseFloat(display.value + this.value);
  		num1 = display.value;
  		return num1;
  	}
  }

  function clickEight (event) {

  	if (display.value == ''){
  		display.value = display.value + this.value;
  		num2 = parseFloat(display.value);
  		return num2;
  	}
  	
  	else {
  		display.value = display.value + this.value;
  		num1 = parseFloat(display.value);
  		return num1;
  	}
  }

  function add (event) {
  	display.value = '';
  	calculation = '+';
  	console.log('hi');

  }

  function equals(event) {
  	if (calculation == '+') {
  		total = num1 + num2;
  		console.log(total);
  	}
  	else {
  		console.log('brole');
  	}
  }


//   // display calc values
//   function displayValue (){

//   	var displayV = document.getElementsByClassName('number');
//   	//console.log(display);

//   	for (var i = 0; i < displayV.length; i++){
// 	 	var button = displayV[i];
// 	 	console.log(button);

// 	 	button.addEventListener('click', function (event){
// 			console.log(this.value); 
	

// 		})
// 	 }

// } 

// 	//display operator symbols
// 	function displayOperator (){

// 	}
// 	// document.getElementById('textfield').innerHTML=this.value

// 	//calculate base in op
// 	function calculate(op,n1, o2) {
// 		if (op === "/" ) 
// 		document.form1.t1.value = n1 / n2
// 		else if ( op === "-" )
// 		document.form1.t1.value = n1- n2
// 		else if (op === "*")
// 		document.form1.t1.value = n1 * n2
// 		else (op =="+")
// 		document.form1.t1.value = n1 + n2
// }


   // function clear() { 
  	// 	display.value = '';
  	// 	console.log('the value is')
  	// }
  // 	document.getElementById('').innerHTML = '0'; 
  // 	console.log(this);
  // }

  // var displayButton = document.getElementsByClassName('number');


  // //function displayNumber(num) {
  // 	displayButton.addEventListener('click', function(event){
  // 	console.log(this);
  // })
//}

	// var myButton = document.getElementById('do-something');

	// myButton.addEventListener('click', function(event) {
	// 	console.log('Click');
	// 	var value1 = document.getElementById('user-input').value;
	// 	console.log(value1);

	// 	var userOutput = document.getElementById('user-output');
	// 	userOutput.innerHTML = value1;

		// var myButtons = document.getElementsByClassName('myButtons');

	// 




  // function operator() {

  // }

//   run();

// function run() {
// 	var usersChoice = getUserOption();
// 	var num1 = getNumber();
// 	var num2 = getNumber();
// 	var result = calculate(usersChoice, num1, num2);
// 	displayResults(result);
// }

// function getUserOption () {
// 	var option = prompt('(a)dd, (s)ubtract, (d)ivide, (m)ultiply');
// 	return option;
// }

// function getNumber() {
// 	var number = prompt('Enter a number');
// 	number = parseFloat(number);
// 	return number;
// }

// function calculate(option, number1, number2){
// 	var result = 0;
// 	if (option === 'a'){
// 		result = number1 + number2;
// 	} else if (option === 's'){
// 		result = number1 - number2;
// 	} else if (option === 'd'){
// 		result = number1 / number2;
// 	} else {
// 		result = number1 * number2;
// 	}
// 	return result;
// }

// function displayResults (result) {
// 	alert(result);
// }

});