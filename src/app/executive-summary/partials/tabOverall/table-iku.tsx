import React from "react";
import {
 Paper,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
} from "@mui/material";
import theme from "@/theme";

export default function TableIKU() {
 function createData(
  id: number,
  nama: string,
  kode: string,
  nomenklatur: string,
  target: string,
  realisasi: string
 ) {
  return {
   id,
   nama,
   kode,
   nomenklatur,
   target,
   realisasi,
  };
 }

 const rows = [
  createData(1, "IKU-1", "-", "-", "-", "-"),
  createData(2, "IKU-2", "-", "-", "-", "-"),
  createData(3, "IKU-3", "-", "-", "-", "-"),
 ];

 return (
  <TableContainer component={Paper} elevation={0}>
   <Table sx={{ minWidth: 650 }} size="small">
    <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
     <TableRow>
      <TableCell>Nama</TableCell>
      <TableCell>Kode</TableCell>
      <TableCell>Nomenklatur</TableCell>
      <TableCell>Target</TableCell>
      <TableCell>Realisasi</TableCell>
     </TableRow>
    </TableHead>
    <TableBody>
     {rows.map((row) => (
      <TableRow
       key={row.id}
       sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
       <TableCell>{row.nama}</TableCell>
       <TableCell>{row.kode}</TableCell>
       <TableCell>{row.nomenklatur}</TableCell>
       <TableCell>{row.target}</TableCell>
       <TableCell>{row.realisasi}</TableCell>
      </TableRow>
     ))}
    </TableBody>
   </Table>
  </TableContainer>
 );
}
