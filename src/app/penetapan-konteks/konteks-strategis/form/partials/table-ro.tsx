import React from "react";
import {
 Button,
 DialogActions,
 Paper,
 Stack,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
 Typography,
} from "@mui/material";
import theme from "@/theme";
import { AddCircle } from "@mui/icons-material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import DialogComponent from "@/app/components/dialog";
import FormSasaran from "./form-sasaran";
import FormROKunci from "./form-ro-kunci";

export default function TableRincianOutput({ mode }: { mode?: string }) {
 const [modalOpenAdd, setModalOpenAdd] = React.useState(false);

 const handleModalOpenAdd = () => {
  setModalOpenAdd(true);
 };

 const handleModalClose = () => {
  setModalOpenAdd(false);
 };

 function createData(
  id: number,
  kodeRo: string,
  namaRo: string,
  uraian: string,
  satuan: string,
  target: number,
  keuangan: string,
  kementerian: string,
  kode: string
 ) {
  return {
   id,
   kodeRo,
   namaRo,
   uraian,
   satuan,
   target,
   keuangan,
   kementerian,
   kode,
  };
 }

 const rows = [
  createData(
   1,
   "xxx.xxx.xx.xxxx.xx",
   "Eksekusi Realisasi Investasi Proyek-Proyek Mangkrak Di Wilayah Barat",
   "-",
   "juta",
   1,
   "-",
   "BADAN INTELIJEN NEGARA",
   "-"
  ),
  createData(
   2,
   "xxx.xxx.xx.xxxx.xx",
   "Layanan Pendampingan Keberlanjutan Investasi",
   "-",
   "orang",
   2,
   "-",
   "BADAN INTELIJEN NEGARA",
   "-"
  ),
 ];

 const dialogActionFooter = (
  <DialogActions sx={{ p: 2, px: 3 }}>
   <Button onClick={handleModalClose}>Batal</Button>
   <Button variant="contained" type="submit">
    Simpan
   </Button>
  </DialogActions>
 );

 return (
  <>
   <Stack
    mb={2}
    direction="row"
    justifyContent="space-between"
    alignItems="center"
   >
    <Typography>Rincian Output (RO) Kunci</Typography>
    {mode === "add" || mode === "edit" ? (
     <Button
      variant="contained"
      size="small"
      startIcon={<AddCircle />}
      sx={{ lineHeight: 1, py: 1 }}
      onClick={handleModalOpenAdd}
     >
      Tambah RO Kunci
     </Button>
    ) : null}
   </Stack>
   <TableContainer component={Paper} elevation={0} variant="outlined">
    <Table sx={{ minWidth: 650 }} size="small">
     <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
      <TableRow>
       <TableCell rowSpan={2}>Kode RO</TableCell>
       <TableCell rowSpan={2}>Nama RO</TableCell>
       <TableCell colSpan={4} align="center">
        Indikator Sasaran
       </TableCell>
       <TableCell rowSpan={2}>Kementerian</TableCell>
       <TableCell rowSpan={2}>Kode</TableCell>
      </TableRow>
      <TableRow>
       {/* <TableCell width="120px">Dukungan Sasaran KP</TableCell> */}
       <TableCell width="120px">Uraian Sasaran</TableCell>
       <TableCell width="120px">Satuan Sasaran</TableCell>
       <TableCell width="120px">Target Fisik</TableCell>
       <TableCell width="120px">Keuangan</TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {mode === "add" ? (
       <TableCell colSpan={8}>
        <EmptyState
         icon={<IconEmptyData />}
         title="Data Kosong"
         description="Silahkan isi konten tabel ini"
        />
       </TableCell>
      ) : (
       <>
        {rows.map((row) => (
         <TableRow
          key={row.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
         >
          <TableCell>{row.kodeRo}</TableCell>
          <TableCell>{row.namaRo}</TableCell>
          <TableCell>{row.uraian}</TableCell>
          <TableCell>{row.satuan}</TableCell>
          <TableCell>{row.target}</TableCell>
          <TableCell>{row.keuangan}</TableCell>
          <TableCell>{row.kementerian}</TableCell>
          <TableCell>{row.kode}</TableCell>
         </TableRow>
        ))}
       </>
      )}
     </TableBody>
    </Table>
   </TableContainer>
   <DialogComponent
    dialogOpen={modalOpenAdd}
    dialogClose={handleModalClose}
    title="Tambah Rincian Output Kunci"
    dialogFooter={dialogActionFooter}
   >
    <FormROKunci mode="add" />
   </DialogComponent>
  </>
 );
}
