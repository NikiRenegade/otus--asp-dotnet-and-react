import { useEffect, useState } from 'react'
import './App.css'

function App() {
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5002/weatherforecast")
            .then(res => res.json())
            .then(data => setWeather(data));
    }, []);

    return (
        <div>
            <table style={{ borderCollapse: "collapse" }}>
                <thead>
                <tr style={{ backgroundColor: "#4c77af", color: "white" }}>
                    <th style={{ border: "1px solid #4c77af"}}>Дата</th>
                    <th style={{ border: "1px solid #4c77af"}}>Температура (°C)</th>
                    <th style={{ border: "1px solid #4c77af"}}>Температура (°F)</th>
                    <th style={{ border: "1px solid #4c77af"}}>Описание</th>
                </tr>
                </thead>
                <tbody>
                {weather.map((item, index) => (
                    <tr key={index} style={{ borderBottom: "1px solid #ddd", textAlign: "center" }}>
                        <td>{new Date(item.date).toLocaleDateString()}</td>
                        <td>{item.temperatureC}</td>
                        <td>{item.temperatureF}</td>
                        <td>{item.summary}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default App
