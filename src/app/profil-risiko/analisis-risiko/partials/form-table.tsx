import React from "react";
import {
 Box,
 Chip,
 Divider,
 FormControl,
 FormControlLabel,
 FormLabel,
 Grid,
 Grow,
 MenuItem,
 Radio,
 RadioGroup,
 SelectChangeEvent,
 Stack,
 TextField,
 Tooltip,
 Typography,
} from "@mui/material";
import TextareaComponent from "@/app/components/textarea";
import SelectCustomTheme from "@/app/components/select";
import { blue, green, grey, red, yellow } from "@mui/material/colors";
import { listKemungkinan, listDampak } from "@/app/utils/data";
import { listPeristiwaRisiko } from "../../perlakuan-risiko/setting";

export default function FormTable({ mode }: { mode?: string }) {
 const [probability, setProbability] = React.useState("");
 const [impact, setImpact] = React.useState("");
 const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
 const [prDropdown, setPrDropdown] = React.useState("");

 const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget);
 };

 const handlePopoverClose = () => {
  setAnchorEl(null);
 };

 const open = Boolean(anchorEl);

 const handleChangeProbability = (event: SelectChangeEvent) => {
  setProbability(event.target.value);
 };

 const handleChangeImpact = (event: SelectChangeEvent) => {
  setImpact(event.target.value);
 };

 const handleChangePr = (event: SelectChangeEvent) => {
  setPrDropdown(event.target.value);
 };

 return (
  <>
   <Grid container spacing={2}>
    <Grid item lg={12}>
     <FormControl fullWidth>
      <Typography gutterBottom>Peristiwa Risiko</Typography>
      {mode === "add" || mode === "edit" ? (
       <SelectCustomTheme
        defaultStyle
        small
        anchorRight
        value={prDropdown}
        onChange={handleChangePr}
       >
        <MenuItem value="" disabled>
         <Typography
          fontSize={14}
          fontStyle="italic"
          color={grey[600]}
          fontWeight={600}
         >
          Pilih peristiwa risiko
         </Typography>
        </MenuItem>
        {listPeristiwaRisiko.map((prLabel) => (
         <MenuItem key={prLabel.id} value={prLabel.value}>
          {prLabel.label.length >= 35 ? (
           <Tooltip
            title={prLabel.label}
            followCursor
            TransitionComponent={Grow}
           >
            <Typography
             aria-owns={open ? "mouse-over-popover" : undefined}
             aria-haspopup="true"
             onMouseEnter={handlePopoverOpen}
             onMouseLeave={handlePopoverClose}
             sx={{ fontSize: 14 }}
            >
             {prLabel.label.substring(0, 35) + "..."}
            </Typography>
           </Tooltip>
          ) : (
           prLabel.label
          )}
         </MenuItem>
        ))}
       </SelectCustomTheme>
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
       <TextField
        variant="outlined"
        size="small"
        value={
         prDropdown === "1"
          ? "Kemungkinan 1"
          : prDropdown === "2"
          ? "Kemungkinan 2"
          : prDropdown === "3"
          ? "Kemungkinan 3"
          : prDropdown === "4"
          ? "Kemungkinan 4"
          : "Kemungkinan 5"
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
      <Typography gutterBottom>Dampak</Typography>
      {mode === "add" || mode === "edit" ? (
       <TextField
        variant="outlined"
        size="small"
        value={
         prDropdown === "1"
          ? "Dampak 1"
          : prDropdown === "2"
          ? "Dampak 2"
          : prDropdown === "3"
          ? "Dampak 3"
          : prDropdown === "4"
          ? "Dampak 4"
          : "Dampak 5"
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
      <Typography gutterBottom>Nilai Risiko</Typography>
      {mode === "add" || mode === "edit" ? (
       <TextField
        variant="outlined"
        size="small"
        value={
         prDropdown === "1"
          ? "2"
          : prDropdown === "2"
          ? "4"
          : prDropdown === "3"
          ? "6"
          : prDropdown === "4"
          ? "8"
          : "10"
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
       <Stack direction="row" height="40px" alignItems="center">
        <Chip
         //   variant="outlined"
         color={
          prDropdown === "1"
           ? "error"
           : prDropdown === "2"
           ? "warning"
           : prDropdown === "3"
           ? "secondary"
           : prDropdown === "4"
           ? "primary"
           : "success"
         }
         sx={{
          minWidth: 80,
          borderWidth: "2px",
          borderStyle: "solid",
          "& .MuiChip-label": {
           fontWeight: 600,
          },
          "&.MuiChip-colorWarning": {
           bgcolor: yellow[300],
           borderColor: yellow[600],
           color: yellow[900],
          },
          "&.MuiChip-colorError": {
           bgcolor: red[100],
           borderColor: red[400],
           color: red[900],
          },
          "&.MuiChip-colorSuccess": {
           bgcolor: green[100],
           borderColor: green[400],
           color: green[900],
          },
          "&.MuiChip-colorPrimary": {
           bgcolor: blue[100],
           borderColor: blue[400],
           color: blue[900],
          },
          "&.MuiChip-colorSecondary": {
           bgcolor: grey[100],
           borderColor: grey[400],
           color: grey[900],
          },
         }}
         label={
          prDropdown === "1"
           ? "Sangat Rendah"
           : prDropdown === "2"
           ? "Rendah"
           : prDropdown === "3"
           ? "Sedang"
           : prDropdown === "4"
           ? "Tinggi"
           : "Sangat Tinggi"
         }
        />
       </Stack>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Pengendalian yang ada</Typography>
      {mode === "add" || mode === "edit" ? (
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
