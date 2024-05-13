import React from "react";
import { Stack } from "@mui/material";
import CardRoadmap from "./tabPolicy/cardRoadmap";
import CardCritical from "./tabPolicy/cardCritical";
import CardRoKunci from "./tabPolicy/cardRoKunci";
import CardFund from "./tabPolicy/cardFund";

export default function TabPolicy({ project }: { project: string }) {
 return (
  <Stack gap={1}>
   <CardRoadmap project={project} />
   <CardRoKunci project={project} />
   <CardCritical project={project} />
   <CardFund project={project} />
  </Stack>
 );
}
