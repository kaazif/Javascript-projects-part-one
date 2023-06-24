const celEl = document.getElementById("celsius");
const fehEl = document.getElementById("fahrenhiet");
const kelEl = document.getElementById("kelvin");

function computeTemp(event){
    const currentValue = +event.target.value

    switch (event.target.name) {
        case "celsius":
            kelEl.value = (currentValue + 273.32).toFixed(2);
            fehEl.value = (currentValue * 1.8 + 32).toFixed(2);
            break;
            case "fahrenhiet":
            celEl.value = ((currentValue - 32) / 1.8).toFixed(2);
            kelEl.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
            break;
        case "kelvin":
            celEl.value = (currentValue - 273.32).toFixed(2);
            fehEl.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
            break;
        default:
            break;
    }
}