import React from "react";
import {
 Divider,
 FormControl,
 Grid,
 TextField,
 Typography,
} from "@mui/material";
import TextareaComponent from "@/app/components/textarea";

export default function FormPendanaan({ mode }: { mode?: string }) {
 return (
  <>
   <Grid container spacing={2}>
    <Grid item lg={12}>
     <Typography fontWeight={600}>Jumlah per Tahun</Typography>
    </Grid>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography>2024</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="2024"
        InputLabelProps={{
         shrink: true,
        }}
       />
      ) : mode === "edit" ? (
       <TextField
        variant="outlined"
        size="small"
        value="-"
        InputLabelProps={{
         shrink: true,
        }}
       />
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography>2023</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="2023"
        InputLabelProps={{
         shrink: true,
        }}
       />
      ) : mode === "edit" ? (
       <TextField
        variant="outlined"
        size="small"
        value="-"
        InputLabelProps={{
         shrink: true,
        }}
       />
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={12}>
     <Divider />
    </Grid>
    <Grid item lg={12}>
     <Typography fontWeight={600}>Sumber Pendanaan</Typography>
    </Grid>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography>APBN</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="APBN"
        InputLabelProps={{
         shrink: true,
        }}
       />
      ) : mode === "edit" ? (
       <TextField
        variant="outlined"
        size="small"
        value="-"
        InputLabelProps={{
         shrink: true,
        }}
       />
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography>Non-APBN</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Non-APBN"
        InputLabelProps={{
         shrink: true,
        }}
       />
      ) : mode === "edit" ? (
       <TextField
        variant="outlined"
        size="small"
        value="-"
        InputLabelProps={{
         shrink: true,
        }}
       />
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={12}>
     <Divider />
    </Grid>
    <Grid item lg={12}>
     <Typography fontWeight={600}>Kesiapan Pendanaan</Typography>
    </Grid>
    <Grid item lg={12}>
     <FormControl fullWidth>
      {mode === "add" ? (
       <TextareaComponent
        label="Kesiapan Pendanaan"
        placeholder="Kesiapan Pendanaan"
       />
      ) : mode === "edit" ? (
       <TextareaComponent
        label="Kesiapan Pendanaan"
        placeholder="Kesiapan Pendanaan"
        value="-"
       />
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
   </Grid>
  </>
 );
}
