import React from "react";
import "gantt-task-react/dist/index.css";
import dayjs from "dayjs";

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
    sumber_anggaran:string;
}
