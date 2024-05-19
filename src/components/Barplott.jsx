import { PureComponent } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer , Cell } from 'recharts';
import Banglore from '../Mocks/Banglore';
const BarPlott = () => {
    const renderCustomLabel = (props) =>{
        const {x,y,width,height,value} = props;
        const radius = 10;
        return (
            <g>
                <circle cx={x + width/2} cy={y + height/2} r={radius} fill="#8884d8"/>
                <text x={x + width/2} y={y + height/2 + radius} textAnchor="middle" dominantBaseline="central" fill="white" fontSize="0.5rem" fontWeight="bold">{value}</text>
            </g>
        )
    }
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
                <Bar dataKey="maxTemp" fill="#8884d8"  />
                <Bar dataKey="minTemp" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
        </>
    )
}

export default BarPlott;