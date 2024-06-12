// components/GanttChart.tsx
import React from "react";
import { Gantt, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import CustomTooltip from "./tooltip";
import { Box } from "@mui/material";
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
    pj:string;
}

export default function GanttChart({ tasks }: { tasks:Task[] }) {
    return (
        <Box display={"flex"} justifyContent={"center"} minHeight={300}>
            <Gantt
                tasks={tasks}
                viewMode={ViewMode.Year}
                TooltipContent={CustomTooltip}
                preStepsCount={1}
                listCellWidth={""}
                columnWidth={120}
                rowHeight={60}
                barCornerRadius={6}
                barBackgroundColor={theme.palette.primary.main}
                barBackgroundSelectedColor={theme.palette.primary.dark}
                arrowColor={grey[500]}
                arrowIndent={30}
                fontFamily="'Poppins', sans-serif"
                fontSize="14px"
            />
        </Box>
    );
}
