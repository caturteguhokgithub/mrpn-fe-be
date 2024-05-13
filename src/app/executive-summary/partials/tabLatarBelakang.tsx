import React from "react";
import { Stack } from "@mui/material";
import CardSwot from "./tabBackground/cardSwot";
import CardGoals from "./tabBackground/cardGoals";
import CardUraian from "./tabBackground/cardUraian";
import CardTagging from "./tabBackground/cardTagging";
import CardSegment from "./tabBackground/cardSegment";

export default function TabLatarBelakang({ project }: { project: string }) {
 return (
  <Stack gap={1}>
   <CardSwot project={project} />
   <CardGoals project={project} />
   <CardUraian project={project} />
   <CardTagging project={project} />
   <CardSegment project={project} />
  </Stack>
 );
}
