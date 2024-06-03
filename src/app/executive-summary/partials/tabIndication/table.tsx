import React, { Fragment } from "react";
import {
 Box,
 Button,
 Chip,
 DialogActions,
 IconButton,
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
import { IconFA } from "@/app/components/icons/icon-fa";
import { blue, grey } from "@mui/material/colors";
import { dataTema } from "../../dataTema";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import DialogComponent from "@/app/components/dialog";
import FormSwot from "../tabBackground/form-swot";
import FormIndication from "./form";

export default function TableIndication({ project }: { project: string }) {
 const [modalOpen, setModalOpen] = React.useState(false);

 const handleModalOpen = () => {
  setModalOpen(true);
 };

 const handleModalClose = () => {
  setModalOpen(false);
 };

 return (
  <>
   {dataTema.map((itemRow, index) => (
    <Fragment key={index}>
     {project === itemRow.temaId && (
      <>
       {itemRow.indication.length < 1 ? (
        <EmptyState
         dense
         icon={<IconEmptyData width={100} />}
         title="Data Kosong"
         description="Silahkan isi konten halaman ini"
        />
       ) : (
        <TableContainer component={Paper} elevation={0}>
         <Table size="small">
          <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
           <TableRow>
            <TableCell>
             <Typography variant="body1" fontWeight={600}>
              Jenis Risiko
             </Typography>
            </TableCell>
            <TableCell>
             <Typography variant="body1" fontWeight={600}>
              Kejadian Risiko
             </Typography>
            </TableCell>
            <TableCell>
             <Typography variant="body1" fontWeight={600}>
              Perlakuan Risiko
             </Typography>
            </TableCell>
            <TableCell>
             <Typography variant="body1" fontWeight={600}>
              Indikasi Entitas Utama & Pendukung
             </Typography>
            </TableCell>
            <TableCell width="100px"></TableCell>
           </TableRow>
          </TableHead>
          <TableBody>
           {dataTema.map((itemRow, index) => (
            <Fragment key={index}>
             {project === itemRow.temaId && (
              <>
               {itemRow.indication?.map((itemIndication, index) => (
                <>
                 {/* {itemOr.item?.map((detailItem, index) => ( */}
                 <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                 >
                  <TableCell sx={{ verticalAlign: "top" }}>
                   <Typography variant="body1">
                    {itemIndication.jenis === "" ? "-" : itemIndication.jenis}
                   </Typography>
                  </TableCell>
                  <TableCell sx={{ verticalAlign: "top" }}>
                   <Typography variant="body1">
                    {itemIndication.kejadian === ""
                     ? "-"
                     : itemIndication.kejadian}
                   </Typography>
                  </TableCell>
                  <TableCell sx={{ verticalAlign: "top" }}>
                   <Typography variant="body1">
                    {itemIndication.perlakuan === ""
                     ? "-"
                     : itemIndication.perlakuan}
                   </Typography>
                  </TableCell>
                  <TableCell sx={{ verticalAlign: "middle" }}>
                   <Stack gap={0.5}>
                    {itemIndication.entitas?.map(
                     (memberItem: any, index: any) => (
                      <Paper
                       key={index}
                       variant="outlined"
                       elevation={0}
                       sx={{ p: "4px 8px", width: 280, bgcolor: grey[50] }}
                      >
                       <Stack
                        display="inline-flex"
                        alignItems="center"
                        direction="row"
                        gap={0.5}
                        flexWrap="wrap"
                       >
                        <Typography
                         fontWeight={500}
                         fontSize={13}
                         whiteSpace="nowrap"
                        >
                         {memberItem.group} :
                        </Typography>
                        {memberItem.member?.map(
                         (memberItem: any, index: any) => (
                          <Box key={index} component="span">
                           <Chip label={memberItem} size="small" />
                          </Box>
                         )
                        )}
                       </Stack>
                      </Paper>
                     )
                    )}
                    {/* {itemIndication.entitas === ""
                     ? "-"
                     : itemIndication.entitas} */}
                   </Stack>
                  </TableCell>
                  <TableCell
                   sx={{ verticalAlign: "middle", textAlign: "center" }}
                  >
                   <IconFA
                    name="edit"
                    size={16}
                    color={theme.palette.primary.main}
                    sx={{ cursor: "pointer" }}
                    onclick={handleModalOpen}
                   />
                  </TableCell>
                 </TableRow>
                 {/* ))} */}
                </>
               ))}
              </>
             )}
            </Fragment>
           ))}
          </TableBody>
         </Table>
        </TableContainer>
       )}
      </>
     )}
    </Fragment>
   ))}
   <DialogComponent
    dialogOpen={modalOpen}
    dialogClose={handleModalClose}
    title="Ubah indikasi risiko strategis"
    dialogFooter={
     <DialogActions sx={{ p: 2, px: 3 }}>
      <Button variant="outlined" onClick={handleModalClose}>
       Batal
      </Button>
      <Button variant="contained" type="submit">
       Simpan
      </Button>
     </DialogActions>
    }
   >
    <FormIndication mode="add" project={project} />
   </DialogComponent>
  </>
 );
}
