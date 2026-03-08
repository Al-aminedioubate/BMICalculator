//Declaration et initialisation de nos variables
let inputHeight = document.getElementById("height-input");
let inputWeight = document.getElementById("weight-input");

let btn = document.getElementById("btnBMI");

let showResult = document.getElementById("result");
let condition = document.getElementById("weightCondition-label");

//function permettant de faire le calcul du BMI(IMC)
function calcuBMI(height, weight) {
	let bmi = height / (weight * weight);

	if (bmi < 18.5) {
		console.log("you're underweight");
	}

	if (bmi > 18.5 && bmi <= 24.9) {
		console.log("you're normal weight");
	}

	if (bmi > 25 && bmi <= 29.9) {
		console.log("you're overweight");
	}

	if (bmi > 30 && bmi <= 34.9) {
		console.log("you're in obesity (Class 1)");
	}

	if (bmi > 35 && bmi <= 39.9) {
		console.log("you're in obesity (Class 2)");
	}

	if (bmi > 40) {
		console.log("you're in Severe obesity (Class 3)");
	}

	return bmi;
}
