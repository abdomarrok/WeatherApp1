import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/currentWeathr";
import Forcast from "./components/forcast/forcast";
import "./App.css";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";
import { useState } from "react";

function App() {
    const [currentWeathr, setCurrentWeather] = useState();
    const [forcast, setForcast] = useState(null);
    const handleOnSearchChange = (s) => {
        const [lat, lon] = s.value.split(" ");

        const currentWeatherFetch = fetch(
            `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
        );
        const forcastFetch = fetch(
            `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
        );

        Promise.all([currentWeatherFetch, forcastFetch])
            .then(async (res) => {
                const weatherRes = await res[0].json();
                const forcastRes = await res[1].json();
                console.log(s.lable);
                setCurrentWeather({ city: s.lable, ...weatherRes });
                setForcast({ city: s["lable"], ...forcastRes });
            })
            .catch((e) => {
                console.log(e);
            });
    };
    return (
        <div className='container'>
            <Search onSearchChange={handleOnSearchChange} />
            {currentWeathr && <CurrentWeather data={currentWeathr} />}
            {forcast && <Forcast data={forcast} />}
        </div>
    );
}
export default App;
