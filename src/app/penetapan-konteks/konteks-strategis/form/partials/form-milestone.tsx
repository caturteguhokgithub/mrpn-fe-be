import React from "react";
import { FormControl, Grid, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export default function FormMilestone({ mode }: { mode?: string }) {
 return (
  <>
   <Grid container spacing={2}>
    <Grid item lg={12}>
     <FormControl fullWidth>
      <Typography gutterBottom>Program/Kegiatan</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Program/Kegiatan"
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
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Penanggung Jawab</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Penanggung Jawab"
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
      <Typography gutterBottom>Waktu Mulai Pekerjaan</Typography>
      {mode === "add" ? (
       <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
         sx={{
          ".MuiInputBase-root": {
           height: 40,
          },
         }}
         format="D MMM YYYY"
        />
       </LocalizationProvider>
      ) : mode === "edit" ? (
       <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
         sx={{
          ".MuiInputBase-root": {
           height: 40,
          },
         }}
         format="D MMM YYYY"
        />
       </LocalizationProvider>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Waktu Penyelesaian Pekerjaan</Typography>
      {mode === "add" ? (
       <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
         sx={{
          ".MuiInputBase-root": {
           height: 40,
          },
         }}
         format="D MMM YYYY"
        />
       </LocalizationProvider>
      ) : mode === "edit" ? (
       <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
         sx={{
          ".MuiInputBase-root": {
           height: 40,
          },
         }}
         format="D MMM YYYY"
        />
       </LocalizationProvider>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
   </Grid>
  </>
 );
}
