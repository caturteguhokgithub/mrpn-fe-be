import React from "react";
import {
 FormControl,
 Grid,
 Grow,
 MenuItem,
 SelectChangeEvent,
 TextField,
 Tooltip,
 Typography,
} from "@mui/material";
import TextareaComponent from "@/app/components/textarea";
import dynamic from "next/dynamic";
import SelectCustomTheme from "@/app/components/select";
import { listRisiko } from "@/app/utils/data";

export default function FormUraian({ mode }: { mode?: string }) {
 const [value, setValue] = React.useState("");
 const [valueSelect, setValueSelect] = React.useState("");
 const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

 const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget);
 };

 const handlePopoverClose = () => {
  setAnchorEl(null);
 };

 const open = Boolean(anchorEl);
 const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

 const handleChangeSelect = (event: SelectChangeEvent) => {
  setValueSelect(event.target.value);
 };

 return (
  <Grid container spacing={2}>
   <Grid item lg={12}>
    <FormControl fullWidth>
     <Typography gutterBottom>Jenis Risiko</Typography>
     {mode === "add" || mode === "edit" ? (
      <SelectCustomTheme
       defaultStyle
       small
       value={valueSelect}
       onChange={handleChangeSelect}
      >
       <MenuItem value="" disabled>
        <Typography fontSize={14} fontStyle="italic">
         Pilih jenis risiko
        </Typography>
       </MenuItem>
       {listRisiko.map((risikoLabel, index) => (
        <MenuItem key={index} value={risikoLabel}>
         {risikoLabel.length >= 35 ? (
          <Tooltip title={risikoLabel} followCursor TransitionComponent={Grow}>
           <Typography
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            sx={{ fontSize: 14 }}
           >
            {risikoLabel.substring(0, 35) + "..."}
           </Typography>
          </Tooltip>
         ) : (
          risikoLabel
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
    <FormControl fullWidth>
     <Typography gutterBottom>Uraian</Typography>
     {mode === "add" ? (
      <ReactQuill
       theme="snow"
       value={value}
       onChange={setValue}
       style={{ maxHeight: "300px" }}
      />
     ) : mode === "edit" ? (
      <TextareaComponent
       label="Keterangan"
       placeholder="Keterangan"
       value="-"
      />
     ) : (
      <Typography fontWeight={600}>-</Typography>
     )}
    </FormControl>
   </Grid>
  </Grid>
 );
}
