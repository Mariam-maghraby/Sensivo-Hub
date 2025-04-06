import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Registering Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Sample device data with power consumption (in watts)
const devices = [
  { id: 1, name: "Device 1", power: 100 }, // power consumption in watts
  { id: 2, name: "Device 2", power: 200 },
  { id: 3, name: "Device 3", power: 50 },
  { id: 4, name: "Device 4", power: 150 },
];

const PowerConsumptionChart = () => {
  // Prepare the data for the pie chart
  const chartData = {
    labels: devices.map((device) => device.name), // Labels are device names
    datasets: [
      {
        data: devices.map((device) => device.power), // Power consumption for each device
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
