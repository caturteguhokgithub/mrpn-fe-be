import React from "react";
import {
 FormControl,
 Grid,
 MenuItem,
 SelectChangeEvent,
 TextField,
 Typography,
} from "@mui/material";
import SelectCustomTheme from "@/app/components/select";
import { grey } from "@mui/material/colors";

export default function FormKemungkinan({ mode }: { mode?: string }) {
 const [value, setValue] = React.useState("");

 const handleChangeSelect = (event: SelectChangeEvent) => {
  setValue(event.target.value);
 };

 return (
  <>
   <Grid container spacing={2}>
    <Grid item lg={12}>
     <FormControl fullWidth>
      <Typography gutterBottom>Level Kemungkinan</Typography>
      {mode === "add" ? (
       <SelectCustomTheme
        defaultStyle
        small
        value={value}
        onChange={handleChangeSelect}
       >
        <MenuItem value="" disabled>
         <Typography fontSize={14} color={grey[700]} fontStyle="italic">
          Pilih level kemungkinan
         </Typography>
        </MenuItem>
        <MenuItem value="1" defaultChecked>
         1 - Hampir Tidak Terjadi
        </MenuItem>
        <MenuItem value="2">2 - Kadang Terjadi</MenuItem>
        <MenuItem value="3">3 - Sering Terjadi</MenuItem>
       </SelectCustomTheme>
      ) : mode === "edit" ? (
       <SelectCustomTheme
        defaultStyle
        small
        value={value}
        onChange={handleChangeSelect}
       >
        <MenuItem value="" disabled>
         <Typography fontSize={14} color={grey[700]} fontStyle="italic">
          Pilih level kemungkinan
         </Typography>
        </MenuItem>
        <MenuItem value="1" defaultChecked>
         1 - Rendah
        </MenuItem>
        <MenuItem value="2">2 - Sedang</MenuItem>
        <MenuItem value="3">3 - Tinggi</MenuItem>
       </SelectCustomTheme>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={12}>
     <FormControl fullWidth>
      <Typography gutterBottom>
       Persentase Kemungkinan Terjadi dalam 1 Periode
      </Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Persentase Kemungkinan Terjadi dalam 1 Periode"
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
      <Typography gutterBottom>
       Jumlah Frekuensi Kemungkinan Terjadi dalam 1 Periode
      </Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Jumlah Frekuensi Kemungkinan Terjadi dalam 1 Periode"
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
