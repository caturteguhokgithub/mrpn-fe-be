import React from "react";
import {
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
} from "@mui/material";
import theme from "@/theme";

export default function TableProyekNonApbn() {
 function createData(
  id: number,
  proyek: string,
  pj: string,
  lokasi: string,
  kategori: string
 ) {
  return {
   id,
   proyek,
   pj,
   lokasi,
   kategori,
  };
 }

 const rows = [
  createData(
   1,
   "Pendampingan Penerapan Industri 4.0 di Sektor Industri Makanan, Hasil Laut dan Perikanan",
   "KEMENTERIAN DALAM NEGERI",
   "Bontang Kalimantan Selatan",
   "-"
  ),
  createData(
   1,
   "Pendampingan Penerapan Industri 4.0 di Sektor Industri Makanan, Hasil Laut dan Perikanan",
   "KEMENTERIAN DALAM NEGERI",
   "Bontang Kalimantan Selatan",
   "-"
  ),
  createData(
   1,
   "Pendampingan Penerapan Industri 4.0 di Sektor Industri Makanan, Hasil Laut dan Perikanan",
   "KEMENTERIAN DALAM NEGERI",
   "Bontang Kalimantan Selatan",
   "-"
  ),
  createData(
   1,
   "Pendampingan Penerapan Industri 4.0 di Sektor Industri Makanan, Hasil Laut dan Perikanan",
   "KEMENTERIAN DALAM NEGERI",
   "Bontang Kalimantan Selatan",
   "-"
  ),
  createData(
   1,
   "Pendampingan Penerapan Industri 4.0 di Sektor Industri Makanan, Hasil Laut dan Perikanan",
   "KEMENTERIAN DALAM NEGERI",
   "Bontang Kalimantan Selatan",
   "-"
  ),
  createData(
   1,
   "Pendampingan Penerapan Industri 4.0 di Sektor Industri Makanan, Hasil Laut dan Perikanan",
   "KEMENTERIAN DALAM NEGERI",
   "Bontang Kalimantan Selatan",
   "-"
  ),
  createData(
   1,
   "Pendampingan Penerapan Industri 4.0 di Sektor Industri Makanan, Hasil Laut dan Perikanan",
   "KEMENTERIAN DALAM NEGERI",
   "Bontang Kalimantan Selatan",
   "-"
  ),
  createData(
   1,
   "Pendampingan Penerapan Industri 4.0 di Sektor Industri Makanan, Hasil Laut dan Perikanan",
   "KEMENTERIAN DALAM NEGERI",
   "Bontang Kalimantan Selatan",
   "-"
  ),
  createData(
   1,
   "Pendampingan Penerapan Industri 4.0 di Sektor Industri Makanan, Hasil Laut dan Perikanan",
   "KEMENTERIAN DALAM NEGERI",
   "Bontang Kalimantan Selatan",
   "-"
  ),
 ];

 return (
  <TableContainer
   sx={{
    maxHeight: 300,
    "&::-webkit-scrollbar": {
     width: "3px",
    },
   }}
  >
   <Table stickyHeader sx={{ minWidth: 650 }} size="small">
    <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
     <TableRow>
      <TableCell>Proyek</TableCell>
      <TableCell>PJ</TableCell>
      <TableCell>Lokasi</TableCell>
      <TableCell>Kategori</TableCell>
     </TableRow>
    </TableHead>
    <TableBody>
     {rows.map((row) => (
      <TableRow
       key={row.id}
       sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
       <TableCell>{row.proyek}</TableCell>
       <TableCell>{row.pj}</TableCell>
       <TableCell>{row.lokasi}</TableCell>
       <TableCell>{row.kategori}</TableCell>
      </TableRow>
     ))}
    </TableBody>
   </Table>
  </TableContainer>
 );
}
