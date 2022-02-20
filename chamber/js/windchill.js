// Windchill Calculation

/* SPECS

*/

let temperature = document.querySelector("#temperature").innerHTML
let degrees = document.querySelector("#degrees").innerHTML
let wind_speed = document.querySelector("#wind-speed").innerHTML
let speed_units = document.querySelector("#speed-units").innerHTML

//console.log(`${degrees}: ${temperature}`) // Del
console.log(wind_speed) //Del

// Convert F° to C°
if (degrees == "C"){
    temperature = fahrenheit_to_celsius(temperature)
    degrees = "F"
}
if (speed_units == "km/h"){
    wind_speed = kmph_to_mph(wind_speed)
    speed_units = "mph"
}

// Specification Limits
if (temperature <= 50 && wind_speed >= 3){
    const wind_chill = calc_wind_chill(temperature, wind_speed)
    document.querySelector("#wind-chill").innerHTML = wind_chill
}
else{
    console.log("Wind Chill Not Applicable")
    const wind_chill = calc_wind_chill(50, 3)
    console.log(`Example Wind Chill ${wind_chill}`)
}

function fahrenheit_to_celsius(temperature){
    return (temperature - 32) * 5/9
}

function kmph_to_mph(velocity){
    return velocity * 0.621371
}

function calc_wind_chill(temperature, speed){
    wind_chill = 35.74 + (0.6215 * temperature) - (35.75 * speed ** 0.16) + (0.4275 * temperature * speed ** 0.16)
    return wind_chill
}