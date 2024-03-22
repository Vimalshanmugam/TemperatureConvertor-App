function covertToCelsius(){
  const CelsiusResult =  document.getElementById('result');
  const fahrenheitInput =  document.getElementById('fahrenheit');

 const fahrenheiValue= parseFloat(fahrenheitInput.value);

 if(!isNaN(fahrenheiValue)){
   const celsiusValue = (fahrenheiValue-32) * (5/9);
   CelsiusResult.textContent = `Celsius: ${celsiusValue.toFixed(2)}°C`;
   CelsiusResult.classList.remove('error-mes')
 }else{
    CelsiusResult.textContent ="Please enter a vaild Fahrenheit value."
    CelsiusResult.classList.add('error-mes'); // Add error class
 }
}

function covertToFahrenheit(){
    const celsiusIput = document.getElementById("Celsius")
    const fahrenheitResult = document.getElementById("result");

    const celsiusValue = parseFloat(celsiusIput.value);

    if(!isNaN(celsiusValue)){
       const fahrenheiValue = (celsiusValue * 9 / 5) +32;
       fahrenheitResult.textContent = `Fahrenheit : ${fahrenheiValue.toFixed(2)}°F`
       fahrenheitResult.classList.remove("error-mes"); // Remove error class if present
    }else{
        
        fahrenheitResult.textContent= "Please enter a vaild Celsius value.";
        fahrenheitResult.classList.add("error-mes"); // Remove error class if present
    }
}