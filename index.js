//Declaration et initialisation de nos variables
let inputHeight = document.getElementById("height-input");
let inputWeight = document.getElementById("weight-input");

let btn = document.getElementById("btnBMI");

let showResult = document.getElementById("result");
let condition = document.getElementById("weightCondition-label");

//function permettant de faire le calcul du BMI(IMC)
function calcuBMI(height, weight) {
	let bmi = height / (weight * weight);
}
