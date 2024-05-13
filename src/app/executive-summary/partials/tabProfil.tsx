import React from "react";
import { Stack } from "@mui/material";
import CardCascading from "./tabProfil/cardCascading";
import CardProfilRo from "./tabProfil/cardProfilRo";
import CardStakeholder from "./tabProfil/cardStakeholder";

export default function TabProfil({ project }: { project: string }) {
 return (
  <Stack gap={1}>
   <CardCascading project={project} />
   <CardProfilRo project={project} />
   <CardStakeholder project={project} />
  </Stack>
 );
}
