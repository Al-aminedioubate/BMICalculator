//Declaration et initialisation de nos variables
let inputHeight = document.getElementById("height-input");
let inputWeight = document.getElementById("weight-input");

let btn = document.getElementById("btnBMI");

let showResult = document.getElementById("result");
let condition = document.getElementById("weightCondition-label");

//function permettant de faire le calcul du BMI(IMC)
function calculBMI(height, weight) {
	if (inputHeight.value === 0 || inputWeight.value === 0) return;

	height = height / 100;

	let bmi = weight / (height * height);

	if (bmi < 18.5) {
		condition.textContent = "Weight Condition : Under weight";
	}

	if (bmi > 18.5 && bmi <= 24.9) {
		condition.textContent = "Weight Condition : Normal weight";
	}

	if (bmi > 25 && bmi <= 29.9) {
		condition.textContent = "Weight Condition : Over weight";
	}

	if (bmi > 30 && bmi <= 34.9) {
		condition.textContent = "Weight Condition : Obesity (Class 1)";
	}

	if (bmi > 35 && bmi <= 39.9) {
		condition.textContent = "Weight Condition : Obesity (Class 2)";
	}

	if (bmi > 40) {
		condition.textContent = "Weight Condition : Severe obesity (Class 3)";
	}

	return bmi.toFixed(3);
}

//evenement declenchant notre calcul
btn.addEventListener("click", () => {
	let BMICalcalul = Number(calculBMI(inputHeight.value, inputWeight.value));
	showResult.value = BMICalcalul;
});
