import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Banglore from '../Mocks/Banglore';

const LinePlot = () => {
    const data = Banglore;

    return (
        <div style={{ width: '100%', height: 400 }} className="w-4/5 mx-auto p-6 rounded-lg shadow-lg bg-white ">
            <ResponsiveContainer width="100%" height="100%" >
                <LineChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="city" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="maxTemp" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="minTemp" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default LinePlot;
