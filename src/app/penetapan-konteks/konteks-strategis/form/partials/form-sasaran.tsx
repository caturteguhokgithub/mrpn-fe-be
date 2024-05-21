import React from "react";
import { FormControl, Grid, TextField, Typography } from "@mui/material";
import TextareaComponent from "@/app/components/textarea";

export default function FormSasaran({ mode }: { mode?: string }) {
 return (
  <>
   <Grid container spacing={2}>
    <Grid item lg={12}>
     <FormControl fullWidth>
      <Typography gutterBottom>Nama Sasaran</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Nama Sasaran"
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
     <FormControl fullWidth>
      <Typography gutterBottom>Keterangan</Typography>
      {mode === "add" ? (
       <TextareaComponent label="Keterangan" placeholder="Keterangan" />
      ) : mode === "edit" ? (
       <TextareaComponent
        label="Keterangan"
        placeholder="Keterangan"
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
