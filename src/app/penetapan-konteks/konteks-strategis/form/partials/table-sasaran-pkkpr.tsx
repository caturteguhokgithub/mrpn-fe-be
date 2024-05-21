import React from "react";
import {
 Button,
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
} from "@mui/material";
import theme from "@/theme";
import { AddCircle } from "@mui/icons-material";

export default function TableSasaranPkppr({}) {
 function createData(
  id: number,
  daftarSasaran: string,
  uraian: string,
  target: number,
  fisik: number,
  keterangan: string
 ) {
  return { id, daftarSasaran, uraian, target, fisik, keterangan };
 }

 const rows = [
  createData(
   1,
   "Terbangunnya 3 klaster KIT Batang dengan luas lahan 4.300 Ha (58% saleable area, 42% area non saleable)",
   "juta",
   253,
   323,
   "-"
  ),
  createData(2, "Target total nilai investasi", "orang", 6000, 323, "-"),
  createData(3, "Estimasi penyerapan tenaga kerja", "orang", 6000, 323, "-"),
 ];

 return (
  <>
   <Stack
    mb={2}
    direction="row"
    justifyContent="space-between"
    alignItems="center"
   >
    <Typography>Sasaran PKPPR</Typography>
    <Button
     variant="outlined"
     size="small"
     startIcon={<AddCircle />}
     sx={{ lineHeight: 1, py: 1, borderRadius: 24 }}
    >
     Tambah Sasaran PKPPR
    </Button>
   </Stack>
   <TableContainer component={Paper} elevation={0} variant="outlined">
    <Table sx={{ minWidth: 650 }} size="small">
     <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
      <TableRow>
       <TableCell width="70px"></TableCell>
       <TableCell>Sasaran</TableCell>
       <TableCell width="200px">Uraian</TableCell>
       <TableCell>Target</TableCell>
       <TableCell>Fisik</TableCell>
       <TableCell>Keterangan</TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {rows.map((row) => (
       <TableRow
        key={row.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
       >
        <TableCell sx={{ textAlign: "center" }}>
         <Tooltip title="Delete" placement="top">
          <IconButton aria-label="delete" color="error">
           <Icon
            baseClassName="fas"
            className={`fa-trash-alt`}
            sx={{
             fontSize: "14px",
            }}
           />
          </IconButton>
         </Tooltip>
        </TableCell>
        <TableCell>{row.daftarSasaran}</TableCell>
        <TableCell>{row.uraian}</TableCell>
        <TableCell>{row.target}</TableCell>
        <TableCell>{row.fisik}</TableCell>
        <TableCell>{row.keterangan}</TableCell>
       </TableRow>
      ))}
     </TableBody>
    </Table>
   </TableContainer>
  </>
 );
}
