import * as React from 'react';
import TextField from '@mui/material/TextField';
import BasicButtons from './Button';
import './Search.css'
import { useState } from 'react';

export default function SearchFields({ updateWeather }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_KEY = 'ec96bf8c627a58f37537e778821eb75c';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?`;

    let getWeatherinfo = async () => {
        try {
            const response = await fetch(`${apiUrl}q=${city}&appid=${API_KEY}&units=metric`);
            const jsonResponse = await response.json();
            console.log(jsonResponse)
            let result = {
                name: jsonResponse.name,
                temp: jsonResponse.main.temp,
                weather: jsonResponse.weather[0].description,
                tempmax: jsonResponse.main.temp_max,
                tempmin: jsonResponse.main.temp_min,
                humidity: jsonResponse.main.humidity,
                feelslike: jsonResponse.main.feels_like,
                icon: jsonResponse.weather[0].icon,
                cod: jsonResponse.cod
            }

            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    }


    let searchcity = (evt) => {
        setCity(evt.target.value);
        if (error) {
            setError(false);
        }
    }

    let submit = async (evt) => {
        try {
            evt.preventDefault();
            let newInfo = await getWeatherinfo();
            if (newInfo && newInfo.cod === 200) {
                setError(false);  // Reset error state on successful API response
                updateWeather(newInfo);
            } else {
                setError(true);  // Set error state if the response does not indicate success
            }
        } catch {
            setError(true);
        } finally {
            setCity("");  // Clear the input after the submission, regardless of success or failure
        }
    }

    return (
        <div className='searchField'>
            <h3>Check Live Weather</h3>
            <form className='searchInput' onSubmit={submit}>
                <TextField id="Search" label="City Name" variant="outlined" value={city} onChange={searchcity} required />
                <br />
                <BasicButtons />
                {error && <p>City not found</p>}
            </form>
        </div>
    );
}