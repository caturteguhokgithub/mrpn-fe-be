import React from "react";
import {
 Box,
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
import { green, red } from "@mui/material/colors";
import { dataTema } from "../../dataTema";

export default function TableDampak({ project }: { project?: string }) {
 function createData(
  id: number,
  outcome: string,
  kode: string,
  sasaran: string
  //   highlight: boolean
 ) {
  return {
   id,
   outcome,
   kode,
   sasaran,
   //    highlight,
  };
 }

 const rows = [
  createData(
   1,
   "Menurunnya prevalensi stunting pada balita",
   "-",
   "Kesehatan untuk Semua"
   //    true
  ),
 ];

 return (
  <TableContainer component={Paper} elevation={0}>
   <Table sx={{ minWidth: 650 }} size="small">
    <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
     <TableRow>
      <TableCell>
       <Typography variant="body1" fontWeight={600}>
        Outcome/Dampak
       </Typography>
      </TableCell>
      <TableCell width={200}>
       <Typography variant="body1" fontWeight={600}>
        Kode Sasaran AP
       </Typography>
      </TableCell>
      <TableCell width="50%">
       <Typography variant="body1" fontWeight={600}>
        Sasaran AP
       </Typography>
      </TableCell>
      {/* <TableCell width="150px">Highlight</TableCell> */}
     </TableRow>
    </TableHead>
    <TableBody>
     {dataTema.map((itemDampak) => (
      <>
       {project === itemDampak.temaId && (
        <>
         {itemDampak.cascading.map((rowCascading, index) => (
          <TableRow
           key={index}
           sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
           <TableCell sx={{ verticalAlign: "top" }}>
            <Typography variant="body1">{rowCascading.outcome}</Typography>
           </TableCell>
           <TableCell sx={{ verticalAlign: "top" }}>
            <Typography variant="body1">
             {rowCascading.code === "" ? "-" : <>{rowCascading.code}</>}
            </Typography>
           </TableCell>
           <TableCell sx={{ verticalAlign: "top" }}>
            {rowCascading.sasaran.length > 1 ? (
             <Box component="ul" pl="20px !important">
              {rowCascading.sasaran.map((itemSasaran, index) => (
               <Box component="li" key={index} textAlign="left">
                <Typography variant="body1" key={index}>
                 {itemSasaran}
                </Typography>
               </Box>
              ))}
             </Box>
            ) : (
             <Typography component="p" variant="body1" textAlign="left">
              {rowCascading.sasaran}
             </Typography>
            )}
           </TableCell>
           {/* <TableCell align="center">
         {row.highlight ? (
          <IconFA color={green[500]} name="check" size={16} />
         ) : (
          <IconFA color={red[500]} name="xmark" size={16} />
         )}
        </TableCell> */}
          </TableRow>
         ))}
        </>
       )}
      </>
     ))}

     {/* {rows.map((row) => (
      <TableRow
       key={row.id}
       sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
       <TableCell>{row.outcome}</TableCell>
       <TableCell>{row.kode}</TableCell>
       <TableCell>{row.sasaran}</TableCell>
       <TableCell align="center">
        {row.highlight ? (
         <IconFA color={green[500]} name="check" size={16} />
        ) : (
         <IconFA color={red[500]} name="xmark" size={16} />
        )}
       </TableCell>
      </TableRow>
     ))} */}
    </TableBody>
   </Table>
  </TableContainer>
 );
}
