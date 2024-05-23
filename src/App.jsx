import React, { PureComponent } from 'react'
import WeatherBarPlot from './components/WeatherBarPlot';
import WeatherLinePlot from './components/WeatherLinePlot';
import WeatherPieChart from './components/WeatherPieChart';
import WeatherTable from './components/WeatherTable';
const App = () => {
    return (
        <>
            <div className="container mx-auto p-4 space-y-6">
                <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>
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

