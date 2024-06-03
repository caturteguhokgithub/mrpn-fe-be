import React from "react";
import {
 FormControl,
 Grid,
 Grow,
 MenuItem,
 SelectChangeEvent,
 Stack,
 TextField,
 Tooltip,
 Typography,
} from "@mui/material";
import TextareaComponent from "@/app/components/textarea";
import SelectCustomTheme from "@/app/components/select";
import { listEntitasUtama } from "@/app/utils/data";

export default function FormProfilRoProject({ mode }: { mode?: string }) {
 const [project, setProject] = React.useState("");
 const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

 const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget);
 };

 const handlePopoverClose = () => {
  setAnchorEl(null);
 };

 const open = Boolean(anchorEl);

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
     {mode === "add" || mode === "edit" ? (
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
       {listEntitasUtama.map((euLabel, index) => (
        <MenuItem key={index} value={euLabel}>
         {euLabel.length >= 35 ? (
          <Tooltip title={euLabel} followCursor TransitionComponent={Grow}>
           <Typography
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            sx={{ fontSize: 14 }}
           >
            {euLabel.substring(0, 35) + "..."}
           </Typography>
          </Tooltip>
         ) : (
          euLabel
         )}
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
     <Typography gutterBottom>Entitas Kontributor</Typography>
     {mode === "add" ? (
      <TextField
       variant="outlined"
       size="small"
       placeholder="Entitas Kontributor"
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
     <Typography gutterBottom>Nomenklatur RO/Project</Typography>
     {mode === "add" ? (
      <TextField
       variant="outlined"
       size="small"
       placeholder="Nomenklatur RO/Project"
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
