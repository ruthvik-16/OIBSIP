function convertTemperature() {
    var temperature = parseFloat(document.getElementById('temperature').value);
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;

    var convertedTemp;

    if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        convertedTemp = (temperature * 9/5) + 32;
    } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
        convertedTemp = temperature + 273.15;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        convertedTemp = (temperature - 32) * 5/9;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
        convertedTemp = (temperature - 32) * 5/9 + 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
        convertedTemp = temperature - 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
        convertedTemp = (temperature - 273.15) * 9/5 + 32;
    } else {
        convertedTemp = temperature;
    }

    var resultUnit;

    switch (toUnit) {
        case 'celsius':
            resultUnit = '°C';
            break;
        case 'fahrenheit':
            resultUnit = '°F';
            break;
        case 'kelvin':
            resultUnit = 'K';
            break;
        default:
            resultUnit = '';
            break;
    }

    document.getElementById('result').value = convertedTemp.toFixed(2) + ' ' + resultUnit;
}
