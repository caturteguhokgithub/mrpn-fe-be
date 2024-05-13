import React from "react";
import {
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

export default function FormProfilRoProject({ mode }: { mode?: string }) {
 const [project, setProject] = React.useState("");

 const handleChangeProject = (event: SelectChangeEvent) => {
  setProject(event.target.value);
 };
 return (
  <Grid container spacing={2}>
   <Grid item lg={4}>
    <FormControl fullWidth>
     <Typography gutterBottom>Format Kode</Typography>
     {mode === "add" ? (
      <TextField
       variant="outlined"
       size="small"
       placeholder="Format Kode"
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
     <Typography gutterBottom>Entitas Utama</Typography>
     {mode === "add" ? (
      <SelectCustomTheme
       defaultStyle
       small
       value={project}
       onChange={handleChangeProject}
      >
       <MenuItem value="" disabled>
        <Typography fontSize={14} fontStyle="italic">
         Pilih Entitas Utama
        </Typography>
       </MenuItem>
       <MenuItem value="1" defaultChecked>
        Kementerian Kesehatan
       </MenuItem>
       <MenuItem value="2">Kementerian PUPR</MenuItem>
       <MenuItem value="3">Kementerian Perindustrian</MenuItem>
      </SelectCustomTheme>
     ) : mode === "edit" ? (
      <SelectCustomTheme
       defaultStyle
       value={project}
       onChange={handleChangeProject}
      >
       <MenuItem value="" disabled>
        <Typography fontSize={14} fontStyle="italic">
         Pilih Entitas Utama
        </Typography>
       </MenuItem>
       <MenuItem value="1" defaultChecked>
        Kementerian Kesehatan
       </MenuItem>
       <MenuItem value="2">Kementerian PUPR</MenuItem>
       <MenuItem value="3">Kementerian Perindustrian</MenuItem>
      </SelectCustomTheme>
     ) : (
      <Typography fontWeight={600}>-</Typography>
     )}
    </FormControl>
   </Grid>
   <Grid item lg={4}>
    <FormControl fullWidth>
     <Typography gutterBottom>Entitas Kontributor</Typography>
     {mode === "add" ? (
      <SelectCustomTheme
       defaultStyle
       small
       value={project}
       onChange={handleChangeProject}
      >
       <MenuItem value="" disabled>
        <Typography fontSize={14} fontStyle="italic">
         Pilih Entitas Kontributor
        </Typography>
       </MenuItem>
       <MenuItem value="1" defaultChecked>
        Kementerian Pertanian
       </MenuItem>
       <MenuItem value="2">BPOM</MenuItem>
       <MenuItem value="3">Simas</MenuItem>
      </SelectCustomTheme>
     ) : mode === "edit" ? (
      <SelectCustomTheme
       defaultStyle
       value={project}
       onChange={handleChangeProject}
      >
       <MenuItem value="" disabled>
        <Typography fontSize={14} fontStyle="italic">
         Pilih Entitas Kontributor
        </Typography>
       </MenuItem>
       <MenuItem value="1" defaultChecked>
        Kementerian Pertanian
       </MenuItem>
       <MenuItem value="2">BPOM</MenuItem>
       <MenuItem value="3">Simas</MenuItem>
      </SelectCustomTheme>
     ) : (
      <Typography fontWeight={600}>-</Typography>
     )}
    </FormControl>
   </Grid>
   <Grid item lg={12}>
    <FormControl fullWidth>
     <Typography gutterBottom>Nomenklatur RO/Project</Typography>
     {mode === "add" ? (
      <SelectCustomTheme
       defaultStyle
       small
       value={project}
       onChange={handleChangeProject}
      >
       <MenuItem value="" disabled>
        <Typography fontSize={14} fontStyle="italic">
         Pilih Nomenklatur RO/Project
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
       defaultStyle
       value={project}
       onChange={handleChangeProject}
      >
       <MenuItem value="" disabled>
        <Typography fontSize={14} fontStyle="italic">
         Pilih Nomenklatur RO/Project
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
   <Grid item lg={4}>
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
   <Grid item lg={4}>
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
   <Grid item lg={4}>
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
 );
}
