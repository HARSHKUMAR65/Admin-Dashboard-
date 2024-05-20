import React from "react";
import Delhi from "../Mocks/Delhi";
import useTableCalculations from "../Hooks/useTableDataCalculations";

const WeatherTable = () => {
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
            {Delhi.map((cityData, index) => {
              const { maxTemp, minTemp, maxTempDate, minTempDate } = useTableCalculations(cityData.data);
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

export default WeatherTable;
