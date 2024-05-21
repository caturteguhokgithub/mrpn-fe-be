import ContentPage from "@/app/components/contents/content";
import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import EmptyState from "@/app/components/empty";
import { IconEmptyPage } from "@/app/components/icons";
import {
 Box,
 Tabs,
 Tab,
 Typography,
 Paper,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
 Stack,
} from "@mui/material";
import { grey } from "@mui/material/colors";

function createData(
 id: number,
 level: string,
 percentage: string,
 frequency: string
) {
 return { id, level, percentage, frequency };
}

const rows = [
 createData(
  1,
  "Hampir Tidak Terjadi",
  "X ≤ 10 %",
  "Jarang : < 2 kali dalam 1 Tahun"
 ),
 createData(
  2,
  "Kadang Terjadi",
  "10 < X < 30 % C",
  "Cukup Sering : 2 kali s.d 5 kali dalam 1 Tahun"
 ),
 createData(3, "Sering Terjadi", "X ≥ 30 %", "Sering : > 5 kali dalam 1 Tahun"),
];

export default function TableKemungkinan({}) {
 return (
  <Box>
   <Typography fontWeight={600} mb={1}>
    a. Kriteria Kemungkinan
   </Typography>
   <TableContainer component={Paper} sx={{ maxWidth: 800 }}>
    <Table>
     <TableHead>
      <TableRow sx={{ bgcolor: grey[200] }}>
       <TableCell colSpan={2}>Level Kemungkinan</TableCell>
       <TableCell width={200}>
        Persentase Kemungkinan Terjadi dalam 1 Periode
       </TableCell>
       <TableCell width={350}>
        Jumlah Frekuensi Kemungkinan Terjadi dalam 1 Periode
       </TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {rows.map((row) => (
       <TableRow
        key={row.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
       >
        <TableCell component="th" scope="row">
         {row.id}
        </TableCell>
        <TableCell>{row.level}</TableCell>
        <TableCell>{row.percentage}</TableCell>
        <TableCell>{row.frequency}</TableCell>
       </TableRow>
      ))}
     </TableBody>
    </Table>
   </TableContainer>
  </Box>
 );
}
