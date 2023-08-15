export const series = [
  {
    name: "Statistics",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
  },
];

export const options = {
  chart: {
    height: 350,
    type: "line",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#ec407a"],
  stroke: {
    curve: "straight",
  },
  title: {
    text: "Run Statistics",
    align: "left",
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"],
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  },
};
