import React from "react";
import {
 Chip,
 Divider,
 FormControl,
 FormControlLabel,
 FormLabel,
 Grid,
 MenuItem,
 Radio,
 RadioGroup,
 SelectChangeEvent,
 TextField,
 Typography,
} from "@mui/material";
import TextareaComponent from "@/app/components/textarea";
import SelectCustomTheme from "@/app/components/select";
import { grey } from "@mui/material/colors";

export default function FormTable({ mode }: { mode?: string }) {
 const [probability, setProbability] = React.useState("");
 const [impact, setImpact] = React.useState("");

 const handleChangeProbability = (event: SelectChangeEvent) => {
  setProbability(event.target.value);
 };

 const handleChangeImpact = (event: SelectChangeEvent) => {
  setImpact(event.target.value);
 };

 return (
  <>
   <Grid container spacing={2}>
    <Grid item lg={12}>
     <FormControl fullWidth>
      <Typography gutterBottom>Peristiwa Risiko</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Peristiwa Risiko"
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
     <Divider>
      <Chip label="Tingkat Risiko" size="small" />
     </Divider>
    </Grid>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Kemungkinan</Typography>
      {mode === "add" || mode === "edit" ? (
       <SelectCustomTheme
        small
        defaultStyle
        anchorRight
        value={probability}
        onChange={handleChangeProbability}
        sx={{
         ".MuiSelect-select": {
          minHeight: 0,
         },
        }}
       >
        <MenuItem value="" disabled>
         <Typography fontSize={14} fontStyle="italic">
          Pilih kemungkinan
         </Typography>
        </MenuItem>
        <MenuItem value="1" defaultChecked>
         Kemungkinan 1
        </MenuItem>
        <MenuItem value="2">Kemungkinan 2</MenuItem>
        <MenuItem value="3">Kemungkinan 3</MenuItem>
       </SelectCustomTheme>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Dampak</Typography>
      {mode === "add" || mode === "edit" ? (
       <SelectCustomTheme
        small
        defaultStyle
        anchorRight
        value={impact}
        onChange={handleChangeImpact}
        sx={{
         ".MuiSelect-select": {
          minHeight: 0,
         },
        }}
       >
        <MenuItem value="" disabled>
         <Typography fontSize={14} fontStyle="italic">
          Pilih dampak
         </Typography>
        </MenuItem>
        <MenuItem value="1" defaultChecked>
         Dampak 1
        </MenuItem>
        <MenuItem value="2">Dampak 2</MenuItem>
        <MenuItem value="3">Dampak 3</MenuItem>
       </SelectCustomTheme>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Nilai Risiko</Typography>
      {mode === "add" || mode === "edit" ? (
       <TextField
        variant="outlined"
        size="small"
        value={
         probability === "1"
          ? "1"
          : probability === "2"
          ? "2"
          : probability === "3"
          ? "3"
          : "Nilai Risiko"
        }
        disabled
        InputLabelProps={{
         shrink: true,
        }}
        sx={{
         input: {
          WebkitTextFillColor: `${grey[800]} !important`,
          bgcolor: grey[200],
         },
        }}
       />
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Tingkat Risiko</Typography>
      {mode === "add" || mode === "edit" ? (
       <TextField
        variant="outlined"
        size="small"
        disabled
        placeholder="Tingkat Risiko"
        InputLabelProps={{
         shrink: true,
        }}
        value={
         impact === "1"
          ? "Rendah"
          : impact === "2"
          ? "Sedang"
          : impact === "3"
          ? "Tinggi"
          : "Tingkat Risiko"
        }
        sx={{
         input: {
          WebkitTextFillColor: `${grey[800]} !important`,
          bgcolor: grey[200],
         },
        }}
       />
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Pengendalian yang ada</Typography>
      {mode === "add" ? (
       <RadioGroup row>
        <FormControlLabel value="ada" control={<Radio />} label="Ada" />
        <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
       </RadioGroup>
      ) : mode === "edit" ? (
       <RadioGroup row>
        <FormControlLabel value="ada" control={<Radio />} label="Ada" />
        <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
       </RadioGroup>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    {/* <Grid item lg={12}>
     <Divider />
    </Grid>
     <Grid item lg={12}>
     <Divider>
      <Chip label="Perlakuan Risiko" size="small" />
     </Divider>
    </Grid>
    <Grid item lg={4}>
     <FormControl fullWidth>
      <Typography gutterBottom>Deskripsi Rencana Mitigasi</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Deskripsi Rencana Mitigasi"
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
    <Grid item lg={4}>
     <FormControl fullWidth>
      <Typography gutterBottom>Waktu Rencana Mitigasi</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Waktu Rencana Mitigasi"
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
    <Grid item lg={4}>
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
    </Grid> */}
   </Grid>
  </>
 );
}
