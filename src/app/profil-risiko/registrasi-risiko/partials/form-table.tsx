import React from "react";
import {
 Checkbox,
 Chip,
 Divider,
 FormControl,
 FormControlLabel,
 Grid,
 MenuItem,
 SelectChangeEvent,
 Stack,
 TextField,
 Typography,
} from "@mui/material";
import TextareaComponent from "@/app/components/textarea";
import SelectCustomTheme from "@/app/components/select";
import { riskCategory } from "../setting";
import { red } from "@mui/material/colors";

export default function FormTable({ mode }: { mode?: string }) {
 const [konteks, setKonteks] = React.useState("");
 const [project, setProject] = React.useState("");

 const handleChangeProject = (event: SelectChangeEvent) => {
  setProject(event.target.value);
 };

 const handleChangeKonteks = (event: SelectChangeEvent) => {
  setKonteks(event.target.value);
 };

 return (
  <>
   <Grid container spacing={2}>
    {/* <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Konteks</Typography>
      {mode === "add" ? (
       <SelectCustomTheme
        defaultStyle
        small
        value={konteks}
        onChange={handleChangeKonteks}
       >
        <MenuItem value="" disabled>
         <Typography fontSize={14} fontStyle="italic">
          Pilih konteks strategis
         </Typography>
        </MenuItem>
        <MenuItem value="1" defaultChecked>
         Penguatan Kebijakan Perlindungan Akses Pasar Dalam Negeri
        </MenuItem>
       </SelectCustomTheme>
      ) : mode === "edit" ? (
       <SelectCustomTheme small value={konteks} onChange={handleChangeKonteks}>
        <MenuItem value="" disabled>
         <Typography fontSize={14} fontStyle="italic">
          Pilih konteks strategis
         </Typography>
        </MenuItem>
        <MenuItem value="1" defaultChecked>
         Penguatan Kebijakan Perlindungan Akses Pasar Dalam Negeri
        </MenuItem>
       </SelectCustomTheme>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid> */}
    <Grid item lg={12}>
     <FormControl fullWidth>
      <Typography gutterBottom>Sasaran</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Sasaran"
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
      <Chip label="Indikator Sasaran" size="small" />
     </Divider>
    </Grid>
    <Grid item lg={12}>
     <FormControl fullWidth>
      <Typography gutterBottom>Uraian</Typography>
      {mode === "add" ? (
       <TextareaComponent label="Uraian" placeholder="Uraian" />
      ) : mode === "edit" ? (
       <TextareaComponent label="Uraian" placeholder="Uraian" value="-" />
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Target</Typography>
      {mode === "add" ? (
       <Stack direction="row" gap={1}>
        <TextField
         variant="outlined"
         size="small"
         placeholder="Nilai"
         InputLabelProps={{
          shrink: true,
         }}
        />
        <TextField
         variant="outlined"
         size="small"
         placeholder="Satuan"
         InputLabelProps={{
          shrink: true,
         }}
        />
       </Stack>
      ) : mode === "edit" ? (
       <Stack direction="row" gap={1}>
        <TextField
         variant="outlined"
         size="small"
         value="2000"
         InputLabelProps={{
          shrink: true,
         }}
        />
        <TextField
         variant="outlined"
         size="small"
         value="Orang"
         InputLabelProps={{
          shrink: true,
         }}
        />
       </Stack>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Fisik</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Fisik"
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
     <FormControl fullWidth>
      <Typography gutterBottom>Pemilik Risiko MRPN Linsek</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Pemilik risiko MRPN Linsek"
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
    <Grid item lg={8}>
     <FormControl fullWidth>
      <Typography gutterBottom>Kategori Risiko MRPN Linsek</Typography>
      {mode === "add" || mode === "edit" ? (
       <SelectCustomTheme
        small
        defaultStyle
        value={project}
        onChange={handleChangeProject}
       >
        <MenuItem value="" disabled>
         <Typography fontSize={14} fontStyle="italic">
          Pilih kategori risiko MRPN Linsek
         </Typography>
        </MenuItem>
        {riskCategory.map((category, index) => (
         <MenuItem key={index} value={index} defaultChecked>
          {category}
         </MenuItem>
        ))}
       </SelectCustomTheme>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={4}>
     <FormControl fullWidth>
      <Typography gutterBottom>Insidentil</Typography>
      {mode === "add" || mode === "edit" ? (
       <FormControlLabel
        control={<Checkbox />}
        label={
         <Typography fontWeight={600} color={red[600]}>
          Insidentil
         </Typography>
        }
       />
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={12}>
     <FormControl fullWidth>
      <Typography gutterBottom>
       Peristiwa Risiko Strategis MRPN Linsek
      </Typography>
      {mode === "add" ? (
       <TextareaComponent
        label="Peristiwa risiko strategis MRPN Linsek"
        placeholder="Peristiwa risiko strategis MRPN Linsek"
       />
      ) : mode === "edit" ? (
       <TextareaComponent
        label="Peristiwa risiko strategis MRPN Linsek"
        placeholder="Peristiwa risiko strategis MRPN Linsek"
        value="-"
       />
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={12}>
     <FormControl fullWidth>
      <Typography gutterBottom>
       Penyebab/Faktor Risiko Strategis MRPN Linsek
      </Typography>
      {mode === "add" ? (
       <TextareaComponent
        label="Penyebab/faktor risiko strategis MRPN Linsek"
        placeholder="Penyebab/faktor risiko strategis MRPN Linsek"
       />
      ) : mode === "edit" ? (
       <TextareaComponent
        label="Penyebab/faktor risiko strategis MRPN Linsek"
        placeholder="Penyebab/faktor risiko strategis MRPN Linsek"
        value="-"
       />
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={12}>
     <FormControl fullWidth>
      <Typography gutterBottom>Dampak Strategis MRPN Linsek</Typography>
      {mode === "add" ? (
       <TextareaComponent
        label="Dampak strategis MRPN Linsek"
        placeholder="Dampak strategis MRPN Linsek"
       />
      ) : mode === "edit" ? (
       <TextareaComponent
        label="Dampak strategis MRPN Linsek"
        placeholder="Dampak strategis MRPN Linsek"
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
