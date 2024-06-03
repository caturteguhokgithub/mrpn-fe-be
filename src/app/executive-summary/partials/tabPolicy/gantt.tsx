import React from "react";
import { Chart } from "react-google-charts";

function daysToMilliseconds(days: number) {
 return days * 24 * 60 * 60 * 1000;
}

const columns = [
 { type: "string", label: "Task ID" },
 { type: "string", label: "Task Name" },
 { type: "date", label: "Start Date" },
 { type: "date", label: "End Date" },
 { type: "number", label: "Duration" },
 { type: "number", label: "Percent Complete" },
 { type: "string", label: "Dependencies" },
];

const rows = [
 [
  "cp-1-1",
  "Suplementasi gizi mikro pada balita",
  new Date(2025, 0, 1),
  new Date(2029, 12, 1),
  null,
  100,
  null,
 ],
 [
  "cp-1-2",
  "Penyediaan PMT bagi balita bermasalah gizi (termasuk balita dengan BB tidak bertambah sesuai usia/ (weight faltering)",
  new Date(2025, 1, 1),
  new Date(2029, 12, 31),
  null,
  100,
  null,
 ],
 [
  "cp-1-3",
  "Tata laksana balita gizi buruk",
  new Date(2025, 1, 1),
  new Date(2029, 12, 31),
  null,
  100,
  null,
 ],
 [
  "cp-1-4",
  "Penanggulangan kurang energi kronik (KEK) pada ibu hamil",
  new Date(2025, 1, 1),
  new Date(2029, 12, 31),
  null,
  100,
  null,
 ],
 [
  "cp-1-5",
  "Pendampingan pada setiap keluarga 1000 HPK",
  new Date(2025, 1, 1),
  new Date(2029, 12, 31),
  null,
  100,
  null,
 ],
 [
  "cp-1-6",
  "Infrakstruktur air minum berbasis Masyarakat",
  new Date(2025, 1, 1),
  new Date(2029, 12, 31),
  null,
  100,
  null,
 ],
 [
  "cp-1-7",
  "Bantuan pangan bagi keluarga 1000 HPK",
  new Date(2025, 1, 1),
  new Date(2029, 12, 31),
  null,
  100,
  null,
 ],
 [
  "cp-1-8",
  "Pendampingan terhadap Ibu hamil dan Ibu Pasca melahirkan",
  new Date(2025, 1, 1),
  new Date(2029, 12, 31),
  null,
  100,
  null,
 ],
];

export const data = [columns, ...rows];

export function GanttDefault() {
 const options = {
  gantt: {
   trackHeight: 30,
   criticalPathEnabled: false,
   criticalPathStyle: {
    stroke: "#e64a19",
    strokeWidth: 5,
   },
   arrow: {
    angle: 100,
    width: 5,
    color: "green",
    radius: 0,
   },
   labelStyle: {
    fontName: "Arial",
    fontSize: 12,
    color: "#757575",
   },
   innerGridHorizLine: {
    stroke: "#e0e0e0",
    strokeWidth: 1,
   },
   innerGridTrack: { fill: "#f1f8e9" },
   innerGridDarkTrack: { fill: "#dcedc8" },
   showRowLabels: false, // Hide the y-axis labels (task names)
  },
  timeline: {
   showBarLabels: false, // Hide labels inside the bars
  },
  hAxis: {
   format: "yyyy",
   gridlines: { count: -1 },
   baselineColor: "none", // Hide the bottom hAxis baseline
   textPosition: "none", // Hide the bottom hAxis labels
  },
  tooltip: {
   isHtml: true,
  },
 };
 return (
  <Chart
   chartType="Gantt"
   width="100%"
   height="500px"
   data={data}
   options={options}
  />
 );
}
