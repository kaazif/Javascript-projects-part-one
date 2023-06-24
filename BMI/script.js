const btnEl = document.querySelector(".btn");
const bmiResultsEl =  document.getElementById("bmi-result");
const WeightEl = document.getElementById("Weight-condition");

function CalculateBMI(){

    const heightValue = document.getElementById("height").value /100
    const weightValue = document.getElementById("weight").value
    

    const bmiValue = weightValue / (heightValue * heightValue)
    bmiResultsEl.value = bmiValue;


    if(bmiValue < 18.5){
        WeightEl.innerText = "Under Weight"
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9){
        WeightEl.innerText = "Healthy"
    }else if (bmiValue >= 25 && bmiValue <=29.9){
        WeightEl.innerText = "OverWeight"
    }else if (bmiValue >=30){
        WeightEl.innerHTML = "Obesity"
    }
}
btnEl.addEventListener("click", CalculateBMI)
   