import "./currentWeather.css";

const CurrentWeather = ({ data }) => {
    return (
        <div className='weather'>
            <div className='top'>
                <div>
                    <p className='city'>{data.name}</p>
                    <p className='weatherDes'>{data.weather[0].description}</p>
                </div>
                <img
                    src={`./icons/${data.weather[0].icon}.svg`}
                    alt='weather'
                    className='weather-icon'
                />
            </div>
            <div className='buttom'>
                <p className='temperature'> {Math.round(data.main.temp)}°C</p>

                <div className='details'>
                    <div className='parameter-row'>
                        <span className='parameter-label top'> Details</span>
                    </div>

                    <div className='parameter-row'>
                        <span className='parameter-label'>Feels like</span>
                        <span className='parameter-value'>
                            {Math.round(data.main.feels_like)}°C
                        </span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Wind</span>
                        <span className='parameter-value'>{Math.round(data.wind.speed)} m/s</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>humidity</span>
                        <span className='parameter-value'>{Math.round(data.main.humidity)}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;
