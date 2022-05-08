import * as d3 from "d3";
import * as React from "react";
import { useEffect } from "react";
import { styled } from "../stitches.config";
import { generateRandomData } from "./utils/index";

interface data {
  value: number;
  label: number;
  tooltipContent: string;
}

function drawLineChart(props: { data: data[]; width: number; height: number }) {
  // Add logic to draw the chart here

  const { data, width, height } = props;
  const margin = { top: 50, right: 50, bottom: 50, left: 50 };
  const yMinValue = d3.min(data, (d) => d.value);
  const yMaxValue = d3.max(data, (d) => d.value);
  const xMinValue = d3.min(data, (d) => d.label);
  const xMaxValue = d3.max(data, (d) => d.label);

  return <div></div>;
}

export function LineChart() {
  const data = generateRandomData();
  const lineChartProp = {
    data: data,
    width: 400,
    height: 400,
  };
  drawLineChart(lineChartProp);
  return <div> hello</div>;
}

LineChart.displayName = "LineChart";
