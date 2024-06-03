import React from "react";
import { Typography, Paper, Stack, Box } from "@mui/material";
import theme from "@/theme";
import TableKemungkinan from "./tableKemungkinan";
import TableDampak from "./tableDampak";
import TableAnalisis from "./tableAnalisis";
import TableLevel from "./tableLevel";

const ItemInformation = ({
 title,
 children,
}: {
 title: string;
 children: React.ReactNode;
}) => {
 return (
  <Box>
   <Typography variant="h6" mb={2}>
    {title}
   </Typography>
   <Paper
    variant="outlined"
    sx={{ p: 2, bgcolor: theme.palette.primary.light, borderRadius: 2 }}
   >
    <Stack gap={4}>{children}</Stack>
   </Paper>
  </Box>
 );
};

export default function TabInformasi({}) {
 return (
  <Stack gap={5}>
   <ItemInformation title="Kriteria Risiko">
    <TableKemungkinan />
    <TableDampak />
   </ItemInformation>
   {/* <ItemInformation title="Matriks Analisis Risiko dan Level Risiko">
    <TableAnalisis />
    <TableLevel />
   </ItemInformation> */}
  </Stack>
 );
}
