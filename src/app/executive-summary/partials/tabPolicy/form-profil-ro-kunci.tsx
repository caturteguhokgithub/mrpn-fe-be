import React from "react";
import { FormControl, Grid, TextField, Typography } from "@mui/material";

export default function FormProfilRoKunci({ mode }: { mode?: string }) {
 return (
  <>
   <Grid container spacing={2}>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>KL Utama</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="KL"
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
      <Typography gutterBottom>KL Kontributor</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="KL Kontributor"
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
      <Typography gutterBottom>Nomenklatur RO</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Nomenklatur RO"
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
      <Typography gutterBottom>Target</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Target"
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
      <Typography gutterBottom>Anggaran</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Anggaran"
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
      <Typography gutterBottom>Sumber Anggaran</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Sumber Anggaran"
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
   </Grid>
  </>
 );
}
