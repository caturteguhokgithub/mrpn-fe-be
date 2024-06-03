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
import FormTable from "./form-table";
import FormSasaran from "./form-sasaran";

export default function TableSasaran({
 variant,
 mode,
}: {
 variant?: string;
 mode?: string;
}) {
 const [modalOpenAdd, setModalOpenAdd] = React.useState(false);

 const handleModalOpenAdd = () => {
  setModalOpenAdd(true);
 };

 const handleModalClose = () => {
  setModalOpenAdd(false);
 };

 function createData(id: number, daftarSasaran: string, keterangan: string) {
  return { id, daftarSasaran, keterangan };
 }

 const rows = [
  createData(1, "Pertumbuhan ekspor produk industri berteknologi tinggi", "-"),
  createData(2, "Pertumbuhan ekspor industri pengolahan", "-"),
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
    <Typography fontWeight={600}>Sasaran {variant}</Typography>
    {mode === "add" || mode === "edit" ? (
     <Button
      variant="outlined"
      size="small"
      startIcon={<AddCircle />}
      sx={{ lineHeight: 1, py: 1, borderRadius: 24 }}
      onClick={handleModalOpenAdd}
     >
      Tambah Sasaran {variant}
     </Button>
    ) : null}
   </Stack>
   <TableContainer component={Paper} elevation={0} variant="outlined">
    <Table size="small">
     <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
      <TableRow>
       <TableCell width="70px"></TableCell>
       <TableCell>Daftar Sasaran {variant}</TableCell>
       <TableCell>Keterangan</TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {mode === "add" ? (
       <TableRow>
        <TableCell colSpan={3}>
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
          <TableCell>{row.daftarSasaran}</TableCell>
          <TableCell>{row.keterangan}</TableCell>
         </TableRow>
        ))}
       </>
      )}
     </TableBody>
    </Table>
   </TableContainer>
   <DialogComponent
    width={320}
    dialogOpen={modalOpenAdd}
    dialogClose={handleModalClose}
    title="Tambah Sasaran"
    dialogFooter={dialogActionFooter}
   >
    <FormSasaran mode="add" />
   </DialogComponent>
  </>
 );
}
