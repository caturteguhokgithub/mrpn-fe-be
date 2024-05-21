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
      <Typography gutterBottom>2025</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="2025"
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
      <Typography gutterBottom>2026</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="2026"
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
      <Typography gutterBottom>2027</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="2027"
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
      <Typography gutterBottom>2028</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="2028"
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
      <Typography gutterBottom>2029</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="2029"
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
      <Typography gutterBottom>APBN</Typography>
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
      <Typography gutterBottom>Non-APBN</Typography>
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
