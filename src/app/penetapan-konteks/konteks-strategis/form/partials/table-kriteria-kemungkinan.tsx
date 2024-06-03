import React from "react";
import {
 Button,
 DialogActions,
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
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import DialogComponent from "@/app/components/dialog";
import FormPeraturan from "./form-peraturan";
import FormKemungkinan from "./form-kemungkinan";

export default function TableKemungkinan({ mode }: { mode?: string }) {
 const [modalOpenAdd, setModalOpenAdd] = React.useState(false);

 const handleModalOpenAdd = () => {
  setModalOpenAdd(true);
 };

 const handleModalClose = () => {
  setModalOpenAdd(false);
 };

 function createData(
  id: number,
  level: string,
  persentase: string,
  jumlah: string
 ) {
  return { id, level, persentase, jumlah };
 }

 const rows = [
  createData(
   1,
   "1 - Hampir Tidak Terjadi",
   "X ≤ 10 %",
   "Jarang : < 2 kali dalam 1 Tahun"
  ),
  createData(
   2,
   "2 - Kadang Terjadi",
   "10 < X < 30 % C",
   "Cukup Sering : 2 kali s.d 5 kali dalam 1 Tahun"
  ),
  createData(
   3,
   "3 - Sering Terjadi",
   "X ≥ 30 %",
   "Sering : > 5 kali dalam 1 Tahun"
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
    <Typography fontWeight={600}>Kriteria Kemungkinan</Typography>
    {mode === "add" || mode === "edit" ? (
     <Button
      variant="outlined"
      size="small"
      startIcon={<AddCircle />}
      sx={{ lineHeight: 1, py: 1, borderRadius: 24 }}
      onClick={handleModalOpenAdd}
     >
      Tambah Kriteria Kemungkinan
     </Button>
    ) : null}
   </Stack>
   <TableContainer component={Paper} elevation={0} variant="outlined">
    <Table sx={{ minWidth: 650 }} size="small">
     <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
      <TableRow>
       <TableCell width="70px"></TableCell>
       <TableCell>Level Kemungkinan</TableCell>
       <TableCell>Persentase Kemungkinan Terjadi dalam 1 Periode</TableCell>
       <TableCell>
        Jumlah Frekuensi Kemungkinan Terjadi dalam 1 Periode
       </TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {mode === "add" ? (
       <TableRow>
        <TableCell colSpan={4}>
         <EmptyState
          icon={<IconEmptyData />}
          title="Data Kosong"
          description="Silahkan isi konten tabel ini"
         />
        </TableCell>
       </TableRow>
      ) : (
       <>
        {rows.map((row) => (
         <TableRow
          key={row.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
         >
          <TableCell sx={{ textAlign: "center" }}>
           <Tooltip title="Delete" placement="top">
            <IconButton
             aria-label="delete"
             color="error"
             disabled={mode === "view"}
            >
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
          <TableCell>{row.level}</TableCell>
          <TableCell>{row.persentase}</TableCell>
          <TableCell>{row.jumlah}</TableCell>
         </TableRow>
        ))}
       </>
      )}
     </TableBody>
    </Table>
   </TableContainer>
   <DialogComponent
    width={800}
    dialogOpen={modalOpenAdd}
    dialogClose={handleModalClose}
    title="Tambah Kriteria Kemungkinan"
    dialogFooter={dialogActionFooter}
   >
    <FormKemungkinan mode="add" />
   </DialogComponent>
  </>
 );
}
