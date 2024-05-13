import React from "react";
import {
 Checkbox,
 Paper,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
} from "@mui/material";
import theme from "@/theme";

export default function TableProfilRoKunci() {
 function createData(
  id: number,
  checked: boolean,
  klUtama: string,
  klKontributor: string,
  nomenklatur: string,
  target: string,
  anggaran: string,
  sumberAnggaran: string
 ) {
  return {
   id,
   checked,
   klUtama,
   klKontributor,
   nomenklatur,
   target,
   anggaran,
   sumberAnggaran,
  };
 }

 const rows = [
  createData(
   1,
   true,
   "Kementerian Kesehatan",
   "-",
   "Pendampingan terkait Kesehatan dan gizi bagi ibu hamil di Daerah XXXX",
   "-",
   "-",
   "APBN"
  ),
  createData(
   2,
   true,
   "Kementerian Kesehatan",
   "-",
   "Ibu Hamil yang melahirkan di faskes Daerah XXXX",
   "-",
   "-",
   "APBN"
  ),
  createData(
   3,
   true,
   "Kementerian Kesehatan",
   "-",
   "Ibu Hamil yang mengkonsumsi PMT di Daerah XXXX",
   "-",
   "-",
   "APBN"
  ),
  createData(
   4,
   true,
   "Kementerian Kesehatan",
   "-",
   "Pembinaan pendampingan Ibu pascapersalinan di Daerahh XXXX",
   "-",
   "-",
   "APBN"
  ),
  createData(
   5,
   false,
   "Kementerian Kesehatan",
   "-",
   "Penyediaan konsumsi tablet tambah daerah bagi ibu melahirkan di Daerah XXXX",
   "-",
   "-",
   "APBN"
  ),
  createData(
   6,
   false,
   "Kementerian Kesehatan",
   "-",
   "Anak balita yang mendapat Suplementasi Gizi Mikro di Daerah XXXX",
   "-",
   "-",
   "APBN"
  ),
  createData(
   7,
   false,
   "Kementerian Kesehatan",
   "-",
   "Alat dan perbekalan kesehatan untuk pelayanan kesehatan ibu dan anak sesuai standar",
   "-",
   "-",
   "APBN"
  ),
 ];

 return (
  <TableContainer component={Paper} elevation={0}>
   <Table sx={{ minWidth: 650 }} size="small">
    <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
     <TableRow>
      <TableCell></TableCell>
      <TableCell>KL</TableCell>
      {/* <TableCell>KL Kontributor</TableCell> */}
      <TableCell>Rincian Output (RO)</TableCell>
      <TableCell>Target</TableCell>
      <TableCell>Anggaran</TableCell>
      {/* <TableCell>Sumber Anggaran</TableCell> */}
     </TableRow>
    </TableHead>
    <TableBody>
     {rows.map((row) => (
      <TableRow
       key={row.id}
       sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
       <TableCell>
        {row.checked === false ? (
         <Checkbox />
        ) : (
         <Checkbox checked={row.checked} />
        )}
       </TableCell>
       <TableCell>{row.klUtama}</TableCell>
       <TableCell>{row.nomenklatur}</TableCell>
       <TableCell>{row.target}</TableCell>
       <TableCell>{row.anggaran}</TableCell>
      </TableRow>
     ))}
    </TableBody>
   </Table>
  </TableContainer>
 );
}
