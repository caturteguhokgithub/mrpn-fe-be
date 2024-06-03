import React, { Fragment } from "react";
import {
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
import { dataTema } from "../../dataTema";

export default function TableTagging({ project }: { project: string }) {
 function createData(id: number, kebijakan: string, note: React.ReactNode) {
  return {
   id,
   kebijakan,
   note,
  };
 }

 const rows = [
  createData(
   1,
   "Janpres",
   "Memberi makan siang dan susu gratis di sekolah dan pesantren, serta bantuan gizi untuk anak balita dan ibu hamil"
  ),
  createData(
   2,
   "RPJPN",
   <ul>
    <li>
     Investasi pelayanan Kesehatan primer, penuntasan stunting, serta eliminasi
     penyakit menular dan penyakit tropis terabaikan (terutama: tuberculosis dan
     kusta)
    </li>
    <li>Prevalensi stunting (pendek dan sangat pendek) pada balita (%)</li>
   </ul>
  ),
 ];

 return (
  <TableContainer component={Paper} elevation={0}>
   <Table sx={{ minWidth: 650 }} size="small">
    <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
     <TableRow>
      <TableCell sx={{ width: 200 }}>
       <Typography variant="body1" fontWeight={600}>
        Kebijakan
       </Typography>
      </TableCell>
      <TableCell>
       <Typography variant="body1" fontWeight={600}>
        Keterangan
       </Typography>
      </TableCell>
     </TableRow>
    </TableHead>
    <TableBody>
     {dataTema.map((itemRow, index) => (
      <Fragment key={index}>
       {project === itemRow.temaId && (
        <>
         {itemRow.tags.map((detailRisk, index) => (
          <TableRow
           key={index}
           sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
           <TableCell>
            <Typography variant="body1">{detailRisk.policy}</Typography>
           </TableCell>
           <TableCell>
            {detailRisk.description.length > 1 ? (
             <ul>
              {detailRisk.description.map((itemDesc, index) => (
               <li key={index}>
                <Typography variant="body1">{itemDesc}</Typography>
               </li>
              ))}
             </ul>
            ) : (
             <Typography variant="body1">{detailRisk.description}</Typography>
            )}
           </TableCell>
          </TableRow>
         ))}
        </>
       )}
      </Fragment>
     ))}
    </TableBody>
   </Table>
  </TableContainer>
 );
}
