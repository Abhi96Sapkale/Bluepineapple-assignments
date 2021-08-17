{/* <h2 id="city">Weather in Pune</h2>
           <div class="temp"><h1 id="temp-degree">32°C</h1></div>
           <img id="icon" src="" alt="" class="icon">
           <div class="description"><h3 id="cloud" >Cloudy</h3></div>      
           <div class="description"><h3 id="humidity" >Humidity: 60% </h3></div>      
           <div class="description"><h3 id="wind-speed" >Wind Speed: 6.2kmph </h3></div>      
        </div> */}

        // var citySearch = document.getElementById("searches").value;
        var cityWeather = document.getElementById("city");
        var cityTemp = document.getElementById("temp-degree");
        var tempIcon = document.getElementById("icon");
        var cityCloud = document.getElementById("cloud");
        var cityWind = document.getElementById("humidity");
        var cityHumidity = document.getElementById("wind-speed");

        var apiId ="284fdcb160c08b1eae4c413930eacb73";
       


    const checkWeather = ( ) =>{

        setHeader = {
            headers:{
                Accept: "application/json"
            }
        }

     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${document.getElementById("searches").value}&appid=284fdcb160c08b1eae4c413930eacb73`, setHeader)
        .then( (res)=> res.json() )
        .then( (data)=>{
            console.log(data);
            cityWeather.innerHTML=`Weather in ${data.name}`
            cityTemp.innerHTML= data.main.temp-273 
            // cityIcon.innerHTML= data.icon
            cityCloud.innerHTML= data.weather.description;
            cityHumidity.innerHTML= data.humidity
            cityWind.innerHTML= data.speed
        });

    }