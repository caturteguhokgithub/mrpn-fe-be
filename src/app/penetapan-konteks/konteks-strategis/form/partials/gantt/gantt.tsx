// import React, { useEffect, useRef } from "react";
// import Gantt from "frappe-gantt";
// import "frappe-gantt/dist/frappe-gantt.css";
// import { CustomPopupHTML } from "./customPopup";
// import { Box } from "@mui/material";
// import theme from "@/theme";
// import { grey, orange } from "@mui/material/colors";

// const GanttChart = ({ tasks }: { tasks: any }) => {
//  const ganttRef = useRef(null);

//  useEffect(() => {
//   if (ganttRef.current) {
//    new Gantt(ganttRef.current, tasks, {
//     date_format: "DD-MMM-YYYY",
//     view_mode: "Year",
//     bar_height: 35,
//     step: 6,
//     // header_height: 200,
//     // column_width: 100,
//     // padding: 2,
//     on_click: (task: any) => {
//      console.log(task);
//     },
//     on_date_change: (task: any, start: any, end: any) => {
//      console.log(task, start, end);
//     },
//     on_progress_change: (task: any, progress: any) => {
//      console.log(task, progress);
//     },
//     on_view_change: (mode: any) => {
//      console.log(mode);
//     },
//     custom_popup_html: CustomPopupHTML, // Use the custom popup
//    });
//   }
//  }, [tasks]);

//  const stylePopup = {
//   ".popup-wrapper": {
//    p: 2,
//    maxWidth: 300,
//    color: grey[600],
//    bgcolor: "white",
//    borderRadius: 2,
//    opacity: 0,
//    textAlign: "left",
//    boxShadow:
//     "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
//    ".kegiatan, .content": {
//     "strong, span": {
//      mt: 0.5,
//      fontSize: 13,
//      display: "block",
//      lineHeight: 1.2,
//     },
//    },
//    ".kegiatan": {
//     pb: 1,
//     mb: 1,
//     borderBottom: `1px solid ${grey[300]}`,
//     span: {
//      fontSize: 12,
//     },
//     strong: {
//      fontWeight: 600,
//      color: theme.palette.secondary.dark,
//     },
//    },
//    ".content": {
//     display: "flex",
//     flexDirection: "column",
//     gap: 0.5,
//     span: {
//      fontWeight: 500,
//      color: theme.palette.secondary.dark,
//      display: "inline",
//     },
//    },
//    "& + .gantt-container": {
//     // minWidth: 1200,
//    },
//   },
//   ".gantt": {
//    ".grid-header": {
//     strokeWidth: 0,
//    },
//    ".bar": {
//     fill: theme.palette.primary.main,
//    },
//    ".bar-wrapper .bar-progress": {
//     fill: theme.palette.primary.main,
//    },
//    ".bar-wrapper.active .bar-progress": {
//     fill: orange[500],
//    },
//    ".bar-label": {
//     // fill: grey[800],
//     fill: theme.palette.primary.light,
//     fontWeight: 500,
//    },
//    ".bar-group": {
//     position: "relative",
//     ".bar-label": {
//      position: "absolute",
//      top: 0,
//      left: 0,
//     },
//    },
//    ".lower-text": {
//     fontSize: 20,
//     fontWeight: 600,
//    },
//   },
//  };

//  return <Box ref={ganttRef} sx={stylePopup} />;
// };

// export default GanttChart;
