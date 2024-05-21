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
import { listTindakLanjut } from "../setting";

export default function FormTable({ mode }: { mode?: string }) {
 const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
 const [prDropdown, setPrDropdown] = React.useState("");
 const [valueDropdown, setValueDropdown] = React.useState("");
 const [followUpDropdown, setFollowUpDropdown] = React.useState("");

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
    <Grid item lg={12}>
     <Divider>
      <Chip label="Nilai Residual Risiko" size="small" />
     </Divider>
    </Grid>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Nilai</Typography>
      {mode === "add" || mode === "edit" ? (
       <SelectCustomTheme
        defaultStyle
        small
        anchorRight
        value={valueDropdown}
        onChange={handleChangeValue}
       >
        <MenuItem value="" disabled>
         <Typography fontSize={14} fontStyle="italic" color={grey[600]}>
          Pilih nilai
         </Typography>
        </MenuItem>
        {listNilaiRisiko.map((prLabel) => (
         <MenuItem key={prLabel.id} value={prLabel.value}>
          {prLabel.value}
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
      <Typography gutterBottom>Tingkat</Typography>
      {mode === "add" || mode === "edit" ? (
       <Stack height="40px" direction="row" alignItems="center">
        {valueDropdown === "1" ? (
         <Chip
          variant="filled"
          color="error"
          label={listNilaiRisiko[0].label}
          sx={{ px: 1 }}
         />
        ) : valueDropdown === "2" ? (
         <Chip
          variant="filled"
          color="warning"
          label={listNilaiRisiko[1].label}
          sx={{ px: 1 }}
         />
        ) : valueDropdown === "3" ? (
         <Chip
          variant="filled"
          color="primary"
          label={listNilaiRisiko[2].label}
          sx={{ px: 1 }}
         />
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
     <Divider />
    </Grid>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Pengendalian</Typography>
      <Stack fontWeight={600} height="40px" direction="row" alignItems="center">
       {prDropdown === "1" ? (
        <Chip
         variant="outlined"
         color="error"
         icon={<IconFA name="close" size={16} />}
         label="Tidak"
         sx={{ px: 1 }}
        />
       ) : prDropdown === "2" ? (
        <Chip
         variant="outlined"
         color="success"
         icon={<IconFA name="check" size={16} />}
         label="Ada"
         sx={{ px: 1 }}
        />
       ) : prDropdown === "3" ? (
        <Chip
         variant="outlined"
         color="success"
         icon={<IconFA name="check" size={16} />}
         label="Ada"
         sx={{ px: 1 }}
        />
       ) : prDropdown === "4" ? (
        <Chip
         variant="outlined"
         color="error"
         icon={<IconFA name="close" size={16} />}
         label="Tidak"
         sx={{ px: 1 }}
        />
       ) : (
        "-"
       )}
      </Stack>
     </FormControl>
    </Grid>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Tindak Lanjut</Typography>
      {mode === "add" || mode === "edit" ? (
       <SelectCustomTheme
        defaultStyle
        small
        anchorRight
        value={followUpDropdown}
        onChange={handleChangeFollowUp}
       >
        <MenuItem value="" disabled>
         <Typography
          fontSize={14}
          fontStyle="italic"
          color={grey[600]}
          fontWeight={600}
         >
          Pilih tindak lanjut
         </Typography>
        </MenuItem>
        {listTindakLanjut.map((prLabel) => (
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
   </Grid>
  </>
 );
}
