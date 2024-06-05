import React from "react";
import { Stack } from "@mui/material";
import CardRoadmap from "./tabPolicy/cardRoadmap";
import CardCritical from "./tabPolicy/cardCritical";
import CardRoKunci from "./tabPolicy/cardRoKunci";
import CardFund from "./tabPolicy/cardFund";

export default function TabPolicy() {
 return (
  <Stack gap={1}>
   <CardRoadmap project="1" />
   <CardRoKunci project="1" />
   <CardCritical project="1" />
   <CardFund project="1" />
  </Stack>
 );
}
