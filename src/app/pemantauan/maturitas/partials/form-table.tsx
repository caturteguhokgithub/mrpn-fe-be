import React from "react";
import {
 Chip,
 Divider,
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
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import SelectCustomTheme from "@/app/components/select";
import { listPeristiwaRisiko } from "@/app/profil-risiko/perlakuan-risiko/setting";
import { grey } from "@mui/material/colors";
import { listNilaiRisiko } from "@/app/profil-risiko/evaluasi-risiko/setting";
import { IconFA } from "@/app/components/icons/icon-fa";
import { listMaturity } from "../setting";
import TextareaComponent from "@/app/components/textarea";

export default function FormTable({ mode }: { mode?: string }) {
 const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
 const [prDropdown, setPrDropdown] = React.useState("");
 const [valueDropdown, setValueDropdown] = React.useState("");
 const [followUpDropdown, setFollowUpDropdown] = React.useState("");
 const [valueMaturity, setValueMaturity] = React.useState("");

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
 const handleChangeMaturity = (event: SelectChangeEvent) => {
  setValueMaturity(event.target.value);
 };

 const open = Boolean(anchorEl);

 return (
  <>
   <Grid container spacing={2}>
    <Grid item lg={12}>
     <FormControl fullWidth>
      <Typography gutterBottom>Peristiwa Risiko</Typography>
      <Typography fontWeight={600}>Peristiwa risiko 1</Typography>
     </FormControl>
    </Grid>
    <Grid item lg={12}>
     <Divider>
      <Chip label="Nilai Risiko" size="small" />
     </Divider>
    </Grid>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Sebelum</Typography>
      <Typography fontWeight={600}>1</Typography>
     </FormControl>
    </Grid>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Sesudah</Typography>
      <Typography fontWeight={600}>3</Typography>
     </FormControl>
    </Grid>
    <Grid item lg={12}>
     <Divider>
      <Chip label="Maturitas" size="small" />
     </Divider>
    </Grid>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Nilai</Typography>{" "}
      {mode === "add" || mode === "edit" ? (
       <SelectCustomTheme
        defaultStyle
        small
        anchorRight
        value={valueMaturity}
        onChange={handleChangeMaturity}
       >
        <MenuItem value="" disabled>
         <Typography
          fontSize={14}
          fontStyle="italic"
          color={grey[600]}
          fontWeight={600}
         >
          Pilih nilai
         </Typography>
        </MenuItem>
        {listMaturity.map((itemLabel) => (
         <MenuItem key={itemLabel.id} value={itemLabel.value}>
          {itemLabel.label.length >= 35 ? (
           <Tooltip
            title={itemLabel.label}
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
             {itemLabel.label.substring(0, 35) + "..."}
            </Typography>
           </Tooltip>
          ) : (
           itemLabel.label
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
      <Typography gutterBottom>Deskripsi</Typography>
      {mode === "add" || mode === "edit" ? (
       <Stack height="40px" direction="row" alignItems="center">
        {valueMaturity === "1" ? (
         <Typography fontWeight={600}>{listMaturity[0].desc}</Typography>
        ) : valueMaturity === "2" ? (
         <Typography fontWeight={600}>{listMaturity[1].desc}</Typography>
        ) : valueMaturity === "3" ? (
         <Typography fontWeight={600}>{listMaturity[2].desc}</Typography>
        ) : valueMaturity === "4" ? (
         <Typography fontWeight={600}>{listMaturity[3].desc}</Typography>
        ) : valueMaturity === "5" ? (
         <Typography fontWeight={600}>{listMaturity[4].desc}</Typography>
        ) : (
         "-"
        )}
       </Stack>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={12}>
     <FormControl fullWidth>
      <Typography gutterBottom>Saran/Masukan</Typography>
      <TextareaComponent label="Saran/Masukan" placeholder="Saran/Masukan" />
     </FormControl>
    </Grid>
   </Grid>
  </>
 );
}
