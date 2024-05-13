import React from "react";
import {
 IconButton,
 Paper,
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
import { blue } from "@mui/material/colors";
import ModalKl from "./modal-kl";
import ModalAction from "./modal-action";
import { dataTema } from "../../dataTema";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";

export default function TableOverall({ project }: { project: string }) {
 const [modalKlOpen, setModalKlOpen] = React.useState(false);
 const [modalActionOpen, setModalActionOpen] = React.useState(false);

 const handleModalKlOpen = () => {
  setModalKlOpen(true);
 };
 const handleModalActionOpen = () => {
  setModalActionOpen(true);
 };

 const handleModalClose = () => {
  setModalKlOpen(false);
  setModalActionOpen(false);
 };

 const options = {
  view: (
   <IconFA
    size={14}
    name="eye"
    color={theme.palette.primary.main}
    sx={{ width: "auto" }}
   />
  ),
  delete: "delete",
  edit: "edit",
 };

 const rows = [
  {
   name: "Kementerian Kesehatan",
   detail: [
    {
     RO: "Pendampingan terkait Kesehatan dan gizi bagi ibu hamil di Daerah XXXX",
     alokasi: "-",
     realisasi: "-",
     progress: "-",
     nilaiRisiko: "-",
     evaluasiRisiko: "-",
    },
    {
     RO: "Ibu Hamil yang melahirkan di faskes Daerah XXXX",
     alokasi: "-",
     realisasi: "-",
     progress: "-",
     nilaiRisiko: "-",
     evaluasiRisiko: "-",
    },
    {
     RO: "Ibu Hamil yang mengkonsumsi PMT di Daerah XXXX",
     alokasi: "-",
     realisasi: "-",
     progress: "-",
     nilaiRisiko: "-",
     evaluasiRisiko: "-",
    },
    {
     RO: "Pembinaan pendampingan Ibu pascapersalinan di Daerahh XXXX",
     alokasi: "-",
     realisasi: "-",
     progress: "-",
     nilaiRisiko: "-",
     evaluasiRisiko: "-",
    },
   ],
   options,
  },
  {
   name: "Kementerian PUPR",
   detail: [
    {
     RO: "Studi Kelayakan Pengembangan SPAM dari Bendungan ...... Di Daerah XXXX (target 1000 SR)",
     alokasi: "-",
     realisasi: "-",
     progress: "-",
     nilaiRisiko: "-",
     evaluasiRisiko: "-",
    },
    {
     RO: "Pembebasan Lahan di Daerah XXXX (pembangunan SPAM)",
     alokasi: "-",
     realisasi: "-",
     progress: "-",
     nilaiRisiko: "-",
     evaluasiRisiko: "-",
    },
   ],
   options,
  },
 ];

 return (
  <>
   {dataTema.map((itemRow) => (
    <>
     {project === itemRow.temaId && (
      <>
       {itemRow.overallRisk.length < 1 ? (
        <EmptyState
         dense
         icon={<IconEmptyData width={100} />}
         title="Data Kosong"
         description="Silahkan isi konten halaman ini"
        />
       ) : (
        <>
         <TableContainer component={Paper} elevation={0}>
          <Table size="small">
           <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
            <TableRow>
             <TableCell width={150}>Entitas Utama</TableCell>
             <TableCell>Intervensi Kunci</TableCell>
             <TableCell>Target</TableCell>
             <TableCell>Capaian</TableCell>
             <TableCell>Progress</TableCell>
             <TableCell>Realisasi Anggaran (%)</TableCell>
             <TableCell>Nilai Risiko</TableCell>
             <TableCell>Evaluasi Risiko</TableCell>
             <TableCell width="100px"></TableCell>
            </TableRow>
           </TableHead>
           <TableBody>
            {dataTema.map((itemRow) => (
             <>
              {project === itemRow.temaId && (
               <>
                {itemRow.overallRisk?.map((itemOr) => (
                 <>
                  {itemOr.item?.map((detailItem, index) => (
                   <TableRow key={index}>
                    {index === 0 ? (
                     <TableCell rowSpan={itemOr.item.length}>
                      <Typography
                       fontWeight={600}
                       color={theme.palette.primary.main}
                       component="a"
                       onClick={handleModalKlOpen}
                       sx={{
                        cursor: "pointer",
                        "&:hover": {
                         color: blue[800],
                        },
                       }}
                      >
                       {itemOr.entUtama}
                      </Typography>
                     </TableCell>
                    ) : null}
                    <TableCell>
                     <Typography variant="body1">
                      {detailItem.rincianOutput === ""
                       ? "-"
                       : detailItem.rincianOutput}
                     </Typography>
                    </TableCell>
                    <TableCell>
                     <Typography variant="body1">
                      {detailItem.target === "" ? "-" : detailItem.target}
                     </Typography>
                    </TableCell>
                    <TableCell>
                     <Typography variant="body1">
                      {detailItem.capaian === "" ? "-" : detailItem.capaian}
                     </Typography>
                    </TableCell>
                    <TableCell>
                     <Typography variant="body1">
                      {detailItem.progress === "" ? "-" : detailItem.progress}
                     </Typography>
                    </TableCell>
                    <TableCell>
                     <Typography variant="body1">
                      {detailItem.realisasi === "" ? "-" : detailItem.realisasi}
                     </Typography>
                    </TableCell>
                    <TableCell>
                     <Typography variant="body1">
                      {detailItem.nilai === "" ? "-" : detailItem.nilai}
                     </Typography>
                    </TableCell>
                    <TableCell>
                     <Typography variant="body1">
                      {detailItem.evaluasi === "" ? "-" : detailItem.evaluasi}
                     </Typography>
                    </TableCell>
                    {index === 0 ? (
                     <TableCell
                      rowSpan={itemOr.item.length}
                      sx={{ textAlign: "center" }}
                     >
                      <>
                       <IconButton onClick={handleModalActionOpen}>
                        {options.view}
                       </IconButton>
                       {/* <button role="link">{item.options.delete}</button>
            <button role="link">{item.options.edit}</button> */}
                      </>
                     </TableCell>
                    ) : null}
                   </TableRow>
                  ))}
                 </>
                ))}
               </>
              )}
             </>
            ))}
           </TableBody>
          </Table>
         </TableContainer>
         <ModalKl modalOpen={modalKlOpen} handleModalClose={handleModalClose} />
         <ModalAction
          modalOpen={modalActionOpen}
          handleModalClose={handleModalClose}
         />
        </>
       )}
      </>
     )}
    </>
   ))}
  </>
 );
}
