import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Banglore from '../Mocks/Banglore';
const WeatherBarPlot = () => {
    return (
        <>
            <h1>Bar Chart</h1>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={Banglore}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="city" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="maxTemp" fill="#8884d8" />
                    <Bar dataKey="minTemp" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </>
    )
}

export default WeatherBarPlot;