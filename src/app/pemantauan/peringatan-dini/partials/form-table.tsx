import React from "react";
import {
 Chip,
 Divider,
 FormControl,
 FormControlLabel,
 Grid,
 Grow,
 MenuItem,
 Radio,
 RadioGroup,
 SelectChangeEvent,
 Stack,
 TextField,
 ToggleButton,
 ToggleButtonGroup,
 Tooltip,
 Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import SelectCustomTheme from "@/app/components/select";
import { listPeristiwaRisiko } from "@/app/profil-risiko/perlakuan-risiko/setting";
import { grey } from "@mui/material/colors";
import { listNilaiRisiko } from "@/app/profil-risiko/evaluasi-risiko/setting";
import { IconFA } from "@/app/components/icons/icon-fa";
import { listTindakLanjut } from "../setting";

export default function FormTable({ mode }: { mode?: string }) {
 const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
 const [prDropdown, setPrDropdown] = React.useState("");
 const [valueDropdown, setValueDropdown] = React.useState("");
 const [followUpDropdown, setFollowUpDropdown] = React.useState("");
 const [handle, setHandle] = React.useState<string | null>("left");

 const handleHandle = (
  event: React.MouseEvent<HTMLElement>,
  newHandle: string | null
 ) => {
  setHandle(newHandle);
 };

 const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget);
 };
 const handlePopoverClose = () => {
  setAnchorEl(null);
 };

 const handleChangePr = (event: SelectChangeEvent) => {
  setPrDropdown(event.target.value);
 };
 const handleChangeValue = (event: SelectChangeEvent) => {
  setValueDropdown(event.target.value);
 };
 const handleChangeFollowUp = (event: SelectChangeEvent) => {
  setFollowUpDropdown(event.target.value);
 };

 const open = Boolean(anchorEl);

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
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Konteks Strategis</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Konteks Strategis"
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
      <Typography gutterBottom>Nilai Risiko</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Nilai Risiko"
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
      <Typography gutterBottom>Pengendalian</Typography>
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
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Tindak Lanjut</Typography>
      {mode === "add" || mode === "edit" ? (
       <ToggleButtonGroup value={handle} exclusive onChange={handleHandle}>
        <ToggleButton value="belum">Belum</ToggleButton>
        <ToggleButton value="proses">Proses</ToggleButton>
        <ToggleButton value="sudah">Sudah</ToggleButton>
       </ToggleButtonGroup>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
   </Grid>
  </>
 );
}
