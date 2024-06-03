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
import FormDampak from "./form-dampak";

export default function TableDampak({ mode }: { mode?: string }) {
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
  beban: string,
  penurunan: any,
  tuntutan: string,
  lingkungan: string,
  capaian: string
 ) {
  return { id, level, beban, penurunan, tuntutan, lingkungan, capaian };
 }

 const rows = [
  createData(
   1,
   "Rendah",
   "x ≤ 0,1 permil",
   <>
    Pemberitaan negatif di media <em>mainstream</em> (<em>daring</em> dan
    <em>luring</em>), sampai dengan 3 kali dalam setahun. : {"<"} 2 kali dalam 1
    Tahun
   </>,
   "Teguran lisan/tulisan",
   "Proper Hijau",
   "Tidak tercapai < 5%"
  ),
  createData(
   2,
   "Sedang",
   "0,1 permil < x ≤ 10 permil",
   <>
    Pemberitaan negatif di media <em>mainstream</em> (<em>daring</em> dan
    <em>luring</em>), sampai dengan 12 kali dalam setahun. : {"<"} 2 kali dalam
    1 Tahun
   </>,
   "Tuntutan denda administratif kepada satu atau lebih entitas di UPR Lintas Sektor",
   "Proper Biru",
   "Tidak tercapai antara 5% s.d 20%"
  ),
  createData(
   3,
   "Tinggi",
   "> 10 permil",
   <>
    Pemberitaan negatif di media <em>mainstream</em> (<em>daring</em> dan
    <em>luring</em>) yang masuk kategori viral
   </>,
   "PTUN dan perdata. ",
   "Proper Merah ",
   "Tidak tercapai di atas 20%"
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
    <Typography fontWeight={600}>Kriteria Dampak</Typography>
    {mode === "add" || mode === "edit" ? (
     <Button
      variant="outlined"
      size="small"
      startIcon={<AddCircle />}
      sx={{ lineHeight: 1, py: 1, borderRadius: 24 }}
      onClick={handleModalOpenAdd}
     >
      Tambah Kriteria Dampak
     </Button>
    ) : null}
   </Stack>
   <Paper sx={{ overflowX: "auto" }}>
    {/* <TableContainer
     component={Paper}
     elevation={0}
     variant="outlined"
     sx={{ maxWidth: "100%" }}
    > */}
    <Table size="small">
     {/* <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
      <TableRow>
       <TableCell width="70px"></TableCell>
       <TableCell>Level Kemungkinan</TableCell>
       <TableCell>Persentase Kemungkinan Terjadi dalam 1 Periode</TableCell>
       <TableCell>
        Jumlah Frekuensi Kemungkinan Terjadi dalam 1 Periode
       </TableCell>
      </TableRow>
      <TableRow>
       <TableCell>Level Kemungkinan</TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {mode === "add" ? (
       <TableCell colSpan={4}>
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
     </TableBody> */}

     <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
      <TableRow>
       <TableCell width="70px" rowSpan={2}></TableCell>
       <TableCell colSpan={2} rowSpan={2}>
        Level Kemungkinan
       </TableCell>
       <TableCell colSpan={5} align="center">
        Area Dampak Risiko
       </TableCell>
      </TableRow>
      <TableRow>
       <TableCell>Beban Keuangan Negara/Daerah</TableCell>
       <TableCell>Penurunan Reputasi</TableCell>
       <TableCell>
        Tuntutan Hukum (Sanksi Pidana, Perdata, dan/atau administratif)
       </TableCell>
       <TableCell>Lingkungan</TableCell>
       <TableCell>Capaian Kinerja</TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {mode === "add" ? (
       <TableRow>
        <TableCell colSpan={8}>
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
          <TableCell component="th" scope="row">
           {row.id}
          </TableCell>
          <TableCell>{row.level}</TableCell>
          <TableCell>{row.beban}</TableCell>
          <TableCell>{row.penurunan}</TableCell>
          <TableCell>{row.tuntutan}</TableCell>
          <TableCell>{row.lingkungan}</TableCell>
          <TableCell>{row.capaian}</TableCell>
         </TableRow>
        ))}
       </>
      )}
     </TableBody>
    </Table>
    {/* </TableContainer> */}
    {/* <table>
     <thead>
      <tr>
       <th style={{ width: 70 }} rowSpan={2}></th>
       <th colSpan={2} rowSpan={2}>
        Level Kemungkinan
       </th>
       <th colSpan={5}>Area Dampak Risiko</th>
      </tr>
      <tr>
       <th>Beban Keuangan Negara/Daerah</th>
       <th>Penurunan Reputasi</th>
       <th>Tuntutan Hukum (Sanksi Pidana, Perdata, dan/atau administratif)</th>
       <th>Lingkungan</th>
       <th>Capaian Kinerja</th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td scope="row"></td>
       <td></td>
       <td></td>
      </tr>
      <tr>
       <td scope="row"></td>
       <td></td>
       <td></td>
      </tr>
     </tbody>
    </table> */}
   </Paper>
   <DialogComponent
    width={1200}
    dialogOpen={modalOpenAdd}
    dialogClose={handleModalClose}
    title="Tambah Kriteria Dampak"
    dialogFooter={dialogActionFooter}
   >
    <FormDampak mode="add" />
   </DialogComponent>
  </>
 );
}
