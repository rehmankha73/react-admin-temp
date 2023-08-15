import ReactApexChart from "react-apexcharts";
import { options, series } from "../../assets/column_chart.js";

export function ColumnChart() {
  return (
    <div
      id="chart"
      className="w-full sm:w-2/5 py-4"
      style={{ border: "1px gray solid", borderRadius: "10px" }}
    >
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
}
