import React from "react";
import Delhi from "../Mocks/Delhi";

const Tablee = () => {
  const table = Delhi;
  console.log(table, 'this is table');
  const getMaxMinTemps = (data) => {
    let maxTemp = -Infinity;
    let minTemp = Infinity;
    let maxTempDate = "";
    let minTempDate = "";

    data.forEach(day => {
      if (day.maxTemp > maxTemp) {
        maxTemp = day.maxTemp;
        maxTempDate = day.date;
      }
      if (day.minTemp < minTemp) {
        minTemp = day.minTemp;
        minTempDate = day.date;
      }
    });

    return { maxTemp, minTemp, maxTempDate, minTempDate };
  };

  return (
    <>
<div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-4">Weather Data</h1>
            <table className="min-w-full bg-white border-collapse border border-gray-200">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border border-gray-200 bg-gray-100">City</th>
                        <th className="px-4 py-2 border border-gray-200 bg-gray-100">Max Temp (°C)</th>
                        <th className="px-4 py-2 border border-gray-200 bg-gray-100">Date (Max Temp)</th>
                        <th className="px-4 py-2 border border-gray-200 bg-gray-100">Min Temp (°C)</th>
                        <th className="px-4 py-2 border border-gray-200 bg-gray-100">Date (Min Temp)</th>
                    </tr>
                </thead>
                <tbody>
                    {table.map((cityData, index) => {
                        const { maxTemp, minTemp, maxTempDate, minTempDate } = getMaxMinTemps(cityData.data);
                        return (
                            <tr key={index}>
                                <td className="px-4 py-2 border border-gray-200">{cityData.city}</td>
                                <td className="px-4 py-2 border border-gray-200">{maxTemp}</td>
                                <td className="px-4 py-2 border border-gray-200">{maxTempDate}</td>
                                <td className="px-4 py-2 border border-gray-200">{minTemp}</td>
                                <td className="px-4 py-2 border border-gray-200">{minTempDate}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    </>
  );
};

export default Tablee;
