import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Infobox.css"

export default function InfoBox({ Info }) {


    const Hot = "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const Cool = "https://images.unsplash.com/photo-1520021549653-5524524c47f5?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const Rain = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const icon = Info.icon;
    const iconUrl = "https://openweathermap.org/img/wn/"


    return (
        <div className="Infobox">
            <div className="cardContainer">
                <Card className='cardDet' sx={{ maxWidth: 345, width: '100%' }}>
                    <CardMedia 
                        sx={{ height: 140 }}
                        image={Info.temp > 15 ? Hot : Info.humidity > 80 ? Rain : Cool}
                        title="green iguana"
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="div">
                            <div className='cityName'>
                                <h4>{Info.name}</h4>
                                <img src={`${iconUrl}${icon}@2x.png`} alt="" />
                            </div>
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temp = {Info.temp}&deg;C</p>
                            <p>Weather = {Info.weather}</p>
                            <p>Temp max = {Info.tempmax}&deg;C</p>
                            <p>Temp min = {Info.tempmin}&deg;C</p>
                            <p>Humidity = {Info.humidity}</p>
                            <p>Feels like = {Info.feelslike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}