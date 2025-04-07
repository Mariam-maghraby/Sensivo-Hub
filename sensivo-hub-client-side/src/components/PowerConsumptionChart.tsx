import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Device } from "../types/Devices";

// Registering Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PowerConsumptionChart: React.FC<{
  devices: Device[];
}> = ({ devices }) => {
  // Prepare the data for the pie chart
  const chartData = {
    labels: devices.map((device) => device.name), // Labels are device names
    datasets: [
      {
        data: devices.map((device) => {
          // Extract the numeric value from the power string (e.g., "23 kw" => 23)
          const power = device.totalPowerConsumption; // e.g., "23 kw"
          return parseFloat(power); // Convert the string to a number
        }),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"], // Colors for the pie slices
        hoverBackgroundColor: ["#FF758F", "#4C8CFF", "#FFDD76", "#5FD7D7"],
      },
    ],
  };

  return (
    <div style={{ width: "400px", height: "400px", margin: "auto" }}>
      <h2>Device Power Consumption</h2>
      <Pie data={chartData} />
    </div>
  );
};

export default PowerConsumptionChart;
