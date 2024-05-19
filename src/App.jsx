import React, { PureComponent } from 'react'
import LinePlot from './components/LinePlot';
import PieeChart from './components/PieChart';
import BarPlott from './components/Barplott';
import Tablee from './components/Tablee';
const App = () => {
  return (
    <>
<div className="container mx-auto p-4 space-y-6">
            <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                    <LinePlot />
                </div>
                <div className="flex-1">
                    <PieeChart />
                </div>
            </div>
            <div className="w-full">
                <BarPlott />
            </div>
            <div className="w-full">
                <Tablee />
            </div>
        </div>
    </>
  )
}
export default App;

