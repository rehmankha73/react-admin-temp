import ReactApexChart from "react-apexcharts";
import { options, series } from "../../assets/line_chart.js";

export function LineChart() {
  return (
    <div
      id="chart"
      className="p-4 grow w-2/3"
      style={{ border: "1px gray solid", borderRadius: "10px" }}
    >
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
}
