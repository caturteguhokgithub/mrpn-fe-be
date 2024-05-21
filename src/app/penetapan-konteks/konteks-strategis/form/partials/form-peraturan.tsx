import React from "react";
import { FormControl, Grid, TextField, Typography } from "@mui/material";
import TextareaComponent from "@/app/components/textarea";

export default function FormPeraturan({ mode }: { mode?: string }) {
 return (
  <>
   <Grid container spacing={2}>
    <Grid item lg={12}>
     <FormControl fullWidth>
      <Typography gutterBottom>Peraturan Terkait</Typography>
      {mode === "add" ? (
       <TextareaComponent
        label="Peraturan Terkait"
        placeholder="Peraturan Terkait"
       />
      ) : mode === "edit" ? (
       <TextareaComponent
        label="Peraturan Terkait"
        placeholder="Peraturan Terkait"
        value="-"
       />
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={12}>
     <FormControl fullWidth>
      <Typography gutterBottom>Amanat Peraturan yang Terkait</Typography>
      {mode === "add" ? (
       <TextareaComponent
        label="Amanat Peraturan yang Terkait"
        placeholder="Amanat Peraturan yang Terkait"
       />
      ) : mode === "edit" ? (
       <TextareaComponent
        label="Amanat Peraturan yang Terkait"
        placeholder="Amanat Peraturan yang Terkait"
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
