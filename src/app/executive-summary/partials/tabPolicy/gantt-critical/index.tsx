// components/GanttChart.tsx
import React from "react";
import { Gantt, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import CustomTooltip from "./tooltip";
import { Box } from "@mui/material";
import {
 TasksCriticalPariwisata,
 TasksCriticalSampah,
 TasksCriticalStunting,
} from "./data";
import theme from "@/theme";
import { grey } from "@mui/material/colors";

export type TaskType = "task" | "milestone" | "project";

export interface Task {
 start: Date;
 end: Date;
 name: string;
 id: string;
 type: TaskType;
 progress: number;
 dependencies: string[];
 styles?: React.ReactNode | any;
}

export default function GanttChart({ project }: { project?: string }) {
 return (
  <Box
   sx={
    {
     // "._3zRJQ": { display: "none" },
    }
   }
  >
   <Gantt
    tasks={
     project === "1"
      ? TasksCriticalStunting
      : project === "2"
      ? TasksCriticalPariwisata
      : project === "7"
      ? TasksCriticalSampah
      : TasksCriticalSampah
    }
    viewMode={ViewMode.Year}
    TooltipContent={CustomTooltip}
    preStepsCount={1}
    // customHeader={customHeader}
    listCellWidth={""}
    // ganttHeight={420}
    columnWidth={120}
    rowHeight={60}
    barCornerRadius={6}
    barBackgroundColor={theme.palette.primary.main}
    barBackgroundSelectedColor={theme.palette.primary.dark}
    arrowColor={grey[500]}
    arrowIndent={30}
    fontFamily="'Poppins', sans-serif"
    fontSize="14px"
    // headerHeight={200}
   />
  </Box>
 );
}
