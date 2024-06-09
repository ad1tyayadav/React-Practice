import SearchFields from "./Search"
import InfoBox from "./Infobox"
import { useState } from "react"

export default function Weatherapp() {
    let [weather, setWeather] = useState({
        name: "Delhi",
        temp: 25.5,
        tempmax: 23.6,
        tempmmin: 28.9,
        feelslike: 24.9,
        humidity: 45,
        weather: "clear",
        cod: 200
    });

    let updateWeather = (newInfo) => {
        setWeather(newInfo);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <SearchFields updateWeather={updateWeather} />
            <br />
            <InfoBox Info={weather} />
        </div>
    )
}