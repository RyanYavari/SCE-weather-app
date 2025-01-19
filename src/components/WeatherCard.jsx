
import { useState } from 'react'
import Loader from './Loader';

const WeatherCard = () => {

    const [weather, setWeather] = useState(null);
    const [zip, setZip] = useState('');
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const API_key = '384530a26df84465ffe7e9419c8ef8db';
    const country = 'US';



    const fetchWeather = async () => {
        setIsLoading(true);
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&appid=${API_key}&units=imperial`);
            const data = await res.json();
            if (!res.ok) {
                setError(true)
                setWeather(null)
                return;
            }
            setError(false)
            setWeather({ ...data, zipCode: zip });
            console.log(data)



        } catch (error) {
            setError(true)
            console.log('Error fetching data ', error)
            setWeather(null)
        } finally {
            setIsLoading(false)
        }
    };



    return (
        <div>
            <div>
                <div></div>
                <div>
                    Please enter a zip code:
                    <input
                        type='text'
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        placeholder='Enter zip code'
                        disabled={isLoading}
                    />
                </div>
                <button onClick={fetchWeather} disabled={isLoading} >
                    Submit

                </button>
            </div>
            {isLoading && <Loader />}
            {error ? <p>Please enter a valid zip code!</p> : null}
            {weather ?
                <div>
                    <p>Zip Code: {weather.zipCode}</p>
                    <p>City: {weather.name}</p>
                    <p>Temperature: {weather.main.temp}°F</p>
                </div> : null
            }

        </div>
    )
}

export default WeatherCard
