import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Legend, Line } from 'recharts';
import Banglore from '../Mocks/Banglore';

const WeatherPieChart = () => {
    return (
        <div className="w-4/5 mx-auto p-6 rounded-lg shadow-lg bg-white">
            <h1 className="text-center text-2xl font-semibold text-gray-700 mb-4">Humidity and Max Temperature</h1>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={Banglore}
                        dataKey="humidity"
                        // isAnimationActive={false}
                        nameKey="city"
                        cx="40%"
                        cy="50%"
                        outerRadius={100}
                        innerRadius={60}
                        fill="#8884d8"
                        label
                    >
                    </Pie>

                    <Tooltip />
                    <Line ype="monotone" dataKey="maxTemp" stroke="#8884d8" activeDot={{ r: 8 }}/>
                    <Pie
                        data={Banglore}
                        dataKey="maxTemp"
                        isAnimationActive={false}
                        // nameKey="city"
                        cx="55%"
                        cy="50%"
                        outerRadius={80}
                        innerRadius={60}
                        fill="#82ca9d"
                        label
                    >
                    </Pie>
                    <Tooltip />
                    <Line ype="monotone" dataKey="maxTemp" stroke="#8884d8"/>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default WeatherPieChart;
