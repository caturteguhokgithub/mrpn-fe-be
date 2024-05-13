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

export default function TableDaftarProyek() {
 function createData(id: number, tahun: string, nama: string, pj: string) {
  return {
   id,
   tahun,
   nama,
   pj,
  };
 }

 const rows = [
  createData(
   1,
   "2023",
   "Pendampingan Penerapan Industri 4.0 di Sektor Industri Makanan, Hasil Laut dan Perikanan",
   "KEMENTERIAN DALAM NEGERI"
  ),
  createData(
   1,
   "2023",
   "Sertifikat Kelayakan Pengolahan (SKP) / Sertifikat Good Manufacturing Practices (GMP) yang diterbitkan",
   "MAHKAMAH AGUNG"
  ),
  createData(
   1,
   "2023",
   "Sistem Telusur dan Logistik ikan Nasional (STELINA) yang diimplementasikan",
   "KEMENTERIAN DALAM NEGERI"
  ),
  createData(
   1,
   "2023",
   "Pendampingan Penerapan Industri 4.0 di Sektor Industri Makanan, Hasil Laut dan Perikanan",
   "KEMENTERIAN DALAM NEGERI"
  ),
  createData(
   1,
   "2023",
   "Sertifikat Kelayakan Pengolahan (SKP) / Sertifikat Good Manufacturing Practices (GMP) yang diterbitkan",
   "MAHKAMAH AGUNG"
  ),
  createData(
   1,
   "2023",
   "Sistem Telusur dan Logistik ikan Nasional (STELINA) yang diimplementasikan",
   "KEMENTERIAN DALAM NEGERI"
  ),
  createData(
   1,
   "2023",
   "Pendampingan Penerapan Industri 4.0 di Sektor Industri Makanan, Hasil Laut dan Perikanan",
   "KEMENTERIAN DALAM NEGERI"
  ),
  createData(
   1,
   "2023",
   "Sertifikat Kelayakan Pengolahan (SKP) / Sertifikat Good Manufacturing Practices (GMP) yang diterbitkan",
   "MAHKAMAH AGUNG"
  ),
  createData(
   1,
   "2023",
   "Sistem Telusur dan Logistik ikan Nasional (STELINA) yang diimplementasikan",
   "KEMENTERIAN DALAM NEGERI"
  ),
  createData(
   1,
   "2023",
   "Pendampingan Penerapan Industri 4.0 di Sektor Industri Makanan, Hasil Laut dan Perikanan",
   "KEMENTERIAN DALAM NEGERI"
  ),
  createData(
   1,
   "2023",
   "Sertifikat Kelayakan Pengolahan (SKP) / Sertifikat Good Manufacturing Practices (GMP) yang diterbitkan",
   "MAHKAMAH AGUNG"
  ),
  createData(
   1,
   "2023",
   "Sistem Telusur dan Logistik ikan Nasional (STELINA) yang diimplementasikan",
   "KEMENTERIAN DALAM NEGERI"
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
      <TableCell width="100px">Tahun</TableCell>
      <TableCell>Nama RO</TableCell>
      <TableCell>PJ</TableCell>
     </TableRow>
    </TableHead>
    <TableBody>
     {rows.map((row) => (
      <TableRow
       key={row.id}
       sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
       <TableCell>{row.tahun}</TableCell>
       <TableCell>{row.nama}</TableCell>
       <TableCell>{row.pj}</TableCell>
      </TableRow>
     ))}
    </TableBody>
   </Table>
  </TableContainer>
 );
}
