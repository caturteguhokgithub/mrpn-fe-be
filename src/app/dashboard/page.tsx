"use client";

import {
 Box,
 Grid,
 Icon,
 IconButton,
 Paper,
 Stack,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
 Tooltip,
 Typography,
 alpha,
} from "@mui/material";
import React from "react";
import { logoBlue, logoBrown, logoGreen, logoOrange } from "@/app/utils/color";
import DashboardLayout from "@/app/components/layouts/layout";
import ContentPage from "@/app/components/contents";
import {
 dataset,
 datasetKategori,
 pData,
 uData,
 valueFormatter,
 xLabels,
} from "./partials/chart";
import { BarChart } from "@mui/x-charts/BarChart";
import theme from "@/theme";
import EmptyState from "@/components/empty";
import { IconEmptyData } from "@/components/icons";
import { green, red, yellow } from "@mui/material/colors";
import { IconFA } from "@/components/icons/icon-fa";

type ICard = {
 iconName: string;
 color: string;
 value: string;
 total?: string;
 title: string;
};

const BlockCard = ({
 title,
 children,
 minHeight,
}: {
 title?: string;
 children?: React.ReactNode;
 minHeight?: string;
}) => {
 return (
  <Paper
   elevation={2}
   sx={{ borderRadius: "1.25rem", p: "1.5rem", m: 1, minHeight: minHeight }}
  >
   {title ? (
    <>
     <Typography fontSize={16} fontWeight={600} mb={2}>
      {title}
     </Typography>
     {children}
    </>
   ) : (
    children
   )}
  </Paper>
 );
};

const CardValue = ({ iconName, color, value, total, title }: ICard) => {
 return (
  <Grid
   item
   p="1.25rem"
   height="140px"
   width="100%"
   md={3}
   borderRadius="16px"
   bgcolor={alpha(color, 0.2)}
   border={`1px solid ${color}`}
  >
   <Stack direction="column" justifyContent="space-between" height="100%">
    <Stack direction="row" alignItems="center" justifyContent="space-between">
     <Stack
      bgcolor={color}
      width="40px"
      height="40px"
      borderRadius="50%"
      alignItems="center"
      justifyContent="center"
     >
      <IconFA size={18} name={iconName} color="white" />
     </Stack>
     <Typography
      component="span"
      fontSize="2rem"
      fontWeight={600}
      color={color}
     >
      {value}
     </Typography>
    </Stack>
    <Stack direction="column">
     {total ? (
      <Typography color={color} fontSize="12px" fontWeight="500">
       {total}
      </Typography>
     ) : null}
     <Typography fontSize="16px" textTransform="capitalize">
      {title}
     </Typography>
    </Stack>
   </Stack>
  </Grid>
 );
};

const TableCellItem = ({
 number,
 value,
 color,
}: {
 number: number;
 value?: number;
 color: string;
}) => {
 return (
  <TableCell sx={{ p: 0, border: "2px solid white", width: "27%" }}>
   <Stack
    justifyContent="center"
    alignItems="center"
    position="relative"
    height={60}
    bgcolor={
     color === "yellow"
      ? yellow[500]
      : color === "green"
      ? green[500]
      : red[500]
    }
   >
    <Box
     position="absolute"
     top={6}
     left={6}
     fontSize={10}
     color={color === "red" ? "white" : "inherit"}
    >
     {number}
    </Box>
    <Typography fontSize={20} color={color === "red" ? "white" : "inherit"}>
     {value}
    </Typography>
   </Stack>
  </TableCell>
 );
};

export default function PageDashboardPartial({}) {
 return (
  <DashboardLayout>
   <ContentPage title="dashboard">
    <Grid container spacing={1}>
     {/* <Grid item lg={12}>
      <BlockCard>
       <Grid container gap={3} flexWrap="nowrap">
        <CardValue
         iconName="square-poll-vertical"
         color={logoOrange}
         value="47"
         title="Total Nilai Risiko"
         total="Jumlah Risiko: 12"
        />
        <CardValue
         iconName="layer-group"
         color={logoBrown}
         value="75.00%"
         title="Rencana Mitigasi"
        />
        <CardValue
         iconName="road"
         color={logoGreen}
         value="9.09%"
         title="Realisasi Mitigasi"
        />
        <CardValue
         iconName="server"
         color={logoBlue}
         value="8.51%"
         title="Impact Mitigasi"
        />
       </Grid>
      </BlockCard>
     </Grid> */}
     <Grid item lg={6} md={12} sm={12}>
      <BlockCard title="Akumulasi Risiko" minHeight="388px">
       <TableContainer sx={{ mt: 4 }}>
        <Table size="small" sx={{ width: "100%" }}>
         <TableBody>
          <TableRow>
           <TableCell
            width={60}
            sx={{ p: 0, width: 60, position: "relative", border: 0 }}
            rowSpan={3}
           >
            <Box
             sx={{
              transform: "rotate(270deg) translateY(-50%)",
              position: "absolute",
              top: "50%",
              left: "10%",
             }}
            >
             Kemungkinan
            </Box>
           </TableCell>
           <TableCell width={60} align="right" sx={{ border: 0 }}>
            3
           </TableCell>
           <TableCellItem color="yellow" number={2} value={1} />
           <TableCellItem color="yellow" number={2} />
           <TableCellItem color="red" number={3} value={2} />
          </TableRow>
          <TableRow>
           <TableCell width={60} align="right" sx={{ border: 0 }}>
            2
           </TableCell>
           <TableCellItem color="green" number={1} />
           <TableCellItem color="yellow" number={2} />
           <TableCellItem color="red" number={3} value={4} />
          </TableRow>
          <TableRow>
           <TableCell width={60} align="right" sx={{ border: 0 }}>
            1
           </TableCell>
           <TableCellItem color="green" number={1} />
           <TableCellItem color="yellow" number={2} value={1} />
           <TableCellItem color="red" number={3} />
          </TableRow>
          <TableRow sx={{ td: { border: 0 } }}>
           <TableCell sx={{ p: 0 }}></TableCell>
           <TableCell sx={{ p: 0 }}></TableCell>
           <TableCell sx={{ p: 0, py: 2 }} align="center">
            1
           </TableCell>
           <TableCell sx={{ p: 0, py: 2 }} align="center">
            2
           </TableCell>
           <TableCell sx={{ p: 0, py: 2 }} align="center">
            3
           </TableCell>
          </TableRow>
          <TableRow sx={{ td: { border: 0 } }}>
           <TableCell width={60} sx={{ p: 0, width: 60 }}></TableCell>
           <TableCell width={60} sx={{ p: 0, width: 60 }}></TableCell>
           <TableCell
            align="center"
            width={60}
            sx={{ p: 0, width: 60 }}
            colSpan={4}
           >
            Dampak
           </TableCell>
          </TableRow>
         </TableBody>
        </Table>
       </TableContainer>
      </BlockCard>
     </Grid>
     <Grid item lg={6} md={12} sm={12}>
      <BlockCard title="Kategori vs. Jumlah Risiko">
       <BarChart
        dataset={datasetKategori}
        yAxis={[
         { scaleType: "band", dataKey: "month", label: "Kategori Risiko" },
        ]}
        xAxis={[{ label: "Jumlah Risiko" }]}
        series={[
         {
          dataKey: "seoul",
          label: "Project",
          valueFormatter,
          color: "#1880C9",
         },
        ]}
        slotProps={{ legend: { hidden: true } }}
        layout="horizontal"
        height={300}
        // sx={{
        //  ".MuiChartsAxis-tickLabel": {
        //   fontSize: "9.5px !important",
        //  },
        // }}
       />
      </BlockCard>
     </Grid>
     <Grid item lg={12} sm={12}>
      <BlockCard title="10 Project dengan Nilai Risiko Terbesar">
       <BarChart
        dataset={dataset}
        yAxis={[{ scaleType: "band", dataKey: "month" }]}
        series={[
         {
          dataKey: "seoul",
          label: "Project",
          valueFormatter,
          color: "#00CCFF",
         },
        ]}
        slotProps={{ legend: { hidden: true } }}
        layout="horizontal"
        height={400}
        sx={{
         ".MuiChartsAxis-tickLabel": {
          fontSize: "9.5px !important",
         },
        }}
        margin={{
         left: 400,
        }}
       />
      </BlockCard>
     </Grid>
    </Grid>
   </ContentPage>
  </DashboardLayout>
 );
}
