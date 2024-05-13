import React from "react";
import {
 Chip,
 Divider,
 FormControl,
 Grid,
 MenuItem,
 SelectChangeEvent,
 Stack,
 TextField,
 Typography,
} from "@mui/material";
import TextareaComponent from "@/app/components/textarea";
import SelectCustomTheme from "@/app/components/select";

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
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography>Konteks</Typography>
      {mode === "add" ? (
       <SelectCustomTheme
        defaultStyle
        small
        value={konteks}
        onChange={handleChangeKonteks}
       >
        <MenuItem value="" disabled>
         <Typography fontSize={14} fontStyle="italic">
          Pilih Konteks Strategis
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
          Pilih Konteks Strategis
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
    </Grid>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography>Sasaran</Typography>
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
      <Typography>Uraian</Typography>
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
      <Typography>Target</Typography>
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
      <Typography>Fisik</Typography>
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
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography>Kategori Risiko MRPN Linsek</Typography>
      {mode === "add" ? (
       <SelectCustomTheme
        small
        defaultStyle
        value={project}
        onChange={handleChangeProject}
       >
        <MenuItem value="" disabled>
         <Typography fontSize={14} fontStyle="italic">
          Pilih Kategori Risiko MRPN Linsek
         </Typography>
        </MenuItem>
        <MenuItem value="1" defaultChecked>
         -
        </MenuItem>
        <MenuItem value="2">-</MenuItem>
        <MenuItem value="3">-</MenuItem>
       </SelectCustomTheme>
      ) : mode === "edit" ? (
       <SelectCustomTheme
        small
        defaultStyle
        value={project}
        onChange={handleChangeProject}
       >
        <MenuItem value="" disabled>
         <Typography fontSize={14} fontStyle="italic">
          Pilih Kategori Risiko MRPN Linsek
         </Typography>
        </MenuItem>
        <MenuItem value="1" defaultChecked>
         -
        </MenuItem>
        <MenuItem value="2">-</MenuItem>
        <MenuItem value="3">-</MenuItem>
       </SelectCustomTheme>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography>Pemilik Risiko MRPN Linsek</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Pemilik Risiko MRPN Linsek"
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
      <Typography>Peristiwa Risiko Strategis MRPN Linsek</Typography>
      {mode === "add" ? (
       <TextareaComponent
        label="Peristiwa Risiko Strategis MRPN Linsek"
        placeholder="Peristiwa Risiko Strategis MRPN Linsek"
       />
      ) : mode === "edit" ? (
       <TextareaComponent
        label="Peristiwa Risiko Strategis MRPN Linsek"
        placeholder="Peristiwa Risiko Strategis MRPN Linsek"
        value="-"
       />
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={12}>
     <FormControl fullWidth>
      <Typography>Penyebab/Faktor Risiko Strategis MRPN Linsek</Typography>
      {mode === "add" ? (
       <TextareaComponent
        label="Penyebab/Faktor Risiko Strategis MRPN Linsek"
        placeholder="Penyebab/Faktor Risiko Strategis MRPN Linsek"
       />
      ) : mode === "edit" ? (
       <TextareaComponent
        label="Penyebab/Faktor Risiko Strategis MRPN Linsek"
        placeholder="Penyebab/Faktor Risiko Strategis MRPN Linsek"
        value="-"
       />
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={12}>
     <FormControl fullWidth>
      <Typography>Dampak Strategis MRPN Linsek</Typography>
      {mode === "add" ? (
       <TextareaComponent
        label="Dampak Strategis MRPN Linsek"
        placeholder="Dampak Strategis MRPN Linsek"
       />
      ) : mode === "edit" ? (
       <TextareaComponent
        label="Dampak Strategis MRPN Linsek"
        placeholder="Dampak Strategis MRPN Linsek"
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
