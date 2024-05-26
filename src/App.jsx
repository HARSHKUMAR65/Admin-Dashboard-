import React from 'react'
import { useEffect } from 'react';
import WeatherBarPlot from './components/WeatherBarPlot';
import WeatherLinePlot from './components/WeatherLinePlot';
import WeatherPieChart from './components/WeatherPieChart';
import WeatherTable from './components/WeatherTable';
import axios from 'axios';
const App = () => {
    const KAGGLE_USERNAME = 'harsh55555';
    const KAGGLE_KEY = 'edd5e84c704447dcc262caae3644c44a';
    useEffect(() => {
        downloadDataset();
    }, [])
    const downloadDataset = async () => {
        const dataset = 'guillemservera/global-daily-climate-data';
        const url = `http://www.kaggle.com/api/v1/datasets/download/${dataset}`;
        const auth = btoa(`${KAGGLE_USERNAME}:${KAGGLE_KEY}`);

        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Basic ${auth}`
                },
                responseType: 'arraybuffer'
            });

            const data = new TextDecoder('utf-8').decode(new Uint8Array(response.data));
            console.log(data);
        } catch (error) {
            console.error('Error downloading dataset:', error);
        }
    };
    return (
        <>
            <div className="container mx-auto p-4 space-y-6  shadow-lg my-5">
                <h1 className="text-3xl font-bold mx-2 my-5 mb-6">Weather Dashboard</h1>
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                        <WeatherLinePlot />
                    </div>
                    <div className="flex-1">
                        <WeatherPieChart />
                    </div>
                </div>
                <div className="w-full">
                    <WeatherBarPlot />
                </div>
                <div className="w-full">
                    <WeatherTable />
                </div>
            </div>
        </>
    )
}
export default App;

