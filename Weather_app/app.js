

const input=document.querySelector("#input");

const bttn=document.querySelector("#bttn");

const icon=document.querySelector(".icon");
const weather =document.querySelector(".weather");
const temperature=document.querySelector(".temperature");
const description=document.querySelector(".description");
const placeElement=document.querySelector(".Location1");


bttn.addEventListener("click",()=>{
    console.log(input.value)

    let city=input.value;
    getWeather(city)


})

function getWeather(city){

    console.log(city);
    

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'f79ab8b8482fd646fdee9e42165d54d5'}`)
  .then(response => response.json())
  .then(data => { 
    console.log(data);
    const iconCode=data.weather[0].icon;
    icon.innerHTML=`<img src="http://openweathermap.org/img/w/${iconCode}.png" alt=Weather Icon>`

    placeElement.innerHTML=`<h1>${data.name} ${data.sys.country} </h1>`
    console.log(`${data.sys.country}`)

    actual_temp_incelcius=(data.main.temp-273).toFixed(1)

    temperature.innerHTML=`<h3>${actual_temp_incelcius} degree celcius </h3>`;

    weather.innerHTML=`<p>${data.weather[0].main}</p>`

    weather.innerHTML=`<p>${data.weather[0].main}</p>`

    description.innerHTML=`<p>feels Like: ${(data.main.feels_like-273).toFixed(1)} <br> maximun temperature: ${(data.main.temp_max-273).toFixed(1)} <br>minimum temperature: ${(data.main.temp_min-273).toFixed(1)}</p>`






  
})
}

