import React from "react";
import {
 Box,
 Chip,
 Dialog,
 DialogContent,
 DialogTitle,
 Divider,
 FormControl,
 Grid,
 IconButton,
 LinearProgress,
 LinearProgressProps,
 Stack,
 Typography,
} from "@mui/material";
import { IconFA } from "@/app/components/icons/icon-fa";
import TableIKU from "./table-iku";

export default function ModalKl({
 modalOpen,
 handleModalClose,
}: {
 modalOpen: boolean;
 handleModalClose: () => void;
}) {
 function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
 ) {
  return (
   <Box sx={{ display: "flex", alignItems: "center" }}>
    <Box sx={{ width: "60%", mr: 1 }}>
     <LinearProgress variant="determinate" {...props} />
    </Box>
    <Box sx={{ minWidth: 35 }}>
     <Typography variant="body2" fontWeight={600}>{`${Math.round(
      props.value
     )}%`}</Typography>
    </Box>
   </Box>
  );
 }

 return (
  <Dialog
   open={modalOpen}
   keepMounted
   onClose={handleModalClose}
   sx={{
    ".MuiPaper-root": {
     minWidth: 800,
     ".quill": {
      height: "calc(100vh - 400px)",
      ".ql-container": {
       height: "calc(100% - 44px)",
      },
     },
    },
   }}
  >
   <DialogTitle
    sx={{
     display: "flex",
     alignItems: "center",
     justifyContent: "space-between",
    }}
   >
    <Typography component="h3" fontWeight={600} fontSize={16}>
     Detail Entitas Utama: <strong>Kementerian Kesehatan</strong>
    </Typography>
    <IconButton onClick={handleModalClose}>
     <IconFA size={16} name="close" />
    </IconButton>
   </DialogTitle>
   <DialogContent dividers sx={{ pb: 0 }}>
    <Grid container spacing={2}>
     <Grid item md={6}>
      <FormControl fullWidth>
       <Typography>Budget</Typography>
       <Typography fontWeight={600} fontSize={16}>
        Rp. 2.365.120.000.000
       </Typography>
      </FormControl>
     </Grid>
     <Grid item md={6}>
      <FormControl fullWidth>
       <Typography>Realisasi</Typography>
       <Typography fontWeight={600} fontSize={16}>
        Rp. 2.365.120.000.000
       </Typography>
      </FormControl>
     </Grid>
     <Grid item md={6}>
      <FormControl fullWidth>
       <Typography mb={1}>Progress</Typography>
       <Typography fontWeight={600} fontSize={16}>
        <LinearProgressWithLabel value={30} />
       </Typography>
      </FormControl>
     </Grid>
     <Grid item md={6}>
      <FormControl fullWidth>
       <Typography mb={1}>Nilai Kinerja</Typography>
       <Typography fontWeight={600} fontSize={16}>
        -
       </Typography>
       {/* <Stack direction="row" gap={2}>
        <Chip label="A" size="small" color="primary" />
        <Chip label="B" size="small" />
        <Chip label="C" size="small" />
        <Chip label="D" size="small" />
        <Chip label="E" size="small" /> */}
       {/* <Chip label="B" size="small" color="success" />
         <Chip
          label="C"
          size="small"
          sx={{ bgcolor: yellow[700], color: "white" }}
         />
         <Chip
          label="D"
          size="small"
          sx={{ bgcolor: orange[700], color: "white" }}
         />
         <Chip
          label="E"
          size="small"
          sx={{ bgcolor: red[700], color: "white" }}
         /> */}
       {/* </Stack> */}
      </FormControl>
     </Grid>
    </Grid>
    <Box mx={-3}>
     <Divider sx={{ my: 3 }}>
      <Chip label="Indikator Kinerja Utama" size="small" />
     </Divider>
     <TableIKU />
    </Box>
   </DialogContent>
  </Dialog>
 );
}
