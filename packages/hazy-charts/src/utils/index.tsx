export function generateRandomData() {
  const chartData = [];
  for (let i = 0; i < 20; i++) {
    const value = Math.floor(Math.random() * i + 3);
    chartData.push({
      label: i,
      value,
      tooltipContent: `<b>x: </b>${i}<br><b>y: </b>${value}`,
    });
  }
  return chartData;
}
