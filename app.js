const calculatetemp = () => {
  const numberTemp = document.getElementById("temp").value;
  //console.log(numberTemp);//
  const tempSelected = document.getElementById("temp_diff");
  const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
  const celtoFah = (cel) => {
    let fahrenheit = Math.round((cel * 9) / 5 + 32);
    return fahrenheit;
  };

  const fahToCel = (fehr) => {
    let celcius = Math.round(((fehr - 32) * 5) / 9);
    return celcius;
  };

  let result;
  if (valueTemp == "cel") {
    result = celtoFah(numberTemp);
    document.getElementById(
      "resultContainer"
    ).innerHTML = `${result}°Fahrenheit`;
  } else {
    result = fahToCel(numberTemp);
    document.getElementById("resultContainer").innerHTML = `${result}°Celcius`;
  }
};
