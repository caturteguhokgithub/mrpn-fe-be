import React from "react";
import { Stack } from "@mui/material";
import CardCascading from "./tabProfil/cardCascading";
import CardProfilRo from "./tabProfil/cardProfilRo";
import CardStakeholder from "./tabProfil/cardStakeholder";

export default function TabProfil() {
 return (
  <Stack gap={1}>
   <CardCascading project="1" />
   <CardProfilRo project="1" />
   <CardStakeholder project="1" />
  </Stack>
 );
}
