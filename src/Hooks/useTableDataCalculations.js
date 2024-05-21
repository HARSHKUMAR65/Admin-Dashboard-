const useTableCalculations = (data) => {
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

  export default useTableCalculations;